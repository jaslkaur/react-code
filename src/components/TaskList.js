import React from "react";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasksList.map((task)=>
        <li key={props.id}>{task.task}</li>
        )}
    </ul>
  );
};

export default TaskList;
