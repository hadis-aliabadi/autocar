import { useQuery } from "react-query";
import {  httpRequest } from "../../apis";

const useGetAllVehicles = (domain) => {
  return useQuery("dealer-vehicles", () =>
    httpRequest("GET", `/api/dealership/vehicles/${domain}`, null, {}, true)
  );
};

export default useGetAllVehicles;
