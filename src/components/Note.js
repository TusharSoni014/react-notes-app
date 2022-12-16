import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Note({ note, handleDeleteNotes }) {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <div className="delete-icon" onClick={()=> handleDeleteNotes(note.id)}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
}
