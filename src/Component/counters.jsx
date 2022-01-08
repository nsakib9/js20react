import React from "react";
import Calculate from "./calculate";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    //   console.log ('delte clicked', counterId)
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Calculate
            id={counter.id}
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
