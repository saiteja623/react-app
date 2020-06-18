import React, { Component } from "react";
import "./css/typingtest.css";

class TypingTest extends Component {
  state = {
    time: 5,
    score: 0,
    activeword: "",
    msg: "",
    id: "",
  };
  componentDidMount = () => {
    this.fixWord();
    var id = setInterval(this.countdown, 1000);
    this.setState({ id });
  };
  fixWord = () => {
    var words = [
      "hippo",
      "aircraft",
      "airline",
      "album",
      "alcohol",
      "alive",
      "all",
      "alliance",
      "rhinosorous",
      "chain",
      "certainly",
      "chamber",
      "challenge",
      "champion",
      "championship",
      "chance",
      "change",
      "changing",
      "channel",
      "chapter",
      "character",
      "characteristic",
      "characterize",
      "disagree",
      "disappear",
      "disaster",
      "discipline",
      "discourse",
      "discover",
      "discovery",
      "discrimination",
      "emergency",
      "emission",
      "emotion",
      "emotional",
      "emphasis",
      "emphasize",
      "employ",
      "employee",
      "employer",
      "employment",
      "empty",
      "enable",
      "encounter",
      "encourage",
      "generally",
      "eneral",
      "generate",
      "generation",
      "gentleman",
      "genetic",
      "instruction",
      "instructor",
      "insurance",
      "instrument",
      "intellectual",
      "intelligence",
      "intend",
      "intense",
      "intensity",
      "intention",
      "interaction",
    ];
    var i = Math.floor(Math.random() * words.length);
    this.setState({ activeword: words[i] });
  };
  checkWin = (e) => {
    var value = e.target.value.toString().toLowerCase();
    if (value == this.state.activeword) {
      var score = this.state.score;
      score = score + 1;
      this.setState({ score });
      e.target.value = "";
      this.setState({ msg: "correct!" });
      clearInterval(this.state.id);
      this.setState({ time: 5 });
      var id = setInterval(this.countdown, 1000);
      this.setState({ id });
      this.fixWord();
      setTimeout(() => this.setState({ msg: "" }), 3000);
    }
  };
  countdown = () => {
    var time = this.state.time;
    if (time > 0) {
      time = time - 1;
      this.setState({ time });
    }
    if (time == 0) {
      this.setState({ time: 0 });
      this.setState({ msg: "game over" });
      this.setState({ score: 0 });
      clearInterval(this.state.id);
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="typing-backgrounds">
          <div className="background1"></div>
          <div className="background2"></div>
        </div>
        <div className="typingtest-total">
          <div className="typing-heading">Word beater</div>
          <div className="inf">
            Type the given word within <span style={{ color: "green" }}>5</span>{" "}
            seconds
          </div>
          <div className="game">
            <div className="word">{this.state.activeword} </div>
            <input
              type="text"
              className="input"
              onKeyUp={this.checkWin}
              placeholder="start typing.."
              name="word"
              autofocus
            ></input>
            <div className="msg">{this.state.msg}</div>
            <div className="aftermsg">
              <div className="time"> Time left:{this.state.time}</div>
              <div className="score">score:{this.state.score}</div>
            </div>
            <div className="instructions">
              <h7>Instructions</h7>
              <p>
                The one with the highest score will be the winner
                <br></br>
                If you fail you can continue with the given word but your score
                will restart
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TypingTest;
