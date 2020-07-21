import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
      title: "",
      content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={item.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={item.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addItem(item);
            setItem({
                title: "",
                content: ""
            });
           
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
