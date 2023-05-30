import { React } from "react";
function CreateNote({ textHandler,saveNotesHandler,titleHandler,text,title }) {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <input
        placeholder="Title"
        onChange={titleHandler}
        className="titleInput"
        value={title}
      />
      <textarea
        cols="5"
        rows="2"
        placeholder="Type description here..."
        maxLength="100"
        onChange={textHandler}
        value={text}
        style={{borderBottom:"2px solid black"}}
      ></textarea>
      <div className="note__footer">
      <button className="note__save" onClick={saveNotesHandler}>Save</button>
      </div>
    </div>
  );
}
export default CreateNote;
