import React, { Component } from "react";
import "./css/reacthomenav.css";
import { Link, withRouter } from "react-router-dom";
import photo from "./background3.jpeg";
import geometry from "./backgroun2.jpg";

class reactHomeNav extends Component {
  state = {
    typingwords: [" of Games", " of Apps", " designed by Saiteja"],
    charindex: 0,
    arrayindex: 0,
    wordactive: "",
    backgroundstyle: {
      background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), red",
      backgroundSize: "cover",
    },
    wish: "Good Eveening",
  };
  componentDidMount = () => {
    this.wish();
    setTimeout(() => this.type(0), 2000);
  };
  wish = () => {
    var y = new Date();
    var hours = y.getHours();
    hours >= 18
      ? this.setState({ wish: "Good Evening" })
      : hours >= 12
      ? this.setState({ wish: "Good Afternoon" })
      : this.setState({ wish: "Good Morning" });
  };
  type = (e) => {
    var arrayindex = e;
    var charindex = this.state.charindex;
    var array = this.state.typingwords;
    if (charindex < array[arrayindex].length) {
      var wordactive = this.state.wordactive;
      wordactive += array[arrayindex].charAt(charindex);
      this.setState({ wordactive });
      this.setState({ charindex: charindex + 1 });
      setTimeout(() => this.type(e), 100);
    } else {
      setTimeout(() => this.erase(e), 1000);
    }
  };

  erase = (e) => {
    var charindex = this.state.charindex;
    var arrayindex = e;
    var array = this.state.typingwords;
    if (charindex > 0) {
      var wordactive = this.state.wordactive;
      wordactive = array[arrayindex].substring(0, charindex - 1);
      this.setState({ wordactive });
      this.setState({ charindex: charindex - 1 });
      setTimeout(() => this.erase(e), 100);
    } else {
      arrayindex++;
      if (arrayindex === array.length) {
        arrayindex = 0;
      }
      setTimeout(() => this.type(arrayindex), 1000);
    }
  };
  setdefaultbackground = () => {
    this.setState({
      backgroundstyle: {
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), red",
        backgroundSize: "cover",
      },
    });
  };
  setbackground = (e) => {
    e === 1
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) darkgray",

            backgroundSize: "cover",
          },
        })
      : e === 2
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) purple",
            backgroundSize: "cover",
          },
        })
      : e === 3
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) green",
            backgroundSize: "cover",
          },
        })
      : e == 4
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) yellow",
            backgroundSize: "cover",
          },
        })
      : e === 5
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) blue",

            backgroundSize: "cover",
          },
        })
      : e === 6
      ? this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) darkgoldenrod",

            backgroundSize: "cover",
          },
        })
      : this.setState({
          backgroundstyle: {
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)) violet",

            backgroundSize: "cover",
          },
        });
  };
  render() {
    return (
      <div className="home-total" style={this.state.backgroundstyle}>
        <div className="home-header">
          <p> {this.state.wish}, Welcome </p>
          <Link to="/about" className="about">
            <li>About?</li>
          </Link>
        </div>
        <div className="text">
          <span>This website is</span>
          <span className="typetext">{this.state.wordactive}</span>
          <span className="cursor"></span>
        </div>
        <div className="flex-1">
          <Link
            className="link"
            to="/calculator"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              onMouseEnter={() => this.setbackground(1)}
              onMouseLeave={this.setdefaultbackground}
              className="home-card"
            >
              <img src={require("./calculator.jpg")}></img>
              <li> Calculator</li>
              <div className="information">
                <div className="inside-information">
                  Being tired of calculating math in your brain.we present You
                  the basic calculator using html and css
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="link"
            to="/quiz"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(2)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./quiz.png")}></img>
              <li> quiz</li>
              <div className="information">
                <div className="inside-information">
                  Test your knowledge of computer Science,Music,films and much
                  more.
                </div>
              </div>
            </div>
          </Link>

          <Link
            className="link"
            to="/todoproject"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(3)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./todo.jpg")}></img>
              <li> Todolist</li>
              <div className="information">
                <div className="inside-information">
                  Dont Have pen and paper to note?No problem todoapp is here
                </div>
              </div>
            </div>
          </Link>

          <Link
            className="link"
            to="/check-your-typing-speed"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(4)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./typing1.jpg")}></img>
              <li> Typing test</li>
              <div className="information">
                <div className="inside-information">
                  Who doesn't want to type fast? As,good typing speed can save u
                  a lot of time.So take your typing test and check your skills.
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-2">
          <Link
            className="link"
            to="/tic-tac-toe"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(5)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./tictactoe.jpg")}></img>
              <li>Tic-Tac-Toe</li>
              <div className="information">
                <div className="inside-information">
                  Play the tictactoe game also called Noughts and Crosses with
                  two players
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="link"
            to="/get-weather"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(6)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./weather.png")}></img>
              <li> Weather</li>
              <div className="information">
                <div className="inside-information">
                  Weather changes as no one expects.Get the current Weather
                  status in your city
                </div>
              </div>
            </div>
          </Link>
          <Link
            className="link"
            to="/guessword"
            style={{ textDecoration: "none", fontSize: "1.4rem" }}
            exact
          >
            <div
              className="home-card"
              onMouseEnter={() => this.setbackground(7)}
              onMouseLeave={this.setdefaultbackground}
            >
              <img src={require("./wordguess.jpg")}></img>
              <li> Wordguess</li>
              <div className="information">
                <div className="inside-information">
                  Guess the random Word!You have five chances.We bet You cant
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default reactHomeNav;
