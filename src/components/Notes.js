import { React, useState, useEffect } from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import "../css/Note.css";
import { TextField } from "@mui/material";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [title, setTitle] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const saveNotesHandler = () => {
    if (inputText === "" || title === "") {
      return;
    }
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        title: title,
        text: inputText,
      },
    ]);
    //clear the textarea
    setTitle("");
    setInputText("");
  };
  const deleteItem = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };
  const editItem = (id, editTitle, editText) => {
    const editedNotes = notes.map((note) => {
      if (note.id === id) {
        return { id: note.id, title: editTitle, text: editText };
      } else {
        return note;
      }
    });
    setNotes(editedNotes);
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    const searchNewNotes = notes?.filter(
      (note) =>
        note?.text?.toLowerCase().includes(searchValue?.toLowerCase()) ||
        note?.title?.toLowerCase().includes(searchValue?.toLowerCase())
    );
    setSearchedNotes(searchNewNotes);
  };
  useEffect(() => {}, [searchValue]);

  return (
    <div className="notes">
      <CreateNote
        title={title}
        text={inputText}
        textHandler={textHandler}
        titleHandler={titleHandler}
        saveNotesHandler={saveNotesHandler}
      />
       <div className="searchBox">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={searchValue}
          onChange={searchHandler}
          style={{ width: "100%" }}
        />
      </div>
      <div className="notes__List">
        {" "}
         { searchValue ? searchedNotes?.map((item) => {
          return (
            <Note
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        }) : notes?.map((item) => {
          return (
            <Note
              item={item}
              key={item.id}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Notes;
