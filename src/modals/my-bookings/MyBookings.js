import React from "react";
import styled from "styled-components";
import {
  CloseButton,
  ModalBackdrop,
  ModalContainer,
  ModalHeader
} from "../reusable-modal-components";

const BookingsContainer = styled.div`
  width: calc(100% - 100px);
  clear: both;
  padding: 50px;
`;

const MyBookings = props => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <ModalHeader>Your Bookings</ModalHeader>
        <BookingsContainer>
          {props.myBookings
            ? props.myBookings.map(booking => booking)
            : `You haven't requested any bookings yet`}
        </BookingsContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default MyBookings;
