import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Loadable from "@loadable/component";
import AdminView from "./admin-portal/AdminView";
import CrazyPusheens from "./pusheens/pusheens";
import styled from "styled-components";
import fonts from "./styles/fonts";
import colours from "./styles/colours";
require("./styles/globals.css");
// import Favicon from "react-favicon";

/* Add the background colour to the document */
document.getElementsByTagName("body")[0].style.background = colours.background;

const LoadableMainView = Loadable(() => import("./user-view/UserView.js"), {
  fallback: <p>Site is loading. Hold on, asshole... </p>
});

const LoadableAdminPortal = Loadable(
  () => import("./admin-portal/AdminView.js"),
  {
    fallback: <p>Admin&#146;ll be ready in a sec, Ben!</p>
  }
);

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
        <CrazyPusheens />
        <Router>
          <LoadableMainView path="/" />
          <LoadableAdminPortal path="/admin" />
        </Router>
      </GlobalStyles>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
