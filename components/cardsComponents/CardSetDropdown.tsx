import { deleteCardSets } from '@/app/actions/deleteCardSets';
import { getCardSets } from '@/app/actions/getCardSets';
import { getDataArray } from '@/app/utils/getDataArray';
import { Trash } from '@/app/utils/icons/Trash';
import { cardSetState, currentUserIdState } from '@/app/utils/Recoil';
import React, { useEffect, useRef, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil';





const CardSetDropdown:React.FC = () => {

  

  // GET sets from a server action fetching current card sets
    // If "Loading..." don't allow selection
    // If empty, show that, prompt to add new card sets

    const currentUser = useRecoilValue(currentUserIdState)
    const [cardSet, setCardSet] = useRecoilState(cardSetState);
    
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [sets, setSets] = useState([
      {
        title:'Loading...'
      },
      {
        title:'Loading...'
      },
      ])

    const dropdownRef = useRef<HTMLDetailsElement>(null)

    const handleClick = (set:string) => {
      setCardSet(set)
    } 

    useEffect(() => {
      currentUser && dropdownOpen && getDataArray(setSets, getCardSets, [currentUser])
    }, [dropdownOpen])

    useEffect(() => {
      currentUser && getDataArray(setSets, getCardSets, [currentUser])
    }, [currentUser])


    
    useEffect(() => {
      console.log('cardSet in CardSetDropdown:', cardSet)
    }, [cardSet])
    
    useEffect(() => {
      if(cardSet === 'Loading...') setCardSet(sets[0]?.title)
    }, [sets, currentUser])

    const handleDropdownClick = () => {        
        
    if(dropdownOpen) {
        if (dropdownRef.current) {
        dropdownRef.current.removeAttribute('open');
        }
        return setDropdownOpen(false)
    }
    setDropdownOpen(true)
    }


  return (
    
    <div className='w-full max-w-[120px]'>
      {dropdownOpen && <div className='absolute z-[1] bg-transparent left-0 top-0 w-full h-full'
      onClick={() => handleDropdownClick()} />}
      <details className="dropdown dropdown-end w-full" ref={dropdownRef} onClick={() => handleDropdownClick()}>
        <summary className="btn bg-menu text-text w-full">Change Set</summary>
        <ul className="p-2 shadow menu dropdown-content z-[2] bg-base-100 rounded-box w-52">
            {sets.map((set, index) => (
            <div key={index} className='flex justify-between'>
              <div className='w-full' onClick={() => handleClick(set.title)}>
                <li className='text-start' >{set.title}</li>
              </div>
              <div onClick={() => {
                console.log('click trash')
                deleteCardSets(set.title)
              }}>
                <Trash  />
              </div>
            </div>
            ))}
        </ul>
      </details>
    </div>
  )
}

export default CardSetDropdown
