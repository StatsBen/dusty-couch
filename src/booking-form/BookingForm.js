import React, { useState } from "react";
import {
  BookingBackdrop,
  BookingContainer,
  BookingHeader,
  BookingLabel,
  BookingTextInput,
  BookingLongTextInput,
  SubmitButton
} from "./BookingFormSubComponents";

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
        <BookingHeader>
          Please submit the following form to request your stay
        </BookingHeader>
        <form>
          <BookingLabel>
            {`Arrival Date: `}
            <BookingTextInput
              type="text"
              value={arrivalDate}
              onChange={e => updateArrivalDate(e.target.value)}
            />
          </BookingLabel>
          <BookingLabel>
            {`Departure Date: `}
            <BookingTextInput
              type="text"
              value={departureDate}
              onChange={e => updateDepartureDate(e.target.value)}
            />
          </BookingLabel>
          <BookingLabel>
            {`Requested Bed: `}
            <BookingTextInput
              type="text"
              value={requestedBed}
              onChange={e => updateRequestedBed(e.target.value)}
            />
          </BookingLabel>
          <BookingLabel>
            {`Reasoning: `}
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
