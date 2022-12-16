import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [myNotes, setMyNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function updateNote(text) {
    setNoteText(text);
  }

  function addNote() {
    if (noteText.trim().length == 0) {
      alert("Add Some Text First");
      setNoteText('')
    } else {
      const date = new Date().toLocaleDateString();

      const myNewNote = {
        id: nanoid(),
        text: noteText,
        date: date,
      };

      const updatedNotes = [...myNotes, myNewNote];
      setMyNotes(updatedNotes);
      setNoteText("");
    }
  }

  function deleteNote(id) {
    const updatedNotes = myNotes.filter((note) => note.id !== id);
    setMyNotes(updatedNotes);
  }

  function searchBar(text) {
    setSearchText(text.toLowerCase());
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchBar={searchBar} />
        <NotesList
          noteText={noteText}
          handleNoteText={updateNote}
          handleAddNote={addNote}
          handleDeleteNotes={deleteNote}
          myNotes={myNotes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
}

export default App;
