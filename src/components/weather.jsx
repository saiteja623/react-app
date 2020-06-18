import React, { Component } from "react";
import "./css/weather.css";

class Weather extends Component {
  state = {
    msg: "",
    weatherList: [],
    inputval: "",
    activecity: "",
  };

  handlecityname = (e) => {
    var city = e.target.value;
    this.setState({ activecity: city });
    this.setState({ inputval: city });
  };
  csrfcookie = () => {
    var cookieValue = null,
      name = "csrftoken";
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) == name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };
  fecthapi = () => {
    var activeitem = this.state.activecity;
    this.setState({ msg: "" });
    if (activeitem !== "") {
      this.setState({ inputval: "" });
      var url =
        "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" +
        activeitem +
        "&units=imperial&appid=eafbb5e20b90414074464803695b0f19";
      var ob = new XMLHttpRequest();
      ob.open("GET", url, true);
      ob.onreadystatechange = () => {
        if (ob.readyState == 4 && ob.status == 200) {
          var res = JSON.parse(ob.responseText);
          if (res["cod"] == 200) {
            var y = this.state.weatherList;
            y.push({
              temperature: res["main"]["temp"],
              desc: res["weather"][0]["description"],
              icon:
                "http://openweathermap.org/img/w/" +
                res["weather"][0]["icon"] +
                ".png",
              city: this.state.activecity,
            });
            this.setState({
              weatherList: y,
              inputval: "",
              activecity: "",
            });
          }
        } else if (ob.status == 404) {
          this.setState({ msg: "No city Exists" });
          this.setState({ inputval: "", activecity: "" });
        }
      };
      ob.setRequestHeader("Content-type", "application/json");
      ob.setRequestHeader("X-CSRFToken", this.csrfcookie());
      ob.send();
    } else {
      this.setState({ msg: "City Does not Exists" });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="weather-body">
          <div className="heading">
            <div className="title">Whats the weather Like?</div>
          </div>
          <div className="weather-container">
            <input
              type="text"
              name="city"
              placeholder="Enter city name"
              onChange={this.handlecityname}
              value={this.state.inputval}
            ></input>
            <button onClick={this.fecthapi} className="submit">
              add
            </button>
            {this.state.weatherList.length === 0 && (
              <div className="no-search">No search was Found :(</div>
            )}
            {this.state.msg != "" && (
              <div className="fail">{this.state.msg}</div>
            )}

            {this.state.weatherList.map((e) => (
              <div className="report">
                <img className="image" src={e.icon} alt="imaged"></img>
                <div>
                  <b>{e.city}</b>
                  <br></br>
                  {e.temperature}°F<br></br>
                  {e.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;
