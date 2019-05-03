import React from "react";

class ItemFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const _class = isActive ? "btn-secondary" : "btn-outline-secondary";
      return (
        <button
          key={name}
          className={`btn ${_class}`}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div>{buttons}</div>;
  }
}

export default ItemFilter;
