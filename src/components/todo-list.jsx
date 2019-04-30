import React from "react";
import TodoListItem from "./todo-list-item";
import "../app.css";
const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem
        content={item.content}
        onDeleted={() => onDeleted(item.id)}
        onToggleImportant={() => onToggleImportant(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
      />
    </li>
  ));
  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
