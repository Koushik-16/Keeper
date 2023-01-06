import React, { useState } from "react";

function CreateArea(props){

const [note,SetNote] = useState({
    title : "",
    content : ""
});

 function handelChange(event){
  const {name , value} = event.target;
  SetNote(prevNote => {
    if(name === "title"){
        return {
            title : value,
            content : prevNote.content
        }
    }else {
          return {
            title : prevNote.title,
            content : value
          }
    }
  });
 }

 function handelClick(event) {

    props.onAdd(note);
   SetNote({
    title : "",
    content : ""
   })
    event.preventDefault();
 }



    return (<div>
    <form className="create-note">
        <input onChange={handelChange}  value = {note.title} name = 'title' placeholder="Title"/>
        <textarea onChange={handelChange} value = {note.content} name = "content" placeholder="Take a note ..." rows = "3"/>
        <button onClick={handelClick}>Add</button>
    </form>

    </div>)
}

export default CreateArea;