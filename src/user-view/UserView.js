import React from "react";
import Modal from "../Modal";
import NavBar from "../nav-bar/NavBar";
import BookingForm from "../booking-form/BookingForm";
import Footer from "../footer/Footer";
import ArtFrame from "./ArtFrame";
import CouchASCIIart from "../assets/couchASCIIart";
import { PromoSection, PromoHalf } from "./PromoComponents";
import { BaseButton } from "../utils/reusable-components";
import SuccessMessage from "../modals/SuccessMessage";
import ErrorMessage from "../modals/ErrorMessage";
import { auth, firestore, signInWithGoogle, signOut } from "../authentication";

class UserView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      showBookingForm: false,
      showSuccessMessage: false
    };
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
    await firestore
      .collection("bookings")
      .doc("newID")
      .set(formData);

    this.hideBookingForm();
    this.showSuccessMessage();
    setTimeout(() => {
      this.hideSuccessMessage();
    }, 3000);
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

  render() {
    const {
      user,
      showBookingForm,
      showSuccessMessage,
      showErrorMessage
    } = this.state;

    const navBarProps = {
      user: user,
      login: this.login,
      logout: this.logout
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

        <PromoSection>
          <PromoHalf>
            <h1>Welcome to the main page for the Dusty Couch</h1>
            <br />
            <BaseButton onClick={this.showBookingForm}>Book Now!</BaseButton>
          </PromoHalf>
          <PromoHalf>
            <ArtFrame caption={`ASCII Couch by Joan G. Stark`}>
              <CouchASCIIart />
            </ArtFrame>
          </PromoHalf>
        </PromoSection>
        <Footer />
      </div>
    );
  }
}

export default UserView;
