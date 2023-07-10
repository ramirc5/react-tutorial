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
import axios from "axios";


interface User {
  id: number;
  name: string;
  username: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(setUsers(res.data));
    })
    .catch((err) => console.log(err));  
  }, []);
  return (
    <div>
      {error && <Alert type="danger">{error}</Alert>}
      <ul>

        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;