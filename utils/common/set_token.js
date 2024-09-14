import {Cookies} from "react-cookie";

export const setToken = (token, config = {}) => {
  const cook = new Cookies();
  return cook.set("token", token, config);
};
