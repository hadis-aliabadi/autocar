import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaAngleDown,
  FaInstagram,
  FaYoutube,
  FaGooglePlus,
  FaTiktok,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { PiMapPinLineLight } from "react-icons/pi";
import { MdEmail, MdOutlinePhoneEnabled } from "react-icons/md";

import { TiLocationOutline } from "react-icons/ti";
import { FaBurger, FaLocationPin, FaXTwitter } from "react-icons/fa6";
import { TfiAlarmClock } from "react-icons/tfi";

import { FiPhone } from "react-icons/fi";

import NavLink from "./NavLink";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import { useRouter } from "next/router";
import MenuLinks from "../../../../data/menuData";

const HeaderCustomerWeb = React.forwardRef((props, ref) => {
  const { data } = props;
  const [showMobile, setShowMobile] = useState(false);
  const [ourHours, setOurHours] = useState(false);
  const [parent, setParent] = useState(undefined);

  const [bgColor, setBgColor] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleScroll() {
      if (
        router.pathname === "/asd"
          ? document.documentElement.scrollTop < 700
          : document.documentElement.scrollTop < 80
      ) {
        setBgColor(false);
      } else {
        setBgColor(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialMediaData = [
    // { platform: "business_phone", icon: FaPhone },
    { platform: "instagram", icon: FaInstagram },
    { platform: "facebook", icon: FaFacebookF },
    { platform: "tik_tok", icon: FaTiktok },
    { platform: "youtube", icon: FaYoutube },
    { platform: "twitter", icon: FaXTwitter },
    { platform: "google_plus", icon: FaGooglePlus },
  ];
  return (
    <>
      <div
        className={` p-0 m-0 col-12 header_background_style_1   ${
          router.pathname === "/asd"
            ? "mb-0 home_header_position"
            : "bg-dar header_background_black"
        }`}
        ref={ref}
      >
        <div
          className="p-0  col-12 m-0 d-lg-none row"
          style={{ position: "relative" }}
        >
          <div className="d-flex flex-column flex-shrink justify-content-between align-items-center w-100 px-2 px-sm-4 ">
            <div className="p-0 m-0 py-2 d-flex justify-content-center text-center w-100">
              <Link href={"/"}>
                <a className="logo_fixed_size">
                  <img
                    className="logo_fixed_size"
                    src={`${data?.prefixUrl + data?.logo_url}`}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div
              className="d-flex w-100 justify-content-around align-items-center"
              style={{ borderTop: "1px solid #ccc" }}
            >
              <Link href="/directions">
                <a rel="noreferrer">
                  <PiMapPinLineLight
                    className="p-0 m-0 svg_icons_sizing mx-2"
                    style={{ color: "#e74c3c" }}
                  />{" "}
                </a>
              </Link>
              <div className="h-100" style={{ borderRight: "1px solid #ccc" }}>
                {" "}
              </div>
              <Link
                // href="/about-us"
                href={phonenumberConvertor(props?.data?.business_phone)}
                rel="noopener noreferrer"
              >
                <a>
                  <MdOutlinePhoneEnabled
                    className="p-0 m-0 svg_icons_sizing mx-2"
                    style={{ color: "#e74c3c" }}
                  />
                </a>
              </Link>
              <div className="h-100" style={{ borderRight: "1px solid #ccc" }}>
                {" "}
              </div>
              <div
                onClick={() => setShowMobile((prev) => !prev)}
                className="p-0 m-0 d-flex justify-content-end px-1 h-100 pr-0 pt-0 align-items-center  "
              >
                {showMobile ? (
                  <div className="p-0 m-0 py-1 mr-2 ml-4">
                    <TfiClose color="#e74c3c" size={25} />
                  </div>
                ) : (
                  <div className="p-0 m-0 py-1 mr-2 ml-4">
                    <CiMenuFries color="#e74c3c" size={25} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 m-0 row w-100 px-0 px-md-4 px-lg-5 d-flex justify-content-between align-items-center">
          {showMobile && (
            <div
              className={`p-0 m-0 pt-5 col-12 d-flex flex-column justify-content-start align-items-start mobile_menu_container ${
                showMobile && "mobile_menu_container_open py-2"
              }
              ${
                router.pathname === "/asd"
                  ? bgColor
                    ? " d-lg-none"
                    : " "
                  : bgColor
                  ? " d-lg-none"
                  : " d-lg-none"
              }
              `}
            >
              {MenuLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="p-0 m-0 d-flex w-100 justify-content-between align-items-start text-left px-4"
                  >
                    <NavLink
                      type={item?.subLinks?.length > 0 ? 0 : 1}
                      {...item}
                      isMobile
                      setShowMobile={setShowMobile}
                      showMobile={showMobile}
                      setParent={setParent}
                      parent={parent}
                      parentId={index}
                      className=" header_a__navlink header_a__navlink_mobile py-2 "
                      disabledDesktopClass={true}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
         
        <div className="p-0 m-0 d-none  d-lg-flex row w-100 justify-content-center align-items-start ">
          <div className=" col-12 p-0 m-0 row justify-content-lg-center ">
            <div className="p-0 m-0 px-2 px-lg-1 px-xl-5 col-9 col-lg-12 d-none d-lg-flex flex-column pb-lg-4 pt-lg-3">
              <div className="p-0 m-0 col-12 py-0 d-flex flex-warp justify-content-end align-items-center">
                <div className="p-0 m-0 d-flex flex-row col-12 justify-content-center flex-wrap">
                  <div className="p-0 m-0 col-12 row justify-content-between align-items-start ">
                    <div className="col-3 text-left d-flex">
                      <Link href="/">
                        <a className="">
                          <img
                            className="logo_fixed_size"
                            src={`${data?.prefixUrl + data?.logo_url}`}
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>

                    <div className="col-9 d-flex flex-column justify-content-end align-items-end  ">
                      <div className="p-0 m-0 d-flex text-center justify-content-end align-items-end ">
                        <span className="d-flex  align-items-center pr-2 pt-1">
                          <FaLocationPin
                            color="#e74c3c"
                            size={17}
                            className="mr-1"
                          />
                          <a
                            className={
                              "text-decoration-none text-white address_header text-left"
                            }
                            href="/directions"
                          >
                            {props?.data?.business_street}
                            {", "}
                            {props?.data?.business_city?.city}
                            {", "}
                            {props?.data?.business_city?.Province?.province ===
                            "Ontario"
                              ? "ON"
                              : props?.data?.business_city?.Province?.province}
                            {", "}
                            {props?.data?.business_postal}
                          </a>
                        </span>
                        <span className="d-flex contact-seperator  align-items-center px-2">
                          <MdEmail size={13} className="mr-1" color="#e74c3c" />
                          <a
                            className={"text-decoration-none address_header"}
                            href={phonenumberConvertor(data?.business_phone2)}
                          >
                            email
                          </a>
                        </span>
                        <span className="d-flex contact-seperator  align-items-center px-2">
                          <FaPhoneAlt  size={13} className="mr-1" color="#e74c3c" />
                          <a
                            className={"text-decoration-none address_header"}
                            href={phonenumberConvertor(data?.business_phone)}
                          >
                            {data?.business_phone}
                          </a>
                        </span>
                      
                      </div>
                     
                      <div className="p-0 m-0 d-flex text-center justify-content-end align-items-end ">
                        {/* TODO:check back data */}

                        {/* <span className="d-flex  align-items-center pr-2 pt-1">
                          <TiLocationOutline
                            color="#e74c3c"
                            size={17}
                            className="mr-1"
                          />
                          <a
                            className={
                              "text-decoration-none text-white address_header text-left"
                            }
                            href="/directions"
                          >
                            {props?.data?.business_caption}
                          </a>
                        </span> */}
                      </div>
                      <div className="p-0 m-0 d-flex text-center justify-content-end align-items-end ">
                      
                         {/* Social Media */}
                         <div className="d-flex justify-content-center align-items-center ">
                          <div
                            onClick={() => setShowMobile((prev) => !prev)}
                            className={`p-0 m-0  justify-content-end h-100 pr-0 pt-0 align-items-center 
                          
                          ${
                            router.pathname === "/sdf"
                              ? bgColor
                                ? " d-flex  pl-3"
                                : " d-flex  pl-3"
                              : bgColor
                              ? " d-none"
                              : " d-none"
                          }
                          `}
                          >
                            Menu
                            {showMobile ? (
                              <div className="p-0 m-0 py-1  pr-2">
                                <TfiClose color="#e74c3c" size={25} />
                              </div>
                            ) : (
                              <div className="p-0 m-0 py-1 pr-2">
                                <CiMenuFries color="#e74c3c" size={25} />
                              </div>
                            )}{" "}
                          </div>
                          {/* Social Media */}
                          <div className="d-flex">
                            {socialMediaData.map(
                              (item, index) =>
                                data[item.platform] && (
                                  <Link
                                    href={`${data[item.platform]}`}
                                    key={data[item.platform]}
                                  >
                                    <a
                                      className="p-0 px-1 m-0 header_facebook_icon"
                                      target="_blank"
                                    >
                                      <div className=" pr-1">
                                        <item.icon size={16} color="#e74c3c" />
                                      </div>
                                    </a>
                                  </Link>
                                )
                            )}
                          </div>
                        </div>
                        {/* Hours */}
                        {/* <span
                          style={{ position: "relative" }}
                          className="d-flex align-items-center contact-seperator pl-3"
                        >
                          <TfiAlarmClock
                            size={16}
                            color="#e74c3c"
                            className="mr-1"
                          />
                          <p
                            style={{ cursor: "pointer" }}
                            onClick={() => setOurHours(ourHours ? false : true)}
                            className="p-0 m-0 text-white address_header"
                          >
                            Our Hours <FaAngleDown color="#e74c3c" />
                          </p>

                          {ourHours && (
                            <div
                              className="shadow shadow-lg p-2"
                              style={{
                                backgroundColor: "#000",
                                fontWeight: "500",
                                position: "absolute",
                                top: "100%",
                                zIndex: "1fff",
                                whiteSpace: "nowrap",
                                width: "250px ",
                                color: "#fff",
                                fontSize: "11px",
                                zIndex: "99999",
                                left: "-150%",
                              }}
                            >
                              <b
                                className="p-0 m-0 border-bottom border-dark py-2"
                                style={{ fontSize: "14px" }}
                              >
                                DEALERSHIP OPENING HOURS
                              </b>
                              <p className="p-0 m-0 pt-4 d-flex w-100 justify-content-between">
                                <strong>MON - THU : </strong>{" "}
                                <p className="m-0">
                                  {data?.timeWork[0]?.startAt}{" "}
                                  {data?.timeWork[0]?.holiday === 1 ? "" : "-"}{" "}
                                  {data?.timeWork[0]?.endAt}
                                </p>
                              </p>
                              <p className="p-0 m-0 pt-2 d-flex w-100 justify-content-between">
                                <strong>FRI - SAT : </strong>{" "}
                                <p className="m-0">
                                  {data?.timeWork[5]?.startAt}{" "}
                                  {data?.timeWork[5]?.holiday === 1 ? "" : "-"}{" "}
                                  {data?.timeWork[5]?.endAt}
                                </p>
                              </p>
                              <p className="p-0 m-0 pt-2 d-flex w-100 justify-content-between">
                                <strong>SUN : </strong>
                                <p className="m-0">
                                  {data?.timeWork[6]?.startAt}{" "}
                                  {data?.timeWork[6]?.holiday === 1 ? "" : "-"}{" "}
                                  {data?.timeWork[6]?.endAt}
                                </p>
                              </p>
                            </div>
                          )}
                        </span> */}
                      
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`"  flex-wrap justify-content-between align-items-center py-2  p-0 m-0" ${
                router.pathname === "/sdf"
                  ? bgColor
                    ? " menu_bg1 d-flex col-12"
                    : " menu_bg d-none "
                  : bgColor
                  ? " menu_bg1 d-flex col-12"
                  : " menu_bg2 d-flex col-lg-7 col-xl-8 px-xl-3 pr-lg-3 pr-xl-5"
              }`}
            >
              {MenuLinks.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    type={item?.subLinks?.length > 0 ? 0 : 1}
                    {...item}
                    className=" header_a__navlink  "
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default HeaderCustomerWeb;
