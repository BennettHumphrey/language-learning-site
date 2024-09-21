"use client";

import { completeCard } from "@/app/actions/completeCard";
import { getTenCards } from "@/app/actions/getTenCards";
import { getDataArray } from "@/app/utils/getDataArray";
import ChevronDown from "@/components/SVGs/icons/ChevronDown";
import Thumb from "@/components/SVGs/icons/Thumb";
import {
  cardSetState,
  currentCardNumberInArrayState,
  currentCardsState,
  nextCardsState,
} from "@/app/utils/Recoil";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import LearningModeBlobBorderTop from "@/components/SVGs/LearningModeBlobBorderTop";
import LearningModeBlobBorderBottom from "@/components/SVGs/LearningModeBlobBorderBottom";
import LearningModeGradient from "@/components/SVGs/LearningModeGradient";

// Do it all within the component (more repetitive, but much easier):
// Make a handleCompletion button, which takes correct/incorrect status as param

// Array of 10 at a time
// Function to go to next card in array of 10
// When going to 10th, load next set
// Next set and current set state
// Switch next set to current after finishing 10th

const LearningModeCards = () => {
  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState);
  const [currentCardNumberInArray, setCurrentCardNumberInArray] =
    useRecoilState(currentCardNumberInArrayState);
  const [nextCards, setNextCards] = useRecoilState(nextCardsState);
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  useEffect(() => {
    console.log("nextCards:", nextCards);
  }, [nextCards]);

  const [answerRevealed, setAnswerRevealed] = useState(false);

  const handleClick = (correct: boolean) => {
    setAnswerRevealed(false);
    completeCard(currentCards[currentCardNumberInArray], correct);
    if (currentCardNumberInArray === 8)
      getDataArray(setNextCards, getTenCards, [cardSet.title]);
    if (currentCardNumberInArray === 9) {
      setCurrentCards(nextCards);
      setCurrentCardNumberInArray(0);
    } else {
      setTimeout(() => setCurrentCardNumberInArray((prev) => prev + 1), 200);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-between gap-10 bg-bg">
      <div className="absolute inset-0 overflow-hidden">
        <LearningModeGradient />
      </div>
      <div className="relative w-[270px] h-[200px] mt-8">
        <div
          style={{ backgroundColor: cardSet.color }}
          className={`absolute inset-0 z-20 rounded-3xl flex flex-col justify-center items-center duration-500 ${
            answerRevealed && "rounded-b-none"
          }`}
        >
          <div
            className={`overflow-hidden absolute translate-y-[35.2px] inset-0 rounded-3xl select-none pointer-events-none duration-500 ${
              answerRevealed && "rounded-b-none"
            }`}
          >
            <LearningModeBlobBorderBottom open={answerRevealed} />
          </div>
          <p className="break-words text-center text-text">
            {currentCards.length > 0
              ? currentCards[currentCardNumberInArray]?.sourceLanguageContent
              : "Loading Cards..."}
          </p>
          <div className="flex items-center justify-center gap-2 w-[70%]">
            {/* <button
              onClick={() => {
                setAnswerRevealed((prev) => !prev);
              }}
              className="btn bg-menu text-text"
            >
              Reveal Answer
            </button> */}
            {/* <div className='w-2'>
              <Trash onClick={() => {
                deleteCards(currentCards[currentCardNumberInArray].id)
                setCurrentCardNumberInArray(prev => prev + 1)
              }} />
            </div> */}
          </div>
        </div>
        <div
          className={`absolute mt-6 w-[270px] h-[200px] bg-[--deck] inset-0 z-0 select-none flex flex-col justify-between items-center 
                   rounded-3xl duration-500 pt-[30%]
          ${answerRevealed && "translate-y-[130px]"}`}
          // style={{}}
        >
          <div className="overflow-hidden absolute inset-0 top-1px select-none pointer-events-none translate-y-[45px]">
            <LearningModeBlobBorderTop />
          </div>
          <p>
            {currentCards.length > 0
              ? currentCards[currentCardNumberInArray]?.targetLanguageContent
              : "Loading Cards..."}
          </p>
          <div
            className={`duration-500 ${answerRevealed && "-rotate-180"}`}
            onClick={() => {
              setAnswerRevealed((prev) => !prev);
            }}
          >
            <ChevronDown />
          </div>
        </div>
      </div>

      <div className="flex gap-8 relative z-30 mb-6">
        {/* Incorrect */}
        <div
          className="rotate-180 border flex justify-center items-center bg-[--deck] p-4 rounded-xl w-16 h-16"
          onClick={() => {
            handleClick(false);
          }}
        >
          <Thumb />
        </div>
        {/* Correct */}
        <div
          className="border flex justify-center items-center bg-[--deck] p-4 rounded-xl w-16 h-16"
          onClick={() => {
            handleClick(true);
          }}
        >
          <Thumb />
        </div>
      </div>

      {/* {answerRevealed && <div className='flex justify-between w-4/5 sm:w-3/5'>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            handleClick(false)
          }}
        >Incorrect</button>
        <button className='btn bg-menu w-2/5 text-text'
          onClick={() => {
            handleClick(true)
          }}
        >Correct</button>
      </div>} */}
    </div>
  );
};

export default LearningModeCards;
