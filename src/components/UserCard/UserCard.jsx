import React from "react";
import "./UserCard.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isFriend: false};
  }

  handleSwitchFriendStatus = () => {
    this.setState({isFriend: !this.state.isFriend})
  }

  getClassName = (sex) => {
    if(sex === 'male') {
      return 'male'
    } else if (sex === 'female') {
      return 'female'
    } else {
      return 'undefined'
    }
  }
  render() {
    const {
      user: { id, name, sex },
    } = this.props;

    const {isFriend} = this.state;

    return (
      <>
        <p className={this.getClassName(sex)} key={id}>Hello, I'm {name} and my id {this.id}</p> 
        <button onClick={this.handleSwitchFriendStatus}>{isFriend ? 'Прибрати друга' : 'Добавити друга'}</button>
      </>
    )
  }
}

export default UserCard;
