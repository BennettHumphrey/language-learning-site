"use client";

import React, { useEffect, useState } from "react";
import { CardsProps } from "@/app/types";
import { useRecoilState } from "recoil";
import {
  cardSetState,
  currentCardNumberInArrayState,
  currentCardsState,
  nextCardsState,
} from "@/app/utils/Recoil";
import { getDataArray } from "@/app/utils/getDataArray";
import { getTenCards } from "@/app/actions/getTenCards";
import { completeCard } from "@/app/actions/completeCard";
import LearningModeGradient from "@/components/SVGs/LearningModeGradient";
import {
  TypingModeBlobsOne,
  TypingModeBlobsTwo,
} from "@/components/SVGs/TypingModeBlobs";

// TODO:
  // Animation on "next" (cards moving up)

const TypingModeCards: React.FC<CardsProps> = ({}) => {
  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState);
  const [currentCardNumberInArray, setCurrentCardNumberInArray] =
    useRecoilState(currentCardNumberInArrayState);
  const [nextCards, setNextCards] = useRecoilState(nextCardsState);
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  const [textContent, setTextContent] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // useEffect(() => {
  //   console.log('textContent in handleSubmit:', textContent)
  // }, [textContent])

  useEffect(() => {
    console.log("isCompleted in handleSubmit:", isCompleted);
  }, [isCompleted]);

  const handleSubmit = (content: string) => {
    isCompleted;

    const cleanInput = (input: string) => {
      return input.toLowerCase().replace(/\s+/g, "");
    };

    // console.log('contant in handleSubmit:', content)
    if (
      cleanInput(content) ===
      cleanInput(currentCards[currentCardNumberInArray]?.targetLanguageContent)
    ) {
      console.log("CORRECT");
      completeCard(currentCards[currentCardNumberInArray], true);
      setIsCorrect(true);
      setIsCompleted(true);

      return;
    }

    console.log("INCORRECT");
    completeCard(currentCards[currentCardNumberInArray], false);
    setIsCompleted(true);
    setIsCorrect(false);

    return;
  };

  const handleNextCard = () => {
    setTextContent("");
    if (currentCardNumberInArray === 8)
      getDataArray(setNextCards, getTenCards, [cardSet.title]);
    if (currentCardNumberInArray === 9) {
      setCurrentCards(nextCards);
      setCurrentCardNumberInArray(0);
    } else {
      // No clue why this needs a delay, but it does
      setTimeout(() => setCurrentCardNumberInArray((prev) => prev + 1), 1);
    }
    setIsCompleted(false);
    return;
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-evenly">
      <div className="absolute inset-0 overflow-hidden">
        <LearningModeGradient />
      </div>
      <div
        className="w-[250px] h-[200px] relative 
                    flex justify-center items-center"
      >
        <div className="absolute inset-0 bg-[--deck-dark] z-30 rounded-xl shadow-lg" />
        <div className="absolute inset-0 overflow-hidden z-40">
          <TypingModeBlobsOne />
        </div>
        <div className="absolute inset-0 overflow-hidden z-40">
          <TypingModeBlobsTwo />
        </div>
        {/* First shadow */}
        <div className="absolute inset-0 translate-y-3 scale-95 bg-[--deck-dark] rounded-xl z-20 shadow-lg" />
        <div className="absolute inset-0 translate-y-3 scale-95 bg-black rounded-xl opacity-[15%] z-20" />
        {/* Second shadow */}
        <div className="absolute inset-0 translate-y-6 scale-90 bg-[--deck-dark] rounded-xl z-10 shadow-lg" />
        <div className="absolute inset-0 translate-y-6 scale-90 bg-black rounded-xl opacity-[30%] z-10" />

        <p className="text-3xl relative z-40">
          {currentCards.length > 0
            ? currentCards[currentCardNumberInArray]?.sourceLanguageContent
            : "Loading Cards..."}
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-4 relative z-10">
        <textarea
          className=" textarea mt-1 bg-[--deck-dark] text-text p-2 w-[60vw] shadow-lg"
          onChange={(e) => setTextContent(e.target.value)}
          value={textContent}
          placeholder="Type Answer"
        />
        <div className="h-[70px]">
          {isCompleted ? (
            <div className="flex flex-col justify-center items-center">
              <p>
                {isCorrect
                  ? "Correct!"
                  : `Incorrect! Answer: ${currentCards[currentCardNumberInArray]?.targetLanguageContent}`}
              </p>
              <button
                className="btn w-2/5 min-w-[120px] bg-[--deck-dark] text-text mt-2"
                onClick={() => handleNextCard()}
              >
                Next
              </button>
            </div>
          ) : (
            <button
              className="btn w-2/5 min-w-[120px] bg-[--deck-dark] text-text mt-2 shadow-2xl"
              onClick={() => handleSubmit(textContent)}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypingModeCards;
