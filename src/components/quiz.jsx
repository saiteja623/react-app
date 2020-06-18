import React, { Component } from "react";
import "./css/quiz.css";

class Quiz extends Component {
  state = {
    currentquestion: "",
    options: [],
    correctanswer: "",
    questionnumber: "",
    answerindex: "",
    pressedindex: "",
    score: 0,
    containerstyle: {
      display: "none",
    },
    topicSelected: 18,
    leveldifficulty: "easy",
    topic_div_style: {
      display: "block",
    },
    Performance: [
      "Poor",
      "average",
      "Good",
      "Better",
      "Excellent",
      "Outstanding",
    ],
    winner_div_style: {
      display: "none",
    },
  };

  fetchquestion = (e) => {
    this.setState({ answerindex: "", pressedindex: "" });
    this.setState({
      topic_div_style: {
        display: "none",
      },
    });

    if (e === 0) {
      this.setState({
        containerstyle: {
          display: "block",
        },
        winner_div_style: {
          display: "none",
        },
      });
    } else if (this.state.questionnumber === 5) {
      this.setState({
        containerstyle: {
          display: "none",
        },
        winner_div_style: {
          display: "block",
        },
      });
    } else {
      this.setState({ containerstyle: { display: "block" } });
    }
    var number = Math.floor(Math.random() * 20);
    var url =
      "https://cors-anywhere.herokuapp.com/https://opentdb.com/api.php?amount=20&category=" +
      this.state.topicSelected +
      "&difficulty=" +
      this.state.leveldifficulty +
      "&type=multiple";
    var ob = new XMLHttpRequest();
    ob.open("GET", url, true);
    ob.onreadystatechange = () => {
      if (ob.readyState == 4 && ob.status == 200) {
        var res = JSON.parse(ob.responseText);
        var currentquestion = res["results"][number]["question"]
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'");
        this.setState({
          currentquestion,
        });
        var incorrect = res["results"][number]["incorrect_answers"];
        var correctanswer = res["results"][number]["correct_answer"];
        this.setState({ correctanswer });
        var randomplace = Math.floor(Math.random() * 3);
        incorrect.splice(randomplace, 0, correctanswer);
        this.setState({
          options: incorrect,
        });
        if (this.state.questionnumber == "") {
          this.setState({ questionnumber: 1 });
        } else {
          this.setState({ questionnumber: this.state.questionnumber + 1 });
        }
      }
    };
    ob.setRequestHeader("Content-type", "application/json");
    ob.send();
  };
  playSameTopic = () => {
    this.setState({
      questionnumber: "",
      winner_div_style: {
        display: "none",
      },
      score: 0,
    });
    console.log("q", this.state.questionnumber);
    this.fetchquestion(0);
  };
  changeTopic = () => {
    this.setState({
      winner_div_style: { display: "none" },
      topic_div_style: {
        display: "block",
      },
      score: 0,
      questionnumber: "",
    });
  };
  checkanswer = (e, index) => {
    if (this.state.pressedindex === "") {
      var answerindex = this.state.options.indexOf(this.state.correctanswer);
      this.setState({ answerindex });
      this.setState({ pressedindex: index });
      setTimeout(this.fetchquestion, 600);
      if (e === this.state.correctanswer) {
        this.setState({ score: this.state.score + 1 });
      }
    }
  };
  setTopic = (e) => {
    this.setState({ topicSelected: e.target.value });
  };
  setDifficulty = (e) => {
    this.setState({ leveldifficulty: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="select-topic" style={this.state.topic_div_style}>
          <p>Select the Topic and difficulty Level to take the Quiz</p>
          <select className="topic" onChange={this.setTopic}>
            <option value="9">General knowledge</option>
            <option value="10">Books</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="14">Telivision</option>
            <option value="15">videogames</option>
            <option value="17">Science and nature</option>
            <option value="18" selected>
              science and computers
            </option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">sports</option>
            <option value="22">geography</option>
            <option value="23">Hisory</option>
          </select>
          <select className="level" onChange={this.setDifficulty}>
            <option value="easy" selected>
              Easy
            </option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={this.fetchquestion}>Take quiz</button>
        </div>
        <div className="quiz-container" style={this.state.containerstyle}>
          <div className="quiz-question">
            Q{this.state.questionnumber}. {this.state.currentquestion}
          </div>
          <div className="options">
            {this.state.options.map((e, index) => (
              <div
                style={
                  index === this.state.answerindex
                    ? { backgroundColor: "green" }
                    : index === this.state.pressedindex &&
                      index !== this.state.answerindex
                    ? { backgroundColor: "red" }
                    : null
                }
                className="option"
                onClick={() => this.checkanswer(e, index)}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="winner-div" style={this.state.winner_div_style}>
          <img src={require("./winner.png")}></img>
          <br></br>
          <span style={{ fontSize: "1.4rem", margin: "6px" }}>
            {" "}
            you scored {this.state.score} out of 5
          </span>
          <br></br>
          <span style={{ fontSize: "1.4rem", margin: "6px" }}>
            Performance : {this.state.Performance[this.state.score]}
          </span>
          <br></br>
          <button onClick={this.playSameTopic}>
            Take the same Topic Quiz again{" "}
          </button>
          <button onClick={this.changeTopic}>changeTopic</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
