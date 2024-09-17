import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import { GoogleReviewData } from "../../../data/google_review_data";

SwiperCore.use([Pagination]);
const GoogleReviewsHomePage = () => {
  return (
    <div className="py-5 p-0 col-12  background_style-googlereview googlereview ">
      <div className="w-100 d-flex flex-column justify-content-center p-0 m-0 w-100 text-center mb-5">
        <h5 className="p-0 m-0 title_our_brands_home_2 pb-3 mt-5 mt-md-0 text-center" style={{fontSize:'27px',fontWeight:'700'}}>
          Customer Reviews
        </h5>
        <p className="px-3 googlereview-desc " style={{ fontSize: "14px" }}>
          We are committed to making you a long-lasting customer and friend
        </p>
      </div>

      <Swiper
        className="p-0 m-0 w-100 pb-5 pt-2 col-10 mx-auto"
        spaceBetween={10}
        style={{
          "--swiper-navigation-color": "#3B3B3B",
          "--swiper-pagination-color": "#3B3B3B",
          position: "relative",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        pagination={true}
      >
        {GoogleReviewData?.map((review, index) => {
          return (
            <SwiperSlide>
              <div
                className=" p-0 col-12 mt-3 mb-5  google_review_card_childe-style w-100"
                // style={{ height: "370px" }}
              >
                <fieldset
                  className="google_review_card-style"
                  // style={{ height: "370px" }}
                >
                  <div className="m-0 p-5 row w-100 h-100 d-flex  justify-content-center align-items-center">
                    <div className="col-12  p-0 m-0 p-0 flex-column flex-md-row d-flex justify-content-center align-items-center ">
                      <div className="col-2 p-0 pb-3 pb-md-0">
                        <img
                          className="mx-md-3"
                          src={"/images/google-plus.png"}
                          style={{
                            height: "50px",
                            width: "50px",
                          }}
                        />
                      </div>

                      <div className="p-0 m-0 col-10 mx-md-3 title-review-tt d-flex flex-column justify-content-center    ">
                        <div className="d-flex justify-content-center ">
                          {review?.full_name}
                        </div>
                        <div className="p-0 m-0  mt-2 mb-sm-0 d-flex alige-items-center  justify-content-center  text-dark">
                          {Array(+review?.rate)
                            ?.fill("")
                            ?.map(() => {
                              return (
                                <FaStar
                                  size={"20px"}
                                  color="gold "
                                  className="mx-1"
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>

                    <div className="p-0 px-3 text-center m-0 text_limit_google_review-desc">
                      {review?.desc}
                    </div>

                    {/* <a
                      href="https://www.google.com/search?client=firefox-b-d&q=dreamfleet+l6x+1g3#lrd=0x882b474f09887a6b:0xd00337900ad37b6d,1,,,,"
                      target="_blank"
                    >
                      <span className="p-0 m-0 mt-4 link_to_google_review-style text-decoration-none justify-content-start d-flex px-3">
                        Read more at Google
                      </span>
                    </a> */}
                  </div>
                </fieldset>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GoogleReviewsHomePage;
