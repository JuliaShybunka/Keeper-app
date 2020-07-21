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
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem}/>
      {items.map((item,index)=><Note title={item.title} content={item.content} key={index}/>)}
      <Footer />
    </div>
  );
}

export default App;
