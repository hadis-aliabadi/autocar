import React from "react";
import Link from "next/link";
import { findScript } from "../../../../utils/common/html_script";

const HomeWelcome = props => {
  const { dealerData } = props;

  
  return (
    <>
      <div className="p-0 m-0 row w-100">
        <div
          style={{
            backgroundImage: `url(${
              dealerData?.prefixUrl + dealerData?.welcome_image_url
            })`,
          }}
          className="p-4 m-0 w-100 welcome_back p-sm-5 d-flex flex-column justify-content-end align-items-end"
        >
          <div
            className="p-3 ml-5 py-5 col-12 col-sm-11 col-lg-6 p-1 p-md-4 p-lg-5 text_div__container d-flex flex-column align-items-center align-items-lg-start"
            // style={{ border: "2px solid #bfc2c2" }}
          >
            <h2 className="text-center text-uppercase text-lg-left wellcome-title" style={{ color: "white", fontWeight: "600" }}>
             {dealerData?.bussiness_name}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.welcome_note),
              }}
              className="pb-1 m-0 welcome_text text-left"
            />
            <div className="m-0 mt-4">
              <Link href="/forms/contact-us">
                <a>
                  <div className=" m-0 p-1 rounded col-12 et_pb_button d-flex justify-content-start align-items-center">
                    <div className="py-1  blue_button_7 px-3 d-flex align-items-center justify-content-center">
                      CONTACT US
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeWelcome;
