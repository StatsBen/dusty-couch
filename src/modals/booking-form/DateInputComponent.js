import React from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import fonts from "../../styles/fonts";
import colours from "../../styles/colours";

const DateInputContainer = styled.div`
  font-family: ${fonts.primary}, sans-serif;
  color: ${colours.paragraph};
  border: thin solid ${colours.paragraph};
  border-radius: 5px;
`;

class DateInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
  }

  handleChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
    this.props.updateDates({ startDate, endDate });
  };

  render() {
    return (
      <DateInputContainer>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="booking-start-date"
          endDate={this.state.endDate}
          endDateId="booking-end-date"
          onDatesChange={this.handleChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </DateInputContainer>
    );
  }
}

export default DateInputComponent;
