import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";
import OperationHoures from "./operationhouers";
import { findScript } from "../../../../utils/common/html_script";
import {
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import { FaXTwitter } from "react-icons/fa6";
import Location from "../../../layout/directions/location";

const FooterTabs = ({ timeWork, data }) => {
  return (
    <div className="w-100 d-none d-sm-block p-0 m-0 footer_tab_container">
      {" "}
      <Tabs
        defaultActiveKey="Hours of Operation"
        id="uncontrolled-tab-example"
        className="p-0 m-0 col-12 d-flex justify-content-start style-tab mb-4 align-items-center text-decoration-none text-center"
      >
        {/* Start Tab 1 */}

        <Tab
          eventKey="Hours of Operation"
          title="Hours of Operation"
          className="p-0 m-0 mt-3 w-100 text-decoration-none tabel_scroll tab_title"
        >
          <div className="p-0 m-0 col-12 col-md-12  col-xl-11 row flex-lg-row px-4 pt-xl-3  justify-content-center">
            <div className="p-0 m-0 row w-100 col-lg-6 col-md-6 p-lg-2 col-6 mt-3 mt-lg-0 px-lg-4 ">
              <div className="p-0 m-0  ">
                <OperationHoures timeWork={timeWork} type="1" />
              </div>
            </div>
            <div className="p-0 m-0 row w-100 col-lg-6 col-6 mt-3 mt-lg-0 py-lg-3">
              <div className="p-0 m-0 col-12 col-lg-12">
                <div className="p-0 m-0  d-flex flex-column justify-content-lg-between col-12">
                  <div>
                    <div className="p-0 m-0 d-flex flex-column justify-content-start align-items-center align-items-center w-100">
                      <div className="FOOTER-LOGOS footer-images row w-100 p-0 m-0 py-3 d-flex flex-row justify-content-start  w-100 row  ">
                        <img
                          className=" my-1  col-4 w-100"
                          src={data?.prefixUrl + data?.logo_url}
                        />

                        {/* <img
                          className=" my-1  col-2 w-100"
                          src="/images/footer/autoTraderLogo2022.png"
                        />
                        <img
                          className=" my-1  col-2 w-100"
                          src="/images/footer/autoTraderLogo2021.png"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab>

        {/* Start Tab 2 */}

        <Tab
          eventKey="Contact Us"
          title="Contact Us"
          className="p-0 m-0 text-decoration-none"
        >
          <div className="p-0 m-0 col-12 col-md-12  col-xl-11 row flex-lg-row px-4 pt-xl-3  justify-content-center">
            <div className="p-0 m-0 row w-100 col-lg-6 col-md-6 col-6 mt-3 mt-lg-0 p-lg-3">
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
                          <FaMapMarkerAlt color="#e74c3c" className="" />
                          <span
                            className="p-0 m-0 px-2 "
                            style={{ color: "#000" }}
                          >
                            {data?.business_street}
                            {", "}
                            {data?.business_city?.city}
                            {", "}
                            {data?.business_city?.Province?.province ===
                            "Alberta"
                              ? "Ab"
                              : data?.business_city?.Province?.province}
                            {", "}
                            {data?.business_postal}
                          </span>
                        </a>
                      </Link>
                    </div>
                    <div className=" p-0 m-0 d-flex py-1 footer_desc_container justlfy-content-center align-items-center ">
                      <FaPhone color="#e74c3c" className="" />
                      <a
                        href={phonenumberConvertor(data?.business_phone)}
                        rel="noopener noreferrer"
                        className="p-0 m-0 text-decoration-none px-2 "
                        style={{ color: "#000" }}
                      >
                        {data?.business_phone}
                      </a>
                    </div>

                    {data?.business_phone2 ? (
                      <h5 className="footer_desc_container py-1">
                        <a
                          href={phonenumberConvertor(data?.business_phone2)}
                          className="text-decoration-none footer_desc_container"
                        >
                          Sales: {data?.business_phone2}
                        </a>
                      </h5>
                    ) : null}
                    {data?.business_fax ? (
                      <h5 className="footer_desc_container py-1">
                        Fax: {data?.business_fax}
                      </h5>
                    ) : null}
                  </div>
                  <div className=" p-0 m-0 d-flex align-items-center justify-content-start mt-2">
                    <div className="p-0 m-0 d-flex ">
                      {data?.facebook && (
                        <Link href={`${data?.facebook}`}>
                          <a className="p-0 px-1 m-0 " target="_blank">
                            <div className="shadow-lg footer_social p-2 facebook_hover rounded-sm">
                              <FaFacebookF size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.instagram && (
                        <Link href={`${data?.instagram}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 insta_hover rounded-sm">
                              <FaInstagram size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.google_plus && (
                        <Link href={`${data?.google_plus}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 insta_hover rounded-sm">
                              <FaGooglePlus size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.youtube && (
                        <Link href={`${data?.youtube}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 youtube_hover rounded-sm">
                              <FaYoutube size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.linkedin && (
                        <Link href={`${data?.linkedin}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 youtube_hover rounded-sm">
                              <FaLinkedin size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.tik_tok && (
                        <Link href={`${data?.tik_tok}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 tiktok_hover rounded-sm">
                              <FaTiktok size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                      {data?.twitter && (
                        <Link href={`${data?.twitter}`}>
                          <a className="p-0 px-1 m-0" target="_blank">
                            <div className="shadow-lg footer_social p-2 twitter_hover rounded-sm">
                              <FaXTwitter size={22} color="#fff" />
                            </div>
                          </a>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 m-0 row col-lg-6 col-6 p-lg-2 ">
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
            </div>
          </div>
        </Tab>

        {/* start Tab 3 */}

        <Tab
          eventKey="Where to Find Us"
          title="Where to Find Us"
          className="p-0 m-0 text-decoration-none"
        >
          <Location dealerData={data} type="0" />
        </Tab>
      </Tabs>
    </div>
  );
};

export default FooterTabs;
