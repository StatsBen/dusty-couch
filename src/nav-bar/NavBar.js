import React from "react";
import { BaseButton } from "../utils/reusable-components";
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
  float: left;
`;

const UserInfo = styled.div`
  float: right;
`;

export const AuthButton = styled(BaseButton)`
  float: right;
  background: red;
  color: yellow;
`;

const NavBar = props => {
  const { user, login, logout } = props;
  return (
    <NavBarContainer>
      <SiteTitle>The Dusty Couch</SiteTitle>

      {user ? (
        <AuthButton onClick={logout}>Log Out</AuthButton>
      ) : (
        <AuthButton onClick={login}>Log In</AuthButton>
      )}
      {user && <UserInfo>Welcome, {user.displayName}</UserInfo>}
    </NavBarContainer>
  );
};

export default NavBar;
