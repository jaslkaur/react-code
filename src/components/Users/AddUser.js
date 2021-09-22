import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
const nameInputRef = useRef();
const ageInputRef = useRef();
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim() === "" || enteredAge.trim() === "") {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (parseInt(enteredAge) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const newUser = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(newUser);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <React.Fragment>
      {error && (
      <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />
    )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <button className={classes.button} type="submit">
            Add User
          </button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
