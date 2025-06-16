import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoList 
        todos={filteredTodos} 
        addTodo={addTodo} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
      <Filter currentFilter={filter} setFilter={setFilter} />
    </div>
  );
}

export default App;