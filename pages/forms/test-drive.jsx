import React from "react";
import { httpRequest } from "../../apis";
import Head from "next/head";
import TestDriveFrom from "../../components/layout/forms/test-drive/test_drive_form";

const TestDrive = (props) => {
  const { domain, dealerData, colors, vehicleDataForSearch } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is located at ${dealerData?.business_street} ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province} ,${
            dealerData?.business_postal
          }. Call us at: ${dealerData?.business_phone}`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />

        <title>
          {`Test Drive Information | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } | ${dealerData?.business_city?.city} used car
          dealer`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />
      </Head>

      <TestDriveFrom
        dealerData={dealerData}
        domain={domain}
        colors={colors}
        specialCars={dealerData?.specialData}
        vehicleDataForSearch={vehicleDataForSearch}
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
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});
  if (status !== 200) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      domain,
      colors: data,
      vehicleDataForSearch,
    },
  };
}
export default TestDrive;
