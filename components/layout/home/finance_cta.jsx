import React  from "react";
import Link from "next/link";
import { findScript } from "../../../utils/common/html_script";
const FinanceCta = props => {
  const { dealerData } = props;
  return (
    <>
      
      <div className="p-0 m-0 row w-100">
        <div className="p-0 m-0 w-100 get_fast_back p-3 px-sm-5 d-flex flex-column justify-content-center align-items-center ">
          <div className="p-0 m-0 col-12 col-md-11 col-lg-9 py-4 px-1 px-md-3 px-lg-5 h-2 d-flex flex-column align-items-center">
            <div className="px-4 pt-3 pb-4 m-0 row  get_fast_title get_fast_div__container text-center ">
              Get fast & easy approval online!
            </div>
            <div
              className="px-4 pb-2 m-0 get_fast_text get_fast_div__container text-center"
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.business_caption),
              }}
            />
            <div className="d-flex row w-100 justify-content-center align-items-center pb-4 m-0 get_fast_div__container">
              <Link href="/forms/finance">
                <a>
                  <div className=" m-0 p-2 px-3 w-100  d-flex justify-content-center align-items-center button_style_slider_finance ">
                    <div
                      className="py-1 px-3 linkto_button d-flex align-items-start justify-content-start"
                      style={{ color: "#000" }}
                    >
                      APPLY NOW
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

export default FinanceCta;
