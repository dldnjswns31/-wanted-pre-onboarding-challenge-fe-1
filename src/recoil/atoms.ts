import { atom } from "recoil";
import { getToken } from "../utils/authToken";

export const isLoginState = atom({
  key: "isLogin",
  default: getToken() ? true : false,
});
