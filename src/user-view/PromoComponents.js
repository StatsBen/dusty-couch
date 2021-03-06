import React from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import samGraphics from "../assets/sam-graphics.js";

const styleBarHeight = "3px";

const PromoContainer = styled.div`
  width: calc(100% - 50px);
  padding: 25px;
  height: 400px;
`;

const PromoHalf = styled.div`
  float: left;
  width: calc(50% - 50px);
  height: auto;
  padding: 25px;
  text-align: center;
`;

const StyleChonk = styled.div`
  float: left;
  width: 33.3%;
  height: ${styleBarHeight};
  margin-top: 50px;
`;

const PrimChonk = styled(StyleChonk)`
  background: ${colours.highlight};
`;

const SecoChonk = styled(StyleChonk)`
  background: ${colours.secondary};
`;

const TertChonk = styled(StyleChonk)`
  background: ${colours.tertiary};
`;

const Separator = styled.div`
  float: left;
  clear: both;
  width: 100%;
`;

const FittedImage = styled.img`
  display: block;
  position: relative;
  float: none;
  width: 100%;
`;

const PromoSection = props => {
  return (
    <PromoContainer>
      {props.children}

      <Separator />
      <PrimChonk />
      <SecoChonk />
      <TertChonk />
    </PromoContainer>
  );
};

const SamGraphic = props => {
  const image = samGraphics[props.which];
  return <FittedImage src={image} alt="Book Now!" />;
};

export { PromoSection, PromoHalf, SamGraphic };
