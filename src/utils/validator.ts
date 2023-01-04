export const validator = (form: { email: string; password: string }) => {
  const { email, password } = form;
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  if (email.match(reg) && password.length >= 8) return true;
  return false;
};
