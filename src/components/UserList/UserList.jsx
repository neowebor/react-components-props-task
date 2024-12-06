import React from "react";
import UserCard from "../UserCard/UserCard";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { props };
  }

  render() {
    const { users } = this.props;

    const userComponents = users.map((user) => {
      return <UserCard user={user} key={user.id} />;
    });

    return <>
      {userComponents}
    </>;
  }
}

export default UserList;
