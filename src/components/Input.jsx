import React, {useState} from "react";


function InputArea(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
  }

  function submitNote(event){
    props.onClicked(note);
    setNote({title:"",
    content:""})

    event.preventDefault();

  }
  
  return (
    <div className="inputArea">
    <form>
    <input className="input" type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />
    <textarea className="input" name="content" placeholder="Take a note..." rows="3"type="text" value={note.content} onChange={handleChange} />
    <button
        onClick={submitNote}
      >
        <span>+</span>
      </button>


    </form>
    </div>
  );
}

export default InputArea;