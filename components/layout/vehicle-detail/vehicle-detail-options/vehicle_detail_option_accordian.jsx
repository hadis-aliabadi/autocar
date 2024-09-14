import { Accordion } from "react-bootstrap";

const VehicleDetailOptionAccordian = ({ optionTitle, OptionList = [] }) => {
  return (
    <Accordion className="p-0 m-0 mb-2 col-12 col-md-6">
      <>
        <Accordion.Toggle as={CustomeToggle} eventKey="0">
          {optionTitle}
        </Accordion.Toggle>
        <Accordion.Collapse className="p-0 px-3 m-0" eventKey="0">
          <>
            {OptionList?.map((option) => (
              <div className="p-1 m-0 mt-2 vehicle_options_collapse_div__container d-flex align-items-center justify-content-start">
                {option}
              </div>
            ))}
          </>
        </Accordion.Collapse>
      </>
    </Accordion>
  );
};
const CustomeToggle = ({ children, onClick }) => {
  return (
    <div className="p-0 px-3 m-0">
      <div
        className="p-0 m-0 vehicle_options_toggle_div__container"
        onClick={onClick}
      >
        <div className="p-0 m-0 d-flex align-items-center">
          <img
            src="/images/vehicle-detail/vehicle-detail-options.png"
            alt=""
            className="vehicle_options_toggle_img__style"
          />
          <span className="vehicle_options_toggle_span__style">{children}</span>
        </div>
      </div>
    </div>
  );
};
export default VehicleDetailOptionAccordian;
