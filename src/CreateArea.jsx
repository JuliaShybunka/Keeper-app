import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState("");
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
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addItem(item);
            setItem("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
