import Head from "next/head";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import EFormsHeaderSection from "../components/common/web/eform-header/eforms_header_section";
import { findScript } from "../utils/common/html_script";
const FinanceMain = props => {
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
          content={`Used Car financing in ${dealerData?.business_city?.Province?.province}, ${dealerData?.business_city?.Province?.province}. ${dealerData?.business_city?.city}. Apply for a Car Loan Today.`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province},, Best used cars, Car financing, Finance`}
        />

        <title>
          {`Used Car Financing | Used Car Loans ${
            dealerData?.business_city?.city
          } ${dealerData?.business_city?.Province?.province} | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>

      <EFormsHeaderSection
        image={dealerData?.prefixUrl + dealerData?.serviceApointment_image_url}
      />
      <div className="p-0 m-0 row w-100 justify-content-center align-items-center ">
        <div className="p-0 m-0 col-11 mt-4 col-xl-10 px-xl-0">
          <div
            className="p-0 m-0 row w-100  p-3  justify-content-center align-items-start"
            style={{ backgroundColor: "#fff" }}
          >
            <div className="q p-0 m-0 pb-5 col-12 col-lg-8 px-2 pr-4">
              <>
                <div className="eforms_title pb-3">
                  Welcome to Our Financing Department
                </div>
                <div className="p-0 m-0 finance_us_title">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: findScript(dealerData?.financial_desc),
                    }}
                  />
                  <div className="d-block d-lg-none p-0 m-0 w-100 col-12 col-lg-4 pb-3">
                    <div className=" p-0 m-0 col-12 mt-2 ">
                      <Link href={"/forms/finance/calculator"}>
                        <a
                          style={{ height: "50px !important" }}
                          className=" btn blue_button col-12 d-flex justify-content-center align-items-center py-3"
                        >
                          Calculate Payment
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="row w-100 m-0 p-0 mt-4 d-flex">
                    <Link href="/forms/finance">
                      <a className="col-8 col-lg-5 m-0 p-0">
                        <button className="btn blue_button px-2 py-1 ">
                          APPLY NOW &nbsp;
                          <FaChevronRight />
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </>{" "}
            </div>

            <div className="d-none d-lg-block pl-lg-3 p-0 m-0 w-100 col-12 col-lg-4">
              <div className=" p-lg-0 m-0 px-xl-2 col-12 mt-5 ">
                <Link href={"/forms/finance/calculator"}>
                  <a
                    style={{ height: "50px !important" }}
                    className=" btn blue_button col-12 d-flex justify-content-center align-items-center py-3"
                  >
                    Calculate Payment
                  </a>
                </Link>
              </div>
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

export default FinanceMain;
