import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/service-appointment/service_appointment";
import { SERVICE_APPOINTMENT_VALIDATION } from "../../../constant/formik/validation";
import {
  handleAddClick,
  handleInputChange,
  handleRemoveClick,
  onSubmit,
} from "../../../utils/service-appointment/service_appointment";

import Select from "react-select";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import { calculateYear } from "../../../utils/common/calculate_year";
import Loading from "../../common/web/loading/loading";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";

import PersonalInfoValue from "./PersonalInfoValue";
import EformsHeader from "../../common/layout/header/eform_header";
import EformsConatctInfo from "../../common/web/eforms/eforms_contact_info";
import { FaTrash } from "react-icons/fa";
import DatePickerCustom from "./datepicker";

const ServiceAppintmentCustomerWeb = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [years] = useState(calculateYear);
  const { specialCars, dealerData, domain } = props;
  useEffect(() => {
    calculateYear();
  }, []);

  const [service, setService] = useState([
    { requested_service: "", comment: "" },
  ]);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => SERVICE_APPOINTMENT_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (
        service.length === 1 &&
        (service[0].requested_service === "" || service[0].comment === "")
      ) {
        formik.setFieldError("services", "Select atleast one service");
      } else {
        setLoading(true);
        const { data, status, message } = await onSubmit(
          values,
          service,
          domain
        );
        setLoading(false);
        if (status === 201) {
          toast.success("successful");
          setService([{ requested_service: "", comment: "" }]);
          resetForm();
        } else {
          toast.error(message);
        }
      }
      return;
    },
  });

  return (
    <>
      <div className="p-0 m-0 w-100">
        <div className="px-0 pb-4  m-0 row w-100 justify-content-center align-items-start ">
          <EFormsHeaderSection
            image={
              dealerData?.prefixUrl + dealerData?.serviceApointment_image_url
            }
            showImage={true}
          />
          <div className="row col-12 col-lg-10 p-0 pt-4">
            <div className={"pr-lg-3 p-0 m-0 w-100 col-12 col-lg-7 col-xl-8"}>
              <form
                onSubmit={formik.handleSubmit}
                className="p-0 m-0 my-3 my-md-0 row w-100 eforms_form__container row align-items-center justify-content-around"
              >
                <div className="p-4 m-0 col-12 col-md-11 ">
                  <EFormsHeaderSection
                    title="Book Service Appointment"
                    desc={dealerData?.serviceApointment_des}
                    image={
                      dealerData?.prefixUrl +
                      dealerData?.serviceApointment_image_url
                    }
                    showImage={false}
                  />
                  <EformsHeader title="Personal Information" />
                  <PersonalInfoValue formik={formik} />
                </div>
                <div className="p-4 m-0 row col-12 col-md-11 ">
                  <div className="d-flex row justify-content-start align-items-start text-start col-12">
                    <EformsHeader title="  Vehicle Information" />
                  </div>
                  <div className="form-group  col-12 col-md-6 p-0 m-0 pl-0 mb-2 p-1">
                    <label className="label_style">Make</label>
                    <input
                      name="make"
                      className="form-control eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.make}
                    />
                  </div>
                  <div className="form-group  col-12 col-md-6 p-0 m-0 pl-0 mb-2 p-1">
                    <label className="label_style">Model</label>
                    <input
                      name="model"
                      className="form-control eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                    />
                  </div>
                  <div className="form-group  col-12 col-md-6  p-0 m-0  pl-0 mb-2 p-1">
                    <label className="label_style">Vin</label>
                    <input
                      name="vin_number"
                      className="form-control p-3 eforms_input_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.vin_number}
                    />
                  </div>
                  <div className="form-group  col-12 col-md-6 p-0 m-0 pl-0 mb-2 p-1">
                    <label className="label_style">Year</label>
                    <Select
                      name="year"
                      className="form-select w-100 eforms_input_select_container"
                      placeholder=""
                      value={years.filter(
                        (option) => option?.value === formik.values.year
                      )}
                      options={years}
                      styles={reactSelectInputStyle}
                      onChange={(e) => {
                        formik.setFieldValue("year", e?.value);
                      }}
                    />
                    {formik.errors.year && formik.touched.year && (
                      <p className="text-danger">{formik.errors.year}</p>
                    )}
                  </div>

                  <div className="form-group  col-12 col-md-6 p-0 m-0 mt-2 pr-md-3 pl-0 mb-2 p-1">
                    <EformsHeader
                      className="my-2"
                      title="Appointment Information"
                    />

                    <label className="label_style"> Date (required)</label>
                    <DatePickerCustom
                      formik={formik}
                      name="requested_date"
                      value={formik.values.requested_date}
                    />
                    {formik.errors.requested_date &&
                      formik.touched.requested_date && (
                        <small className="text-danger">
                          {formik.errors.requested_date}
                        </small>
                      )}
                  </div>
                  <div className="d-flex row text-center col-12 p-0 mt-5 p-3 my-3 ">
                    <div className="d-flex flex-row w-100 justify-content-between align-items-center  text-start ">
                      <EformsHeader
                        className="my-2 text-left"
                        title="Services List"
                      />
                      <button
                        type="button"
                        className="blue_button_3"
                        onClick={() => {
                          handleAddClick(service, setService);
                        }}
                      >
                        <p className="p-2 m-0 "> Add</p>
                      </button>
                    </div>
                    <div className="p-2  w-100 d-flex row justify-content-between align-items-start ">
                      <div className="col-12  pr-0">
                        {service?.map((item, index) => (
                          <div
                            key={index}
                            className="col-12 d-flex row px-0  my-3 ml-1 bg-gray"
                            style={{ backgroundColor: "rgb(236, 236, 236)" }}
                          >
                            <div className="p-0 m-0 d-flex col-sm-11 col-10 row">
                              <div className="form-group col-sm-12 p-0 m-0 mt-2 mb-2 p-1 ">
                                <input
                                  name="requested_service"
                                  className="form-control eforms_input_select_container bg-transparent"
                                  placeholder="Request Service"
                                  onBlur={formik.handleBlur}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      index,
                                      service,
                                      setService,
                                      formik
                                    )
                                  }
                                  value={item.requested_service}
                                />
                              </div>
                              <div className="form-group col-sm-12 p-0 m-0 p-1 mb-2">
                                <input
                                  name="comment"
                                  className="form-control eforms_input_select_container bg-transparent"
                                  placeholder="Comment Service"
                                  onBlur={formik.handleBlur}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      index,
                                      service,
                                      setService,
                                      formik
                                    )
                                  }
                                  value={item.comment}
                                />
                              </div>
                              {formik.errors.services && (
                                <p className="p-0 mt-1 mb-3 ml-3 text-danger">
                                  at least one service
                                </p>
                              )}
                            </div>
                            <div className="row w-100 h-100 p-0 m-0 col-sm-1 col-2">
                              <button
                                style={{ boxShadow: "none" }}
                                type="button"
                                className="w-2 m-1 btn p-0 m-0 d-flex row col-12 pt-2"
                                onClick={() => {
                                  handleRemoveClick(index, service, setService);
                                }}
                              >
                                <i className="d-flex justify-content-center align-items-center text-center w-100 ml-1 p-0">
                                  <FaTrash
                                    size={25}
                                    color="red"
                                    style={{ cursor: "pointer" }}
                                  />{" "}
                                </i>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
                    <label className="label_style"> Comments</label>
                    <textarea
                      name="comments"
                      className="form-control eforms_textarea_container_contact_us"
                      // placeholder="Message..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="8"
                      value={formik.values.comments}
                    />
                  </div>
                  <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
                    <div className="col-sm-4 p-0 m-0 col-8 mt-4">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button type="submit" className="btn  blue_button_3">
                          check availability
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

export default ServiceAppintmentCustomerWeb;
