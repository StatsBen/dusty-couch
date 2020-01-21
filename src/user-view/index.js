import React from "react";
import NavBar from "../nav-bar/NavBar";
import { auth, signInWithGoogle, signOut } from "../authentication";

class UserView extends React.Component {
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
    const navBarProps = {
      user: user,
      login: this.login,
      logout: this.logout
    };

    return (
      <div>
        <NavBar {...navBarProps} />
        <h4>Welcome to the main page for the Dusty Couch</h4>
      </div>
    );
  }
}

export default UserView;
