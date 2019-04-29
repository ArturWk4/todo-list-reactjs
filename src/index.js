import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list.jsx";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

export default class App extends React.Component {
  state = {
    todoData: [
      { content: "Drink coffe", id: 1 },
      { content: "Learn  react", id: 2 },
      { content: "Walk with dog", id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(i => i.id === id);
      const newData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];      
      return {
        todoData: newData
      };
    });
  };
  render() {
    return (
      <div className="container">
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos={this.state.todoData}
          onDeleted={id => this.deleteItem(id)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
