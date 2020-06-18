import React, { Component } from "react";
import Nav from "./nav";
import Home from "./home";
import Shop from "./shop";
import Shopwithid from "./shopid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Landing}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop:id" component={Shopwithid}></Route>
        </div>
      </Router>
    );
  }
}
const Landing = () => {
  return (
    <div>
      <h3>this is the landing page</h3>
    </div>
  );
};

export default App;
