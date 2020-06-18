import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calc from "./calc";
import Todo from "./todo";
import GuessWord from "./guessword";
import reactHomeNav from "./reacthomenav";
import TypingTest from "./typingtest";
import TicTacToe from "./tictactoe";
import Weather from "./weather";
import Quiz from "./quiz";
import About from "./about";

class reactHome extends Component {
  render() {
    return (
      <Router basename={window.location.pathname || ""}>
        <Route path="/" exact component={reactHomeNav}></Route>
        <Route path="/calculator" exact component={Calc}></Route>
        <Route path="/todoproject" exact component={Todo}></Route>
        <Route path="/guessword" exact component={GuessWord}></Route>
        <Route
          path="/check-your-typing-speed"
          exact
          component={TypingTest}
        ></Route>
        <Route path="/tic-tac-toe" exact component={TicTacToe}></Route>
        <Route path="/get-weather" exact component={Weather}></Route>
        <Route path="/quiz" exact component={Quiz}></Route>
        <Route path="/about" exact component={About}></Route>
      </Router>
    );
  }
}

export default reactHome;
