import React, { Component } from 'react';
import Counter from "./counter"
class Counters extends Component {
    render() { 
        const{onReset, counters, onDelete,onAdd} = this.props;
        return (
        <div>
            <button 
                onClick = {onReset}
                className='badge badge-primary m-2'>Reset</button>  
            {counters.map
                (
                    counter => 
                    <Counter key = {counter.id} onDelete = {onDelete} onAdd = {onAdd} counter = {counter}/>
                )
            }
        </div>);
    }
}
 
export default Counters;