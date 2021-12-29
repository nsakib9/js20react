import React, { Component } from 'react'

class Calculate extends Component {
state ={
    count: 0,
    name: 'New Website',
    img: 'https://cdn.pixabay.com/photo/2021/02/02/17/13/trees-5974614_640.jpg'
}
style ={
    color: "red",
    fontSize: 20,
}

    render() { 
        return (
            <div>
                
                <p>Calculate {this.state.count}</p>
                <p 
                style={this.style} 
                className={this.formatCount()}>
                    {this.state.count}
                </p>
                <img width="200px" src={this.state.img} alt={this.state.name} />
            </div>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "m-2 badge bg-warning" : "m-2 badge bg-primary";
    }
}
 
export default Calculate;