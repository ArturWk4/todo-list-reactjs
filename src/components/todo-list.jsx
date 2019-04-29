import React from "react";
import TodoListItem from "./todo-list-item";
import '../app.css';
const TodoList = ({ todos, onDeleted}) => {
  const elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem
        content={item.content}
        onDeleted={() => onDeleted(item.id)}
      />
    </li>
  ));
  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
