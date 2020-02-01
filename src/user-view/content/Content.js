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

const TextSection = styled.div`
  position: relative;
  width: 100%;
  clear: both;
	padding; 0;
  text-align: center;
  & > p {
    display: inline-block;
    max-width: 600px;
    text-align: left;
		margin: 0;
		padding: 5px;
		border: thin solid ${colours.tertiary};
		transform: rotate(3deg);
		border-radius: 3px;
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <GiantHeader>WELCOME TO:</GiantHeader>
      <BigCoochGraphic src={samGraphics["DUSTY_COUCH"]} />
      <Caption>
        Actually please don&apos;t call... That&apos;s annoying <br />
        (Art by Sam Bowerman)
      </Caption>
      <TextSection>
        <p>
          Ever wanted to live with your best friend for a couple nights? Come
          stay on THE DUSTY COUCH!!
        </p>
      </TextSection>
    </ContentContainer>
  );
};

export default Content;
