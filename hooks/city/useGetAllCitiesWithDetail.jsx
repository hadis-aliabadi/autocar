import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { httpRequest } from "../../apis";
// import { getAllCities } from "../utils/common/city/city";
// import { getAddressDetail } from "../utils/common/city/postal_code";

export const useGetAllCitiesWithDetail = () => {
  const getAllCitiesData = useQuery(
    "getAllCitiesData",
    async () => {
      const { data, status } = await httpRequest("GET", "/city/get/all/info");
      if (+status === 200) {
        return data;
      } else {
        throw new Error("something went wrong");
      }
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const getAllProvinceData = useQuery(
    "getAllProvinceData",
    async () => {
      const { data, status } = await httpRequest("GET", "/province/getall");
      if (+status === 200) {
        return data;
      } else {
        throw new Error("something went wrong");
      }
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
  const cityOptions = useMemo(() => {
    const options = getAllCitiesData.data?.map((city) => ({
      label: city?.city,
      // +
      // "," +
      // city?.Province?.province +
      // "," +
      // city?.Province?.Country?.country,
      value: city?.id,
      city: city?.city,
      province: city?.Province?.province,
      country: city?.Province?.Country?.country,
      provinceId: city?.Province?.id,
    }));
    return options;
  }, [getAllCitiesData]);

  const ProvinceOptions = useMemo(() => {
    const options = getAllProvinceData.data?.map((province) => ({
      label: province?.province,
      // +
      // "," +
      // city?.Province?.province +
      // "," +
      // city?.Province?.Country?.country,
      value: province?.id,
      province: province?.province,
      // province: city?.Province?.province,
      // country: city?.Province?.Country?.country,
      // provinceId: city?.Province?.id,
    }));
    return options;
  }, [getAllProvinceData]);
  return {
    data: getAllCitiesData.data,
    options: cityOptions,
    ProvinceOptions: ProvinceOptions,
    loading: getAllCitiesData.isLoading,
  };
};
export const useGetAddressWithPostalCode = ({
  successFunction,
  errorFunction,
}) => {
  const { options } = useGetAllCitiesWithDetail();
  const queryClient = useQueryClient();
  const getAddressDetailData = useMutation(
    "getAddressDetailData",
    getAddressDetail,
    {
      onSuccess: (data) => {
        const city = data?.data?.address?.city
          ?.toString()
          ?.toLowerCase()
          ?.replace(/\./g, "")
          ?.replace(/\s/g, "");
        const cityOption = options.find(
          (option) =>
            option?.city
              ?.toString()
              .toLowerCase()
              .replace(/\./g, "")
              .replace(/\s/g, "") === city
        );
        if (cityOption && cityOption !== null) {
          return successFunction({
            option: cityOption,
            restOfData: data?.data?.address,
          });
        } else {
          const newOption = {
            label: city?.city,
            // +
            // "," +
            // city?.Province?.province +
            // "," +
            // city?.Province?.Country?.country,
            value: city?.id,
            city: city?.city,
            province: city?.Province?.province,
            country: city?.Province?.Country?.country,
            provinceId: data?.cityData?.city?.Province?.id,
          };
          queryClient.setQueryData("getAllCitiesData", (oldData) => {
            return [...oldData, data?.cityData];
          });
          return successFunction({
            option: newOption,
            restOfData: data?.data?.address,
          });
        }
      },
      onError: errorFunction,
    }
  );
  const query = (zipCode) => {
    getAddressDetailData.mutate({ zipCode });
  };
  return { query, queryIsLoading: getAddressDetailData.isLoading };
};
