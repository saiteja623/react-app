import React, { Component } from "react";
import Counter from "./counter";
import some from "./new";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    totalitems: "6",
  };

  Delete = (id) => {
    var some = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: some });
    console.log(this.state.counters);
    this.calcitems();
  };

  increment = (counterobj) => {
    counterobj.value += 1;
    var counters = [...this.state.counters];
    var index = counters.indexOf(counterobj);
    var oldcounter = counters[index];
    this.setState({ oldcounter: counterobj });
    this.calcitems();
  };

  reset = (counterobj) => {
    counterobj.value = 0;
    var counters = [...this.state.counters];
    var index = counters.indexOf(counterobj);
    var oldcounter = counters[index];
    this.setState({ oldcounter: counterobj });
    this.calcitems();
  };

  resetall = () => {
    const counters = this.state.counters.map((each) => {
      each.value = 0;
      return each;
    });
    this.setState({ counters: counters });
    this.calcitems();
  };

  calcitems = () => {
    var sum = 0;
    this.state.counters.map((each) => {
      sum = sum + each.value;
    });
    this.setState({ totalitems: sum });
  };
  render() {
    return (
      <div>
        <h3>
          totalcounters:{this.state.counters.filter((c) => c.value > 0).length}{" "}
        </h3>
        <button onClick={this.resetall}>ResetAll</button>
        {this.state.counters.map((each) => (
          <Counter
            key={each.id}
            counter={each}
            onIncrement={this.increment}
            onDelete={this.Delete}
            onReset={this.reset}
          />
        ))}
        <some />
      </div>
    );
  }
}

export default Counters;
