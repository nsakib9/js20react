import React, { Component } from "react";

class Calculate extends Component {
  state = {
    count: 1,
    name: "New Website",
  };
  style = {
    color: "red",
    fontSize: 20,
  };

  // renderTags(){
  //     if(this.state.tags.length === 0) return <p>There are no tags now</p>;
  //     return <ul>
  //     {this.state.tags.map((tag) => (
  //       <li key={tag}>{tag}</li>
  //     ))}
  //   </ul>
  // }


  handleIncrement = (product) => {
  
    this.setState({count: this.state.count +5});

  }

  addIncrement = () => {
    this.handleIncrement({id: 1})
  };

  render() {
    let classes = this.badgeClasses();

    return (
      <div>
        <p>Calculate {this.state.count}</p>
        <p style={this.style} className={classes}>
          {this.state.count}
        </p>
        <button onClick={this.addIncrement} className="btn btn-primary">Add</button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "m-2 badge bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Calculate;
