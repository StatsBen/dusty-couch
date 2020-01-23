import styled from "styled-components";
import colours from "../../styles/colours";

export const BaseButton = styled.button`
  padding: 8px;
  font-size: 0.8em;
  font-weight: 700;
  color: ${colours.buttonText};
  background: ${colours.button};
  border: none;
  border-radius: 5px;
  &:hover {
    border: thin solid white;
    cursor: pointer;
  }
  &:focus {
    border: none;
  }
`;

export const BaseInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  background: #dddddd;
`;

export const BaseLabel = styled.label`
  padding: 5px;
  color: #ddddff;
`;
