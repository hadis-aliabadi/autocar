import { findScript } from "../../../../utils/common/html_script";

const EFormsHeaderSection = ({
  title = "",
  desc = "",
  image = "",
  showImage = true,
  className = "",
  height,
}) => {
  return (
    <div
      className={` p-0 m-0 py-0 w-100 row d-flex flex-column justify-content-center align-items-center ${className}`}
    >
      <div
        className="p-0 m-0 w-100 col-12 justify-content-start align-items-start"
        style={{ position: "relative" }}
      >
        <div className="p-0 m-0 px-0 w-100">
          {showImage && (
            <div className="p-0 m-0 eforms_header_img__container">
              <img
                src={image}
                alt={image}
                style={{
                  height: height,
                  left: 0,
                }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="p-0 m-0 d-flex col-12 col-lg-12 flex-column align-items-start justify-content-start eform_text_pos">
        <div className="p-0 m-0 eform_desc_div">
          <h2 className=" my-2 m-0 p-0 mb-2 d-flex  eforms_title align-items-start justify-content-start text-black ">
            {title}
          </h2>
          {desc && (
            <div
              className="p-0 m-0 mb-3 eforms_desc text-dark"
              dangerouslySetInnerHTML={{
                __html: findScript(desc),
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EFormsHeaderSection;
