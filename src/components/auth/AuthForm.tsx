import React from "react";
import styled from "styled-components";

import { IAuthForm } from "../../types/components/auth";

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
  border: 1px solid black;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }
`;

const StError = styled.div`
  width: 80%;
  margin-top: 1rem;
  color: red;
`;

const StButton = styled.button`
  width: 80%;
  height: 3rem;
  margin-top: 1rem;
  border: none;
  border-radius: 10px;
  background-color: ${({ disabled }) => (disabled ? "#999999" : "#017BE8")};
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
`;

const AuthForm = ({
  tab,
  form,
  isValid,
  errorMessage,
  handleSubmit,
  handleInputChange,
}: IAuthForm) => {
  return (
    <>
      <StFormContainer>
        <StForm onSubmit={handleSubmit}>
          <StInput
            type="text"
            name="email"
            value={form.email || ""}
            placeholder="email"
            onChange={handleInputChange}
          />
          <StInput
            type="password"
            name="password"
            value={form.password || ""}
            placeholder="password"
            onChange={handleInputChange}
          />
          <StError>{errorMessage}</StError>
          <StButton disabled={!isValid}>{tab}</StButton>
        </StForm>
      </StFormContainer>
    </>
  );
};

export default AuthForm;
