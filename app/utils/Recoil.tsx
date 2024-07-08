'use client'

import React, { FC, ReactNode } from 'react'
import { atom, RecoilRoot } from 'recoil';

interface RecoilProps {
    children?: ReactNode;
    // other props
  }

type DefaultCard = {
    targetLanguageContent: string;
    sourceLanguageContent: string;
};




  export const currentUserIdState = atom({
    key: 'currentUserId', 
    default: ''
  });
  
  export const cardSetState = atom({
    key: 'cardSet', 
    default: 'Loading...'
  });
  
  export const currentCardsState = atom({
    key: 'currentCards', 
    default: [] as DefaultCard[]
  });

  export const nextCardsState = atom({
    key: 'nextCards', 
    default: [] as DefaultCard[] 
  });
  
  export const currentCardNumberInArrayState = atom({
    key: 'currentCardNumberInArray', 
    default: 0
  });
  
  
  
  const Recoil: FC<RecoilProps> = ({children}) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export default Recoil