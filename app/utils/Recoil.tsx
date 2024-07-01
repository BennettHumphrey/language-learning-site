'use client'

import React, { FC, ReactNode } from 'react'
import { atom, RecoilRoot } from 'recoil';

interface RecoilProps {
    children?: ReactNode;
    // other props
  }


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
    default: []
  });
  
  
  
  const Recoil: FC<RecoilProps> = ({children}) => {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  )
}

export default Recoil