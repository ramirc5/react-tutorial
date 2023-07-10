import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import styled from "styled-components";
import { set } from "immer/dist/internal";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/components/categories";
import {CanceledError} from './services/api-client';
import UserService, {User} from './services/user-service';
import useUsers from './hooks/useUsers';

function App() {
  const {user, error, loading, setUsers, setError, setLoading} = useUsers();
  
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    UserService.delete(user.id)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    }
    );
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Cristian", username: "Cristian" };
    setUsers([newUser, ...users]);
    UserService.create(newUser)
    .then(({data: savedUser}) => {  
      setUsers([savedUser, ...users]);
  })
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });   
}

const updateUser = (user: User) => () => {
  const originalUsers = [...users];
  const updatedUser =  {...user, name: user.name + "!"};
  setUsers(users.map((u) => u.id === user.id ? updatedUser : u)); 

  UserService.update(updatedUser)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });

}
  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <div className="spinner-border" ></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">

        {users.map((user) => (  
          <li className="list-group-item d-flex justify-content-between" key={user.id}>{user.name}{"  "}
          <div>
            <button className="btn btn-outline-secondary mx-1" onClick={updateUser(user)}>Update</button>  
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </div>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default App;