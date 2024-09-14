import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetFilterCars = (domain) => {
  return useQuery("filter-cars", () =>
    httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      null,
      {},
      true
    )
  );
};
