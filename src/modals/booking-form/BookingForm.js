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
  const [benDrink, updateBenDrink] = useState(false);
  const [jessDrink, updateJessDrink] = useState(false);
  const [thermorest, updateThermorest] = useState(false);
  const [jojoMassage, updateJojoMassage] = useState(false);
  const [cupOfJoy, updateCupOfJoy] = useState(false);
  const [randomDrink, updateRandomDrink] = useState(false);
  const [bootDryer, updateBootDryer] = useState(false);
  const [benMassage, updateBenMassage] = useState(false);

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
      console.log(`submitting benDrink: ${true && benDrink}`);
      console.log(`submitting jessDrink: ${true && jessDrink}`);
      console.log(`submitting thermorest: ${true && thermorest}`);
      console.log(`submitting jojo massage: ${true && jojoMassage}`);
      console.log(`submitting cup of joy: ${true && cupOfJoy}`);
      console.log(`submitting random drink: ${true && randomDrink}`);
      console.log(`submitting boot dryer: ${true && bootDryer}`);
      console.log(`submitting ben massage: ${true && benMassage}`);

      if (!email || !dates)
        throw new Error("Essential data is missing from your booking request");

      let formData = {
        email,
        displayName,
        userID: uid,
        timestamp: dates.startDate.valueOf(),
        startDate: dates.startDate.format("dddd, MMMM Do YYYY"),
        endDate: dates.endDate.format("dddd, MMMM Do YYYY"),
        requestedBed,
        reasoning,
        benDrink: true && benDrink,
        jessDrink: true && jessDrink,
        thermorest: true && thermorest,
        jojoMassage: true && jojoMassage,
        cupOfJoy: true && cupOfJoy,
        randomDrink: true && randomDrink,
        bootDryer: true && bootDryer,
        benMassage: true && benMassage,
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

          <div style={{ clear: "both", height: "50px" }} />
          <h1 style={{ width: "100%", clear: "both" }}>Extras: </h1>

          <BookingLabel>
            {`Mix Ben a Drink: `}
            <BookingTextInput
              type="checkbox"
              checked={benDrink}
              onChange={e => updateBenDrink(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Mix Jess a Drink: `}
            <BookingTextInput
              type="checkbox"
              checked={jessDrink}
              onChange={e => updateJessDrink(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Thermorest: `}
            <BookingTextInput
              type="checkbox"
              checked={thermorest}
              onChange={e => updateThermorest(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Jojo Massage (availability varies): `}
            <BookingTextInput
              type="checkbox"
              checked={jojoMassage}
              onChange={e => updateJojoMassage(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Cup of Joy (coffee): `}
            <BookingTextInput
              type="checkbox"
              checked={cupOfJoy}
              onChange={e => updateCupOfJoy(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Random Refrigerator Drink (avaliability varies): `}
            <BookingTextInput
              type="checkbox"
              checked={randomDrink}
              onChange={e => updateRandomDrink(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Boot Dryer Space: `}
            <BookingTextInput
              type="checkbox"
              checked={bootDryer}
              onChange={e => updateBootDryer(e.target.checked)}
            />
          </BookingLabel>

          <BookingLabel>
            {`Give Ben a Foot Massage: `}
            <BookingTextInput
              type="checkbox"
              checked={benMassage}
              onChange={e => updateBenMassage(e.target.checked)}
            />
          </BookingLabel>

          <div style={{ clear: "both", height: "50px" }} />
          <SubmitButton type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default BookingForm;
