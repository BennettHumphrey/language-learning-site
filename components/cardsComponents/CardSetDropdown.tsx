import React, { useRef, useState } from 'react'



interface Props {
    setCardSet: (newValue: string) => void;
  }

const CardSetDropdown:React.FC<Props> = ({ setCardSet }) => {



  // GET sets from a server action fetching current card sets
    // If "Loading..." don't allow selection
    // If empty, show that, prompt to add new card sets

    
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [sets, setSets] = useState([
      "Loading...1",
      "Loading...2",
      ])
    const dropdownRef = useRef<HTMLDetailsElement>(null)

    const handleClick = (set:string) => {
      setCardSet(set)
    } 


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
            {sets.map(set => (
            <li onClick={() => handleClick(set)} key={set} >{set}</li>
            ))}
        </ul>
      </details>
    </div>
  )
}

export default CardSetDropdown
