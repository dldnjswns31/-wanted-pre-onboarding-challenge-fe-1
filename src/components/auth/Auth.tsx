import React, { useState } from "react";
import styled from "styled-components";
import { IForm } from "../../types/apis/auth";
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

  return (
    <StContainer>
      <StTitle>My Todo List</StTitle>
      <StAuthContainer>
        <AuthTab
          tab={tab}
          setTab={setTab}
          setIsValid={setIsValid}
          setErrorMessage={setErrorMessage}
          setForm={setForm}
        />
        <AuthForm
          tab={tab}
          form={form}
          setForm={setForm}
          isValid={isValid}
          setIsValid={setIsValid}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </StAuthContainer>
    </StContainer>
  );
};

export default Auth;
