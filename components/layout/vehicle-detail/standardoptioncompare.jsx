// import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import {
  FaPlayCircle,
} from "react-icons/fa";

// import { Accordion } from "react-bootstrap";
const StandardOptionsCompare = (props) => {
  const { compare = "undefine" } = props;
  const [activeAccordian, setActiveAccordian] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const handleAccrodianActive = (i) => {
    if (activeAccordian === i) {
      setActiveAccordian(null);
    } else {
      setActiveAccordian(i);
    }
  };

  const CustomeToggle = ({ children, onClick }) => {
    return (
      <div className=" p-0 m-0">
        <div
          style={{ backgroundColor: "#000 " }}
          className=" p-0 m-0 vehicle_options_toggle_div__container"
          onClick={onClick}
        >
          <div className="p-2 m-0 d-flex justify-content-between align-items-start">
            <span className="vehicle_options_toggle_span__style_compare">
              <FaPlayCircle className="p-0 m-0 mr-2" />
              {children}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const loopstandard =
    props?.data?.data?.Vehicle?.standard &&
    Object.entries(props?.data?.data?.Vehicle?.standard) &&
    Object.entries(props?.data?.data?.Vehicle?.standard)
      ? Object.entries(props?.data?.data?.Vehicle?.standard)
      : [];
  const lenght = loopstandard?.length;
  return (
    <div className="col-md-4 col-12 p-0 m-0 pt-3 px-2 w-100">
      {/* <div className="p-0 m-0 w-100 row">
        {props?.data?.data?.VehicleExtraFeatures.map((f) => (
          <div className="p-0 m-0 col-12 col-md-4 text-center py-2 detail_extra_feature_container">
            {f.feature_name}
          </div>
        ))}
      </div> */}

      <div className="p-0 m-0 col-12">
        <>
          <Accordion.Toggle as={CustomeToggle} eventKey="0">
            {compare === "undefined"
              ? "Options"
              : props?.data?.data?.Vehicle?.model_year +
                " " +
                props?.data?.data?.Vehicle?.make +
                " " +
                props?.data?.data?.Vehicle?.model}
          </Accordion.Toggle>
          <>
            <div className="p-0 m-0 w-100 row">
              {loopstandard?.map((options) => (
                <div className="p-0 m-0 col-12">
                  <h5
                    className="2 p-0 m-0 row w-100 text-start py-2 font-weight-bold"
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      color: "#000",
                    }}
                  >
                    {options[0]}
                  </h5>
                  <div className="p-0 m-0 row w-100 pl-3 py-3">
                    {options[1]?.map((option_detail) => (
                      <div
                        className="p-0 m-0 col-12"
                        style={{
                          fontWeight: "300",
                          fontSize: "12px",
                          color: "#000",
                          borderBottom: "1px solid #f2f2f2",
                        }}
                      >
                        {option_detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        </>
      </div>
      {showOptions && (
        <div className="p-0 m-0 w-100 row">
          {loopstandard?.map((options) => (
            <>
              <h5 className="p-0 m-0 col-12 text-start py-2 font-weight-bold">
                {options[0]}
              </h5>
              <div className="p-0 m-0 row w-100 pl-3 py-3">
                {options[1]?.map((option_detail) => (
                  <div
                    className="p-0 m-0 col-12"
                    style={{
                      fontWeight: 300,
                      fontSize: "16px",
                      color: "#000",
                    }}
                  >
                    {option_detail}
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      )}
      {/* {!showOptions ? (
        <div className="p-0 m-0 w-100 row justify-content-center pt-5 mt-5">
          <button
            className="btn p-0 m-0 blue_button py-2 px-3"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            View All Options
          </button>
        </div>
      ) : (
        <div className="p-0 m-0 w-100 row justify-content-center pt-5 mt-5">
          <button
            className="btn p-0 m-0 blue_button py-2 px-3"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            Hide All Options
          </button>
        </div>
      )} */}

      {/* <Accordion className="card py-4 px-3">
        <div className="d-flex row w-100 p-0 m-0">
          {loopstandard?.map((loopstandardDatas, i, array) => {
            const lenghtchilde = loopstandardDatas[1].length;
            return (
              <div className="col-12 col-md-6 p-1 m-0" style={{}}>
                <div className="d-flex options__style options_text_style row col-12 justify-content-center align-items-center text-center p-0 m-0 my-2">
                  <p className="d-flex row col-4 ml-2 px-2 mb-0 py-4 ">
                    {loopstandardDatas[0]}
                  </p>
                  <Accordion.Toggle
                    as={AccordianToggleStandard}
                    variant="link"
                    eventKey={i + 1}
                    className={`${
                      activeAccordian === i
                        ? "btn  p-0 m-0 d-flex row col-1 justify-content-end align-items-end text-end active_vehicle_option_accordian-open"
                        : ""
                    }`}
                    onClick={() => handleAccrodianActive(i)}
                  ></Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={i + 1}>
                  <>
                    {loopstandardDatas[1]?.map((item, index) => {
                      return (
                        <p
                          className="px-lg-5 py-3 m-0 "
                          style={{
                            // borderBottom:
                            // lenghtchilde - 1 === index
                            //   ? ""
                            //   : "1px solid #E5E5E5",
                            color: "#E5E5E5",
                          }}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </>
                </Accordion.Collapse>
              </div>
            );
          })}
        </div>
      </Accordion> */}
    </div>
  );
};

export default StandardOptionsCompare;
