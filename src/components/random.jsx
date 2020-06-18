import React, { Component } from "react";
import "./random.css";

class Random extends Component {
  state = {
    words: ["one ", "two", "saiteja balla"],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.words.map((e) => (
          <div className="container">
            <div className="inside">
              <div className="insideText"> {e} </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Random;
