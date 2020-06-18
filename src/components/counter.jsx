import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  render() {
    return (
      <div>
        <span style={this.checkColor()}>{this.count()}</span>
        <button
          className="increment"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="reset"
          onClick={() => this.props.onReset(this.props.counter)}
        >
          reset
        </button>
        <button
          className="delete"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  //apply different styles for zero and other than zero
  checkColor() {
    var stylezero = {
      backgroundColor: "red",
      padding: "4px",
    };
    var styleone = {
      backgroundColor: "blue",
      padding: "4px",
    };
    return this.props.counter.value === 0 ? stylezero : styleone;
  }
  //whether to return a word or a number
  count() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
