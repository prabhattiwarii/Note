import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const url = "http://localhost:4000"
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  //get all notes
  const getNotes = async () => {
    const response = await fetch(`${url}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMThmM2M2ZDlmNmY2YmYzMjAxYzNlIn0sImlhdCI6MTY5MzU1Mjk5M30.izQyFRyx8pxpRrC34NB9_7ReXPlc_rMJzO5nK-pHN0E"
      },
    });
    const json = await response.json();
    setNotes(json)
  }
  useEffect(() => {
    getNotes();
  }, []);

  //add note 
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${url}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMThmM2M2ZDlmNmY2YmYzMjAxYzNlIn0sImlhdCI6MTY5MzU1Mjk5M30.izQyFRyx8pxpRrC34NB9_7ReXPlc_rMJzO5nK-pHN0E"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  //delete note 
  const deleteNote =async (id) => {
    const response = await fetch(`${url}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMThmM2M2ZDlmNmY2YmYzMjAxYzNlIn0sImlhdCI6MTY5MzU1Mjk5M30.izQyFRyx8pxpRrC34NB9_7ReXPlc_rMJzO5nK-pHN0E"
      },
    });
    const json = await response.json();
    console.log(json);


    console.log("Deleting the note with" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //edit note 
  const editNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${url}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMThmM2M2ZDlmNmY2YmYzMjAxYzNlIn0sImlhdCI6MTY5MzU1Mjk5M30.izQyFRyx8pxpRrC34NB9_7ReXPlc_rMJzO5nK-pHN0E"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json =await response.json();
    console.log(json);
    
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }
 
  return (
    <NoteContext.Provider value={{addNote, deleteNote, editNote, getNotes , notes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
