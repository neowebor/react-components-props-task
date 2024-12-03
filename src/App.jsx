import React from "react";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(UserCard, {id: 0, name: 'John', sex: 'male'}),
    React.createElement(UserCard, {id: 1, name: 'Deineris', sex: 'female'}),
    React.createElement(UserCard, {id: 2, name: 'Sansa', sex: 'female'}),
    React.createElement(UserCard, {id: 2, name: 'Sansa'}),
    React.createElement(UserCard),
  )
}

export default App;
