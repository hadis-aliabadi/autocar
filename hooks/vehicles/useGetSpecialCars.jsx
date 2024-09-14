import { useQuery } from "react-query";
import {  httpRequest } from "../../apis";

export const useGetSpecialCars = (domain) => {
  return useQuery("special-cars", () =>
    httpRequest(
      "GET",
      `/api/vehicle/dealership/mid/spicial/${domain}?offset=0&limit=3&order=id,DESC`,
      null,
      {},
      true
    )
  );
};
