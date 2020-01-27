import styled from "styled-components";
import { BaseInput, BaseLabel } from "../../utils/reusable-components";
import colours from "../../styles/colours";

export const BookingSnarkyComment = styled.p`
  display: block;
  position: relative;
  float: left;
  clear: both;
  padding: 20px;
  color: ${colours.paragraph};
`;

export const BookingLabel = styled(BaseLabel)`
  display: block;
  position: relative;
  float: left;
  clear: both;
  margin: 10px;
  font-weight: 700;
  height: auto;
  color: ${colours.paragraph};
  white-space: nowrap;
`;

export const BookingTextInput = styled(BaseInput)`
  background: white;
`;

export const BookingLongTextInput = styled.textarea`
  padding: 5px;
  border-radius: 5px;
  border: thin solid #888888;
  background: white;
`;

export const SubmitButton = styled.input`
  display: block;
  position: relative;
  float: right;
  clear: both;
  margin: 15px;
  padding: 8px;
  font-size: 1.2em;
  font-weight: 700;
  color: ${colours.buttonText};
  background: ${colours.button};
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #888888;
  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 8px #444444;
  }
  &:hover div {
    cursor: pointer;
    box-shadow: 3px 3px 8px #444444;
  }
  &:focus {
    border: none;
  }
`;
