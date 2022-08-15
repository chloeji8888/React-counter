import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters:[
        {id:1, count:0},
        {id:2, count:0},
        {id:3, count:0},
        {id:4, count:0},
    ]
    }

handleDelete = (counterId) =>{
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({counters} )
}
handleAdd = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].count++;
    this.setState({counters});
}

handleReset = () =>{
    const counters = this.state.counters.map(c => {
        c.count = 0;
        return c;
    })
    this.setState({counters});
}

  render(){
    return (
      <React.Fragment>
        <NavBar totalCounter = {this.state.counters.filter(c => c.value != 0).length}/>
        <main className='container'>
          <Counters 
          counters = {this.state.counters}
          onReset = {this.handleReset} 
          onAdd = {this.handleAdd} 
          onDelete = {this.handleDelete}
          />
        </main>
      </React.Fragment>

    );
  }
}

export default App;
