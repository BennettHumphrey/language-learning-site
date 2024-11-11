import OpenNote from "@/components/OpenNote";
import React from "react";

const NotesPage = () => {
  const notes = [
    {
      title: "Note 1",
      text: 'test'
    },
    {
      title: "Note 2",
    },
    {
      title: "Note 3",
      text: "This is note 3",
    },
    {
      title: "Note 4",
    },
  ];

  return (
    <div className="h-[calc(100vh-60px)] w-full bg-main flex flex-col p-10 items-center justify-evenly">
      {notes.map((note, i) => (
        <div key={i} className="text-center flex flex-col gap-2">
          <div className="flex justify-center items-center">
            <h2>{note.title}</h2>
          </div>
          {note.text && <OpenNote note={note} />}
        </div>
      ))}
    </div>
  );
};

export default NotesPage;
