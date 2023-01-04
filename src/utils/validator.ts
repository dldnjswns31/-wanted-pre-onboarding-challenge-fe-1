export const validator = (form: { email: string; password: string }) => {
  const { email, password } = form;
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (email.match(reg) && password.length >= 8) return true;
  return false;
};
