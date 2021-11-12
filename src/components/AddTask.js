import React, { useRef } from "react";

const AddTask = (props) => {
  const inputRef = useRef();

  const addTaskHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    props.onAdd(value);
  };

  return (
    <form onSubmit={addTaskHandler}>
      <label htmlFor="task">Enter any task</label>
      <input type="text" id="task" ref={inputRef} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
