import React, { Component } from "react";

import { data } from "data/users";
import { UsersList } from "./UsersList/UsersList";

export class App extends Component {
  state = {
    users: data,
  }

  deleteUser = (userId) => {
    this.setState(prevState => ({
      users: prevState.users.filter(user=>user.id !== userId)
    }))
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <UsersList users={users} deleteUser={this.deleteUser} />
      </>
    );
  }
};
