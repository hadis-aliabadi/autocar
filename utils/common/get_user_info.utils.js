import {
    Cookies
} from "react-cookies";
const cook = new Cookies();

const getUserInfo = () => {
    const token = cook.get('token');
    if (token) return token;
    return null
}
export {
    getUserInfo
}