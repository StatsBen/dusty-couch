import React from "react";
import styled from "styled-components";
import BookingsControls from "./BookingsControls";

const ContentContainer = styled.div`
  width: 90%;
  margin: 50px 5%;
  background: red;
`;

const BookingsPane = props => {
  const { bookings } = props;
  return (
    <ContentContainer>
      <BookingsControls bookings={bookings} />
      Testy testy test
    </ContentContainer>
  );
};

export default BookingsPane;
