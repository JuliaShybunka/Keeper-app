import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [isExpended, setExpended] = useState(false);

  const [item, setItem] = useState({
    title: "",
    content: "",
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

  function expendClick(){
      setExpended(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            autoComplete="off"
            value={item.title}
          />
        )}

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpended ? "3" : "1"}
          value={item.content}
          onClick={expendClick}
        />
        <Zoom in={isExpended && true}>
          <Fab
            onClick={(event) => {
              event.preventDefault();
              props.addItem(item);
              setItem({
                title: "",
                content: "",
              });
              setExpended(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
