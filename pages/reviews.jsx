import Head from "next/head";
import GoogleReviewsHomePage from "../components/layout/home/Googlereviews";
import { GoogleReviewData } from "../data/google_review_data";
import { FaStar } from "react-icons/fa";

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
      <div className="p-5">
        <h1 style={{fontSize:'28px'}} className="p-2 font-weight-bold ">Reviews</h1>
        <div
          style={{ backgroundColor: "#f6f6f6" }}
          className="p-0 col-12 row justify-content-center  m-0 w-100 "
        >
          {/* <div className="col-12 d-flex p-0 m-0 justify-content-center overflos-container-slider py-5 ">
            <GoogleReviewsHomePage />
          </div> */}
          
          <div className="container mt-5">
          {GoogleReviewData?.map((review, index) =>  (
              <div className="row w-100 mb-5">
                <div className="col-12 col-lg-2 p-0 ">
                  <div className="col d-flex justify-content-start">
                          <img
                            className=""
                            src={"/images/google-plus.png"}
                            style={{
                              height: "50px",
                              width: "50px",
                            }}
                          />
                  </div>
                  <div className="col ">
                          <div className="d-flex justify-content-start font-weight-bold mt-2 ">
                            {review?.full_name}
                          </div>
                          <div className="p-0 m-0  mt-2 mb-sm-0 d-flex alige-items-center  justify-content-start  text-dark">
                            {Array(+review?.rate)
                              ?.fill("")
                              ?.map(() => {
                                return (
                                  <FaStar
                                    size={"20px"}
                                    color="gold "
                                    className=""
                                  />
                                );
                              })}
                          </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8 p-5 mt-2 mt-lg-0 at-ts-right" style={{background:'#e4e4e4'}}>
                  {review?.desc}
                </div>
              </div>
            ))
          }
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
