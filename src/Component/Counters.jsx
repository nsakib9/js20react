import React, { Component } from "react";
import Calculate from "./Calculate";

class Counters extends Component {
  state = {
    calculate: [
      { id: 1, value: 4 },
      { id: 1, value: 0 },
      { id: 1, value: 4 },
      { id: 1, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.calculate.map((calculate) => (
          <Calculate key={calculate.id} value={calculate.value}>
              <h2> Name: {calculate.id}</h2>
          </Calculate>
        ))}
      </div>
    );
  }
}

export default Counters;
