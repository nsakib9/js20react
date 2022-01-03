import React, { Component } from 'react';
import Calculate from './Calculate';

class Counters extends Component {
    render() { 
        return (
        <div>
            <Calculate />
            <Calculate />
            <Calculate />
            <Calculate />
        </div>
        );
    }
}
 
export default Counters;
