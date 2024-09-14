import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Thumbs,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper";
import { CDN_BASE_URL } from "../../../../constant/base";
import { FaStar } from "react-icons/fa";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination, EffectCoverflow]);
const CoverFlowSlider = ({
  data = [],
  limit = undefined,
  defaultImage = false,
  hasButton = undefined,
  href = undefined,
  buttonTittle = undefined,
}) => {
  return (
    <>
      <div
        className="d-flex justify-content-center w-100 p-0 m-0 px-2 px-md-5"
        style={{ position: "relative" }}
      >
        <Swiper
          className="p-0 m-0 w-100 pb-5"
          pagination={true}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            360: {
              slidesPerView: 1,
            },
          }}
        >
          {data?.map((item) => {
            return (
              <SwiperSlide key={`itemsCardInfo2${item?.id}`}>
                <div className="p-0 m-0 px-3 d-flex align-items-center justify-content-center position-relative">
                  <div className="p-1 m-0 w-100 coverflow_slider_div__container ">
                    <div className="p-0 m-0 d-flex flex-column align-items-end justify-content-between pb-3">
                      <div
                        className="p-0 py-4 px-4 m-0 d-flex align-items-center justify-content-between w-100"
                        style={{ backgroundColor: "#eeeeee" }}
                      >
                        <h3
                          className="p-0 m-0 coverflow_slider_h3__style"
                          style={{ whiteSpace: "nowrap" , color:"#000"}}
                        >
                          {item?.name}
                        </h3>

                        <div className="p-0 m-0 mb-2 mb-sm-0 d-flex alige-items-center justify-content-center">
                          {Array(+item?.rate)
                            ?.fill("")
                            ?.map(() => (
                              <FaStar className="mx-1" color="#D8A31C" />
                            ))}
                        </div>
                      </div>
                      <p
                        className={`${
                          limit && "coverflow_slider_p__style_limit"
                        } m-0 my-3 px-2 px-md-3 coverflow_slider_p__style`}
                      >
                        {item?.description}
                      </p>
                      {item?.email && (
                        <span className="coverflow_slider_email_span__style">
                          <span className="coverflow_slider_email_title_span__style">
                            My E-mail is
                          </span>{" "}
                          <span>{item?.email}</span>
                        </span>
                      )}
                      {hasButton && (
                        <div className="p-0 m-0 px-3">
                          <a
                            className="p-0 m-0 btn home_inevntpry_search_button__search d-flex align-items-center justify-content-center px-4 py-2"
                            target="_blank"
                            rel="noreferrer noopener"
                            href={href}
                          >
                            {buttonTittle}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default CoverFlowSlider;
