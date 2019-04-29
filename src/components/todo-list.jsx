import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem content={item.content} />
    </li>
  ));
  return <ul className="list-group">{elements}</ul>;
};

export default TodoList;
