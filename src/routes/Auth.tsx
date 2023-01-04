import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, signup } from "../apis/auth";
import { IForm } from "../types/auth";
import { validator } from "../utils/validator";

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

const Auth = () => {
  const [tab, setTab] = useState<"login" | "sign up">("login");
  const [form, setForm] = useState<IForm>({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "login") setTab("login");
    if (e.currentTarget.name === "signup") setTab("sign up");
    setErrorMessage("");
    setForm({ email: "", password: "" });
    setIsValid(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tab === "login") {
      login(form)
        .then(() => {
          navigate("/todo");
        })
        .catch((err) => setErrorMessage(err.response.data.details));
    }
    if (tab === "sign up") {
      signup(form)
        .then(() => {
          login(form).then(() => navigate("/todo"));
        })
        .catch((err) => setErrorMessage(err.response.data.details));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.currentTarget;
    let newForm = { ...form };

    if (name === "email") {
      newForm.email = e.target.value;
      setForm(newForm);
    }
    if (name === "password") {
      newForm.password = e.target.value;
      setForm(newForm);
    }
    if (validator(newForm)) setIsValid(true);
    else setIsValid(false);
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
      </StAuthContainer>
    </StContainer>
  );
};

export default Auth;
