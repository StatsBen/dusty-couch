import React, { useState } from "react";

const BookingForm = () => {
  const [arrivalDate, updateArrivalDate] = useState("");
  const [departureDate, updateDepartureDate] = useState("");
  const [requestedBed, updateRequestedBed] = useState("");
  const [reasoning, updateReasoning] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`submitting arrival date: ${arrivalDate}`);
    console.log(`submitting departure date: ${departureDate}`);
    console.log(`submitting requested bed: ${requestedBed}`);
    console.log(`submitting reasoning: ${reasoning}`);
  };

  return (
    <div>
      <h1>This will be a form</h1>
      <form>
        <label>
          Arrival Date:
          <input
            type="text"
            value={arrivalDate}
            onChange={e => updateArrivalDate(e.target.value)}
          />
        </label>
        <label>
          Departure Date:
          <input
            type="text"
            value={departureDate}
            onChange={e => updateDepartureDate(e.target.value)}
          />
        </label>
        <label>
          Requested Bed:
          <input
            type="text"
            value={requestedBed}
            onChange={e => updateRequestedBed(e.target.value)}
          />
        </label>
        <label>
          Reasoning:
          <input
            type="textbox"
            value={reasoning}
            onChange={e => updateReasoning(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default BookingForm;
