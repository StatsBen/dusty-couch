import React from "react";
import styled from "styled-components";
import colours from "../../styles/colours";

const TextSection = props => {
  const { rotation } = props;
  const TS = styled.div`
  position: relative;
  width: 100%;
	margin: 25px 0;
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
		transform: rotate(${rotation});
		border-radius: 3px;
  }
`;
  return <TS>{props.children}</TS>;
};

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

const BookingExtrasContainer = styled.div`
  width: 100%;
  margin: 50px 0;
`;

const BookingExtra = props => {
  const { colour } = props;
  const BEC = styled.div`
    float: left;
    padding: 25px;
    background: ${colours[colour]};
    @media (max-width: 800px) {
      width: calc(100% - 50px);
      margin: 10px 0;
    }
    @media (min-width: 800px) {
      width: calc(50% - 80px);
      margin: 15px;
    }
  `;
  return <BEC>{props.children}</BEC>;
};

const ExtraImg = props => {
  const { rotation } = props;
  const ImgCont = styled.div`
    width: 100%;
    & > img {
      display: block;
      width: 100%;
      transform: rotate(${rotation});
    }
  `;
  return <ImgCont>{props.children}</ImgCont>;
};

const Clearfix = styled.div`
  float: none;
  clear: both;
  width: 100%;
`;

export {
  BookingExtra,
  BookingExtrasContainer,
  Caption,
  Clearfix,
  ExtraImg,
  TextSection
};
