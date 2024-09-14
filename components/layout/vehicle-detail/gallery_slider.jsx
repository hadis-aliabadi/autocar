import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";

SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const DetaileProductSliderCustomrWeb = (props) => {
  const { vehicleData, data2, dealerData, data } = props;
  const [activeIndexSlider, setActiveIndexSlider] = useState(0);
  const [oddEvenImages, setOddEvenImages] = useState([]);

  useEffect(() => {
    props?.data2?.map((img, index) => {
      if (index % 2 === 1) {
        setOddEvenImages((prev) => [
          ...prev,
          {
            oddImg: `${dealerData?.prefixUrl}${img?.media_src}`,
            evenImg: `${dealerData?.prefixUrl}${
              props?.data2[index + 1]?.media_src
            }`,
            oddImgNumber: index,
            evenImgNumber: index + 1,
          },
        ]);
      } else return null;
    });
    // .filter((imgis) => imgis);
  }, []);
  const {
    Vehicle: { model_year, make, model, trim },
  } = vehicleData;
  const soldImage = dealerData?.soldImg?.src;
  const images = props?.data2?.map((img) => ({
    original: `${dealerData?.prefixUrl}${img.media_src}`,
    thumbnail: `${dealerData?.prefixUrl}${img.media_src}`,
    originalHeight: "720px",
    originalWidth: "520px",
  }));

  const comingSoonImage =[
    {
      original: `${dealerData?.prefixUrl}/hillz/thumb-coming_soon.jpg`,
      thumbnail: `${dealerData?.prefixUrl}/hillz/thumb-coming_soon.jpg`,
      originalHeight: "720px",
      originalWidth: "520px",
    }
  ]
  const mobileimages = props?.data2?.map((img) => ({
    original: `${dealerData?.prefixUrl}${img.media_src}`,
    thumbnail: `${dealerData?.prefixUrl}${img.media_src}`,
    originalHeight: "520px",
    originalWidth: "520px",
  }));

  const [loanTerm, setLoanTerm] = useState();
  const [intRate, setIntRate] = useState();
  const [downPayment, setDownPayment] = useState();
  const [tradeValue, setTradeValue] = useState();
  const [token, setToken] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const prevref = useRef(null);
  const nextref = useRef(null);
  const [fullscreen, setFullscreen] = useState(false);
  const calc = () => {
    let data = (
      (parseFloat(intRate) / 1200 +
        parseFloat(intRate) /
          1200 /
          (Math.pow(1 + parseFloat(intRate) / 1200, parseInt(loanTerm)) - 1)) *
      (parseInt(vehiclePrice) -
        (parseInt(downPayment) + parseInt(tradeValue) || 0))
    ).toFixed(2);
    setResults(data);

    // return <p>{results}</p>;
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    setToken(getToken());
  }, []);

  const formik = useFormik({
    initialValues: {
      dealershld: 1,
      f_name: "",
      l_name: "",
      mobile: "",
      message: "",
      email: "",
      status: 1,
    },
    validationSchema: Yup.object({
      dealershld: Yup.number(),
      f_name: !token && Yup.string().required(),
      l_name: !token && Yup.string().required(),
      email: !token && Yup.string().email().required(),
      mobile: !token && Yup.number().required(),
      message: !token && Yup.string().required(),
    }),
    onSubmit: submitHandler,
  });

  async function submitHandler(values) {
    const token = getToken();
    const config = token
      ? {
          Headers: {
            Authorization: token,
          },
        }
      : undefined;

    try {
      const res = await agent.contactUs.post(values, config);
    } catch (err) {
      console.log(err);
    }
  }
  const modalImageClose = () => {
    setFullscreen(false);
  };
  function isEven(n) {
    return n % 2 == 0;
  }

  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }
  return (
    <>
      <div className="mySwiper3 pr-md-2 pr-sm-0 w-100 p-0 m-0 row justify-content-start align-items-center ">
        <div className="p-0 m-0 col-12" style={{ position: "relative" }}>
          <div className="p-0 m-0 d-none d-md-flex col-md-12 justify-content-center align-items-center">
              <ImageGallery
                className="w-100"
                thumbnailPosition="bottom"
                items={images?.length !== 0 ?images : comingSoonImage}
                lazyLoad={true}
              />
            {props?.data?.vehicle_status === 7 ||
            props?.data?.vehicle_status === 6 ? (
              <div className="overly-ribbon-wrapper">
                <div className="ribbon-sold d-flex align-items-center justify-content-center">
                  SOLD
                </div>
              </div>
            ) : props?.data?.vehicle_status === 5 ? (
              <>
                {" "}
                <div className="ribbon-wrapper">
                  {" "}
                  <div className="ribbon ribbon-pending">Pending </div>{" "}
                </div>
              </>
            ) : props?.data?.is_coming_soon ? (
              <div className="ribbon-wrapper">
                <div className="ribbon ribbon-comingsoon">Coming Soon</div>
              </div>
            ) : props?.data?.special_price != 0 ? (
              <>
                <div className="ribbon-wrapper">
                  <div className="ribbon ribbon-special-price">
                    Special Price
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="p-0 m-0 col-12 d-md-none">
            {props?.data?.vehicle_status === 7 ||
            props?.data?.vehicle_status === 6 ? (
              <div className="overly-ribbon-wrapper">
                <div className="ribbon-sold d-flex align-items-center justify-content-center">
                  SOLD
                </div>
              </div>
            ) : props?.data?.vehicle_status === 5 ? (
              <>
                {" "}
                <div className="ribbon-wrapper">
                  {" "}
                  <div className="ribbon ribbon-pending">Pending </div>{" "}
                </div>
              </>
            ) : props?.data?.is_coming_soon ? (
              <div className="ribbon-wrapper">
                <div className="ribbon ribbon-comingsoon">Coming Soon</div>
              </div>
            ) : props?.data?.special_price != 0 ? (
              <>
                <div className="ribbon-wrapper">
                  <div className="ribbon ribbon-special-price">
                    Special Price
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
              <ImageGallery
                className="w-100"
                thumbnailPosition="bottom"
                items={images?.length !== 0 ?images : comingSoonImage}
                lazyLoad={true}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetaileProductSliderCustomrWeb;
