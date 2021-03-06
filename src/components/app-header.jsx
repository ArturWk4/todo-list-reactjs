import React from "react";

class AppHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <h1 className="col col-9">Todo list</h1>
        <div className="col col-3 d-flex flex-column align-items-end">
          <p style={{ margin: 0 }}>
            {this.props.todoCount} <i className="far fa-list-alt" />
          </p>
          <p>
            {this.props.countCompleted} <i className="far fa-check-square" />
          </p>
        </div>
      </div>
    );
  }
}

export default AppHeader;
