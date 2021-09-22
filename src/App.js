import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);

   const addUserHandler = (newUser) => {
      setUsersList((prevList) => {
          return [...prevList, newUser];
      });
   };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
};

export default App;
