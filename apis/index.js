import axios from "axios";
import { BASE_URL } from "../constant/base";
import { getToken } from "../utils/common/get_token";
import { removeToken } from "../utils/common/remove_token";

export const httpRequest = async (
  method,
  url,
  body,
  headers,
  isReactQuery = false,
  base = BASE_URL
) => {
  const token = getToken();
  try {
    const _res = await axios({
      method: method,
      url: base + url,
      data: body,
      headers: {
        "content-type": "application/json",
        ...headers,
      },
    });
    const status = await _res.status;
    if (status === 200 || status === 201) {
      if (isReactQuery) {
        const { data } = await _res;
        return data;
      } else {
        return {
          status: _res.status,
          message: "Succesfull",
          data: _res.data,
        };
      }
    }
  } catch (e) {
    if (e.response.status === 401) {
      removeToken("token");
      return {
        status: e.response.status,
        message: e.response.data.message,
        data: null,
      };
    } else {
      return {
        status: e.response.status,
        message: e.response.data.message,
        data: null,
      };
    }
  }
};

//get
export const getAllCountry = async () => {
  const { data } = await axios.get(`${BASE_URL}/country/getall`);
  return data;
};


const responseBody = (response) => response.data;

const request = {
  get: (url, config = {}) => axios.get(url, config).then(responseBody),
  post: (url, body, config = {}) =>
    axios.post(url, body, config).then(responseBody),
};

const contactUs = {
  post: (body, config) =>
    request.post("/dealerweb/contactus/add", body, config),
};

const cars = {
  get: () => request.get(`${BASE_URL}/api/dealership/vehicles/localhost:3000`),
};

const article = {
  get: (config) => request.get("https://hillzdealer.com/api/posts", config),
};

const agent = {
  contactUs,
  cars,
  article,
};

export default agent;
