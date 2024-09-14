import React from "react";
import { httpRequest } from "../../apis";
import ValuetradeCustomerWeb from "../../components/layout/forms/valuetradecustomerweb";
import Head from "next/head";
import { useGetBodyStyles } from "../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../hooks/common/useGetTransmition";
const ValueYourDate = (props) => {
  const {
    domain,
    dealerData,
    colors,
    otherFormik = undefined,
    onClose,
    vehicleDataForSearch,
    advanceSearchData , 
    inModal , 
  } = props;
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

         <title>
          {`Used Car | ${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>
        <meta
          name="description"
          content={`Trading your vehicle in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}. Contact us to learn more about our used car services.`}
        />
         <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car trade-in, Car appraisal, Best used cars, Car financing`}
        />

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <ValuetradeCustomerWeb
        transmitionData={transmitionData}
        transmitionLoading={transmitionLoading}
        transmitionFetching={transmitionFetching}
        bodyStylesData={bodyStylesData}
        bodyStylesIsLoadig={bodyStylesIsLoadig}
        bodyStylesIsFetching={bodyStylesIsFetching}
        dealerData={dealerData}
        domain={domain}
        otherFormik={otherFormik}
        colors={colors}
        specialCars={dealerData?.specialData}
        onClose={onClose}
        vehicleDataForSearch={vehicleDataForSearch}
        advanceSearchData={advanceSearchData}
        inModal = {true}

      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: colorData, status: colorStatus } = await httpRequest(
    "GET",
    "/api/colors",
    {},
    {},
    false
  );
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});
  if (colorStatus !== 200) {
    return {
      notFound: true,
    };
  }

  const { data: advanceSearchData, status: advanceSearchDataStatus } =
  await httpRequest(
    "GET",
    `/api/dealership/advance/search/vehicles/get/${domain}`,
    null,
    {},
    false
  );

  return {
    props: {
      domain,
      vehicleDataForSearch,
      advanceSearchData,

      colors: colorData,
    },
  };
}
export default ValueYourDate;
