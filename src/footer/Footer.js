import React from "react";
import styled from "styled-components";
import colours from "../styles/colours";
import packageJSON from "../../package.json";

const FooterContainer = styled.div`
  width: 90%;
  min-height: 50px;
  margin-top: 100px;
  padding: 20px 5% 20px 5%;
  background: ${colours.black};
  color: white;
  font-size: 0.9em;
`;

const LeftSideText = styled.div`
  float: left;
  width: calc(100% - 251px);
  max-width: 65%;
`;

const RightSideText = styled.div`
  float: right;
  width: 40%;
  text-align: right;
  width: 250px;
`;

const Clearfix = styled.div`
  float: none;
  clear: both;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSideText className={"unnecessary"}>
        This website is totally a joke for my friends. If you{`'`}ve stumbled
        upon it by accident, it{`'`}s absolutely <i>not</i> a rental (vacation,
        long-term, or otherwise). Now please leave.
      </LeftSideText>
      <RightSideText>
        Website by Ben Clark &copy; 2020
        <br />
        Version {packageJSON.version}
      </RightSideText>
      <Clearfix />
    </FooterContainer>
  );
};

export default Footer;
