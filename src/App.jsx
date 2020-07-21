import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item){
    setItems((prevItem)=>{
      return [item,...prevItem]
    })
  }

  function handleDeleteNote(id){
    setItems((prevItems)=>{
      return prevItems.filter((item,index) => index !== id)
    })

    console.log(id)
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem}/>
      {items.map((item,index)=><Note deleteNote={handleDeleteNote} title={item.title} content={item.content} id={index} key={index}/>)}
      <Footer />
    </div>
  );
}

export default App;
