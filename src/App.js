import React, { useCallback, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import useHttp from './hooks/useHttp';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const {error, isLoading, httpHandler} = useHttp();

  const addTaskHandler = (task) => {
    const applydata = (data) =>{
      console.log(data);
    }
    const requestConfig = {url:'https://react-5f036-default-rtdb.firebaseio.com/task.json',
    method: "POST",
    body: task,
    headers: {
      "Content-Type": "application/json",
    },};
    httpHandler(requestConfig, applydata);
    fetchHandler();
  };

  const fetchHandler = useCallback(() => {
    const applydata = (data) =>{
      const loadedTasks = [];
      for (const key in data) {
        loadedTasks.push({
          id: key,
          task: data[key],
        });
      }
      setTaskList(loadedTasks);
    }
    const requestConfig = {url:'https://react-5f036-default-rtdb.firebaseio.com/task.json'};
    httpHandler(requestConfig, applydata);
  },[]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  let content = "Found no task!!!!";

  if (taskList.length > 0) {
    content = <TaskList tasksList={taskList} />;
  }

  if (error) {
    content = error;
  }

  if (isLoading) {
    content = "...Loading";
  }

  return (
    <React.Fragment>
      <section>
        <AddTask onAdd={addTaskHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
