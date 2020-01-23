import React from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

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
      <DateRangePicker
        startDate={this.state.startDate}
        startDateId="booking-start-date"
        endDate={this.state.endDate}
        endDateId="booking-end-date"
        onDatesChange={this.handleChange}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => this.setState({ focusedInput })}
      />
    );
  }
}

export default DateInputComponent;
