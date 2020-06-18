import React, { Component } from "react";
import "./calc.css";

class Calc extends Component {
  state = {
    res: 0,
    numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    actionLists: [
      {
        button: "%",
        style: {
          background: "lightgreen",
          transform: "rotate(60deg)",
        },
        action: "division",
      },
      {
        button: "+",
        style: {
          background: "orange",
          transform: "rotate(45deg)",
        },
        action: "multiply",
      },
      {
        button: "-",
        style: {
          background: "lightred",
          fontWeight: "bold",
        },
        action: "subtract",
      },
      {
        button: "+",
        style: {
          background: "blue",
        },
        action: "add",
      },
      {
        button: "=",
        style: {
          background: "violet",
        },
        action: "getResult",
      },
    ],
    alphaActions: ["C", "CE", "%"],
    firstnumber: "",
    mathAction: "",
    answer: "",
    topInput: "",
  };
  handleinput = (e) => {
    var res = this.state.res;
    res = res * 10 + e;
    this.setState({ res });
    this.setState({ answer: "" });
  };
  handleMath = (actions, button) => {
    this.setState({ mathAction: actions });
    var res = this.state.res;
    var topInput = "";
    var answer = this.state.answer;
    if (answer != "") {
      actions === "multiply"
        ? (topInput = answer + "*")
        : (topInput = answer + button);
      this.setState({ firstnumber: answer });
      this.setState({ answer: "" });
    } else if (this.state.firstnumber != "") {
      var firstnumber = this.state.firstnumber;
      var action1 = this.state.mathAction;
      var x;
      action1 === "add"
        ? (x = firstnumber + res)
        : action1 === "subtract"
        ? (x = firstnumber - res)
        : action1 === "multiply"
        ? (x = firstnumber * res)
        : (x = firstnumber / res);
      actions === "multiply" ? (topInput = x + "*") : (topInput = x + button);
      this.setState({ firstnumber: x });
    } else {
      this.setState({ firstnumber: res });
      actions == "multiply"
        ? (topInput = res + "*")
        : (topInput = res + button);
    }
    this.setState({ topInput });
    this.setState({ res: " " });
    if (button === "=") {
      if (this.state.answer != "") {
        this.setState({ topInput: "" });
        var answer = this.state.answer;
        this.setState({ answer });
        this.setState({ res: "" });
      } else {
        var action = this.state.mathAction;
        var firstnumbers = this.state.firstnumber;
        var secondnumber = this.state.res;
        if (secondnumber != "") {
          action === "add"
            ? this.setState({ answer: firstnumbers + secondnumber })
            : action === "subtract"
            ? this.setState({ answer: firstnumbers - secondnumber })
            : action === "multiply"
            ? this.setState({ answer: firstnumbers * secondnumber })
            : this.setState({ answer: firstnumbers / secondnumber });
        } else {
          this.setState({ answer: firstnumber });
        }
        this.setState({ topInput: "" });
        this.setState({ firstnumber: "" });
      }
    }
  };
  handleAlphaActions = (e) => {
    if (e === "C") {
      this.setState({
        res: 0,
        firstnumber: "",
        answer: "",
        topInput: "",
        mathAction: "",
      });
    } else if (e === "CE") {
      var res = this.state.res;
      var ans = this.state.answer;
      if (res != " ") {
        res = res / 10;
        res = Math.floor(res);
        this.setState({ res });
      } else {
        ans = ans / 10;
        ans = Math.floor(ans);
        this.setState({ answer: ans });
      }
    } else {
      var firstnumber = this.state.firstnumber;
      var res = this.state.res;
      var p = (res / 100) * firstnumber;
      var action = this.state.mathAction;
      action == "add"
        ? (p = p + firstnumber)
        : action == "multiply"
        ? (p = p * firstnumber)
        : action == "division"
        ? (p = firstnumber / p)
        : (p = firstnumber - p);
      this.setState({ topInput: "" });
      this.setState({ answer: p, res: "", mathAction: "", firstnumber: "" });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="backgrounds">
          <div className="background1"></div>
          <div className="background2"></div>
        </div>
        <div className="container">
          <div className="topInput">{this.state.topInput}</div>
          <div className="result">
            {this.state.res !== " " && this.state.res}
            {this.state.answer !== " " && this.state.answer}
          </div>
          <div className="alphabetactions">
            {this.state.alphaActions.map((e) => (
              <button onClick={() => this.handleAlphaActions(e)}>{e}</button>
            ))}
          </div>
          <div className="numbers">
            {this.state.numbers.map((e) => (
              <button onClick={() => this.handleinput(e)}>{e}</button>
            ))}
          </div>
          <div className="sidebar-actions">
            {this.state.actionLists.map((e) => (
              <button
                onClick={() => this.handleMath(e.action, e.button)}
                style={e.style}
              >
                {e.button}
              </button>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Calc;
