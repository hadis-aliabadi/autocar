import Head from "next/head";
import { httpRequest } from "../apis";
import HomeCustomeerWeb from "../components/layout/home/homecustomeerweb";
const Home = (data) => {
  const {
    dealerData,
    specialData,
    advanceSearchData,
    domain,
    vehiclesData
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
          sizes="50x24"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <HomeCustomeerWeb
        advanceSearchData={advanceSearchData}
        specialData={specialData}
        data={data}
        domain={domain}
        dealerData={dealerData}
        vehiclesData={vehiclesData}
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

    const currentYear = new Date().getFullYear() + 1;
    const body = {
      year_start: "1900",
      year_end: currentYear,
      price_low: "",
      price_high: "",
      odometer_low: "",
      odometer_high: "",
      make: "",
      model: "",
      transmission: "",
      body_style: "",
      drive_train: "",
      doors: "",
      interior_color: "",
      Exterior_color: "",
      sold: null,
      fuel_type: "",
      keywords: "",
      sold: null,
      is_coming_soon: null,
      sortKind: {
        kind: "",
        type: null,
        order: 0,
      },
    };
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}?page=1&limit=30`,
      body,
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
        vehiclesData,
      },
    };
  }
  return {
    notFound: true,
  };
}
export default Home;

Home.isHome = true;
