import React from "react";
import Calculate from "./calculate";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
  };
  onAdd = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
  }
  handleDelete = (counterId) => {
    //   console.log ('delte clicked', counterId)
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map( c => {
      c.value =0;
      return c;
    });
    this.setState({ counters: counters})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Calculate
            
            onDelete={this.handleDelete}
            onAdd={this.onAdd}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
