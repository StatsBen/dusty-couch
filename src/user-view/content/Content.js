import React from "react";
import styled from "styled-components";
import samGraphics from "../../assets/sam-graphics.js";
import colours from "../../styles/colours";

const ContentContainer = styled.div`
  height: calc(100% - 50px);
  padding: 50px 25px;
`;

const GiantHeader = styled.h1`
  position: relative;
  margin-bottom: -0.3em;
  font-size: 3em;
  z-index: 10;
`;

const BigCoochGraphic = styled.img`
  position: relative;
  width: 90%;
  margin: 0 5%;
  z-index: 1;
  transform: rotate(-5deg);
  margin-bottom: -30px;
`;

const Caption = styled.div`
  max-width: 50%;
  float: right;
  clear: both;
  margin: 20px 0;
  padding: 20px;
  background: ${colours.secondary};
  text-align: right;
  font-size: 0.9em;
`;

const Content = () => {
  return (
    <ContentContainer>
      <GiantHeader>WELCOME TO:</GiantHeader>
      <BigCoochGraphic src={samGraphics["DUSTY_COUCH"]} />
      <Caption>
        Actually please don't call... That's annoying <br />
        (Art by Sam Bowerman)
      </Caption>
    </ContentContainer>
  );
};

export default Content;
