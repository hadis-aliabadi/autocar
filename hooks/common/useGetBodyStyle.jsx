import { useState } from "react";
import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetBodyStyles = () => {
  const [optionData, setOptionData] = useState([]);
  const queryData = useQuery(
    "body-style",
    () => httpRequest("GET", "/api/bodystyles", {}, {}, true),
    {
      onSuccess: async (data) => {
        const formatedData = await data.map((item) => ({
          label: item?.name,
          value: item?.id,
        }));
        setOptionData(formatedData);
      },
    }
  );
  return { ...queryData, data: optionData };
};
