import React from "react";

export default function AddNote({ handleNoteText, handleAddNote, noteText }) {
  return (
    <div className="note new">
      <textarea
        onChange={(e) => {
          handleNoteText(e.target.value);
        }}
        value={noteText}
        cols="8"
        rows="7"
        placeholder="Type something here..."
        maxLength="250"
      ></textarea>
      <div className="note-footer">
        <small>Remaining: {250 - noteText.length}</small>
        <button onClick={handleAddNote} className="save">Save</button>
      </div>
    </div>
  );
}
