"use client";

import { getCardSets } from "@/app/actions/getCardSets";
import { getDataArray } from "@/app/utils/getDataArray";
import {
  cardSetState,
  currentUserIdState,
  decksState,
  openColorPickerState,
} from "@/app/utils/Recoil";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DeckBlobs from "./SVGs/DeckBlobs";
import DoubleChevron from "@/components/SVGs/icons/DoubleChevron";
import Link from "next/link";
import { setPreviousCardSet } from "@/app/actions/setPreviousCardSet";
import Palette from "./SVGs/icons/Palette";
import ColorPicker from "./ColorPicker";

// TODO:
  // Option to add new decks
  // Each deck has a slightly different blob pattern
  // Trash icon on bottom left to delete deck (With confirmation pop-up modal)
  // Button to go to specific mode? (Not just default to learning)

const DeckList = () => {
  const currentUser = useRecoilValue(currentUserIdState);
  const [cardSet, setCardSet] = useRecoilState(cardSetState);
  const [openColorPicker, setOpenColorPicker] = useRecoilState(openColorPickerState);
  const [detectColorChange, triggerColorChange] = useState(false);
  const [decks, setDecks] = useRecoilState(decksState);

  useEffect(() => {
    if (decks[0]?.title === "Loading...") {
      currentUser && getDataArray(setDecks, getCardSets, [currentUser]);
    }
  }, [currentUser, decks]);

  useEffect(() => {
    // if (decks[0].title === "Loading...") {
      console.log('trigger detectColorChange')
      currentUser && getDataArray(setDecks, getCardSets, [currentUser]);
    // }
  }, [detectColorChange]);

  useEffect(() => {
    currentUser && setPreviousCardSet(currentUser, cardSet.title);
  }, [cardSet]);

  useEffect(() => {
    console.log('openColorPicker:', openColorPicker)
  }, [openColorPicker]);

  // useEffect(() => {
  //     console.log('decks in DeckList.tsx:', decks)
  //   }, [decks])

  const handleClick = (set: any) => {
    setCardSet(set);
  };

  return (
    <div className="flex flex-col">
      {decks?.map((deck: any, index: number) => (
        <div
          key={index}
          style={{ backgroundColor: deck.color }}
          className="w-[90%] h-[90%] min-h-[140px] m-auto my-4 rounded-2xl flex relative"
        >
          <Link
            href="/cards/learningMode"
            onClick={() => handleClick(deck)}
            className="absolute inset-0 z-0"
          >
            <div className="absolute rounded-2xl inset-0 z-0 overflow-hidden">
              <DeckBlobs />
            </div>
            <div className="absolute translate-x-[calc(100%-30px)] translate-y-[40%] inset-0 z-10">
              <DoubleChevron />
            </div>

            <div className="relative flex flex-col justify-between text-white z-10 p-3 w-full h-[140px]">
              <h2 className="w-[50%]">{deck.title}</h2>
              <p className="relative right-0 text-right bottom-0 w-full">
                Cards: {deck._count.flashcards}
              </p>
            </div>
          </Link>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpenColorPicker(deck.title);
            }}
            className="absolute h-3 w-3 bottom-[18px] left-[2.5px] z-20 pointer-events-auto"
          >
            <Palette />
            {openColorPicker === deck.title && (
              <div className="absolute inset-0 z-30">
                <ColorPicker
                  triggerColorChange={triggerColorChange}
                  deckTitle={deck.title}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckList;
