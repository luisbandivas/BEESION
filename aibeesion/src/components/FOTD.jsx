import React, { useState, useEffect } from "react";
import ants from "../assets/fotd_img/ants.png";
import aphids from "../assets/fotd_img/aphids.png";
import beetles from "../assets/fotd_img/beetles.png";
import bees from "../assets/fotd_img/bees.png";
import caterpillar from "../assets/fotd_img/caterpillar.png";
import earthworm from "../assets/fotd_img/earthworm.png";
import grasshopper from "../assets/fotd_img/grasshopper.png";
import mealybugs from "../assets/fotd_img/mealybugs.png";
import slug from "../assets/fotd_img/slug.png";
import snail from "../assets/fotd_img/snail.png";
import wasp from "../assets/fotd_img/wasp.png";
import earwig from "../assets/fotd_img/earwig.png";
import weevil from "../assets/fotd_img/weevil.png";
import moth from "../assets/fotd_img/moth.png";
import rat from "../assets/fotd_img/rat.png";

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
  const [wit, setWit] = useState("");
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
      Ants: ants,
      Aphids: aphids,
      Bees: bees,
      Beetle: beetles,
      Catterpillar: caterpillar,
      Earthworms: earthworm,
      Earwig: earwig,
      Grasshopper: grasshopper,
      Mealybug: mealybugs,
      Moth: moth,
      Rats: rat,
      Slug: slug,
      Snail: snail,
      Wasp: wasp,
      Weevil: weevil,
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
      const whatis = await chatSession.sendMessage(
        `What is ${word}? (one sentence answer only)`,
      );
      setResponse(result.response.text());
      setWit(whatis.response.text());
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
              {wit}
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
