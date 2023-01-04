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
    return;
  } catch (err) {
    throw err;
  }
};
