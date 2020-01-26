import React from "react";
import Modal from "../Modal";
import NavBar from "../nav-bar/NavBar";
import BookingForm from "../booking-form/BookingForm";
import Footer from "../footer/Footer";
import ArtFrame from "./ArtFrame";
import CouchASCIIart from "../assets/couchASCIIart";
import { PromoSection, PromoHalf } from "./PromoComponents";
import { BaseButton } from "../utils/reusable-components";
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
        {showBookingForm && (
          <Modal>
            <BookingForm
              user={user}
              submit={this.submitBookingForm}
              close={this.hideBookingForm}
            />
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
