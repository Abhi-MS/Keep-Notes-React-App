import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import InputArea from "./Input";

function App(){

    const [newNotes,setNewNotes]=useState([]);

    function addNote(note)
    {
        const newNote={
            title: note.title,
            content:note.content
        }
        setNewNotes(prevNotes => {
           return [...prevNotes, newNote]
        })
        console.log(newNotes);
    }
    function deleteNote(id){
        setNewNotes(prevNotes => {
            return prevNotes.filter((noteItem,index)=>{
                 return index!== id;
            })
         })
    }
    return <div>
        <Header />
        <InputArea onClicked={addNote}/>
        {/* <div>{notes.map(note => (<Note key ={note.key} title={note.title} content = {note.content}/>))}</div> */}
    <div>{newNotes&&newNotes.map((newNote, index) => (<Note key ={index} id={index}  title={newNote.title} content = {newNote.content} onClicked={deleteNote}/>))}</div>
        <Footer />
    </div>;
}

export default App;