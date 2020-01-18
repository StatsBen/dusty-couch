import React from "react";
import { signInWithGoogle, signOut } from "../authentication";

class UserView extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    signInWithGoogle();
  };

  logout = () => {
    signOut();
  };

  render() {
    return (
      <div>
        <h4>Welcome to the main page for the Dusty Couch</h4>
      </div>
    );
  }
}

export default UserView;
