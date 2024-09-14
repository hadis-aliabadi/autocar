import { findScript } from "../utils/common/html_script";
import { PrivacyDesc } from "../utils/common/privacy_data";
import Head from "next/head";

const PrivacyPage = (props) => {
  const { dealerData } = props;
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />

        <title>
          Online car dealership |{" "}
          {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        </title>
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } site as an online car dealership in ${
            dealerData?.business_city?.city
          } ${
            dealerData?.business_city?.Province?.Country?.country
          }, provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
      </Head>
      <div className="p-0 m-0 w-100">
        <div className="p-0 pt-5 px-1 px-md-3 px-lg-5 m-0 w-100 row d-flex flex-column flex-lg-row ">
          <div className="p-0 pb-3 m-0 col-10 mx-auto">
            <div className="p-0 m-0 row px-1 eforms_form__container p-5">
              <h1 style={{fontSize:'28px',fontWeight:'700 !important',fontFamily:"Open Sans"}}>Warranty</h1>
              <div
                className=" pb-1 m-0 welcome_text-7 text_div__container-7"
                style={{ color: "#333", lineHeight: "27px", fontSize: "13px" }}
                dangerouslySetInnerHTML={{
                  __html: findScript(dealerData?.serviceApointment_desc),
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

export default PrivacyPage;
