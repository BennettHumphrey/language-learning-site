"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getDataArray } from "../utils/getDataArray";
import {
  cardSetState,
  currentCardsState,
  currentUserIdState,
} from "../utils/Recoil";
import { getTenCards } from "../actions/getTenCards";
import { getPreviousCardSet } from "../actions/getPreviousCardSet";



// TODO:
// Nav option to go to addCards.tsx






const layout = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useRecoilValue(currentUserIdState);
  const [currentCards, setCurrentCards] = useRecoilState(currentCardsState);
  const [cardSet, setCardSet] = useRecoilState(cardSetState);

  useEffect(() => {
    cardSet && getDataArray(setCurrentCards, getTenCards, [cardSet.title, true]);
  }, [cardSet]);

  useEffect(() => {
    currentUser &&
      cardSet.title === "Loading..." &&
      getDataArray(setCardSet, getPreviousCardSet, [currentUser]);
  }, [currentUser]);


  
  const darkenHslColor = (hsl: string | undefined): string => {
    if (!hsl) {
      return "hsl(156, 73%, 12%)";
    }
    return hsl.replace(/(\d+)%\)$/, (_, l) => `${Math.max(0, parseInt(l) - 10)}%)`);
  };





// @ts-ignore
  return <div style={{'--deck':cardSet.color, '--deck-dark':darkenHslColor(cardSet.color)}} className="h-[calc(100vh-60px)] w-full bg-bg">{children}</div>;
};

export default layout;
