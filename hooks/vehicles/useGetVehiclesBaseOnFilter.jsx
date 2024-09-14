import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { httpRequest } from "../../apis";
import { useRouter } from "next/router";

export const useGetVehiclesBaseOnFilter = (
  { onSuccessFunction },
  domain,
  page = 1,
  limit = 10,
  searchTerm = ""
) => {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("last-page", page);
  }, [page]);
  const { data, isLoading, mutate } = useMutation(
    async (body) => {
      const { status, data } = await httpRequest(
        "POST",
        `/api/dealership/advance/search/vehicles/${domain}${
          body?.sortKind && body?.sortKind?.type !== null
            ? "?" +
              body?.sortKind?.kind +
              "=" +
              body?.sortKind?.type +
              `&page=${page}&limit=${limit}&keywords=${searchTerm}&media=1`
            : router.pathname === "/forms/finance" ? `?keywords=${searchTerm}` :`?page=${page}&limit=${limit}&keywords=${searchTerm}&media=1`
        }`,
        body,
        {},
        false
      );
      if (+status === 200) {
        return data;
      } else {
        throw new Error("error");
      }
    },
    {
      onSuccess: (data) => {
        onSuccessFunction(data);
      },
    }
  );
  return {
    // setLimit,
    // setOffset,
    data,
    isLoading,
    mutate,
  };
};
export const useGetVehiclesBaseOnFilterModal = (
  { onSuccessFunction },
  domain,
  page = 1,
  limit = 10
) => {
  const { data, isLoading, mutate } = useMutation(
    async (body) => {
      const { status, data } = await httpRequest(
        "POST",
        `/api/dealership/advance/search/vehicles/${domain}${
          body?.sortKind && body?.sortKind?.type !== null
            ? "?" + body?.sortKind?.kind + "=" + body?.sortKind?.type + `&media=1`
            : `?media=1`
        }`,
        body,
        {},
        false
      );
      if (+status === 200) {
        return data;
      } else {
        throw new Error("error");
      }
    },
    {
      onSuccess: (data) => {
        onSuccessFunction(data);
      },
    }
  );
  return {
    // setLimit,
    // setOffset,
    data,
    isLoading,
    mutate,
  };
};
