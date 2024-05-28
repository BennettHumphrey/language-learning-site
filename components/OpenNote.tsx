import React from 'react'

interface Note {
  title: string;
  text?: string;
}

interface OpenNoteProps {
  note: Note;
}

const OpenNote: React.FC<OpenNoteProps> = ({ note }) => {
  return (
    <div>
      <textarea className='textarea'
        defaultValue={note.text}
      />
    </div>
  )
}

export default OpenNote