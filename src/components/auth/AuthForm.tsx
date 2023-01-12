import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { login, signup } from "../../apis/auth";
import { isLoginState } from "../../recoil/atoms";
import { IAuthForm } from "../../types/components/auth";
import { validator } from "../../utils/validator";

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
  setForm,
  isValid,
  setIsValid,
  errorMessage,
  setErrorMessage,
}: IAuthForm) => {
  const setIsLogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (tab === "login") {
      login(form)
        .then(() => {
          setIsLogin(true);
          navigate("/");
        })
        .catch((err) => setErrorMessage(err.response.data.details));
    }
    if (tab === "sign up") {
      signup(form)
        .then(() => {
          login(form).then(() => navigate("/"));
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
