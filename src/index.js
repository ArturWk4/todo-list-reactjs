import React from "react";
import ReactDOM from "react-dom";
import TodoList from './components/todo-list.jsx';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const todoData = [
  {content: 'Drink coffe', isImportant: true, id: 1},
  {content: 'Learn  react', isImportant: true, id: 2},
  {content: 'Walk with dog', isImportant: false, id: 3}
];

const App = () => (
  <div className="container">
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
