import Head from "next/head";
import { httpRequest } from "../apis";
import ServiceCustomerWeb from "../components/layout/home/servicecustomerweb";


const Service = (data) => {
  const {
    dealerData,
    specialData,
    advanceSearchData,
    domain,
    // vehicleDataForSearch,
  } = data;

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
          content={`Find used cars, trucks and SUVs for sale at ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}/>
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car dealership, Auto sales, ${dealerData?.business_city?.city},Best used cars ,Quality used cars`}
        />
        <title>
          {`${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <ServiceCustomerWeb
        advanceSearchData={advanceSearchData}
        specialData={specialData}
        data={data}
        domain={domain}
        dealerData={dealerData}
      />
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: specialData, status: specialStatus } = await httpRequest(
    "GET",
    `/api/dealership/vehicles/${domain}/special`,
    {},
    {}
  );
  const { data: data4, status: webSliderStatus } = await httpRequest(
    "GET",
    `/api/dealerweb/websliders/${domain}`,
    {},
    {}
  );

  const { data: advanceSearchData, status: advanceSearchStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/light/${domain}`,
      {},
      {},
      false
    );
  if (webSliderStatus === 200) {
    return {
      props: {
        specialData,
        domain,
        data4,
        advanceSearchData,
      },
    };
  }
  return {
    notFound: true,
  };
}
export default Service;

Service.isService = true;
