import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { BaseInput, BaseLabel } from "../utils/reusable-components";

const BookingLabel = styled(BaseLabel)`
  height: 60px;
  margin: 15px;
  background: red;
`;

const BookingTextInput = styled(BaseInput)`
  color: mint;
`;

const BookingLongTextInput = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  background: #dddddd;
`;

const BookingForm = props => {
  const [arrivalDate, updateArrivalDate] = useState("");
  const [departureDate, updateDepartureDate] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const { uid, displayName } = props.user;
    console.log(`submitting arrival date: ${arrivalDate}`);
    console.log(`submitting departure date: ${departureDate}`);
    console.log(`submitting requested bed: ${requestedBed}`);
    console.log(`submitting reasoning: ${reasoning}`);
    console.log(`submitting for user: ${displayName}, who's UID is: ${uid}`);
  };

  const modalRoot = document.getElementById("modal-y-boi");
  const modalElement = document.createElement("div");

  modalRoot.appendChild(modalElement);

  return createPortal(
    <div>
      <h1>This will be a form</h1>
      <form>
        <BookingLabel>
          Arrival Date:
          <BookingTextInput
            type="text"
            value={arrivalDate}
            onChange={e => updateArrivalDate(e.target.value)}
          />
        </BookingLabel>
        <BookingLabel>
          Departure Date:
          <BookingTextInput
            type="text"
            value={departureDate}
            onChange={e => updateDepartureDate(e.target.value)}
          />
        </BookingLabel>
        <BookingLabel>
          Requested Bed:
          <BookingTextInput
            type="text"
            value={requestedBed}
            onChange={e => updateRequestedBed(e.target.value)}
          />
        </BookingLabel>
        <BookingLabel>
          Reasoning:
          <BookingLongTextInput
            rows="4"
            cols="70"
            value={reasoning}
            onChange={e => updateReasoning(e.target.value)}
          />
        </BookingLabel>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>,
    modalElement
  );
};

export default BookingForm;
