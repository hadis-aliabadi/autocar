import React from "react";
import { httpRequest } from "../../apis";
import ValuetradeCustomerWeb from "../../components/layout/forms/valuetradecustomerweb";
import Head from "next/head";
import { useGetBodyStyles } from "../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../hooks/common/useGetTransmition";
const SellUsYourCar = (props) => {
  const {
    domain,
    dealerData,
    colors,
    otherFormik = undefined,
    onClose,
    vehicleDataForSearch,
    advanceSearchData,
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
      {/* <Head>
        <title>Trade In Value | {dealerData?.bussiness_name} </title>
        <meta
          name="description"
          content={`Check car prices and values your trade when buying and selling new or used vehicles online on the ${dealerData?.bussiness_name}.`}
        />
        <meta name="keywords" content="trade in value" />
      </Head> */}
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
          {`    Sell Us Your Car ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } with ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group |
          Sell Us Your Car`}
        </title>
        <meta
          name="description"
          content={`Sell Us Your Car ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } with ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }. Tell us more about your vehicle, its specifications to help you get good buyer.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
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
        isSellUsYourCar={true}
      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers["x-forwarded-host"]
    ? ctx.req.headers["x-forwarded-host"]
    : ctx.req.headers.host;

  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/api/dealership/vehicles/all/${domain}`, {}, {});
  const { data: colorData, status: colorStatus } = await httpRequest(
    "GET",
    "/api/colors",
    {},
    {},
    false
  );

  const { data: advanceSearchData, status: advanceSearchDataStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      null,
      {},
      false
    );

  if (colorStatus !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      domain,
      colors: colorData,
      vehicleDataForSearch,
      advanceSearchData,
    },
  };
}
export default SellUsYourCar;
