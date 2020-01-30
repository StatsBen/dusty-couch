import React from "react";
import styled from "styled-components";
import {
  CloseButton,
  ModalBackdrop,
  ModalContainer,
  ModalHeader
} from "../reusable-modal-components";
import Booking from "./Booking";

const BookingsContainer = styled.table`
  width: 100%;
  border-spacing: 5px;
  margin-bottom: 50px;
  background: #bbbbbb;
`;

const BTbody = styled.tbody`
  width: 100%;
`;

const headers = [
  "Your Name",
  "Email",
  "Start-Date",
  "End-Date",
  "Bed",
  "Reasoning",
  "Status"
];

const MyBookings = props => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <ModalHeader>Your Bookings</ModalHeader>
        <BookingsContainer>
          <BTbody>
            <tr>
              {headers.map((header, i) => (
                <th key={`th-${i + 1}`}>{header}</th>
              ))}
            </tr>
            {props.myBookings ? (
              props.myBookings.map((booking, i) => (
                <Booking key={`booking-${i + 1}`} booking={booking} />
              ))
            ) : (
              <tr>
                <td>{`You haven't requested any bookings yet`}</td>
              </tr>
            )}
          </BTbody>
        </BookingsContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default MyBookings;
