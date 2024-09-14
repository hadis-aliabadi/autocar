import Location from "../components/layout/directions/location";
import Head from "next/head";
import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";

const Direction = (props) => {
  const { dealerData } = props;
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
        <div className="11 row col-12 col-lg-11 pt-5 px-4">
          <div className="d-flex flex-column col-lg-8   col-12">
            <div className="p-0 m-0 eforms_form_div_conatiner d-flex align-items-center justify-content-center">
              <div
                style={{ backgroundColor: "#f5f5f5" }}
                className="p-2 m-0 my-3 my-md-0 row w-100 eforms_form__container row align-items-center justify-content-center"
              >
                <div className="p-0 m-0 mb-5 col-11 col-sm-11 eforms_form_section_div__container">
                  <h3
                    className="p-0 m-0 my-3 direction_title font-weight-bold "
                    style={{
                      fontWeight: "700",
                      color: "#000",
                      fontFamily: "Open Sans",
                      fontSize: "28px",
                    }}
                  >
                    Get Directions
                  </h3>
                  <Location direction dealerData={dealerData} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <EformsConatctInfo dealerData={dealerData} />
          </div>
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
