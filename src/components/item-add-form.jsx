import React from "react";

class ItemAddForm extends React.Component {
  render() {
    return (
      <div className="row mt-4">
        <input
          type="text"
          placeholder="Task title"
          className="col-10 col-sm-10 search-panel"
        />
        <button 
            className="btn btn-outline-secondary col-2"
            onClick={() => this.props.onItemAdded('helloContent')}>Add task</button>
      </div>
    );
  }
}

export default ItemAddForm;
