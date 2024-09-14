import Head from "next/head";
import EFormsHeaderSection from "../components/common/web/eform-header/eforms_header_section";
import { findScript } from "../utils/common/html_script";
import EformsConatctInfoTop from "../components/common/web/eforms/eforms_contact_info_top";

const Services = (props) => {
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
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } is a used car dealer serving ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          }.`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car dealership, Auto sales, ${dealerData?.business_city?.city},Best used cars ,Quality used cars,Car financing, Affordable used cars, Low mileage used cars, Certified pre-owned cars, Best Dealer in ${dealerData?.business_city?.city}`}
        />

        <title>
          {`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } | ${dealerData?.business_city?.city} used car dealer`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>

      <div className="p-0 m-0 w-100 p-0 m-0 white-background  ">
        <div className="p-0 pt-5 px-1 px-md-3 px-lg-5 m-0 w-100 row d-flex flex-column flex-lg-row ">
          <div className="p-0 pb-3 m-0 col-10 mx-auto">
            <div className="p-0 m-0 row px-1 eforms_form__container p-2 p-lg-5">
              <h1 style={{fontSize:'28px',fontWeight:'700 !important',fontFamily:"Open Sans"}}>About Us</h1>
              <div
                className=" pb-1 m-0 welcome_text-7 text_div__container-7"
                style={{ color: "#333", lineHeight: "27px", fontSize: "13px" }}
                dangerouslySetInnerHTML={{
                  __html: findScript(dealerData?.about_us),
                }}
              />
            </div>
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

export default Services;
