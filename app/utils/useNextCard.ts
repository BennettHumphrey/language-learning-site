import { useRecoilCallback } from "recoil";
import { currentCardNumberInArrayState, nextCardsState } from "./Recoil";
import { getTenCards } from "../actions/getTenCards";

export const incrementedCard = () => {
    const incrementedCard = useRecoilCallback(({ set }) => () => {
      set(currentCardNumberInArrayState, (prevCount) => prevCount + 1);
    });
  
    return incrementedCard;
  };







export const useNextCard = (cardNumber:number, cardSet:string) => {
    if(cardNumber <= 8) {

    }
    if(cardNumber == 8) {

    }
    return incrementedCard()
    
}



