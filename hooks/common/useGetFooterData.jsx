import { useEffect } from "react";
import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetFooterData = (domain) => {
  return useQuery(["footer-data", domain], () =>
    httpRequest(
      "GET",
      `/api/dealership/single/by/url/${domain}`,
      null,
      {},
      true
    )
  );
};
