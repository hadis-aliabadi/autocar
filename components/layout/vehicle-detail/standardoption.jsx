import { useState } from "react";

import { FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";

const StandardOptions = props => {
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleAccrodianActive = i => {
    if (activeAccordian === i) {
      setActiveAccordian(null);
    } else {
      setActiveAccordian(i);
    }
  };
  const loopstandard =
    props?.data?.data?.Vehicle?.standard &&
    Object.entries(props?.data?.data?.Vehicle?.standard) &&
    Object.entries(props?.data?.data?.Vehicle?.standard)
      ? Object.entries(props?.data?.data?.Vehicle?.standard)
      : [];
  const lenght = loopstandard?.length;
console.log(props?.data)
  // Actions
  function splitTextOnCapitalLetters(text) {
    const result = text.replace(/([a-z])([A-Z])/g, "$1 $2");
    return result.replace(/([A-Z]{2,})([A-Z][a-z])/g, "$1 $2");
  }

  return (
    <>
      <div className="p-0 m-0 w-100">
        <h3 className="DetaileProductCustomrWeb-title-3 pb-5 ">
          Features & Options
        </h3>

        <ul className="row justify-content-start p-0 m-0 text-left col-12 col-md-12 col-lg-12 option-style">
          {props?.data?.data?.more_option.map(item => (
            <>
              <span className="option_item_style p-1 m-0 text-left col-12 col-md-6 col-lg-4">
                {splitTextOnCapitalLetters(item)}
              </span>
            </>
          ))}
        </ul>
        <div className="col-12 col-md-12 p-0 m-0">
          <div
            className={`p-0 m-0 w-100 row justify-content-end ${
              !props?.data?.data?.VehicleExtraFeatures ? "pt-5 mt-5" : "my-4"
            }`}
          >
            <div
              className="p-0 m-0  py-2 px-3 text-center w-100 d-flex justify-content-end"
              onClick={() => setShowOptions(prev => !prev)}
            >
              {!showOptions ? (
                <button
                  className="btn-details btn blue_button text-center d-flex justify-content-center "
                  style={{ fontSize: "14px" }}
                >
                  View More Options
                </button>
              ) : (
                <button
                  className="btn-details btn blue_button text-center d-flex justify-content-center "
                  style={{ fontSize: "14px" }}
                >
                  Hide All Options
                </button>
              )}
            </div>
          </div>
        </div>
        {showOptions && (
          <div className="p-0 m-0 w-100 row">
            {loopstandard?.map(options => (
              <>
                <h5 className="p-0 m-0 col-12 text-start py-2 font-weight-bold  option_detaile_title">
                  {options[0]}
                </h5>
                <ul className="p-0 m-0 row w-100 pl-3 py-3 option_detaile_text">
                  {options[1]?.map(option_detail => (
                    <>
                      <li
                        className="p-0 m-0 col-12"
                        style={{
                          fontWeight: 300,
                          fontSize: "14px",
                          color: "#000",
                        }}
                      >
                        {option_detail}
                      </li>
                    </>
                  ))}
                </ul>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default StandardOptions;
