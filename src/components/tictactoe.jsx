import React, { Component } from "react";
import "./css/tictactoe.css";

class TicTacToe extends Component {
  state = {
    grid: ["", "", "", "", "", "", "", "", ""],
    turn: "×",
    Oscore: 0,
    Xscore: 0,
    Xstyle: {
      display: "none",
    },
    Ostyle: {
      display: "none",
    },
    gridStyle: {
      display: "block",
    },
    XturnStyle: {
      borderBottom: "solid 4px orange",
    },
    drawStyle: {
      display: "none",
    },
    OturnStyle: {},
    showTurn: { display: "flex" },
  };
  mark = (index) => {
    var turn = this.state.turn;
    var example = this.state.grid;
    if (example[index] === "") {
      example.splice(index, 1, turn);
      this.setState({ grid: example });
      turn === "o"
        ? this.setState({ turn: "×" })
        : this.setState({ turn: "o" });
      if (turn === "o") {
        this.setState({
          XturnStyle: {
            borderBottom: "solid 4px orange",
          },
        });
        this.setState({
          OturnStyle: {
            borderBottom: "none",
          },
        });
      } else {
        this.setState({
          XturnStyle: {
            borderBottom: "none",
          },
        });
        this.setState({
          OturnStyle: {
            borderBottom: "solid 4px orange",
          },
        });
      }
      this.checkWin(index);
    }
  };
  checkDraw = () => {
    var grid = this.state.grid;
    var j = 0;
    for (var i = 0; i < grid.length; i++) {
      if (grid[i] !== "") {
        j = j + 1;
      }
    }
    if (j === 9) {
      this.setState({
        drawStyle: {
          display: "block",
        },
      });
      this.setState({
        gridStyle: { display: "none" },
        showTurn: { display: "none" },
      });
    }
  };
  checkWin = (index) => {
    var win = false;
    var grid = this.state.grid;
    console.log(grid);
    console.log(index);

    if (index == 0 || index == 3 || index == 6) {
      if (grid[index] === grid[index + 1] && grid[index] === grid[index + 2]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 0 || index == 1 || index == 2) {
      if (grid[index] === grid[index + 3] && grid[index] === grid[index + 6]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 6 || index == 7 || index == 8) {
      if (grid[index] === grid[index - 3] && grid[index] === grid[index - 6]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 1 || index == 4 || index == 7) {
      if (grid[index] === grid[index + 1] && grid[index] === grid[index - 1]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 2 || index == 5 || index == 8) {
      if (grid[index] === grid[index - 1] && grid[index] === grid[index - 2]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 3 || index == 4 || index == 5) {
      if (grid[index] === grid[index - 3] && grid[index] === grid[index + 3]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 0 || index == 4 || index == 8) {
      if (grid[0] === grid[4] && grid[0] === grid[8]) {
        this.declareWin();
        win = true;
      }
    }
    if (index == 2 || index == 4 || index == 6) {
      if (grid[2] === grid[4] && grid[2] === grid[6]) {
        this.declareWin();
        win = true;
      }
    }
    if (win == false) {
      this.checkDraw();
    }
  };
  declareWin = () => {
    this.setState({
      gridStyle: {
        display: "none",
      },
      showTurn: {
        display: "none",
      },
    });

    var turn = this.state.turn;
    var Oscore = this.state.Oscore;
    var Xscore = this.state.Xscore;
    turn === "o"
      ? this.setState({
          Ostyle: {
            display: "block",
          },
          Oscore: Oscore + 1,
        })
      : this.setState({
          Xstyle: {
            display: "block",
          },
          Xscore: Xscore + 1,
        });
  };
  playAgain = () => {
    var y = ["", "", "", "", "", "", "", "", ""];
    this.setState({
      grid: y,
      win: false,
      XturnStyle: {
        borderBottom: "solid 4px orange",
      },
      OturnStyle: {},
    });
    this.setState({
      Xstyle: {
        display: "none",
      },
    });
    this.setState({
      Ostyle: {
        display: "none",
      },
    });
    this.setState({
      gridStyle: {
        display: "block",
      },
      showTurn: {
        display: "flex",
      },

      drawStyle: {
        display: "none",
      },
    });
    this.setState({ turn: "×" });
  };
  render() {
    return (
      <React.Fragment>
        <div className="tic-tac-total">
          <div className="showTurn" style={this.state.showTurn}>
            <div className="X-turn" style={this.state.XturnStyle}>
              ×{" "}
              <span
                style={{ float: "right", fontSize: "1.1rem", opacity: 0.7 }}
              >
                {this.state.Xscore}
              </span>
            </div>
            <div className="O-turn" style={this.state.OturnStyle}>
              o{" "}
              <span style={{ float: "left", fontSize: "1.1rem", opacity: 0.7 }}>
                {this.state.Oscore}
              </span>
            </div>
          </div>
          <div className="tictac-total" style={this.state.gridStyle}>
            <div className="grid-layout">
              {this.state.grid.map((e, index) => (
                <div className="eachGrid" onClick={() => this.mark(index)}>
                  {e}
                </div>
              ))}
            </div>
          </div>
          <div className="tictactoe-X-Winner" style={this.state.Xstyle}>
            <div className="ex">×</div>
            <div className="winner-title">WINNER</div>
            <button className="again-btn" onClick={this.playAgain}>
              Play again?
            </button>
          </div>
          <div className="tictactoe-o-Winner" style={this.state.Ostyle}>
            <div className="o">o</div>
            <div className="winner-title">WINNER</div>
            <button className="again-btn" onClick={this.playAgain}>
              Play again?
            </button>
          </div>
          <div className="draw" style={this.state.drawStyle}>
            <div className="inside-draw1">o</div>
            <div className="inside-draw2">×</div>
            <div className="winner-title">DRAW</div>
            <button className="again-btn" onClick={this.playAgain}>
              Play again?
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TicTacToe;
