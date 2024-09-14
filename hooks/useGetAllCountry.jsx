import axios from "axios";
import { useQuery } from "react-query";
import { getAllCountry, httpRequest } from "../apis";
// import { BASE_URL } from "../constant/base";
export const useGetAllCountry = () => {
  return useQuery("countries", () =>
    httpRequest("GET", "/country/getall", null, {}, true)
  );
};
