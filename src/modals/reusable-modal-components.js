import styled from "styled-components";
import colours from "../styles/colours";
import fonts from "../styles/fonts";

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  overflow-y: scroll;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: calc(90% - 40px);
  left: 5%;
  top: 100px;
  margin-bottom: 100px;
  padding: 20px;
  font-family: ${fonts.primary}, sans-serif;
  color: ${colours.paragraph};
  background: ${colours.background};
  z-index: 1000;
  border-radius: 10px;
`;

export const ModalHeader = styled.h1`
  display: block;
  position: relative;
  float: left;
  clear: both;
  padding: 20px;
  color: ${colours.headline};
`;

export const CloseButton = styled.div`
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 20px;
  font-size: 1.5em;
  color: ${colours.buttonText};
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: 900;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`;
