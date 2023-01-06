import './App.css';
import Header from './Header';
import Footer from './footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { useState } from 'react';

function App() {

    const [notes ,SetData] = useState([]);

    function addNote(note){
        SetData(prev => {
          return [...prev,note];
        });
    }

    function deleteNote(id){
  SetData(prev =>{
    return prev.filter((noteItem , index) => {
         return index !== id;
    })
  });
    }

 return  <div>
     <Header/>
     <CreateArea onAdd = {addNote}/>
     {notes.map(  (item,index) => ( <Note key = {index} id = {index} title = {item.title} content = {item.content} onDelete = {deleteNote} /> )) }
     <Footer/>
 </div>;
  
}

export default App;
