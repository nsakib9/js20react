import React from "react";
import Calculate from "./calculate";

class Counters extends React.Component {
 
  render() {
    return (
      <div>
        <button onClick={this.props.handleReset} className="btn btn-primary m-2">Reset</button>
        {this.props.counters.map((counter) => (
          <Calculate
            
            onDelete={this.props.handleDelete}
            onAdd={this.props.onAdd}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
