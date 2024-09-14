import { Cookies } from "react-cookie";

export const removeToken = (key) => {
  const cook = new Cookies();
  return cook.remove(key);
};
