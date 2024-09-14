import Head from "next/head";
import GoogleReviewsHomePage from "../components/layout/home/Googlereviews";

const Direction = ({dealerData}) => {
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
          content={`Find used cars, trucks and SUVs for sale at ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car appraisal, Best used cars, Car financing`}
        />
        <title>
          {`${
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

      <div
        style={{ backgroundColor: "#fff" }}
        className="p-0 col-12 row justify-content-center  m-0 w-100 "
      >
        <div className="col-12 d-flex p-0 m-0 justify-content-center overflos-container-slider py-5 ">
          <GoogleReviewsHomePage />
        </div>
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
export default Direction;
