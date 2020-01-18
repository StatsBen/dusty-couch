import React from "react";
import ReactDOM from "react-dom";
// import { Router } from "@reach/router";
// import Loadable from "react-loadable";
// import Favicon from "react-favicon";

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h3>The Dusty Couch</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
