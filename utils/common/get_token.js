import {Cookies} from "react-cookie";

export const getToken = () => {
  const cook = new Cookies();
  return cook.get("token");
};
