import React from "react";
import Modal from "../Modal";
import NavBar from "../nav-bar/NavBar";
import BookingForm from "../modals/booking-form/BookingForm";
import Footer from "../footer/Footer";
import Content from "./content/Content";
// import { BaseButton } from "../utils/reusable-components";
import SuccessMessage from "../modals/SuccessMessage";
import ErrorMessage from "../modals/ErrorMessage";
import MyBookings from "../modals/my-bookings/MyBookings";
import { auth, firestore, signInWithGoogle, signOut } from "../authentication";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      myBookings: null,
      showBookingForm: false,
      showMyBookings: false,
      showSuccessMessage: false
    };
  }

  unsubscribeFromAuth = null;

  /* Authenticate, and if it works fetch the bookings */
  componentDidMount = async () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ user }, this.getMyBookings)
    );
  };

  getMyBookings = async () => {
    let bookingsRef = firestore.collection("bookings");

    this.unsubscribeFromFirestore = bookingsRef
      .where("userID", "==", this.state.user.uid)
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        let bookings = [];
        snapshot.docs.map(doc => {
          bookings.push(doc.data());
        });

        this.setState({ myBookings: bookings });
      });
  };

  login = async () => {
    await signInWithGoogle();
    this.getMyBookings();
  };

  logout = () => {
    signOut();
  };

  showBookingForm = async () => {
    if (this.state.user) {
      this.setState({ showBookingForm: true });
    } else {
      await this.login();
    }
  };

  hideBookingForm = () => {
    this.setState({ showBookingForm: false });
  };

  submitBookingForm = async formData => {
    try {
      if (!formData)
        throw new Error("Unable to parse the booking request form");

      await firestore.collection("bookings").add(formData);

      this.hideBookingForm();
      this.showSuccessMessage();
      setTimeout(() => {
        this.hideSuccessMessage();
      }, 3000);
    } catch (e) {
      console.error(e);
      this.hideBookingForm();
      this.showErrorModal();
      setTimeout(() => {
        this.hideErrorModal();
      }, 3000);
    }
  };

  showSuccessMessage = () => {
    this.setState({ showSuccessMessage: true });
  };

  hideSuccessMessage = () => {
    this.setState({ showSuccessMessage: false });
  };

  showErrorMessage = () => {
    this.setState({ showErrorMessage: true });
  };

  hideErrorMessage = () => {
    this.setState({ showErrorMessage: false });
  };

  showMyBookings = () => {
    this.setState({ showMyBookings: true });
  };

  hideMyBookings = () => {
    this.setState({ showMyBookings: false });
  };

  render() {
    const {
      user,
      myBookings,
      showBookingForm,
      showMyBookings,
      showSuccessMessage,
      showErrorMessage
    } = this.state;

    const navBarProps = {
      user: user,
      login: this.login,
      logout: this.logout,
      ready: myBookings && true, // Just casting myBookings to a boolean
      showMyBookings: this.showMyBookings
    };

    return (
      <div>
        <NavBar {...navBarProps} />

        {showBookingForm && (
          <Modal>
            <BookingForm
              user={user}
              submit={this.submitBookingForm}
              close={this.hideBookingForm}
            />
          </Modal>
        )}

        {showMyBookings && (
          <Modal>
            <MyBookings close={this.hideMyBookings} myBookings={myBookings} />
          </Modal>
        )}

        {showSuccessMessage && (
          <Modal>
            <SuccessMessage close={this.hideSuccessMessage} />
          </Modal>
        )}

        {showErrorMessage && (
          <Modal>
            <ErrorMessage close={this.hideErrorMessage} />
          </Modal>
        )}

        <Content showForm={this.showBookingForm} />

        <Footer />
      </div>
    );
  }
}

export default UserView;
