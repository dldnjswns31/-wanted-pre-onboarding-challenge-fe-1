import { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { login, signup } from "../../apis/auth";
import { isLoginState } from "../../recoil/atoms";
import { IForm } from "../../types/apis/auth";
import { setToken } from "../../utils/authToken";
import { validator } from "../../utils/validator";

import AuthForm from "./AuthForm";
import AuthTab from "./AuthTab";

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

const Auth = () => {
  const [tab, setTab] = useState<"login" | "sign up">("login");
  const [form, setForm] = useState<IForm>({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const setIsLogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();

  // AuthTab props
  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "login") setTab("login");
    if (e.currentTarget.name === "signup") setTab("sign up");
    setErrorMessage("");
    setForm({ email: "", password: "" });
    setIsValid(false);
  };

  // AuthForm props
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tab === "login") {
      try {
        const { data } = await login(form);
        setToken(data.token);
        setIsLogin(true);
        navigate("/");
      } catch (err) {
        if (err instanceof AxiosError) {
          setErrorMessage(err.response?.data.details);
        }
      }
    }
    if (tab === "sign up") {
      try {
        await signup(form);
      } catch (err) {
        if (err instanceof AxiosError) {
          setErrorMessage(err.response?.data.details);
        }
      }
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
        <AuthTab tab={tab} handleTabClick={handleTabClick} />
        <AuthForm
          tab={tab}
          form={form}
          isValid={isValid}
          errorMessage={errorMessage}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </StAuthContainer>
    </StContainer>
  );
};

export default Auth;
