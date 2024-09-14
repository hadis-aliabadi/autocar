import React from "react";
import BookAppointmentCustomerWeb from "../../components/layout/forms/book-appointment/bookappointment";
import Head from "next/head";
import { httpRequest } from "../../apis";
const BookAppointment = (props) => {
  const { domain, dealerData, vehicleDataForSearch } = props;
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
          content={`Book an Appointment in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}. Contact us to learn more about our used car services.`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car appraisal, Best used cars, Car financing, Book Appointment`}
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
      <BookAppointmentCustomerWeb
        dealerData={dealerData}
        specialCars={dealerData?.specialData}
        domain={domain}
        vehicleDataForSearch={vehicleDataForSearch}
      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;

  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});

  return {
    props: {
      domain,
      vehicleDataForSearch,
    },
  };
}

export default BookAppointment;
