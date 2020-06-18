import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {
    userinfo: [],
    randomuser: "saiteja",
    friends: "",
    postsCount: "",
    username: "yashasvi",
    friendstatus: "",
    allposts: [],
  };
  componentWillMount = () => {
    this.getUserprofile();
    this.checkFriend();
  };

  getUserprofile = () => {
    var obj = new XMLHttpRequest();
    obj.open(
      "GET",
      "http://127.0.0.1:8000/instalikes/getuserprofile" + this.state.randomuser,
      true
    );
    obj.onreadystatechange = () => {
      if (obj.readyState == 4 && obj.status == 200) {
        var res = JSON.parse(obj.responseText);
        var info = [];
        info.push(res["userdata"]);
        this.setState({ userinfo: info });
        this.setState({ friends: res["num_of_friends"] });
        this.setState({ postsCount: res["num_of_posts"] });
        this.setState({ allposts: res["post"] });
      }
    };
    obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    obj.send();
  };

  checkFriend = () => {
    var obj = new XMLHttpRequest();
    var params =
      "username=" +
      this.state.username +
      "&randomuser=" +
      this.state.randomuser;
    obj.open("POST", "http://127.0.0.1:8000/instalikes/is_user", true);
    obj.onreadystatechange = () => {
      if (obj.readyState == 4 && obj.status == 200) {
        var res = JSON.parse(obj.responseText);
        this.setState({ friendstatus: res["friend"] });
      }
    };
    obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    obj.setRequestHeader("X-CSRFToken", this.csrfcookie());
    obj.send(params);
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

  mouse = (likes) => {
    alert(likes);
  };

  render() {
    var likesHover = {};
    return (
      <React.Fragment>
        {this.state.userinfo.map((e) => (
          <div className="container">
            <div className="image-user">
              <div className="image">
                <img src={e.image}></img>
              </div>
              <div className="usersinfo">
                <div className="sub">
                  <div className="username">saiteja</div>
                  <div className="status">{this.state.friendstatus}</div>
                </div>
                <div className="user-and-post">
                  <div className="numofusers">
                    <span>{this.state.friends}</span>
                    Friends
                  </div>
                  <div className="numofposts">
                    <span>{this.state.postsCount}</span> Posts
                  </div>
                </div>
              </div>
            </div>
            <div className="randomusername">{e.name}</div>
            <div className="desc">{e.desc}</div>
          </div>
        ))}
        {this.state.friendstatus === "friends" && (
          <div className="user-post-images">
            {this.state.allposts.map((e) => (
              <div
                className="user-image"
                onMouseEnter={() => this.mouse(e.likes)}
              >
                <img src={e.image}></img>
                <div></div>
                <div></div>
              </div>
            ))}
          </div>
        )}
        {this.state.friendstatus === "Add friend" && (
          <div className="must-be-friend">
            You must be friend of{" "}
            <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {this.state.randomuser}
            </span>{" "}
            to see their posts
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Profile;
