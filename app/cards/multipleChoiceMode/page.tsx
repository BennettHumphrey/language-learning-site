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
import { completeCard } from "@/app/actions/completeCard";
import { getDataArray } from "@/app/utils/getDataArray";
import { getTenCards } from "@/app/actions/getTenCards";
import arrayShuffle from "array-shuffle";
import {
  MultipleChoiceModeAnswerBlob,
  MultipleChoiceModeBackgroundBlobs,
  MultipleChoiceModeSourceBlob,
} from "@/components/SVGs/MultipleChoiceModeBlobs";
import LearningModeGradient from "@/components/SVGs/LearningModeGradient";
import { getTenSimilarCards } from "@/app/actions/getTenSimilarCards";

const MultipleChoiceModeCards: React.FC = () => {
  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState);
  const [currentCardNumberInArray, setCurrentCardNumberInArray] =
    useRecoilState(currentCardNumberInArrayState);
  const [nextCards, setNextCards] = useRecoilState(nextCardsState);
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  const [selectedCard, setSelectedCard] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [easyMode, setEasyMode] = useState(false);

  const [multipleChoiceButtons, setMultipleChoiceButtons] = useState([
    "Loading 1...",
    "Loading 2...",
    "Loading 3...",
    "Loading 4...",
  ]);

  const singleRandomNumber = (num: number): number => {
    return Math.floor(Math.random() * num);
  };

  const randomNumbersArray = (num: number, quantity: number = 1): number[] => {
    if(quantity > num) {
      throw Error('quantity requested exceeds range (quantity must be equal or lesser than num)')
    }
    let arr = [];
    for (let i = 0; i < quantity; i++) {
      arr.push(Math.floor(Math.random() * num));
    }
    return arr;
  };

  const letterGroups = [
    ["A", "E", "I", "O", "U"],
    ["B", "P", "D", "Q", "R"],
    ["C", "G", "S", "J", "Q"],
    ["F", "L", "M", "N", "T"],
    ["H", "V", "W", "X", "Y"],
  ];

  const letterGroupMap: { [key: string]: string[] } = {};
  letterGroups.forEach((group) => {
    group.forEach((letter) => {
      letterGroupMap[letter.toUpperCase()] = group;
    });
  });


  const generateMultipleChoiceOptionsHardMode = async (
    targetLanguageContent: string
  ) => {
    console.log('cardSet.title in generateMultipleChoiceOptionsHardMode:', cardSet.title)

    

    const tenSimilarCards:any = await getTenSimilarCards(cardSet.title, targetLanguageContent)

    if(tenSimilarCards.length < 3) {
      Error('Too few available cards!')
      return
    }

    let multipleChoiceButtonsArray:string[] = []
    console.log('tenSimilarCards.length:', tenSimilarCards.length)
    const arrayPositions = randomNumbersArray(tenSimilarCards.length, 3)

    for(let cardPosition of arrayPositions) {
      multipleChoiceButtonsArray.push(tenSimilarCards[cardPosition].targetLanguageContent)
    }
    multipleChoiceButtonsArray.push(targetLanguageContent)


    console.log('multipleChoiceButtonsArray in generateMultipleChoiceOptionsHardMode in multipleChoiceMode:', multipleChoiceButtonsArray)
    
    const shuffledMultipleChoiceButtonsArray = arrayShuffle(multipleChoiceButtonsArray)

    setMultipleChoiceButtons(shuffledMultipleChoiceButtonsArray)

    return shuffledMultipleChoiceButtonsArray
  };

  // useEffect(() => {
  //   console.log('similarCards in multipleChoiceMode:', similarCards)
  // }, [similarCards])

  const generateMultipleChoiceOptionsEasyMode = (
    targetLanguageContent: string
  ) => {
    const wordLength: number = targetLanguageContent.length;

    // Gets 30% of the word length, with a minimum of 1 letter
    const numberOfLettersToChange = (wordLength: number): number => {
      // Change at least 1 letter
      if (wordLength <= 0) return 0
      return Math.max(1, Math.ceil(wordLength * 0.3));
    };

    const splitWord = targetLanguageContent.split("");
    const letterPositionsToChange = randomNumbersArray(
      wordLength,
      numberOfLettersToChange(wordLength)
    );

    // Similar letters organized, so a T doesn't get changed to an A or something very different like that

    const changeLettersInPositions = (
      splitWord: string[],
      letterPositionsToChange: number[]
    ): string[] => {
      letterPositionsToChange.forEach((pos) => {
        if (pos < splitWord.length) {
          const currentLetter = splitWord[pos].toUpperCase();
          const letterGroup = letterGroupMap[currentLetter];

          if (letterGroup) {
            let newLetter = currentLetter;
            while (newLetter === currentLetter) {
              newLetter = letterGroup[singleRandomNumber(letterGroup.length)];
            }
            console.log(
              `Changing letter at position ${pos}: ${currentLetter} -> ${newLetter}`
            );
            splitWord[pos] = newLetter;
          }
        }
      });
      return splitWord;
    };

    // Applies changeLettersInPositions to the splitWordCopy
    const createIncorrectOption = (): string => {
      const splitWordCopy = [...splitWord];
      return changeLettersInPositions(
        splitWordCopy,
        letterPositionsToChange
      ).join("");
    };

    // Simply capitalizes the first letter, and uncapitalize the rest
    const formatString = (str: string) => {
      if (str.length === 0) return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const buttonsArray = [
      formatString(createIncorrectOption()),
      formatString(createIncorrectOption()),
      formatString(createIncorrectOption()),
      formatString(targetLanguageContent),
    ];

    return arrayShuffle(buttonsArray);
  };

  useEffect(() => {
    if (currentCards[currentCardNumberInArray] && cardSet.title) {
      if (easyMode) {
        setMultipleChoiceButtons(
          generateMultipleChoiceOptionsEasyMode(
            currentCards[currentCardNumberInArray]?.targetLanguageContent
          )
        );
      } else {
          generateMultipleChoiceOptionsHardMode(
            currentCards[currentCardNumberInArray]?.targetLanguageContent
          );
      }
    }
  }, [currentCardNumberInArray, currentCards, easyMode, cardSet]);

  useEffect(() => {
    console.log(
      "multipleChoiceButtons in multipleChoiceMode:",
      multipleChoiceButtons
    );
  }, [multipleChoiceButtons]);

  const handleSubmit = () => {
    if (
      selectedCard.toLowerCase() ===
      currentCards[
        currentCardNumberInArray
      ]?.targetLanguageContent.toLowerCase()
    ) {
      console.log("CORRECT");
      completeCard(currentCards[currentCardNumberInArray], true);
      setIsCorrect(true);
      setIsCompleted(true);
    } else {
      console.log("INCORRECT");
      completeCard(currentCards[currentCardNumberInArray], false);
      setIsCompleted(true);
      setIsCorrect(false);
    }
  };

  useEffect(() => {
    console.log("easyMode in MultipleChoiceModeCards.tsx:", easyMode);
  }, [easyMode]);

  const handleNextCard = () => {
    if (currentCardNumberInArray === 8)
      getDataArray(setNextCards, getTenCards, [cardSet.title]);
    if (currentCardNumberInArray === 9) {
      setCurrentCards(nextCards);
      setCurrentCardNumberInArray(0);
    } else {
      setTimeout(() => setCurrentCardNumberInArray((prev) => prev + 1), 1);
    }
    setIsCompleted(false);
  };

  useEffect(() => {
    console.log('currentCardNumberInArrayState:', currentCardNumberInArrayState)
  }, [currentCardNumberInArrayState])

  const getButtonStyle = (button: string): string => {
    if(isCompleted) {
      return button === currentCards[currentCardNumberInArray]?.targetLanguageContent ? '#1ac748' : '#ff001560'
    }
    return button === selectedCard ? "#fff3" : "#0003";
  };

  return (
    <div className="h-full w-full bg-bg relative">
      <div className="absolute inset-0 overflow-hidden">
        <LearningModeGradient />
      </div>
      <div className="absolute inset-0 z-0">
        <MultipleChoiceModeBackgroundBlobs />
      </div>
      <div className="absolute left-2 top-2 z-50 flex flex-col justify-center items-center">
        <input
          type="checkbox"
          style={{'backgroundColor':cardSet.color}}
          className="toggle border-[--deck] bg-[--deck] hover:bg-[--deck-dark]"
          checked={easyMode}
          onChange={() => setEasyMode((prev) => !prev)}
        />
        <p className="text-xs">Easy Mode</p>
      </div>
      <div className="relative h-[40%] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <MultipleChoiceModeSourceBlob />
        </div>
        <p className="text-text text-center text-wrap w-4/5 break-words z-10">
          {currentCards[currentCardNumberInArray]?.sourceLanguageContent}
        </p>
      </div>
      <div className="m-auto ">
        <div className="flex flex-col justify-center items-center gap-5">
          {multipleChoiceButtons.map((button, index) => (
            <div key={index} className="w-full relative select-none">
              <div className="absolute inset-0 z-0">
                <MultipleChoiceModeAnswerBlob fill={getButtonStyle(button)} />
              </div>
              <p
                onClick={() => setSelectedCard(button)}
                className="text-text text-center m-auto h-3/5 w-3/5 z-10 relative"
              >
                {button}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          {isCompleted ? (
            <div className="relative z-10">
              <button
                className="btn w-2/5 min-w-[120px] bg-[--deck-dark] text-text mt-2"
                onClick={handleNextCard}
              >
                Next
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <button
                className="btn w-2/5 min-w-[120px] bg-[--deck-dark] text-text mt-2 relative z-10"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceModeCards;
