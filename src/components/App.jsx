import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { data } from 'data/users';
import { UsersList } from './UsersList/UsersList';
import { Button } from './Button/Button';
import { AddUserForm } from './AddUserForm/AddUserForm';

export class App extends Component {
  state = {
    users: data,
    isFormShown: false,
  };

  deleteUser = userId => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== userId),
    }));
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = obj => {
    const newUser = {
      id: nanoid(),
      ...obj,
    };

    this.setState(prevState => ({
      users: [...prevState.users, newUser],
      isFormShown: false,
    }));
  };

  toggleJobStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (user.id !== userId) {
          return user;
        } else {
          return { ...user, hasJob: !user.hasJob };
        }
      }),
    }));
  };

  render() {
    const { users, isFormShown } = this.state;

    return (
      <>
        <UsersList
          users={users}
          deleteUser={this.deleteUser}
          toggleJobStatus={this.toggleJobStatus}
        />
        {isFormShown ? (
          <AddUserForm addUser={this.addUser} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
      </>
    );
  }
}
