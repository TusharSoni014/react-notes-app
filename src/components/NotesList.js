import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({
  myNotes,
  handleNoteText,
  handleAddNote,
  noteText,
  handleDeleteNotes,
}) {
  return (
    <div className="notes-list">
      <AddNote
        noteText={noteText}
        handleAddNote={handleAddNote}
        handleNoteText={handleNoteText}
      />
      {myNotes.map((note) => {
        return (
          <Note
            handleDeleteNotes={handleDeleteNotes}
            key={note.id}
            note={note}
          />
        );
      })}
    </div>
  );
}
