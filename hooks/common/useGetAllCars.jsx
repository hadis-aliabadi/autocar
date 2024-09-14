import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetAllCars = (domain) => {
  // const mutate = useMutation("filter-cars", () =>
  return useQuery("filter-cars", () =>
    httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}`,
      {
        url: "www.rtmgroup.com",
        year_start: "1900-10-18",
        year_end: "2022-10-18",
        price_low: 0,
        price_high: 100000,
        odometer_low: 0,
        odometer_high: 100000,
        odometer_type: 1,
        make: "Honda",
        model: "",
        transmission: "",
        body_style: "",
        drive_train: "",
        doors: "",
        interior_color: "",
        Exterior_color: "",
      },
      {},
      false
    )
  );
};
