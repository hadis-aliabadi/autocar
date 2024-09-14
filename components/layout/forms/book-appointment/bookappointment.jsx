import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import { onSubmit } from "../../../../utils/book-appointment/book_appointment";
import Loading from "../../../common/web/loading/loading";
import { BOOKAPPOINMENT_INITIAL_VALUES } from "../../../../constant/bookappointment/bookappointment";
import { BOOK_APPOINTMENT_VALIDATION_SCHEMA } from "../../../../constant/formik/validation";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import EformsHeader from "../../../common/layout/header/eform_header";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import PersonalInfoValue from "../PersonalInfoValue";
import { useRef } from "react";
import FinanceSearchForVehicle from "../financing/finance_search_for_vehicle";
import DatePickerCustom from "../datepicker";
import SearchForVehicleApprisal from "../search/searchForVehicleApprisal";
import SearchForVehicle from "../search/mvd_search";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";

const BookAppointmentCustomerWeb = (props) => {
  const { specialCars, dealerData, domain, vehicleDataForSearch } = props;
  const [isLoading, setLoading] = useState(false);

  // Recaptcha
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
  const formik = useFormik({
    initialValues: BOOKAPPOINMENT_INITIAL_VALUES,
    validationSchema: BOOK_APPOINTMENT_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      setLoading(true);
      const { data, status, message } = await onSubmit(domain, values);
      setLoading(false);
      if (status === 201) {
        toast.success("successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const handleClickSubmit = () => {
    if (!formik.isValid) {
      toast.error("Please double-check the form fields");
      executeScroll();
    }
  };
  return (
    <>
      <div className="p-0 m-0 w-100">
        <div className="px-0 pb-4  m-0 row w-100 justify-content-center align-items-start ">
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.bookApointment_image_url}
            showImage={true}
          />
          <div className="row col-12 col-lg-10 p-0 pt-4">
            <div className={"pr-lg-3 p-0 m-0 w-100 col-12 col-lg-7 col-xl-8"}>
              <form
                ref={myRef}
                onSubmit={formik.handleSubmit}
                className="p-0 m-0 my-3 my-md-0 row w-100 eforms_form__container row align-items-center justify-content-around"
              >
                <div className="p-4 m-0 col-12 col-md-12 ">
                  <EFormsHeaderSection
                    title="Book Appointment"
                    desc={dealerData?.bookApointment_desc}
                    image={
                      dealerData?.prefixUrl +
                      dealerData?.bookApointment_image_url
                    }
                    showImage={false}
                  />
                  <EformsHeader title="Personal Information" />
                  <PersonalInfoValue formik={formik} />
                </div>
                <div className="p-4 m-0 col-12 col-md-12 ">
                  <EformsHeader title="Contact Information" />
                  <div className="col-12 row justify-content-start align-itemes-center p-0 m-0 ">
                    <div className="form-group p-0  col-12 col-md-6  m-0 mt-2 pr-md-3 pr-0 mb-2 p-1">
                      <label className="label_style">Method of contact</label>

                      <Select
                        name="type"
                        className="form-select eforms_input_container"
                        placeholder="Method of contact"
                        options={[
                          { label: "cell phone", value: 1 },
                          { label: "work phone", value: 2 },
                          { label: "home phone", value: 3 },
                          { label: "email", value: 4 },
                        ]}
                        styles={reactSelectInputStyle}
                        onChange={(e) => {
                          formik.setFieldValue("method_of_contact", +e.value);
                        }}
                      />
                      {formik.errors.method_of_contact &&
                        formik.touched.method_of_contact && (
                          <small className="text-danger">
                            {formik.errors.method_of_contact}
                          </small>
                        )}
                    </div>
                    <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 pl-md-3 pl-0 mb-2 p-1">
                      <label className="label_style">Date</label>

                      <DatePickerCustom
                        value={formik?.values?.requested_date}
                        formik={formik}
                        name="requested_date"
                      />
                      {formik.errors.requested_date &&
                        formik.touched.requested_date && (
                          <small className="text-danger">
                            {formik.errors.requested_date}
                          </small>
                        )}
                    </div>
                  </div>

                  <div className="form-group p-0 m-0 mt-2 mb-1 p-1">
                    <label className="label_style">Additional...</label>
                    <textarea
                      id="comment"
                      name="comment"
                      className="form-control eforms_textarea_container"
                      placeholder=""
                      rows="4"
                      cols="50"
                      {...formik.getFieldProps("comment")}
                    />
                    {formik.errors.comment && formik.touched.comment && (
                      <small className="text-danger">
                        {formik.errors.comment}
                      </small>
                    )}
                  </div>

                  <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                    <div className="w-100 col-12 p-0 m-0 pr-md-2 pr-0">
                      <div className=" w-100  p-0 m-0">
                        <SearchForVehicle
                          vehicleDataForSearch={vehicleDataForSearch}
                          formik={formik}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-1 m-0 col-12">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      size="compact" // or "compact" or "invisible"
                      onChange={handleRecaptchaChange}
                      style={{
                        background: "transparent",
                      }}
                      theme="light"
                    />
                  </div>
                  <div className="p-1 m-0 row justify-content-start">
                    <div className="p-0 m-0 col-12 col-lg-4">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          onClick={handleClickSubmit}
                          type="submit"
                          className="btn p-0 blue_button_3 px-3 py-1"
                        >
                          CHECK AVAILABILITY
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="pl-lg-3 p-0 m-0 w-100 col-12 col-lg-5 col-xl-4 d-none d-lg-flex">
              <div className="pt-5 p-lg-0 m-0 px-lg-2 e-contact-on-top">
                <EformsConatctInfo dealerData={dealerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookAppointmentCustomerWeb;
