import React, { Component } from "react";

class Calculate extends Component {
  // state = {
  //   value: this.props.value,
  //   name: "New Website",
  // };
  style = {
    color: "red",
    fontSize: 20,
  };



  handleIncrement = () => {
    this.setState({ value: this.props.value + 1 });
  };

  addIncrement = () => {
    this.handleIncrement();
  };

  render() {
    let classes = this.badgeClasses();
    console.log('Check props:', this.props);
    return (
      
      <div>
        {this.props.children}
        <p>Calculate {this.props.value}</p>
        <p style={this.style} className={classes}>
          {this.props.value}
        </p>
        <button onClick={this.addIncrement} className="btn btn-primary">
          Add
        </button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Calculate;
