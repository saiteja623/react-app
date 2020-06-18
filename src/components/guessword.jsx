import React, { Component } from "react";
import "./fontawesome/css/all.css";
import "./css/guessword.css";

class GuessWord extends Component {
  state = {
    lives: 5,
    question: "",
    keyrow1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    keyrow2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    keyrow3: ["z", "x", "c", "v", "b", "n", "m"],
    questoinArray: [],
    letterschecked: [],
    heartLives: [],
    correctWords: [],
    incorrectwords: [],
  };
  componentDidMount = () => {
    this.questions();
    this.setHearts(this.state.lives);
  };
  setHearts = (lives) => {
    var ob = [];

    for (var i = 0; i < lives; i++) {
      ob.push(<div className="fa fa-heart"></div>);
    }
    for (i = 0; i < 5 - lives; i++) {
      ob.push(<div className="far fa-heart"></div>);
    }
    this.setState({ heartLives: ob });
  };
  questions = () => {
    const namesList = [
      "pencil",
      "eraser",
      "tablets",
      "tamarind",
      "tailor",
      "tall",
      "umbrella",
      "unfair",
      "unfit",
      "chocolate",
      "mother",
      "silver",
      "broken",
      "potato",
      "breath",
      "secret",
      "circle",
      "energy",
      "again",
      "agree",
      "begin",
      "beach",
      "shadow",
      "pillow",
      "tiger",
    ];
    const names = namesList[Math.floor(Math.random() * namesList.length)];
    this.setState({ question: names });
    this.createElements(names);
  };
  createElements = (names) => {
    var elements = [];
    for (var i = 0; i < names.length; i++) {
      elements.push(<div className="randomque"></div>);
    }
    this.setState({ questoinArray: elements });
  };
  checkletter = (e) => {
    var question = this.state.question;
    var lives = this.state.lives;
    lives = lives - 1;
    if (question.indexOf(e) < 0) {
      this.setState({ lives });
      this.setHearts(lives);
    }
    var elements = this.state.letterschecked;
    elements.push(e);
    this.setState({ letterschecked: elements });
    var y = [];

    for (var i = 0; i < question.length; i++) {
      if (elements.indexOf(question[i]) >= 0) {
        y.push(<div className="randomque">{question[i]}</div>);
      } else {
        y.push(<div className="randomque"></div>);
      }
    }
    this.setState({ questoinArray: y });
    this.checkwin(lives);
  };
  checkwin = (lives) => {
    var question = this.state.question;
    if (lives == 0) {
      alert("you lost");
      var y = [];
      for (var k = 0; k < question.length; k++) {
        y.push(<div className="randomque">{question[k]}</div>);
      }
      this.setState({ questoinArray: y });
      this.setState({ letterschecked: [], question: "", lives: 5 });
      setTimeout(this.questions, 3000);
      setTimeout(() => this.setHearts(5), 3000);
    } else {
      var i = 0;

      var checkedletters = this.state.letterschecked;
      for (var j = 0; j < question.length; j++) {
        if (checkedletters.indexOf(question[j]) >= 0) {
          i = i + 1;
        }
      }
      if (i >= question.length) {
        this.setState({ letterschecked: [], question: "", lives: 5 });
        this.questions();
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="guessword-total">
          <div className="guessword-heading">Guess the Word? </div>
          <div className="question">
            {this.state.questoinArray.map((e) => (
              <> {e}</>
            ))}
          </div>
          <div className="keyboard">
            <div className="keyrow">
              {this.state.keyrow1.map((e) => (
                <button onClick={() => this.checkletter(e)}>{e}</button>
              ))}
            </div>
            <div className="keyrow">
              {this.state.keyrow2.map((e) => (
                <button onClick={() => this.checkletter(e)}>{e}</button>
              ))}
            </div>
            <div className="keyrow">
              {this.state.keyrow3.map((e) => (
                <button onClick={() => this.checkletter(e)}>{e}</button>
              ))}
            </div>
          </div>
          <div className="hearts">
            {this.state.heartLives.map((e) => (
              <>{e}</>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GuessWord;
