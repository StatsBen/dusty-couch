import React from "react";
import { signInWithGoogle, signOut } from "../authentication";

class AdminView extends React.Component {
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
        <h4>Welcome to the admin portal for the dusty couch</h4>
      </div>
    );
  }
}

export default AdminView;
