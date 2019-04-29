import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/todo-list.jsx";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ItemAddForm from "./components/item-add-form";

export default class App extends React.Component {
  count = 0;
  state = {
    todoData: [
      { content: "Drink coffe", id: this.count++ },
      { content: "Learn  react", id: this.count++ },
      { content: "Walk with dog", id: this.count++ }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(i => i.id === id);
      const newData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return {
        todoData: newData
      };
    });
  };

  addItem = text => {
    const newItem = {
      content: text,
      id: this.count++
    };
    this.setState(() => {
      const newData = [...this.state.todoData, newItem];
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
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
