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
      this.createToDoItem('Drink coffe'),
      this.createToDoItem('Learn Reack'),
      this.createToDoItem('To become success')
    ]
  };

  createToDoItem(text) {
    return {
      content: text,
      important: false,
      done: false,
      id: this.count++
    };
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
    this.setState(() => {
      const newData = [...this.state.todoData, this.createToDoItem(text)];
      return {
        todoData: newData
      };
    });
  };
  toggleProperty(data, id, propName) {
      const index = data.findIndex(item => item.id === id);
      const oldItem = data[index];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return [        
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1)
      ];
  }
  onToggleImportant = id => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  onToggleDone = id => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  render() {
    const {todoData} = this.state;
    const countCompleted = todoData.filter(item => item.done).length;

    return (
      <div className="container">
        <AppHeader 
          countCompleted={countCompleted} 
          todoCount={todoData.length - countCompleted}
        />
        <SearchPanel />
        <TodoList
          todos={todoData}
          onDeleted={id => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
