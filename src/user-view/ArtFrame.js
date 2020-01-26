import React from "react";
import styled from "styled-components";
import colours from "../styles/colours";

const Frame = styled.div`
  position: relative;
  padding: 30px;
  width: calc(100% - 60px);
  height: 100%;
`;

const Caption = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 5px 10px;
  width: auto;
  font-size: 0.8em;
  background: ${colours.secondary};
  z-index: 10;
  opacity: 80%;
  user-select: none;
`;

const ArtFrame = props => {
  const { caption } = props;

  return (
    <Frame>
      {props.children}
      <Caption>{caption}</Caption>
    </Frame>
  );
};

export default ArtFrame;
