'use client'
 
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
 

interface Props {
    children: ReactNode
  }

const SubmitButton: React.FC<Props> = ({ children }) => {
  const { pending } = useFormStatus()
 
  return (
    <button className='btn w-4/5 sm:w-3/5 bg-[--deck-dark] text-text' type="submit" disabled={pending}>
      {children}
    </button>
  )
}

export default SubmitButton