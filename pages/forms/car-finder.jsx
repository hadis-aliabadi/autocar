import React from "react";
import { httpRequest } from "../../apis";
import CarFinderForm from "../../components/layout/forms/car-finder/car_finder_form";
import Head from "next/head";
import { useGetBodyStyles } from "../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../hooks/common/useGetTransmition";
const CarFinder = (props) => {
  const { domain, dealerData, colors, otherFormik = undefined } = props;
  const {
    data: bodyStylesData,
    isLoading: bodyStylesIsLoadig,
    isFetching: bodyStylesIsFetching,
    isError: bodyStylesIsError,
    error: bodyStylesError,
    isSuccess: bodyStylesIsSuccess,
  } = useGetBodyStyles();
  const {
    data: transmitionData,
    isLoading: transmitionLoading,
    isFetching: transmitionFetching,
    isError: transmitionIsError,
    error: transmitionError,
    isSuccess: transmitionSuccess,
  } = useGetTransmitions();
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Finding the right vehicle in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}. Contact us to learn more about our used car services.`}
        />

        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Find Veehicle, Car appraisal, Find Car`}
        />

        <title>
          {`Used Car | ${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>

      <CarFinderForm
        transmitionData={transmitionData}
        transmitionLoading={transmitionLoading}
        transmitionFetching={transmitionFetching}
        bodyStylesData={bodyStylesData}
        bodyStylesIsLoadig={bodyStylesIsLoadig}
        bodyStylesIsFetching={bodyStylesIsFetching}
        dealerData={dealerData}
        domain={domain}
        colors={colors}
        specialCars={dealerData?.specialData}
        otherFormik={otherFormik}
      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data, status } = await httpRequest(
    "GET",
    "/api/colors",
    {},
    {},
    false
  );
  if (status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      domain,
      colors: data,
    },
  };
}
export default CarFinder;
