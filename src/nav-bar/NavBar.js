import React from "react";
import { AuthButton } from "../utils/reusable-components";
import styled from "styled-components";

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  hegiht: 50px;
  background: teal;
  top: 0;
  left: 0;
`;

const SiteTitle = styled.div`
  font-size: 24px;
`;

const NavBar = props => {
  const { user, login, logout } = props;
  return (
    <NavBarContainer>
      <SiteTitle>The Dusty Couch</SiteTitle>
      {user && <div>Welcome, {user.displayName}</div>}
      {user ? (
        <AuthButton onClick={logout}>Log Out</AuthButton>
      ) : (
        <AuthButton onClick={login}>Log In</AuthButton>
      )}
      Im the nav bar, asshole!
    </NavBarContainer>
  );
};

export default NavBar;
