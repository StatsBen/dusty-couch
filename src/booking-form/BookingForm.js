import React, { useState } from "react";
import styled from "styled-components";
import { BaseInput, BaseLabel } from "../utils/reusable-components";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

const BookingBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const BookingContainer = styled.div`
  position: absolute;
  width: calc(90% - 40px);
  left: 5%;
  top: 100px;
  padding: 20px;
  font-family: ${fonts.primary}, sans-serif;
  color: ${colours.paragraph};
  background: ${colours.background};
  z-index: 1000;
  border-radius: 10px;
`;

const BookingHeader = styled.h1`
  color: ${colours.headline};
`;

const BookingLabel = styled(BaseLabel)`
  height: 60px;
  margin: 15px;
  background: red;
`;

const BookingTextInput = styled(BaseInput)``;

const BookingLongTextInput = styled.textarea`
  padding: 5px;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  padding: 8px;
  font-size: 0.8em;
  font-weight: 700;
  color: ${colours.buttonText};
  background: ${colours.button};
  border: none;
  border-radius: 5px;
  &:hover {
    border: thin solid white;
    cursor: pointer;
  }
  &:focus {
    border: none;
  }
`;

const BookingForm = props => {
  const [arrivalDate, updateArrivalDate] = useState("");
  const [departureDate, updateDepartureDate] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const { uid, displayName } = props.user;
    const { submit } = props;
    console.log(`submitting arrival date: ${arrivalDate}`);
    console.log(`submitting departure date: ${departureDate}`);
    console.log(`submitting requested bed: ${requestedBed}`);
    console.log(`submitting reasoning: ${reasoning}`);
    console.log(`submitting for user: ${displayName}, who's UID is: ${uid}`);
    submit(); // TODO, actually send up the JSON of the booking to the parent for submission!
  };

  return (
    <BookingBackdrop>
      <BookingContainer>
        <BookingHeader>This will be a form</BookingHeader>
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
          <SubmitButton type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </BookingContainer>
    </BookingBackdrop>
  );
};

export default BookingForm;
