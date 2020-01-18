import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
// import Favicon from "react-favicon";

const LoadableMainView = Loadable({
  loader: () => import("./user-view/index.js"),
  loading() {
    return <p>Site is loading. Hold on, asshole... </p>;
  }
});

const LoadableAdminPortal = Loadable({
  loader: () => import("./admin-portal/index.js"),
  loading() {
    return <p>Admin&#146;ll be ready in a sec, Ben!</p>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div id="main">
        <h3>The Dusty Couch</h3>
        <Router>
          <LoadableMainView path="/" />
          <LoadableAdminPortal path="/admin" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
