import React from "react";
import { findScript } from "../../../utils/common/html_script";
import Category_title from "../../common/layout/header/category_title";

const AboutUSHome = (props) => {
  const { dealerData } = props;
  return (
    <>
      <div
        className="ba_img_handler-welcome col-12 py-5 mt-4 mt-sm-0 row m-0 component_container"
        
      >
        <div className="p-0 m-0 col-12 col-lg home_welcome-txt_container-7">
          <div className=" m-0 ">
            <div
              className="px-1 px-md-3  pb-2 mb-4 m-0 row w-100 flex-column align-items-start justify-content-start"
            >
             
        <Category_title title={`Welcome to ${+dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}` } />

            </div>
            <div
              className="px-1 px-md-3 pb-1 m-0 welcome_text-7 text_div__container-7"
              style={{ color: "#333",  lineHeight: "27px", fontSize:'13px' }}
              dangerouslySetInnerHTML={{
                __html: findScript(dealerData?.business_caption),
              }}
            />

          </div>

        </div>
        <div className="p-0 m-0 px-4 col-12 col-lg d-none d-lg-block">
          <img src={dealerData?.prefixUrl + dealerData?.welcome_image_url} className="w-100" alt="" />
        

        </div>
      <hr className="w-100" style={{borderBottom:'1px solid #333'}}/>
      </div>

    </>
  );
};

export default AboutUSHome;
