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

  const DateToday = new Date().toDateString();

  return (
    <>
      {showFirst ? (
        <div
          className="bg-cover w-full h-full rounded-xl px-6 py-4 flex flex-col justify-between"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div>
            <label className="flex flex-row justify-between text-white">
              <h1 className="text-xl">Fact Of The Day</h1>
              <p className="text-sm">{DateToday}</p>
            </label>
          </div>
          <div>
            <label className="text-white">
              <h1 className="text-3xl mb-2">{word}</h1>
              <p className="whitespace-pre-wrap text-sm w-full">{wit}</p>
            </label>
            <div className="flex justify-end mt-2">
              <button
                className="py-2 bg-orange-300 px-6 rounded-full text-sm font-semibold"
                onClick={handleLearnMoreClick}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-cover w-full h-full rounded-xl shadow-inner p-4"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="h-[470px] overflow-auto bg-black rounded-md p-1 bg-opacity-20">
            <p className="whitespace-pre-wrap auto w-full text-white">
              {response}
            </p>
          </div>
          <button
            className="py-2 bg-orange-300 px-6 mt-4 rounded-full text-sm font-semibold"
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
