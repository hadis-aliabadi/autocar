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

      {/* <div className="p-0 m-0 w-100 p-0 m-0 white-background  ">
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
      </div> */}
      <div className="container p-5">
      <div className="row">
        <div className="main-content-inner col-sm-12 col-md-12">
          <div id="primary" className="content-area">
            <main id="main" className="site-main" role="main">
              <div className="post-inner-content">
                <header className="entry-header page-header">
                  <h1 style={{ fontWeight: 'bold', fontSize: '23px' }}>Dealership</h1>
                </header>

                <div style={{ fontWeight: 'bold', fontSize: '23px', paddingBottom: '10px' }}>
                  Welcome to Autokart Automotives!
                </div>
                <div style={{  fontSize: '14px' }}>
                  <p>
                    With over 35 years of experience in the automotive industry we are proud to be one of the most reliable and trustworthy used car dealerships in Toronto and GTA providing quality pre-owned vehicles. You can be assured to find your dream car that feels like new without the new car price tag at Autokart.
                  </p>
                
                  <p className="my-3">
                    With customer satisfaction being our top most priority you can expect us to help make your experience a smooth as we guarantee:
                  </p>

                  <p >Full transparency right from the moment you step in till the vehicle delivery.</p>

                  <ul className="my-3">
                    <li>Complete Vehicle disclosure.</li>
                    <li>Dynamic Market Value, hassle and haggle free pricing.</li>
                    <li>Pressure free buying experience.</li>
                    <li>Easy financing options for all.</li>
                  </ul>

                  <p>Rest assured we are OMVIC approved and proud members of the UCDA.</p>
                </div>
              </div>
            </main>
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
