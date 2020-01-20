import React from "react";
import { AuthButton } from "../utils/reusable-components";
import { auth, signInWithGoogle, signOut } from "../authentication";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentEntry: null, entries: null, user: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ user })
    );
  };

  login = () => {
    signInWithGoogle();
  };

  logout = () => {
    signOut();
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <h4>Welcome to the admin portal for the dusty couch</h4>

        {user ? (
          <AuthButton onClick={this.logout}>Log Out</AuthButton>
        ) : (
          <AuthButton onClick={this.login}>Log In</AuthButton>
        )}
      </div>
    );
  }
}

export default AdminView;
