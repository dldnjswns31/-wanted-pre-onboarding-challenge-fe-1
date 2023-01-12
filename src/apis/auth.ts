import { setToken } from "./../utils/authToken";
import { IForm } from "./../types/auth";
import { axiosInstance } from "./core/axiosInstance";

export const signup = async (form: IForm) => {
  const { email, password } = form;
  try {
    await axiosInstance.post("/users/create", {
      email,
      password,
    });
    alert("회원가입에 성공했습니다.");
    return;
  } catch (err) {
    throw err;
  }
};

export const login = async (form: IForm) => {
  const { email, password } = form;

  try {
    const { data } = await axiosInstance.post("/users/login", {
      email,
      password,
    });
    setToken(data.token);
    alert("로그인에 성공했습니다. Todo 페이지로 이동합니다.");
    return;
  } catch (err) {
    throw err;
  }
};
