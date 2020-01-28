import React, { useState } from "react";
import DateInputComponent from "./DateInputComponent";
import {
  BookingLabel,
  BookingTextInput,
  BookingLongTextInput,
  BookingSnarkyComment,
  SubmitButton
} from "./BookingFormSubComponents";

import {
  CloseButton,
  ModalBackdrop,
  ModalContainer,
  ModalHeader
} from "../reusable-modal-components";

const BookingForm = props => {
  const [dates, updateDates] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");
  const [additionalGuests, updateAdditionalGuests] = useState("");

  const handleSubmit = event => {
    const { submit } = props;
    const { uid, displayName, email } = props.user;

    try {
      event.preventDefault();
      console.log(`submitting dates: ${dates.startDate}-${dates.endDate}`);
      console.log(`submitting requested bed: ${requestedBed}`);
      console.log(`submitting reasoning: ${reasoning}`);
      console.log(`submitting for user: ${displayName}, who's UID is: ${uid}`);
      console.log(`submitting email: ${email}`);

      if (!email || !dates)
        throw new Error("Essential data is missing from your booking request");

      let formData = {
        email,
        displayName,
        uid,
        startDate: dates.startDate.format("dddd, MMMM Do YYYY"),
        endDate: dates.endDate.format("dddd, MMMM Do YYYY"),
        requestedBed,
        reasoning,
        status: "DECISION_PENDING"
      };

      submit(formData);
    } catch (e) {
      alert(
        `Uh oh, looks like your request is missing some data. Please fix your request and then try again.`
      );
      console.error("Couldn't parse the booking request");
      console.error(e);
      submit(null);
    }
  };

  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <ModalHeader>
          Please submit the following form to request your stay
        </ModalHeader>
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
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default BookingForm;
