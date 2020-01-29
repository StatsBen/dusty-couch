import React from "react";
import Modal from "../Modal";
import NavBar from "../nav-bar/NavBar";
import BookingForm from "../modals/booking-form/BookingForm";
import Footer from "../footer/Footer";
import ArtFrame from "./ArtFrame";
import CouchASCIIart from "../assets/couchASCIIart";
import { PromoSection, PromoHalf, SamGraphic } from "./PromoComponents";
import { BaseButton } from "../utils/reusable-components";
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
    this.unsubscribeFromFirestore = await firestore
      .collection("bookings")
      .where("uid", "==", this.state.user.uid)
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        const bookings = snapshot.docs.map(doc => {
          doc.data();
        });
        this.setState({ bookings });
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

        <PromoSection>
          <PromoHalf>
            <BaseButton onClick={this.showBookingForm}>Book Now!</BaseButton>
          </PromoHalf>
          <PromoHalf>
            <ArtFrame caption="All Art by Sam Bowerman">
              <SamGraphic filename={"dusty-couch.jpg"} />
            </ArtFrame>
          </PromoHalf>
        </PromoSection>
        <Footer />
      </div>
    );
  }
}

export default UserView;
