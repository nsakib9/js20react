import React from "react";

class Calculate extends React.Component {
  // state = {
  //   value: this.props.counter.value,
  // };
  // handleAdd = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    let classes = this.badgeClasses();
    return (
      <div>
        <span className={classes}>{this.formcount()}</span>
        <button onClick={() => this.props.onAdd(this.props.counter)} className="btn btn-primary m-2">
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  badgeClasses() {
    let classes = "btn m-2 btn-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  formcount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Calculate;
