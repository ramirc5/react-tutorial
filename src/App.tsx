import ListGroup from "./components/ListGroup/index";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import React from "react";
import { useState } from "react";
import { BsCalendarFill } from "react-icons/bs";
import Like from "./components/Like";
import styled from "styled-components";
import { set } from "immer/dist/internal";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import categories from "./components/expense-tracker/components/categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1, description: 'aaa', amount: 10, category: 'utilities'
    },
    {
      id: 2, description: 'bbb', amount: 20, category: 'utilities'
    },
    {
      id: 3, description: 'ccc', amount: 30, category: 'utilities'
    },
    {
      id: 4, description: 'ddd', amount: 40, category: 'utilities'
    },

  ]);

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <div className="container">
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id:expenses.length+1}])}/>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
        <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
      </div>
    </div>
  )
}

export default App;