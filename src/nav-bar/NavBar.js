import React from "react";
import { BaseButton } from "../utils/reusable-components";
import styled from "styled-components";
import colours from "../styles/colours";

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: auto;
  background: ${colours.headline};
  color: ${colours.background};
  top: 0;
  left: 0;
  padding: 5px 0px;
  font-size: 1.1em;
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

const NavBar = props => {
  const { user, login, logout, showMyBookings } = props;
  return (
    <NavBarContainer>
      <SiteTitle>The Dusty Couch</SiteTitle>

      {user ? (
        <AuthButton onClick={logout}>Log Out</AuthButton>
      ) : (
        <AuthButton onClick={login}>Log In</AuthButton>
      )}

      {user && <AuthButton onClick={showMyBookings}>View Bookings</AuthButton>}

      {user ? (
        <UserInfo>{`Welcome back, "${user.displayName}"`}</UserInfo>
      ) : (
        <UserInfo>{`Have a Reservation? Log In To View/Edit`}</UserInfo>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
