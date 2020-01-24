import React from "react";
import IndividualBooking from "./IndividualBooking";
import styled from "styled-components";
import colours from "../styles/colours";

const Tab = styled.div`
  float: left;
  padding: 5px;
  margin: 5px 5px 0 0;
  border: thin solid black;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: ${colours.paragraph};
  color: ${colours.background};
`;

const ActiveTab = styled(Tab)`
  background: ${colours.button};
`;

const BookingsContainer = styled.div`
  width: 100%;
  background: ${colours.paragraph};
  margin-top: -2px;
  border: thin solid black;
`;

class BookingsControls extends React.Component {
  constructor(props) {
    super(props);
    const { bookings } = props;
    const tabs = ["All", "Coming Soon", "Past Bookings", "Pending Approval"];
    this.state = { bookings, tabs, activeTab: tabs[0] };
  }

  selectThisTab = event => {
    let selectedTabName = event.target.getAttribute("name");
    this.setState({ activeTab: selectedTabName });
  };

  render() {
    const { bookings, tabs, activeTab } = this.state;

    return (
      <div>
        {tabs.map((tabName, i) =>
          tabName === activeTab ? (
            <ActiveTab
              key={`tab-${i}`}
              name={tabName}
              onClick={this.selectThisTab}
            >
              {tabName}
            </ActiveTab>
          ) : (
            <Tab key={`tab-${i}`} name={tabName} onClick={this.selectThisTab}>
              {tabName}
            </Tab>
          )
        )}
        <BookingsContainer>
          Testy testin the controls panel
          {bookings &&
            bookings.map(booking => {
              <IndividualBooking data={booking} />;
            })}
        </BookingsContainer>
      </div>
    );
  }
}

export default BookingsControls;
