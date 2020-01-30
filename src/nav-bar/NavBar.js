import React from "react";
import { BaseButton } from "../utils/reusable-components";
import styled from "styled-components";
import colours from "../styles/colours";

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  background: ${colours.headline};
  color: white;
  top: 0;
  left: 0;
  padding: 5px 0px;
  font-size: 1.1em;
  z-index: 5;
`;

const SiteTitle = styled.div`
  padding: 10px;
  font-weight: 900;
  float: left;
  user-select: none;
`;

const UserInfo = styled.div`
  padding: 10px;
  float: right;
  font-size: 0.9em;
  font-weight: 400;
  user-select: none;
`;

export const AuthButton = styled(BaseButton)`
  float: right;
  margin: 3px 8px 3px 3px;
`;

const ButtonNotReady = styled(AuthButton)`
  background: #777777;
  user-select: none;
  &:hover {
    border: none;
    cursor: default;
  }
`;

const NavBar = props => {
  const { user, login, logout, ready, showMyBookings } = props;
  return (
    <NavBarContainer>
      <SiteTitle>The Dusty Couch</SiteTitle>

      {user ? (
        <AuthButton onClick={logout}>Log Out</AuthButton>
      ) : (
        <AuthButton onClick={login}>Log In</AuthButton>
      )}

      {user && ready ? (
        <AuthButton onClick={showMyBookings}>My Bookings</AuthButton>
      ) : (
        <ButtonNotReady>Loading...</ButtonNotReady>
      )}

      {user ? (
        <UserInfo>{`Welcome back, "${user.displayName}"`}</UserInfo>
      ) : (
        <UserInfo>{`Have a Reservation? Log In To View/Edit`}</UserInfo>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
