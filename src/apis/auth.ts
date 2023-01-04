import { axiosInstance } from "./core/axiosInstance";

export const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/users/create", {
      email,
      password,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
