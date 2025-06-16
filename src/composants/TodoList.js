import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList({ todos, addTodo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <p>Aucune tâche pour le moment</p>
      ) : (
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;