import { IForm } from "../types/apis/auth";
import { axiosInstance } from "./core/axiosInstance";

export const signup = async (form: IForm) => {
  return axiosInstance.post("/users/create", form);
};

export const login = async (form: IForm) => {
  return axiosInstance.post("/users/login", form);
};
