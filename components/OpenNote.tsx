import React from "react";

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
      <textarea className="textarea textarea-ghost text-center focus:bg-accent focus:text-text" defaultValue={note.text} />
    </div>
  );
};

export default OpenNote;
