import React, { useState, useEffect } from "react";
import img from "../assets/fotd_img/BIG_IMAGE.png";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const FOTD = () => {
  const [word, setWord] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [chatSession, setChatSession] = useState(null);
  const [response, setResponse] = useState("");
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const words = [
      "Ants",
      "Aphids",
      "Bees",
      "Beetle",
      "Catterpillar",
      "Earthworms",
      "Earwig",
      "Grasshopper",
      "Mealybug",
      "Moth",
      "Rats",
      "Slug",
      "Snail",
      "Wasp",
      "Weevil",
    ];

    const images = {
      Ants: img,
      Aphids: img,
      Bees: img,
      Beetle: img,
      Catterpillar: img,
      Earthworms: img,
      Earwig: img,
      Grasshopper: img,
      Mealybug: img,
      Moth: img,
      Rats: img,
      Slug: img,
      Snail: img,
      Wasp: img,
      Weevil: img,
    };

    const todayDate = getTodayDate();

    const storedWord = localStorage.getItem(todayDate);

    if (storedWord) {
      setWord(storedWord);
    } else {
      const selectedWord = words[new Date(todayDate).getDate() % words.length];
      setWord(selectedWord);
      localStorage.setItem(todayDate, selectedWord);
    }

    setImageSrc(images[word]);
  }, [word]);

  useEffect(() => {
    const initChat = async () => {
      const apiKey = "AIzaSyA41OEWAvMFIi-h3jAn_h7jKOSuSBiBuHc";
      const genAI = new GoogleGenerativeAI(apiKey);

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash-latest",
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 0,
        maxOutputTokens: 2000,
        responseMimeType: "text/plain",
      };

      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];

      const session = model.startChat({
        generationConfig,
        safetySettings,
        history: [],
      });

      setChatSession(session);
    };

    initChat();
  }, []);

  useEffect(() => {
    const sendMessageOnLoad = async () => {
      if (!chatSession) return;
      const result = await chatSession.sendMessage(
        `Give at least 10 facts about ${word} (remove pointers, hashtag, and bullet, asterisk)`,
      );
      setResponse(result.response.text());
    };

    sendMessageOnLoad();
  }, [chatSession, word]);

  const handleLearnMoreClick = () => {
    setShowFirst(false);
  };

  const handleGoBackClick = () => {
    setShowFirst(true);
  };

  return (
    <>
      {showFirst ? (
        <div>
          <img
            src={imageSrc}
            alt={word}
            className="w-full bg-white h-[300px] rounded-xl mb-4 md:h-52 lg:h-[250px] xl:h-[300px]"
          />
          <label>
            <h2 className="font-semibold text-xl mb-2">{word}</h2>
            <p className="whitespace-pre-wrap">
              Ants are social insects that belong to the family Formicidae. They
              are found all over the world, except for Antarctica, and play a
              vital role in their ecosystems.
            </p>
          </label>
        </div>
      ) : (
        <div
          className="w-full h-[415px] border rounded-lg overflow-auto p-4
                     md:h-[405px]
                     xl:mt-4 xl:mb-2"
        >
          <p className="whitespace-pre-wrap auto w-full">{response}</p>
        </div>
      )}
      {showFirst ? (
        <div className="h-14 relative md:h-28 lg:h-24 xl:h-14">
          <button
            className="py-2 bg-orange-300 px-6 absolute bottom-0 right-0 mb-3 rounded-full"
            onClick={handleLearnMoreClick}
          >
            LEARN MORE
          </button>
        </div>
      ) : (
        <div className="h-16 relative md:h-16 lg:h-16">
          <button
            className="py-2 bg-orange-300 px-6 absolute bottom-0 left-0 mb-3 rounded-full"
            onClick={handleGoBackClick}
          >
            GO BACK
          </button>
        </div>
      )}
    </>
  );
};

export default FOTD;
