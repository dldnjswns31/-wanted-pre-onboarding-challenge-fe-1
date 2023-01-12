import { ReactElement } from "react";

export interface IForm {
  email: string;
  password: string;
}

export interface IProtectedRouterProps {
  children?: ReactElement;
  authenticate: boolean;
}
