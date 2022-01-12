import React from 'react';
import Counters from './Component/counters';
import Navbar from './Component/navbar';

class App extends React.Component {
    state = {
        counters: [
          { id: 1, value: 1 },
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
                <Navbar totalCounters ={this.state.counters.filter( c => c.value > 0).length} />
                <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.onAdd}
            onDelete={this.handleDelete}
          />

                </main>
            </div>
        );
    }
}
 
export default App;