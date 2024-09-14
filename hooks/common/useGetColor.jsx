import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetColor = () => {
  return useQuery("color", () =>
    httpRequest("GET", "/api/colors", {}, {}, true)
  );
};
