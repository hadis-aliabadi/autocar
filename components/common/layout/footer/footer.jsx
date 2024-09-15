import React, { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaGooglePlus,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import OperationHoures from "./operationhouers";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import { findScript } from "../../../../utils/common/html_script";
import { FaXTwitter } from "react-icons/fa6";

const FooterCustomerWeb = React.forwardRef((props, ref) => {
  const { data, timeWork } = props;
  const [seeMore, setSeeMore] = useState(false);
  const currentYear = new Date().getFullYear();
  const scrollTop = () => {
    ref.current.scrollIntoView(true);
  };

  const socialMediaData = [
    // { platform: "business_phone", icon: FaPhone },
    { platform: "instagram", icon: FaInstagram },
    { platform: "facebook", icon: FaFacebookF },
    { platform: "tik_tok", icon: FaTiktok },
    { platform: "youtube", icon: FaYoutube },
    { platform: "twitter", icon: FaXTwitter },
    { platform: "google_plus", icon: FaGooglePlus },
    // { platform: "owner_email", icon: FaEnvelope },
  ];
  return (
    <>
      {/* <div className="p-0 m-0 w-100 footer_contact_bg">
        <img className="w-100 h-100" src="/images/footer/Patern.png" alt="" />
      </div> */}
      
      <div
        className="p-0 m-0 footer_div_container row g-0 w-100 px-2"
        style={{ backgroundColor: "#000" }}
      >
        
          <div className=" col-12 col-lg-6  p-0">
            <iframe
              allow="geolocation"
              // src={props?.dealerData?.map_url}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2010.0227313930598!2d-79.65676776323068!3d43.71163059681039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3c08a677e5b3%3A0x899998ffd7d14ae2!2s7454+Airport+Rd+Unit+F%2C+Mississauga%2C+ON+L4T+2H5!5e0!3m2!1sen!2sca!4v1565149209140!5m2!1sen!2sca"
              frameborder="0"
              width="100%"
              height='100%'
              className="border-0 w-100 home_page_border_radius-class"
              aria-hidden="false"
              tabindex="0"
              id="iframe"
              gestureHandling="none"
            />
          </div>
          <div className="col-12 col-lg-6 p-0">
            <div
              className="row w-100 p-0 px-2 px-md-0 justify-content-center"
            
            >
              <div className="p-0 m-0 col-12 col-md-12  col-xl-10 row  footer-style-in-tablet pt-xl-3  justify-content-center">
                {/* <div className="p-0 m-0 row col-lg-3 col-12 p-lg-2 ">
                  <div className="p-0 m-0 col-12   pr-2">
                    <h3 className="p-0 m-0 pb-2 footer_title_container">
                      Dealership
                    </h3>
                    <div
                      className="p-0 m-0  footer_about-us-text-limit   "
                      dangerouslySetInnerHTML={{
                        __html: findScript(data?.contactUs_desc),
                      }}
                    />
                    <div className="p-0 m-0 pt-2 d-flex flex-row justify-content-start">
                      <Link href="/about-us">
                        <a className=" py-2 m-0 footer_desc_container">
                          Read More...
                        </a>
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div className="p-0 m-0 row w-100 col-lg-3 col-md-6 p-lg-2 col-12 mt-3 mt-lg-0 px-lg-4 ">
                  <div className="p-0 m-0  ">
                    <OperationHoures timeWork={timeWork} type="1" />
                  </div>
                </div>
                <div className="p-0 m-0 row w-100 col-lg-3 col-md-6 col-12 mt-3 mt-lg-0 p-lg-2">
                  <div className="p-0 m-0 col-12 col-lg-12">
                    {" "}
                    <div className="p-0 m-0  d-flex flex-column justify-content-lg-between col-12">
                      <div>
                        <div className="p-0 m-0 d-flex flex-column justify-content-start align-items-start">
                          <h3 className="p-0 m-0 pb-2 footer_title_container text-left">
                            Our Contacts
                          </h3>
                        </div>
                        <div className=" p-0 m-0 py-1 d-flex footer_desc_container justify-content-between align-items-between ">
                          <Link href="/directions">
                            <a>
                              {" "}
                              <FaMapMarkerAlt color="#fff" className="" />
                              <span
                                className="p-0 m-0 px-2 "
                                style={{ color: "#fff" }}
                              >
                                {data?.business_street}
                                {", "}
                                {data?.business_city?.city}
                                {", "}
                                {data?.business_city?.Province?.province ===
                                "Ontario"
                                  ? "ON"
                                  : data?.business_city?.Province?.province}
                                {", "}
                                {data?.business_postal}
                              </span>
                            </a>
                          </Link>
                        </div>
                        {data?.business_phone2 ? (
                          <div className=" p-0 m-0 d-flex py-1 footer_desc_container justlfy-content-center align-items-center ">
                            <FaPhone color="#fff" className="" />
                            <a
                              href={phonenumberConvertor(data?.business_phone2)}
                              rel="noopener noreferrer"
                              className="p-0 m-0 text-decoration-none px-2 "
                              style={{ color: "#fff" }}
                            >
                              {data?.business_phone2}
                            </a>
                          </div>
                        ) : null}

                        <div className=" p-0 m-0 py-1 d-flex footer_desc_container justify-content-between align-items-between ">
                          <Link href="/directions">
                            <a>
                              {" "}
                              <FaMapMarkerAlt color="#fff" className="" />
                              <span
                                className="p-0 m-0 px-2 "
                                style={{ color: "#fff" }}
                              >
                                {data?.business_caption}
                              </span>
                            </a>
                          </Link>
                        </div>
                        <div className=" p-0 m-0 d-flex py-1 footer_desc_container justlfy-content-center align-items-center ">
                          <FaPhone color="#fff" className="" />
                          <a
                            href={phonenumberConvertor(data?.business_phone)}
                            rel="noopener noreferrer"
                            className="p-0 m-0 text-decoration-none px-2 "
                            style={{ color: "#fff" }}
                          >
                            {data?.business_phone}
                          </a>
                        </div>

                        {data?.business_fax ? (
                          <h5 className="footer_desc_container py-1">
                            Fax: {data?.business_fax}
                          </h5>
                        ) : null}
                      </div>
                      <div className=" p-0 m-0 d-flex align-items-center justify-content-start mt-2">
                        <div className="p-0 m-0 d-flex flex-wrap  justify-content-end align-items-center header__social-container ">
                          {socialMediaData.map(
                            (item, index) =>
                              data[item.platform] && (
                                <Link
                                  href={`${
                                    item.platform.includes("email") ? "mailto:" : ""
                                  }${data[item.platform]}`}
                                  key={data[item.platform]}
                                >
                                  <a
                                    className="header__social-container mx-1"
                                    target="_blank"
                                  >
                                    <div className="p-0 m-0 p-2 header__social header__social-icon ">
                                      <item.icon size={15} />
                                    </div>
                                  </a>
                                </Link>
                              )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="p-0 m-0 row w-100 col-lg-3 col-12 mt-3 mt-lg-0 py-lg-3">
                  <div className="p-0 m-0 col-12 col-lg-125">
                    <div className="p-0 m-0  d-flex flex-column justify-content-lg-between col-12">
                      <div>
                        <div className="p-0 m-0 d-flex flex-column justify-content-start align-items-start align-items-start">
                          <img
                            src="/images/footer/logo-omvic.png"
                            alt="OMVIC"
                            className=" mb-4 "
                            style={{ maxWidth: "200px" }}
                          />
                          <img
                            src="/images/footer/logo-ucda.png"
                            alt="UCDA"
                            className=" "
                            style={{ maxWidth: "200px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
});
export default FooterCustomerWeb;
