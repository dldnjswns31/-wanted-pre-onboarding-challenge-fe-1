import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { signup } from "../apis/auth";

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

  &:focus {
    outline: none;
  }
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
  background-color: #999999;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: inherit;
`;

interface IForm {
  email: string;
  password: string;
}

const Auth = () => {
  const [tab, setTab] = useState<"login" | "sign up">("login");
  const [form, setForm] = useState<IForm>({ email: "", password: "" });

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "login") setTab("login");
    if (e.currentTarget.name === "signup") setTab("sign up");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(form.email, form.password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, password: e.target.value }));
  };

  return (
    <StContainer>
      <StTitle>My Todo List</StTitle>
      <StAuthContainer>
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
        <StFormContainer>
          <StForm onSubmit={handleSubmit}>
            <StInput
              type="text"
              value={form.email || ""}
              placeholder="email"
              onChange={handleChangeEmail}
            />
            <StInput
              type="password"
              value={form.password || ""}
              placeholder="password"
              onChange={handleChangePassword}
            />
            <StError></StError>
            <StButton>{tab}</StButton>
          </StForm>
        </StFormContainer>
      </StAuthContainer>
    </StContainer>
  );
};

export default Auth;
