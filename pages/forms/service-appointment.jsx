import React from "react";
import ServiceAppintmentCustomerWeb from "../../components/layout/forms/serviceappintmentcustomerweb";
import Head from "next/head";

const ServiceAppointment = (props) => {
  const { domain, dealerData } = props;
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
          {`  ${
            dealerData?.business_city?.city
          } Used Cars Services - In-House Mechanic Shop for Car Repairing
          ${dealerData?.business_city?.Province?.province} | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>
        <meta
          name="description"
          content={`Looking for used cars' repairing center in ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province}? Contact ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } now! We are offering In-House Car Service Center and Auto Detailing Shop.`}
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

      <div className="bg-white w-100 d-flex justify-content-center align-items-center">
        <ServiceAppintmentCustomerWeb
          dealerData={dealerData}
          specialCars={dealerData?.specialData}
          domain={domain}
        />
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  return {
    props: {
      domain,
    },
  };
}
export default ServiceAppointment;
