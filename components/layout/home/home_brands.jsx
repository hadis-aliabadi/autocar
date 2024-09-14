import React from "react";
import Link from "next/link";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Thumbs, Autoplay } from "swiper";
SwiperCore.use([Pagination, Thumbs, Autoplay]);

// Data
import { carBrandsData } from "../../../data/brandsData";
const HomeBrands = () => {
  return (
    <>
      <div className="px-0  m-0 col-12 pb-5 home_fixed_bg ">
        <div className="p-0 m-0 welcome_patern_home_1 "></div>
        <div
          className="p-0 m-0 w-100 row justify-content-center align-items-center"
          style={{ zIndex: "3" }}
        >
          <div className="p-0  m-0 col-12 justify-content-center row">
            <h2
              className=" p-3 pb-5 pb-lg-0  p-lg-5  special-title text-uppercase text-center"
              // style={{ color: "#000", fontSize: "30px", fontWeight: "900" }}
              style={{ zIndex: "3" }}
            >
              QUICK SEARCH BY{" "}
              <span className="" style={{ color: "#e74c3c " }}>
                MAKE
              </span>
            </h2>
            <div
              className="p-0 m-0 col-10 row justify-content-center align-items-center style-border"
              style={{ zIndex: "3" }}
            >
              <Swiper
                className="row w-100 mt-2 py-3"
                pagination={false}
                autoplay={{
                  delay: 3000,
                }}
                // loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  400: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
              >
                {carBrandsData.map(({ brand, image }) => (
                  <SwiperSlide key={brand}>
                    <Link href={`/cars?make=${brand}`}>
                      <a className="p-0 m-0 h-100 d-flex justify-content-center">
                        <div className="col-12 p-0 m-0 d-flex justify-content-center slider_make_search align-items-center">
                          <img src={image} className="w-50 hover_image " />
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBrands;
