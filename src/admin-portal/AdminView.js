import React from "react";
import NavBar from "../nav-bar/NavBar";
import BookingsPane from "./BookingsPane";
import { auth, firestore, signInWithGoogle, signOut } from "../authentication";

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentBooking: null, bookings: null, user: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ user })
    );

    this.unsubscribeFromFirestore = await firestore
      .collection("bookings")
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        const bookings = snapshot.docs.map(doc => {
          doc.data();
        });
        this.setState({ bookings });
      });
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
        <h1>Admin</h1>
        <BookingsPane bookings={this.state.bookings} />
      </div>
    );
  }
}

export default AdminView;
