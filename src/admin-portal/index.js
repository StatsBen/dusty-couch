import React from "react";
import NavBar from "../nav-bar/NavBar";
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
    const navBarProps = {
      user,
      login: this.login,
      logout: this.logout
    };

    return (
      <div>
        <h4>Welcome to the admin portal for the dusty couch</h4>

        <NavBar props={navBarProps} />
      </div>
    );
  }
}

export default AdminView;
