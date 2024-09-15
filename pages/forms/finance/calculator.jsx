import CalculatoreCustomerWeb from "../../../components/common/web/calculator/calculator";
import EFormsHeaderSection from "../../../components/common/web/eform-header/eforms_header_section";
import Head from "next/head";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
const FinancialCalculatorPage = (props) => {
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
        <meta
          name="description"
          content={`Used Car financing in ${dealerData?.business_city?.Province?.province}, ${dealerData?.business_city?.Province?.province}. ${dealerData?.business_city?.city}. Apply for a Car Loan Today.`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Best used cars, Car financing, Finance, Calculator Finance, Calculate Payment, `}
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
      <div  className="row w-100 p-0 m-0">
        <EFormsHeaderSection
          title=""
          desc=""
          image={
            dealerData?.prefixUrl + dealerData?.orderPart_image_url
          }
          showImage={true}
        />
      </div>

      <div className="p-0 m-0 w-100 row justify-content-center">
        <div className="row col-12 col-xl-11">
          <div className="px-0 px-md-5 py-3 m-0 row w-100 justify-content-center align-items-start ">
            <div
              className={" p-4 m-0 w-100 col-12 col-lg-8 tabel_title"}
              style={{ backgroundColor: "#fff" }}
            >
              <EFormsHeaderSection
                title="Car Loan Calculator"
                // desc={dealerData?.financial_desc}
                image={dealerData?.financial_image_url}
                showImage={false}
              />
              <h4 className="calc-desc py-3">
                Estimate your car loan payment with easy to use car loan
                calculator
              </h4>
              <CalculatoreCustomerWeb />
            </div>
            <div className="pl-lg-3 p-0 m-0 w-100 col-12  col-lg-4 ">
              <div className=" p-lg-0 m-0 px-xl-2 ">
                <EformsConatctInfo dealerData={dealerData} />
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
export default FinancialCalculatorPage;
