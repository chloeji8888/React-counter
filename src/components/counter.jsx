import React, { Component } from 'react';



class Counter extends Component {

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    render() {

        return(
            <div>
                <h4>Counter #{this.props.counter.id}</h4>
                <span className = {this.getBadgeClasses()}> {this.formatCount()} </span>
                <button onClick = {()=> this.props.onAdd(this.props.counter)}className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick = {()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">-</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 ";
        classes += this.props.counter.count=== 0 ? "badge-warning": " badge-primary";
        return classes;
    }

    formatCount(){
        const{count} = this.props.counter;
        return count === 0 ? "Zero": count;
    }
}

 
export default Counter;