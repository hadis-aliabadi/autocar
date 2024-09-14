import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import {
  DIREVE_TYPE,
  INITIAL_VALUES,
} from "../../../../constant/car-finder/car_finder";
import { CAR_FINDER_VALIDATION } from "../../../../constant/formik/validation";
import {
  handleFinancialCarfinder,
  onSubmit,
} from "../../../../utils/car-finder/car_finder";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import { colorOption } from "../../../../utils/value-your-trade/value_your_trade.utils";
import Loading from "../../../common/web/loading/loading";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import EformsHeader from "../../../common/layout/header/eform_header";
import { useRouter } from "next/router";
import PersonalInfoValue from "../PersonalInfoValue";
import { useGetBodyStyles } from "../../../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../../../hooks/common/useGetTransmition";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";
const CarFinderForm = (props) => {
  const { domain, colors, otherFormik, dealerData, specialCars, onClose } =
    props;

  const {
    data: bodyStylesData,
    isLoading: bodyStylesIsLoadig,
    isFetching: bodyStylesIsFetching,
    isError: bodyStylesIsError,
    error: bodyStylesError,
    isSuccess: bodyStylesIsSuccess,
  } = useGetBodyStyles();
  const {
    data: transmitionData,
    isLoading: transmitionLoading,
    isFetching: transmitionFetching,
    isError: transmitionIsError,
    error: transmitionError,
    isSuccess: transmitionSuccess,
  } = useGetTransmitions();
  const [isLoading, setLoading] = useState(false);
  const [years] = useState(calculateYear);
  const conditionOption = [
    { value: "Excellent", label: "Excellent" },
    { value: "Good", label: "Good" },
    { value: "Fair", label: "Fair" },
    { value: "Poor", label: "Poor" },
  ];

  // Recaptcha
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => CAR_FINDER_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      setLoading(true);
      const { data, status, message } = await onSubmit(values, domain);
      setLoading(false);
      if (typeof otherFormik !== "undefined") {
        const frk_carFinder_id = await data?.CarFinder?.id;
        otherFormik.setFieldValue("frk_carFinder_id", +frk_carFinder_id);
      }
      if (status === 201) {
        toast.success("succesfull");
        resetForm();
        if (onClose && typeof otherFormik !== "undefined") {
          onClose();
        }
      } else {
        return toast.error(message);
      }
    },
    enableReinitialize: true,
  });
  const router = useRouter();

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
        {typeof otherFormik === "undefined" && (
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.carFinder_image_url}
            showImage={true}
          />
        )}
        <div
          className={`px-0 ${
            typeof otherFormik === "undefined" ? "px-md-5" : "px-md-2"
          } py-0 py-3 m-0 row w-100 justify-content-center align-items-start px-xl-4`}
        >
          <div className="row col-12 col-xl-10 px-lg-0 pt-4">
            <div
              className={`pr-lg-3 p-0 m-0 w-100 ${
                typeof otherFormik === "undefined"
                  ? "col-12 col-lg-7 col-xl-8"
                  : "col-12 col-lg-12 col-xl-12"
              } `}
            >
              {typeof otherFormik === "undefined" ? (
                <div className="p-0 m-0 d-flex align-items-center justify-content-center">
                  <form
                    ref={myRef}
                    onSubmit={formik.handleSubmit}
                    className="p-0 m-0 my-3  my-md-0 row w-100 eforms_form__container row align-items-start justify-content-around"
                  >
                    <div className="p-4 m-0 col-12 col-md-12 ">
                      {typeof otherFormik === "undefined" && (
                        // <div className="p-0 m-0 mb-3">
                        <EFormsHeaderSection
                          title="Car Finder"
                          desc={dealerData?.carFinder_desc}
                          showImage={false}
                        />
                        // </div>
                      )}
                      <EformsHeader title="Personal Information" />
                      <PersonalInfoValue
                        formik={formik}
                        otherFormik={otherFormik}
                      />
                    </div>
                    <div className="p-4 m-0 col-12 col-md-12 ">
                      <EformsHeader title="Vehicle Information" />
                      <div className="p-0 m-0 row align-items-start justify-content-start">
                        {" "}
                        <div className="form-group col-12 col-md-6 p-0 pr-md-3 m-0  p-1">
                          <lable className="label_style">Make</lable>
                          <input
                            name="make"
                            className="form-control  eforms_input_container"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.make}
                          />
                          {formik.errors.make && formik.touched.make && (
                            <small className="text-danger">
                              {formik.errors.make}
                            </small>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Model</lable>
                          <input
                            name="model"
                            className="form-control  eforms_input_container"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.model}
                          />
                          {formik.errors.model && formik.touched.model && (
                            <small className="text-danger">
                              {formik.errors.model}
                            </small>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0 mt-2 mb-2 p-1">
                          <lable className="label_style">Year</lable>
                          <Select
                            name="year"
                            className="form-select w-100 eforms_input_container"
                            placeholder="Year"
                            options={years}
                            styles={reactSelectInputStyle}
                            value={years?.filter(
                              (year) => year?.value === formik.values.year
                            )}
                            onChange={(e) => {
                              formik.setFieldValue("year", e?.value);
                            }}
                          />
                          {formik.errors.year && formik.touched.year && (
                            <p className="text-danger">{formik.errors.year}</p>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0  pl-md-3  m-0 p-1">
                          <lable className="label_style">Trim</lable>
                          <input
                            name="trim"
                            className="form-control  eforms_input_container"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trim}
                          />
                        </div>
                        <div className="form-group d-flex col-12 col-md-6 pr-md-3  p-0 m-0  p-1 align-items-end">
                          <div className="p-0 m-0 w-100">
                            <lable className="label_style">Kilometers</lable>
                            <input
                              name="temp_odometer"
                              className="form-control eforms_input_container"
                              placeholder=""
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.temp_odometer}
                            />
                            {formik.errors.temp_odometer &&
                              formik.touched.temp_odometer && (
                                <small className="text-danger">
                                  {formik.errors.temp_odometer}
                                </small>
                              )}
                          </div>
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Body Style</lable>
                          {bodyStylesIsLoadig || bodyStylesIsFetching ? (
                            <Loading />
                          ) : (
                            <Select
                              name="bodyStyle"
                              className="form-select w-100 eforms_input_container"
                              placeholder="Body Style"
                              value={bodyStylesData?.filter(
                                (option) =>
                                  option.value === formik.values.bodyStyle
                              )}
                              options={bodyStylesData}
                              styles={reactSelectInputStyle}
                              onChange={(e) => {
                                formik.setFieldValue("bodyStyle", e?.value);
                              }}
                            />
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 pr-md-3  p-0 m-0  p-1">
                          <lable className="label_style">Transmission</lable>
                          {transmitionLoading || transmitionFetching ? (
                            <Loading />
                          ) : (
                            <Select
                              name="transmission"
                              className="form-select w-100 eforms_input_container"
                              placeholder="Transmission"
                              value={transmitionData?.filter(
                                (option) =>
                                  option.value === formik.values.transmission
                              )}
                              options={transmitionData}
                              styles={reactSelectInputStyle}
                              onChange={(e) => {
                                formik.setFieldValue("transmission", e?.value);
                              }}
                            />
                          )}
                          {formik.errors.transmission &&
                            formik.touched.transmission && (
                              <p className="text-danger">
                                {formik.errors.transmission}
                              </p>
                            )}
                        </div>
                        <div className="form-group  col-12 col-md-6 pl-md-3  p-0 m-0  p-1">
                          <lable className="label_style">Driveline</lable>
                          <Select
                            name="driveLine"
                            className="form-select w-100 eforms_input_container"
                            placeholder="Drivetrain"
                            value={DIREVE_TYPE?.filter(
                              (option) =>
                                option.value === formik.values.driveLine
                            )}
                            options={DIREVE_TYPE}
                            styles={reactSelectInputStyle}
                            onChange={(e) => {
                              formik.setFieldValue("driveLine", e?.value);
                            }}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1">
                          <lable className="label_style">Fuel Type</lable>
                          <input
                            name="fuel_type"
                            className="form-control  eforms_input_container"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fuel_type}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Condition</lable>
                          <Select
                            className="form-select w-100  eforms_input_container"
                            placeholder="Condition"
                            options={conditionOption}
                            name="condition"
                            // value={formik.values.condition}
                            value={conditionOption?.filter(
                              (item) =>
                                item.value === formik.values["condition"]
                            )}
                            styles={reactSelectInputStyle}
                            // Condition

                            onChange={(e) => {
                              formik.setFieldValue("condition", e?.value);
                            }}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1">
                          <lable className="label_style">Vin</lable>
                          <input
                            name="vin_number"
                            className="form-control text-uppercase eforms_input_container"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.vin_number}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Exterior color</lable>
                          <Select
                            className="form-select w-100  eforms_input_container"
                            placeholder="Exterior color"
                            options={colorOption(colors)}
                            styles={reactSelectInputStyle}
                            value={colorOption(colors)?.filter(
                              (color) =>
                                color?.colorObject?.id ===
                                formik.values.frk_exterior_color
                            )}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "frk_exterior_color",
                                e?.colorObject?.id
                              );
                            }}
                          />
                        </div>
                        {/* <div className="form-group col-12 pr-md-3  col-md-6 p-0 m-0  p-1">
                          <lable className="label_style">Interior color</lable>
                          <Select
                            className="form-select w-100 eforms_input_container"
                            placeholder="Interior color"
                            options={colorOption(colors)}
                            styles={reactSelectColorStyle}
                            value={colorOption(colors)?.filter(
                              (color) =>
                                color?.colorObject?.id ===
                                formik.values.frk_interior_color
                            )}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "frk_interior_color",
                                e?.colorObject?.id
                              );
                            }}
                          />
                        </div> */}
                        <div className="form-group col-12 p-0 m-0  p-1">
                          <lable className="label_style">Additional Info</lable>
                          <textarea
                            rows="8"
                            name="additional_info"
                            className="form-control eforms_textarea_container"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder=""
                            value={formik.values.additional_info}
                          />
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
                      <div className="p-1 m-0 col-12 row justify-content-start align-items-center">
                        <div className="p-0 m-0 col-4 col-lg-4">
                          {isLoading ? (
                            <Loading />
                          ) : (
                            <button
                              type="submit"
                              className="px-2 py-1 blue_button_3"
                              onClick={(e) => {
                                e.preventDefault();
                                handleClickSubmit();
                                handleFinancialCarfinder(
                                  formik,
                                  `${router?.pathname}`,
                                  true
                                );
                              }}
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-0 m-0 d-flex align-items-center justify-content-center">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="p-0 m-0 my-3 my-md-0 row w-100 eforms_form__container row align-items-start justify-content-around"
                  >
                    <div className="p-4 m-0 col-12 col-md-12 ">
                      {typeof otherFormik === "undefined" && (
                        // <div className="p-0 m-0 mb-3">
                        <EFormsHeaderSection
                          title="Car Finder"
                          image={
                            dealerData?.prefixUrl +
                            dealerData?.carFinder_image_url
                          }
                          desc={dealerData?.carFinder_desc}
                          showImage={false}
                        />
                        // </div>
                      )}
                      <EformsHeader title="Personal Information" />
                      <PersonalInfoValue
                        formik={formik}
                        otherFormik={otherFormik}
                      />
                    </div>
                    <div className="p-4 m-0 col-12 col-md-12 ">
                      <EformsHeader title="Vehicle Information" />
                      <div className="p-0 m-0 row align-items-start justify-content-start">
                        {" "}
                        <div className="form-group col-12 col-md-6 p-0 pr-md-3 m-0  p-1">
                          <lable className="label_style">Make</lable>
                          <input
                            name="make"
                            className="form-control  eforms_input_container"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.make}
                          />
                          {formik.errors.make && formik.touched.make && (
                            <small className="text-danger">
                              {formik.errors.make}
                            </small>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">
                            Model (required)
                          </lable>
                          <input
                            name="model"
                            className="form-control  eforms_input_container"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.model}
                          />
                          {formik.errors.model && formik.touched.model && (
                            <small className="text-danger">
                              {formik.errors.model}
                            </small>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0 mt-2 mb-2 p-1">
                          <lable className="label_style">Year</lable>
                          <Select
                            name="year"
                            className="form-select w-100 eforms_input_container"
                            placeholder="Year"
                            options={years}
                            styles={reactSelectInputStyle}
                            value={years?.filter(
                              (year) => year?.value === formik.values.year
                            )}
                            onChange={(e) => {
                              formik.setFieldValue("year", e?.value);
                            }}
                          />
                          {formik.errors.year && formik.touched.year && (
                            <p className="text-danger">{formik.errors.year}</p>
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0  pl-md-3  m-0 p-1">
                          <lable className="label_style">Trim</lable>
                          <input
                            name="trim"
                            className="form-control  eforms_input_container"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trim}
                          />
                          {formik.errors.trim && formik.touched.trim && (
                            <p className="text-danger">{formik.errors.trim}</p>
                          )}
                        </div>
                        <div className="form-group d-flex col-12 col-md-6 pr-md-3  p-0 m-0  p-1 align-items-end">
                          <div className="p-0 m-0 w-100">
                            <lable className="label_style">Kilometers</lable>
                            <input
                              name="temp_odometer"
                              className="form-control eforms_input_container"
                              placeholder=""
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.temp_odometer}
                            />
                            {formik.errors.temp_odometer &&
                              formik.touched.temp_odometer && (
                                <small className="text-danger">
                                  {formik.errors.temp_odometer}
                                </small>
                              )}
                          </div>
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Body Style</lable>
                          {bodyStylesIsLoadig || bodyStylesIsFetching ? (
                            <Loading />
                          ) : (
                            <Select
                              name="bodyStyle"
                              className="form-select w-100 eforms_input_container"
                              placeholder="Body Style"
                              value={bodyStylesData?.filter(
                                (option) =>
                                  option.value === formik.values.bodyStyle
                              )}
                              options={bodyStylesData}
                              styles={reactSelectInputStyle}
                              onChange={(e) => {
                                formik.setFieldValue("bodyStyle", e?.value);
                              }}
                            />
                          )}
                        </div>
                        <div className="form-group  col-12 col-md-6 pr-md-3  p-0 m-0  p-1">
                          <lable className="label_style">Transmission</lable>
                          {transmitionLoading || transmitionFetching ? (
                            <Loading />
                          ) : (
                            <Select
                              name="transmission"
                              className="form-select w-100 eforms_input_container"
                              placeholder="Transmission"
                              value={transmitionData?.filter(
                                (option) =>
                                  option.value === formik.values.transmission
                              )}
                              options={transmitionData}
                              styles={reactSelectInputStyle}
                              onChange={(e) => {
                                formik.setFieldValue("transmission", e?.value);
                              }}
                            />
                          )}
                          {formik.errors.transmission &&
                            formik.touched.transmission && (
                              <p className="text-danger">
                                {formik.errors.transmission}
                              </p>
                            )}
                        </div>
                        <div className="form-group  col-12 col-md-6 pl-md-3  p-0 m-0  p-1">
                          <lable className="label_style">Driveline</lable>
                          <Select
                            name="driveLine"
                            className="form-select w-100 eforms_input_container"
                            placeholder="Drivetrain"
                            value={DIREVE_TYPE?.filter(
                              (option) =>
                                option.value === formik.values.driveLine
                            )}
                            options={DIREVE_TYPE}
                            styles={reactSelectInputStyle}
                            onChange={(e) => {
                              formik.setFieldValue("driveLine", e?.value);
                            }}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1">
                          <lable className="label_style">Fuel Type</lable>
                          <input
                            name="fuel_type"
                            className="form-control  eforms_input_container"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fuel_type}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Condition</lable>
                          <Select
                            className="form-select w-100  eforms_input_container"
                            placeholder="Condition"
                            options={conditionOption}
                            name="condition"
                            // value={formik.values.condition}
                            value={conditionOption?.filter(
                              (item) =>
                                item.value === formik.values["condition"]
                            )}
                            styles={reactSelectInputStyle}
                            // Condition

                            onChange={(e) => {
                              formik.setFieldValue("condition", e?.value);
                            }}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1">
                          <lable className="label_style">Vin</lable>
                          <input
                            name="vin_number"
                            className="form-control text-uppercase  eforms_input_container"
                            placeholder=" "
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.vin_number}
                          />
                        </div>
                        <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                          <lable className="label_style">Exterior color</lable>
                          <Select
                            className="form-select w-100  eforms_input_container"
                            placeholder="Exterior color"
                            options={colorOption(colors)}
                            styles={reactSelectInputStyle}
                            value={colorOption(colors)?.filter(
                              (color) =>
                                color?.colorObject?.id ===
                                formik.values.frk_exterior_color
                            )}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "frk_exterior_color",
                                e?.colorObject?.id
                              );
                            }}
                          />
                        </div>
                        {/* <div className="form-group col-12 pr-md-3  col-md-6 p-0 m-0  p-1">
                          <lable className="label_style">Interior color</lable>
                          <Select
                            className="form-select w-100 eforms_input_container"
                            placeholder="Interior color"
                            options={colorOption(colors)}
                            styles={reactSelectColorStyle}
                            value={colorOption(colors)?.filter(
                              (color) =>
                                color?.colorObject?.id ===
                                formik.values.frk_interior_color
                            )}
                            onChange={(e) => {
                              formik.setFieldValue(
                                "frk_interior_color",
                                e?.colorObject?.id
                              );
                            }}
                          />
                        </div> */}
                        <div className="form-group col-12 p-0 m-0  p-1">
                          <lable className="label_style">Additional Info</lable>
                          <textarea
                            rows="8"
                            name="additional_info"
                            className="form-control eforms_textarea_container"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder=""
                            value={formik.values.additional_info}
                          />
                        </div>
                      </div>{" "}
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
                      <div className="p-1 m-0 col-12 row justify-content-start align-items-center">
                        <div className="p-0 m-0 col-4 col-lg-4">
                          {isLoading ? (
                            <Loading />
                          ) : (
                            <button
                              type="submit"
                              className="btn blue_button_3"
                              onClick={(e) => {
                                e.preventDefault();
                                handleFinancialCarfinder(
                                  formik,
                                  `${router?.pathname}`,
                                  true
                                );
                                handleClickSubmit();
                              }}
                            >
                              Submit
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
            {typeof otherFormik === "undefined" && (
              <div className="pl-lg-3 p-0 m-0 w-100 col-12 col-lg-5 col-xl-4 d-none d-lg-flex">
                <div className="pt-5 p-lg-0 m-0 px-xl-2 e-contact-on-top">
                  <EformsConatctInfo dealerData={dealerData} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFinderForm;
