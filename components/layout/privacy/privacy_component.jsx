import { privacyDesc } from "../../../data/privacy_data";

const PrivacyComponent = (props) => {
  const { specialCarsData } = props;
  return (
    <div className="p-0 m-0 mt-5">
      <div className="d-flex row justify-content-center align-items-center text-center col-12 p-0 m-0 pt-3">
        <div className="d-flex row justify-content-center align-items-center text-center col-12 p-0 m-3 ">
          <div className="d-flex row justify-content-center align-items-start text-center col-12 p-0 m-0">
            <div className="d-flex row justify-content-center align-items-center text-center col-12 col-md-7 p-0 m-0 form-service-appointment">
              <div className="d-flex row justify-content-center align-items-center eforms_div__container text-center col-12 p-0 m-0 p-3 vehicle-form-service-appointment">
                <div className="d-flex row justify-content-start align-items-start text-start col-12">
                  <h4 className="eform_h4__form_header">Privacy Policy</h4>
                </div>
                <div
                  className="p-0 pt-4 pb-4 m-0 text-white"
                  style={{
                    textAlign: "justify",
                  }}
                >
                  {privacyDesc}
                </div>
              </div>
            </div>
            <div className="d-flex row justify-content-center align-items-start text-start col-12 col-md-4 p-0 m-0  ml-md-4 px-3 eforms_div__special_car">
              <div className="d-flex row justify-content-start align-items-start text-start col-12 p-0">
                <h4 className="eform_h4__special_cars text-left p-0 py-3">
                  Special Offers
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyComponent;
