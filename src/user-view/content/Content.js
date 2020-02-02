import React from "react";
import styled from "styled-components";
import { BaseButton } from "../../utils/reusable-components";
import samGraphics from "../../assets/sam-graphics.js";
import {
  BookingExtra,
  BookingExtrasContainer,
  Caption,
  Clearfix,
  ExtraImg,
  TextSection
} from "./ContentReusables";

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

const BigBookNowButt = styled(BaseButton)`
  margin: 50px 0;
  font-size: 2em;
`;

const Content = props => {
  const { showForm } = props;
  return (
    <ContentContainer>
      <GiantHeader>WELCOME TO:</GiantHeader>
      <BigCoochGraphic src={samGraphics["DUSTY_COUCH"]} />
      <Caption>
        Actually please don&apos;t call... That&apos;s annoying <br />
        (Art by Sam Bowerman)
      </Caption>
      <TextSection rotation={"3deg"}>
        <p>
          Ever wanted to live with your best friend for a couple nights? Come
          stay on THE DUSTY COUCH!!
        </p>
      </TextSection>

      <TextSection style={{ margin: "50px 0" }}>
        <BigBookNowButt onClick={showForm}>Book Now!</BigBookNowButt>
      </TextSection>

      <GiantHeader>Extras:</GiantHeader>
      <TextSection rotation={"-3deg"}>
        <p>Reserve at checkout!</p>
      </TextSection>
      <BookingExtrasContainer>
        <BookingExtra colour={"highlight"}>
          <ExtraImg rotation={"3deg"}>
            <img src={samGraphics.CUT_AN_ONION} alt="Cut an Onion" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"button"}>
          <ExtraImg rotation={"-5deg"}>
            <img src={samGraphics.BOOT_DRYER} alt="Boot Dryer" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"tertiary"}>
          <ExtraImg rotation={"-2deg"}>
            <img src={samGraphics.JESS_DRINK} alt="Mix Jess a Drink" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"secondary"}>
          <ExtraImg rotation={"5deg"}>
            <img src={samGraphics.THERMOREST} alt="Squeaky Thermorest" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"secondary"}>
          <ExtraImg rotation={"5deg"}>
            <img src={samGraphics.CUP_OF_BEN} alt="Cup of Ben" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"highlight"}>
          <ExtraImg rotation={"-4deg"}>
            <img src={samGraphics.RANDOM_DRINK} alt="Random Drink" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"button"}>
          <ExtraImg rotation={"-3deg"}>
            <img src={samGraphics.JOJO_MASSAGE} alt="Jojo Massage" />
          </ExtraImg>
        </BookingExtra>

        <BookingExtra colour={"tertiary"}>
          <ExtraImg rotation={"2deg"}>
            <img
              src={samGraphics.CHEESE_DREAM}
              alt="Cheese Induced Fever Dream"
            />
          </ExtraImg>
        </BookingExtra>

        <Clearfix />
      </BookingExtrasContainer>

      <TextSection style={{ margin: "50px 0" }}>
        <BigBookNowButt onClick={showForm}>Book Now!</BigBookNowButt>
      </TextSection>
    </ContentContainer>
  );
};

export default Content;
