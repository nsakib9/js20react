import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './Component/counters';

const hello = <h1>Hello calcualte</h1>

ReactDOM.render(
    <Counters />,
    document.getElementById('root')
)