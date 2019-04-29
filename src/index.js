import React from "react";
import ReactDOM from "react-dom";
import TodoList from './components/todo-list.jsx';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const todoData = [
  {content: 'Drink coffe', id: 1},
  {content: 'Learn  react',  id: 2},
  {content: 'Walk with dog', id: 3}
];

const App = () => (
  <div className="container">
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
