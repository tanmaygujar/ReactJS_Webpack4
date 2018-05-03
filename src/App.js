import React, { Component } from "react";
import ReactDOM from "react-dom";
import Users from "./Users";

class App extends Component {
  //const App = () => {

  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          title: "La Liga",
          category: "Football",
          club: "Barcelona"
        },
        {
          id: 2,
          title: "La Liga",
          category: "Football",
          club: "Real Madrid"
        }
      ]
    }
  }

  handleClick(event) {
    alert("clicked")
    event.preventDefault()
    var el = event.target
    console.log(event.target.id)
  }

  render() {
    return (
      <div>
        <p>React here!</p>
        <input type="button" onClick={this.handleClick} id='club1' value="Check CLUB" />
        <Users test="Hello World" projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

