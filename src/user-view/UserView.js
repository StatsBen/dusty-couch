import React from "react";
import Modal from "../Modal";
import NavBar from "../nav-bar/NavBar";
import BookingForm from "../booking-form/BookingForm";
import { auth, signInWithGoogle, signOut } from "../authentication";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, showBookingForm: false };
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

  showBookingForm = () => {
    this.setState({ showBookingForm: true });
  };

  hideBookingForm = () => {
    this.setState({ showBookingForm: false });
  };

  submitBookingForm = () => {
    // TODO
  };

  render() {
    const { user, showBookingForm } = this.state;
    const navBarProps = {
      user: user,
      login: this.login,
      logout: this.logout
    };

    return (
      <div>
        <NavBar {...navBarProps} />
        <h1>Welcome to the main page for the Dusty Couch</h1>
        {showBookingForm && (
          <Modal>
            <BookingForm user={user} submit={this.submitBookingForm} />
          </Modal>
        )}
      </div>
    );
  }
}

export default UserView;
