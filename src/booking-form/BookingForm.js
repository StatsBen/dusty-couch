import React, { useState } from "react";
import DateInputComponent from "./DateInputComponent";
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
  const [dates, updateDates] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const { uid, displayName } = props.user;
    const { submit } = props;
    // TODO Parse the dates (they're just default JS right now...)
    console.log(`submitting dates: ${dates.startDate}-${dates.endDate}`);
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
            {`Dates: `}
            <br />
            <DateInputComponent updateDates={updateDates} />
          </BookingLabel>
          <br />
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
