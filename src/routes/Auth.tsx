import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 700;
`;

const StAuthContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
`;

const StTabContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 0;

  button:first-child {
    border-radius: 1rem 0 0 0;
  }
  button:last-child {
    border-radius: 0 1rem 0 0;
  }
`;

const StTab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  background: none;
  border: 1px solid black;
  font-family: inherit;

  span {
    font-size: 2rem;
  }
`;

const StFormContainer = styled.div`
  height: 100%;
  border: 1px solid black;
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  flex: 4 0;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  input:nth-child(odd) {
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
  }

  input:nth-child(even) {
    border-radius: 0 0 10px 10px;
  }
`;

const StInput = styled.input`
  width: 80%;
  height: 3rem;
  padding: 1rem;
  font-size: 1.2rem;
`;

const StError = styled.div`
  margin-top: 1rem;
`;

const StButton = styled.button`
  width: 80%;
  height: 3rem;
  margin-top: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
`;

const Auth = () => {
  return (
    <StContainer>
      <StTitle>My Todo List</StTitle>
      <StAuthContainer>
        <StTabContainer>
          <StTab>
            <span>Login</span>
          </StTab>
          <StTab>
            <span>Regist</span>
          </StTab>
        </StTabContainer>
        <StFormContainer>
          <StForm>
            <StInput type="text" placeholder="email" />
            <StInput type="password" placeholder="password" />
            <StError></StError>
            <StButton>Login</StButton>
          </StForm>
        </StFormContainer>
      </StAuthContainer>
    </StContainer>
  );
};

export default Auth;
