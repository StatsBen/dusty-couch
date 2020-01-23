import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import styled from "styled-components";
import fonts from "./styles/fonts";
import colours from "./styles/colours";
require("./styles/globals.css");
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

const GlobalStyles = styled.div`
  font-family: ${fonts.primary}, sans-serif;
  background: ${colours.background};
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <GlobalStyles id="main">
        <h3>The Dusty Couch</h3>
        <Router>
          <LoadableMainView path="/" />
          <LoadableAdminPortal path="/admin" />
        </Router>
      </GlobalStyles>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
