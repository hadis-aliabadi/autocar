import { useMutation, useQuery } from "react-query";
import {  httpRequest } from "../../apis";

export const useOrderPart = (domain) => {
  return useMutation("special-cars", () =>
    httpRequest("GET", `/api/dealerweb/orderpart/add/${domain}`, null, {}, true)
  );
};
