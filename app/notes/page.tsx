
import OpenNote from '@/components/OpenNote'
import React from 'react'

const NotesPage = () => {

  const notes = [
    {
      title: 'Note 1'
    },
    {
      title: 'Note 2'
    },
    {
      title: 'Note 3',
      text: 'This is note 3'
    },
    {
      title: 'Note 4'
    },
  ]


  



  return (
    <div className='h-[calc(100vh-60px)] w-full bg-main flex flex-col p-10 items-center justify-evenly'>
      {notes.map((note, i) => (
        <div className='text-center flex flex-col'>
          <div className='flex justify-center items-center'>
            <div>{note.title}</div>
            {note.text && <button className='absolute translate-x-[43px] -translate-y-[13px] p-1 text-sm'>X</button>}
          </div>
          {note.text && <OpenNote note={note} />}
        </div>
      ))}
    </div>
  )
}

export default NotesPage