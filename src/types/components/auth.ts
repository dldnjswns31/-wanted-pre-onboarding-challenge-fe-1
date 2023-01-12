import { IForm } from "../apis/auth";

type tab = "login" | "sign up";
type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IAuthForm {
  tab: tab;
  form: IForm;
  setForm: setState<IForm>;
  isValid: boolean;
  setIsValid: setState<boolean>;
  errorMessage: string;
  setErrorMessage: setState<string>;
}

export interface IAuthTab {
  tab: tab;
  setTab: setState<tab>;
  setErrorMessage: setState<string>;
  setForm: setState<IForm>;
  setIsValid: setState<boolean>;
}
