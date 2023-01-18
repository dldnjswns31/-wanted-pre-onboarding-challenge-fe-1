import React from "react";
import styled from "styled-components";
import { IAuthTab } from "../../types/components/auth";

const StTabContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 0;

  button:first-child {
    border-right: none;
    border-radius: 1rem 0 0 0;
  }
  button:last-child {
    border-radius: 0 1rem 0 0;
  }
`;

const StTab = styled.button<{ isSelect: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  background: none;
  border: 1px solid black;
  border-bottom: ${({ isSelect }) => (isSelect ? 0 : null)};
  background-color: ${({ isSelect }) => (isSelect ? "#017BE8" : null)};
  color: ${({ isSelect }) => (isSelect ? "white" : "black")};
  font-family: inherit;

  span {
    font-size: 2rem;
  }
`;

const AuthTab = ({ tab, handleTabClick }: IAuthTab) => {
  return (
    <StTabContainer>
      <StTab
        name="login"
        isSelect={tab === "login" ? true : false}
        onClick={handleTabClick}
      >
        <span>Login</span>
      </StTab>
      <StTab
        name="signup"
        isSelect={tab === "sign up" ? true : false}
        onClick={handleTabClick}
      >
        <span>Sign Up</span>
      </StTab>
    </StTabContainer>
  );
};

export default AuthTab;
