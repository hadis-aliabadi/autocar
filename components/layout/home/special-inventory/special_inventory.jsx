import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Thumbs, Autoplay } from "swiper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
SwiperCore.use([Pagination, Thumbs, Autoplay]);

import SpecialInventoryCars from "./specialinventory_cars";
import Link from "next/link";

const SpecialInventorySlider = (props) => {
  const {
    specialCars,
    bodyStyleData,
    transmissionData,
    dealerData,
    title,
    link,
  } = props;

  const prevref = useRef(null);
  const nextref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="m-0 p-0 w-100 col-11 col-lg-10"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="p-0 m-0 col-12 pb-3 about_us_header_section d-flex justify-content-start">
        <h4 className="p-0 m-0 py-1 text-dark my-5">Find Your Next Vehicle at {dealerData?.bussiness_name}</h4>
      </div>

      <div
        className="p-0 col-12 pt-0 m-0 home_special_swiper-container d-flex justify-content-center"
        // style={{ overflow: "hidden" }}
      >
        {" "}
        <Swiper
          effect={"slide"}
          loop={specialCars.length > 4 ? true : false}
          grabCursor={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Pagination]}
          onSlideChange={(props) => {
            setActiveIndex(props.activeIndex);
          }}
          className=" row w-100  d-flex justify-content-center align-items-center"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            position: "relative",
            padding: 0,
            margin: 0,
          }}
          navigation={{
            prevEl: prevref.current ? prevref.current : ".prev",
            nextEl: nextref.current ? nextref.current : ".next",
            disabledClass: "swiper-button-prev,swiper-button-next",
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevref.current;
            swiper.params.navigation.nextEl = nextref.current;
            // swiper.navigation.update();
          }}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 3,
            },
            824: {
              slidesPerView: 4,
            },
            1224: {
              slidesPerView: 6,
            },
          }}
        >
          {specialCars?.map((vehicle, index) => {
            return (
              <>
                <SwiperSlide
                  key={`specialSlider${index}`}
                  // className="p-0 m-0 col-lg-4 col-md-6 col-12  px-md-2 "
                >
                  <div className="p-2">
                    <SpecialInventoryCars
                      index={index}
                      activeIndex={activeIndex}
                      item={vehicle}
                      bodyStyleData={bodyStyleData}
                      transmissionData={transmissionData}
                      type="1"
                      dealerData={dealerData}
                    />
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialInventorySlider;
