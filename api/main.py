from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import google.generativeai as genai
import tensorflow as tf

genai.configure(api_key="AIzaSyA41OEWAvMFIi-h3jAn_h7jKOSuSBiBuHc")

generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 3000,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_NONE"
  },
]

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
    allow_headers=["*"],
)

MODEL = tf.keras.models.load_model("./save_model/pt2.keras")


CLASS_NAMES = ['Ants','Aphids','Bees','Beetle','Catterpillar','Earthworms','Earwig','Grasshopper','Mealybug','Moth','Rats','Slug','Snail','Wasp','Weevil']

@app.get("/ping")
async def ping():
    return "Hello"

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    resized_image = tf.image.resize(image, (224, 224))
    img_batch = np.expand_dims(resized_image, 0)

    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    
    model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                                  generation_config=generation_config,
                                  safety_settings=safety_settings)
    convo = model.start_chat(history=[])
    response = convo.send_message(f"Could you provide some insights about {predicted_class}, along with effective strategies to control and prevent its infestation on a farm? (remove pointers, hashtag, and bullet, asterisk)")
    response2 = convo.send_message(f"remove pointers, number, hashtag, and asterisk {response}")
    print(response2.text)

    return {
        'class': predicted_class,
        'confidence': float(confidence),
        'response': str(response2.text)
    }
    
if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)