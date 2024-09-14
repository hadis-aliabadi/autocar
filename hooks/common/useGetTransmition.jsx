import { useState } from "react";
import { useQuery } from "react-query";
import { httpRequest } from "../../apis";

export const useGetTransmitions = () => {
  const [optionData, setOptionData] = useState([]);
  const queryData = useQuery(
    "transmitions",
    () => httpRequest("GET", "/api/transmissions", {}, {}, true),
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
