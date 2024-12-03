import React from "react";
import "./UserCard.css";

function UserCard(props) {
  const { id, name, sex } = props;

  if (sex === "male") {
    return React.createElement(
      "p",
      { className: "male" },
      `Hello, I'm ${name} and my id ${id}`
    );
  } else if (sex === "female") {
    return React.createElement(
      "p",
      { className: "female" },
      `Hello, I'm ${name} and my id ${id}`
    );
  } else {
    return React.createElement(
      'p',
      {className: 'undefined'},
      `I don't know you. Hello, ${name ? name : 'Guest'}!`
    )
  }
}

export default UserCard;
