import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useRef } from "react";
import HomeAdvanceSearch from "../home_advance_search";
import Link from "next/link";
SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);

const HomePooster = (props) => {
  const { media, dealerData, vehicleDataForSearch, advanceSearchData } = props;
  const prevref = useRef(null);
  const nextref = useRef(null);

  const sliderText = [
    {
      buttonLink: "/cars",
    },
    {
      buttonLink: "/forms/finance",
    },
    {
      buttonLink: "/forms/finance",
    },
  ];
  return (
    <div
      className="home_pooster_div_container p-0 m-0 w-100"
      style={{ zIndex: 5 }}
    >
      <Swiper
        className=" w-100"
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
          swiper.navigation.update();
        }}
        pagination={true}
        // autoplay={{
        //   delay: 5000,
        // }}
        slidesPerView={1}
      >
        {media?.map((item) => {
          let index = props?.slider?.rows?.indexOf(row);

          return (
            <SwiperSlide
              key={`HOOME_POOSTER_${index}`}
              className="h-100 p-0 m-0 w-100 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="home_pooster_div_img_container_home_slider w-100 d-flex flex-column align-items-center justify-content-start">
                <Link href={sliderText[0]?.buttonLink}>
                  <a>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={dealerData?.prefixUrl + item?.image_name}
                    />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default HomePooster;
