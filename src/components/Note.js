import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import "../css/Note.css";

function Note(props) {
  const [editFlag, setEditFlag] = useState(false);
  const [editState, setEditState] = useState({
    title: props.item.title,
    text: props.item.text,
  });
  return (
    <div className="note">
      {!editFlag ? (
        <>
          <div className="note__body">
            <h2>{props.item.title}</h2>
            <span>{props.item.text}</span>
          </div>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            <ModeEditIcon
              className="note__edit"
              onClick={() => {
                setEditFlag(true);
              }}
            />
            <DeleteForeverOutlinedIcon
              className="note__delete"
              onClick={() => props.deleteItem(props.item.id)}
            ></DeleteForeverOutlinedIcon>
          </div>
        </>
      ) : (
        <>
          <div className="editCard">
            <input
              placeholder="Title"
              value={editState.title}
              className="titleInput"
              onChange={(e) =>
                setEditState((prev) => ({ ...prev, title: e.target.value }))
              }
              style={{borderBottom:"none"}}
            />
            <textarea
              cols="2"
              rows="2"
              value={editState.text}
              placeholder="Type note here...."
              maxLength="100"
              onChange={(e) =>
                setEditState((prev) => ({ ...prev, text: e.target.value }))
              }
            ></textarea>
            <div className="note__footer">
              <button
                className="note__edit"
                onClick={() => setEditFlag(false)}
                style={{ background: "red" }}
              >
                cancel
              </button>
              <button
                className="note__save"
                onClick={() => {
                  setEditFlag(false);
                  props.editItem(
                    props.item.id,
                    editState.title,
                    editState.text
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Note;
