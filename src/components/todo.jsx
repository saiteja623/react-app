import React, { Component } from "react";
import "./css/todo.css";

class Todo extends Component {
  state = {
    item: "",
    items: [],
    inputval: "",
    activeitem: {},
    errormsg: "",
    itemedited: "",
  };

  changeValue = (event) => {
    var cont = event.target.value;
    this.setState({ inputval: cont });
    this.setState({ item: cont });
    this.setState({
      activeitem: cont,
    });
  };
  submitValue = () => {
    if (this.state.inputval == "") {
      this.setState({ errormsg: "input field cannot be empty" });
      setTimeout(this.hideError, 3000);
    } else {
      if (this.state.itemedited != "") {
        var items = this.state.items;
        items.splice(
          items.indexOf(this.state.itemedited),
          1,
          this.state.inputval
        );
        this.setState({ items });
        this.setState({ itemedited: "" });
        this.setState({ inputval: "" });
      } else {
        //set the error message to null
        this.setState({ errormsg: "" });
        //add input item to the items list
        var items = this.state.items;
        var l = items.filter((e) => e === this.state.inputval);
        if (l.length > 0) {
          this.setState({ errormsg: "Oops! A item is already added,sorry" });
          setTimeout(this.hideError, 3000);
        } else {
          items.push(this.state.inputval);
          this.setState({ items });
        }
        this.setState({ inputval: "" });
      }
    }
  };

  //hide the error disappeared after 3sec
  hideError = () => {
    this.setState({ errormsg: "" });
  };
  keydown = (e) => {
    if (e.keyCode == 13) {
      {
        this.submitValue();
      }
    }
  };

  delete = (e) => {
    this.setState({ activeitem: e.each });
    var items = [...this.state.items];
    var items = items.filter((f) => f != e.each);
    this.setState({ items: items });
  };

  Edit = (e) => {
    this.setState({ inputval: e.each });
    this.setState({ activeitem: e.each });
    this.setState({ itemedited: e.each });
  };
  deleteAll = () => {
    console.log(this.state.items);
    var items = [];
    this.setState({ items: items });
  };

  render() {
    return (
      <React.Fragment>
        <div className="todo-backgrounds">
          <div className="todo-background1"></div>
          <div className="todo-background2"></div>
        </div>
        <div className="total">
          <div className="todo-heading">This is a todo app using Reactjs</div>
          <div className="container1">
            <input
              type="text"
              placeholder="All your work goes here"
              value={this.state.inputval}
              onKeyDown={this.keydown}
              onChange={this.changeValue}
            ></input>
            <input
              type="submit"
              value="submit"
              onClick={this.submitValue}
            ></input>
            {this.state.errormsg != "" && (
              <div className="error">{this.state.errormsg}</div>
            )}
            <div className="workslist">
              <div className="add-inf">
                {this.state.items.length == 0 && "Please add Your Work!"}
              </div>
              <ul>
                {this.state.items.map((each) => {
                  return (
                    <div>
                      <li key={each}>
                        {each}
                        <div className="buttons">
                          <input
                            className="delete"
                            onClick={(e) => this.Edit({ each })}
                            type="submit"
                            value="Edit"
                          ></input>
                          <input
                            onClick={() => this.delete({ each })}
                            type="submit"
                            value="Delete"
                          ></input>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="footer">
              Wanna Delete all?
              <input
                onClick={this.deleteAll}
                type="submit"
                value="Delete All"
                className="delete-all"
              ></input>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Todo;
