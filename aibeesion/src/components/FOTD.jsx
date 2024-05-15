import React, { useState, useEffect } from "react";
import img from "../assets/fotd_img/slug.png";
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
      "Slug",
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
        <div className="px-4">
          <img
            src={imageSrc}
            alt={word}
            className="shadow-xl w-full bg-white h-[300px] rounded-xl mb-4 md:h-52 lg:h-[250px] xl:h-[300px]"
          />

          <label>
            <h2 className="font-semibold text-xl mb-2">{word}</h2>
            <p
              className="whitespace-pre-wrap h-16
                         md:h-40
                         lg:h-28
                         xl:h-16"
            >
              Slug, or land slug, is a common name for any apparently shell-less
              terrestrial gastropod mollusc.
            </p>
          </label>
        </div>
      ) : (
        <div
          className="w-full h-[415px] shadow-inner rounded-lg overflow-auto p-4
                     md:h-[405px]
                     xl:mt-4 xl:mb-2"
        >
          <p className="whitespace-pre-wrap auto w-full">{response}</p>
        </div>
      )}
      {showFirst ? (
        <div className="h-14 relative xl:mt-2">
          <button
            className="py-2 bg-orange-300 px-6 absolute bottom-0 right-0 mb-5 rounded-full text-sm font-semibold"
            onClick={handleLearnMoreClick}
          >
            LEARN MORE
          </button>
        </div>
      ) : (
        <div className="h-16 relative md:h-16 lg:h-16">
          <button
            className="py-2 bg-orange-300 px-6 absolute bottom-0 left-0 mb-3 rounded-full text-sm font-semibold"
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
