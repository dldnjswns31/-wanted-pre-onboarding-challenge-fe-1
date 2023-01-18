import { IForm } from "../apis/auth";

type tab = "login" | "sign up";

export interface IAuthForm {
  tab: tab;
  form: IForm;
  isValid: boolean;
  errorMessage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAuthTab {
  tab: tab;
  handleTabClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
