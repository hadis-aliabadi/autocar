import { Cookies } from "react-cookie";

export function tokenConstructor() {
  return {
    getToken(key) {
      const cook = new Cookies();
      return cook.get(key);
    },
    setToken(key, value, config = {}) {
      const cook = new Cookies();
      return cook.set(key, value, config);
    },
    removeToken(key) {
      const cook = new Cookies();
      return cook.remove(key);
    },
  };
}
