import React from "react";
import UserCard from "./components/UserCard/UserCard";
import UserList from "./components/UserList/UserList";

function App() {
  const users = [
    { id: 0, name: "John", sex: "male" },
    { id: 1, name: "Deineris", sex: "female" },
    { id: 2, name: "Sansa", sex: "female" },
    { id: 3, name: "Sansa" },
  ];

  return (
    <>
      <UserList users={users}/>
    </>
  );
}

export default App;
