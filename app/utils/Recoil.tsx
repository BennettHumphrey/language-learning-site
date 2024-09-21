"use client";

import { FlashcardSet } from "@prisma/client";
import React, { FC, ReactNode } from "react";
import { atom, RecoilRoot } from "recoil";

interface RecoilProps {
  children?: ReactNode;
  // other props
}

type DefaultCard = {
  id: string;
  flashcardSetTitle: string;
  targetLanguageContent: string;
  sourceLanguageContent: string;
  createdAt: Date;
  nextCompletion: Date;
  consecutiveSuccesses: number;
};

// Current user id (string)
export const currentUserIdState = atom({
  key: "currentUserId",
  default: "",
});

// Current flashcard set selected
export const cardSetState = atom({
  key: "cardSet",
  default: {
    id: "",
    title: "Loading...",
    color: "#15803d",
  } as FlashcardSet,
});

// Saved decks for when returning to home screen
export const decksState = atom({
  key: "decks",
  default: [
    {
      title: "Loading...",
      _count: { flashcards: 0 },
      color: "#15803d",
    },
    {
      title: "Loading...",
      _count: { flashcards: 0 },
      color: "#15803d",
    },
  ] as FlashcardSet[] | { title: string; _count: {[key:string]:number}; color: string }[],
});

// Current array of 10 flashcards
export const currentCardsState = atom({
  key: "currentCards",
  default: [] as DefaultCard[],
});

// Array of 10 cards pre-loaded, ready to be made current
export const nextCardsState = atom({
  key: "nextCards",
  default: [] as DefaultCard[],
});

// Current position in set of 10 loaded cards
export const currentCardNumberInArrayState = atom({
  key: "currentCardNumberInArray",
  default: 0,
});

export const openColorPickerState = atom({
  key: "openColorPicker",
  default: '',
});

const Recoil: FC<RecoilProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Recoil;
