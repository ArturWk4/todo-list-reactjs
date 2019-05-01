import React from "react";

class ItemAddForm extends React.Component {
  state = {
    taskTitle: ""
  };

  onLabelChange = event => {
    this.setState({
      taskTitle: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onItemAdded(this.state.taskTitle);
    this.setState({
      taskTitle: ""
    });
  };
  render() {
    return (
      <form className="row mt-4" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Task title"
          className="col-10 col-sm-10 search-panel"
          onChange={this.onLabelChange}
          value={this.state.taskTitle}
        />
        <button className="btn btn-outline-secondary col-2">Add task</button>
      </form>
    );
  }
}

export default ItemAddForm;
