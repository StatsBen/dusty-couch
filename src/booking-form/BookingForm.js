import React, { useState } from "react";
import DateInputComponent from "./DateInputComponent";
import {
  BookingBackdrop,
  BookingContainer,
  BookingHeader,
  BookingLabel,
  BookingTextInput,
  BookingLongTextInput,
  BookingSnarkyComment,
  CloseButton,
  SubmitButton
} from "./BookingFormSubComponents";

const BookingForm = props => {
  const [dates, updateDates] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");
  const [additionalGuests, updateAdditionalGuests] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const { submit } = props;
    const { uid, displayName, email } = props.user;
    // TODO Parse the dates (they're just default JS right now...)
    console.log(`submitting dates: ${dates.startDate}-${dates.endDate}`);
    console.log(`submitting requested bed: ${requestedBed}`);
    console.log(`submitting reasoning: ${reasoning}`);
    console.log(`submitting for user: ${displayName}, who's UID is: ${uid}`);
    console.log(`submitting email: ${email}`);

    let formData = {
      email,
      displayName,
      uid,
      startDate: dates.startDate.format("dddd, MMMM Do YYYY"),
      endDate: dates.endDate.format("dddd, MMMM Do YYYY"),
      requestedBed,
      reasoning
    };

    submit(formData); // TODO, actually send up the JSON of the booking to the parent for submission!
  };

  return (
    <BookingBackdrop>
      <BookingContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <BookingHeader>
          Please submit the following form to request your stay
        </BookingHeader>
        {props.user && (
          <BookingSnarkyComment>
            Yes, I already know your name is{" "}
            <strong>{props.user.displayName}</strong> and your email is{" "}
            <strong>{props.user.email}</strong>.
          </BookingSnarkyComment>
        )}
        <form>
          <BookingLabel>
            {`Dates: `}
            <br />
            <DateInputComponent updateDates={updateDates} />
          </BookingLabel>
          <br />
          <BookingLabel>
            {`Requested Bed: `}
            <br />
            <BookingTextInput
              type="text"
              value={requestedBed}
              onChange={e => updateRequestedBed(e.target.value)}
            />
          </BookingLabel>
          <BookingLabel>
            {`Reasoning: `}
            <br />
            <BookingLongTextInput
              rows="4"
              cols="70"
              value={reasoning}
              onChange={e => updateReasoning(e.target.value)}
            />
          </BookingLabel>
          <BookingLabel>
            {`AdditionalGuests: `}
            <br />
            <BookingLongTextInput
              rows="4"
              cols="70"
              value={additionalGuests}
              onChange={e => updateAdditionalGuests(e.target.value)}
            />
          </BookingLabel>
          <SubmitButton type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </BookingContainer>
    </BookingBackdrop>
  );
};

export default BookingForm;
