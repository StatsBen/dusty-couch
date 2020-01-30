import React from "react";
import styled from "styled-components";

const orderedDetails = [
  "displayName",
  "email",
  "startDate",
  "endDate",
  "requestedBed",
  "reasoning",
  "status"
];

const decisionColours = {
  DECISION_PENDING: "yellow",
  APPROVED: "green",
  DENIED: "red"
};

const BookingContainer = styled.tr`
  padding: 0;
  width: 100%;
`;

const BookingElement = styled.td`
  font-size: 0.9em;
  background: white;
  padding: 3px;
`;

const DecisionElement = props => {
  const { status } = props;
  return (
    <BookingElement style={{ background: decisionColours[status] }}>
      {props.children}
    </BookingElement>
  );
};

const Booking = props => {
  return (
    <BookingContainer>
      {orderedDetails.map((detail, i) =>
        detail === "status" ? (
          <DecisionElement
            status={props.booking[detail]}
            key={`booking-detail-${i + 1}`}
          >
            {props.booking[detail]}
          </DecisionElement>
        ) : (
          <BookingElement key={`booking-detail-${i + 1}`}>
            {props.booking[detail]}
          </BookingElement>
        )
      )}
    </BookingContainer>
  );
};

export default Booking;
