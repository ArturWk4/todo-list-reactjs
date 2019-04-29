import React from "react";
import "../app.css";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isComplited: false,
      isImportant: false
    };
  }

  setComplited = () => {
    this.setState({
      isComplited: !this.state.isComplited
    });
  };
  setPriority = () => {
    this.setState({
      isImportant: !this.state.isImportant
    });
  };
  render() {
    const { isComplited, isImportant } = this.state;
    let itemClasses = ["row", "justify-content-between", "align-items-center"];
    let contentClasses = ["col", "col-sm-10"];

    return (
      <span
        className={
          isComplited ? itemClasses.join(" ") + " done" : itemClasses.join(" ")
        }
      >
        <div>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={this.setComplited}
          >
            <i className="fas fa-check" />
          </button>
          <span
            className={
              isImportant
                ? contentClasses.join(" ") + " important"
                : contentClasses.join(" ")
            }
          >
            {this.props.content}
          </span>
        </div>

        <div>
          <button
            className="btn btn-outline-success"
            onClick={this.setPriority}
          >
            <i className="fa fa-exclamation" />
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i className="fa fa-trash" />
          </button>
        </div>
      </span>
    );
  }
}

export default TodoListItem;
