import { useFormik } from "formik";
import React, { useState } from "react";
import {
  VALIDATION_VALUE_YOUR_TRADE,
  VALUE_YOURTRADE_VALIDATION,
} from "../../../constant/formik/validation";
import {
  DIREVE_TYPE,
  INITIAL_VALUES,
  INITIAL_VALUE_YOUR_TRADE,
} from "../../../constant/value-your-trade/value_your_trade";
import {
  colorOption,
  handleFinancialValueyourtrade,
  onSubmit,
} from "../../../utils/value-your-trade/value_your_trade.utils";
import { toast } from "react-toastify";
import Select from "react-select";
import { calculateYear } from "../../../utils/common/calculate_year";
import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import Loading from "../../common/web/loading/loading";
import EFormsHeaderSection from "../../common/web/eform-header/eforms_header_section";
import EformsHeader from "../../common/layout/header/eform_header";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
import { useRouter } from "next/router";
import PersonalInfoValue from "./PersonalInfoValue";
import { useRef } from "react";
import { useGetBodyStyles } from "../../../hooks/common/useGetBodyStyle";
import { useGetTransmitions } from "../../../hooks/common/useGetTransmition";
import { findScript } from "../../../utils/common/html_script";
// import OptionsList from "./OptionsList";
import { useEffect } from "react";
import imageCompression from "browser-image-compression";
import { FaHeadphonesAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import FinanceSearchForVehicle from "../../../components/layout/forms/financing/finance_search_for_vehicle";
import { onSubmitSellUsYourCar } from "../../../utils/sell_your_car/sell_your_car";

const OptionsList = [
  { label: "CD Stereo" },
  { label: "Backup Camera" },
  { label: "Bind-Spot Alert" },
  { label: "DVD System" },
  { label: "Heated Seats" },
  { label: "Fold Away Third Row" },
  { label: "Navigation System" },
  { label: "Moon Roof" },
  { label: "Automated Tailgate" },
  { label: "Power Seats" },
  { label: "Panorama Roof" },
  { label: "Rain sensing wipers" },
  { label: "Alarm System" },
  { label: "Canopy" },
  { label: "Lane Departure Warning" },
  { label: "Keyless-Go" },
  { label: "Leather" },
  { label: "Reverse Sensors" },
  { label: "Power Windows" },
  { label: "Tow Package" },
  { label: "Bluetooth Wireless" },
  { label: "Cruise Control" },
  { label: "Remote Start" },
  { label: "Air Conditioning" },
  { label: "Power Door Locks" },
  { label: "Apple Car Play" },
  { label: "Aftermarket Rims" },
  { label: "Modified Exhaust" },
  { label: "Oversized Tires" },
  { label: "360 Camera" },
  { label: "Tonneau Cover" },
  { label: "Lift Kit" },
];

const ValuetradeCustomerWeb = (props) => {
  const {
    domain,
    colors,
    dealerData,
    specialCars,
    onClose,
    vehicleDataForSearch,
    advanceSearchData,
    isSellUsYourCar = false,
    inModal = false,
  } = props;
  const [optionsList, setOptionsList] = useState([]);

  const { vehicleBodyStyle_full } = advanceSearchData;

  const bodystyle = Object.keys(vehicleBodyStyle_full);

  const bodyStyleOption = bodystyle?.map((bodyStyle) => ({
    value: bodyStyle,
    label: bodyStyle,
  }));

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

  // console.log(transmitionData);
  // const router = useRouter();

  const [compImg, setCompImg] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const inputRef = useRef();
  const [rejectedImages, setRejectedImages] = useState([]);
  const [lastOrder, setLastOrder] = useState(0);
  const { otherFormik = undefined } = props;
  const [years] = useState(calculateYear);
  const router = useRouter();

  const { query } = router;
  // ***************** images :

  const [images, setImages] = useState([]);

  const handleImageComperss = async (img) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(img, options);
    // console.log(compressedFile);

    const convertCompressedFile = new File(
      [compressedFile],
      compressedFile.name,
      {
        type: compressedFile.type,
      }
    );

    // console.log(convertCompressedFile);

    return convertCompressedFile;
  };

  const handleUploadImage = async (e) => {
    const imagesFiles = Object.values(e.target.files);

    // console.log(imagesFiles);

    const compressedImages = await Promise.all(
      imagesFiles.map(async (img) => {
        return await handleImageComperss(img);
      })
    );

    // console.log(compressedImages);
    setImages([...images, ...compressedImages]);
  };

  // *****************

  const formik = isSellUsYourCar
    ? useFormik({
        initialValues: INITIAL_VALUE_YOUR_TRADE,
        validationSchema: VALIDATION_VALUE_YOUR_TRADE,
        onSubmit: async (values, { resetForm }) => {
          setLoading(true);

          const { data, status, message } = await onSubmitSellUsYourCar(
            values,
            domain,
            optionsList,
            images
          );

          setLoading(false);

          if (status === 201) {
            if (typeof otherFormik !== "undefined") {
              const frk_valueYourTrade_id = await data?.ValueYourTrade?.id;
              otherFormik.setFieldValue(
                "frk_valueYourTrade_id",
                frk_valueYourTrade_id
              );
            }
            // setCompImg([]);
            toast.success(message);
            resetForm();
            if (onClose && typeof otherFormik !== "undefined") {
              onClose();
            }
          } else {
            toast.error(message);
          }
        },
      })
    : useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema: () => VALUE_YOURTRADE_VALIDATION(inModal),
        onSubmit: async (values, { resetForm }) => {
          setLoading(true);
          const { data, message, status } = await onSubmit(
            values,
            domain,
            optionsList,
            images
          );
          setLoading(false);
          if (status === 201) {
            if (typeof otherFormik !== "undefined") {
              const frk_valueYourTrade_id = await data?.ValueYourTrade?.id;
              otherFormik.setFieldValue(
                "frk_valueYourTrade_id",
                frk_valueYourTrade_id
              );
            }
            setCompImg([]);
            toast.success(message);
            resetForm();
            if (onClose && typeof otherFormik !== "undefined") {
              onClose();
            }
          } else {
            toast.error(message);
          }
        },
      });

  const historyOption = [
    { value: 0, label: "None" },
    { value: 1, label: "Under 2000" },
    { value: 2, label: "2000-5000" },
    { value: 3, label: "Over 5000" },
  ];

  const conditionOption = [
    { value: "Excellent", label: "Excellent" },
    { value: "Good", label: "Good" },
    { value: "Fair", label: "Fair" },
    { value: "Poor", label: "Poor" },
  ];

  const yesNoOption = [
    { value: null, label: "" },
    { value: 1, label: "Yes" },
    { value: 0, label: "No" },
  ];

  const myRef = useRef(null);
  const myRefPrice = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const executePriceScroll = () => myRefPrice.current.scrollIntoView();
  const handleClickSubmit = () => {
    if (!formik.isValid) {
      toast.error("Please double-check the form fields");
      executeScroll();
    }
    // if(formik.isValid && router.pathname === "/forms/sell-us-your-car"){
    //   toast.error("The lower the trade price the higher the chance of receiving a call back! Please place the lowest price you'd accept for your vehicle. Thank you");
    //   executePriceScroll();
    // }
  };

  const recaptchaRef = React.createRef();

  // console.log({ compImg });
  useEffect(() => {
    // console.log("2");
    if (compImg.length !== 0) {
      setloading(false);
      // console.log("3");
    }
  }, [compImg]);

  // console.log(formik.errors);

  return (
    <>
      <div className="p-0 m-0 w-100">
        {typeof otherFormik === "undefined" ? (
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.valueYourTrade_image_url}
            showImage={true}
          />
        ) : (
          ""
        )}
        <div className="px-0 px-xl-5 px-lg-4 py-3 m-0 row w-100 justify-content-center align-items-start ">
          <div className={`row col-12  col-xl-10 p-0 pt-2 px-2 px-lg-0`}>
            <div
              style={{ backgroundColor: "#f3f3f3" }}
              className={`pr-lg-3 p-0 m-0 w-100 col-12 ${
                typeof otherFormik === "undefined" ? "col-lg-7 col-xl-8 " : ""
              }`}
            >
              <form
                ref={myRef}
                onSubmit={formik.handleSubmit}
                className="p-0 m-0  row w-100 eforms_form__container row align-items-start justify-content-around"
              >
                {typeof otherFormik === "undefined" ? (
                  <EFormsHeaderSection
                    title={
                      isSellUsYourCar
                        ? "Sell Us Your Car"
                        : "Appraise Your Trade"
                    }
                    image={
                      dealerData?.prefixUrl + dealerData?.financial_image_url
                    }
                    showImage={false}
                    className="px-3"
                  />
                ) : null}
                <div className="px-4 mt-4 mx-auto m-0 col-12 col-md-12 row justify-content-start">
                  {typeof otherFormik === "undefined" &&
                    dealerData?.valueYourTrade_desc && (
                      <div
                        className="px-3 py-4 my-3"
                        style={{
                          border: "1px solid #ccc",
                          fontSize: "14px",
                          color: "#000",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        }}
                      >
                        <div
                          className="1 p-0 m-0 eforms_desc"
                          dangerouslySetInnerHTML={{
                            __html: findScript(dealerData?.valueYourTrade_desc),
                          }}
                        />
                      </div>
                    )}

                  <EformsHeader title="Personal Information" />
                  <PersonalInfoValue
                    formik={formik}
                    otherFormik={otherFormik}
                    isTrade
                  />
                </div>
                <div className="px-4 mx-auto m-0 mt-4 col-12 col-md-12 ">
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
                    </div>
                    <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0 p-1">
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
                      {formik.errors.year && (
                        <small className="text-danger">
                          {formik.errors.year}
                        </small>
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
                          name="vehicle_kilometers"
                          className="form-control eforms_input_container"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vehicle_kilometers}
                        />
                        {formik.errors.vehicle_kilometers &&
                          formik.touched.vehicle_kilometers && (
                            <small className="text-danger">
                              {formik.errors.vehicle_kilometers}
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
                          value={bodyStyleOption?.filter(
                            (option) => option.value === formik.values.bodyStyle
                          )}
                          options={bodyStyleOption}
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
                          (option) => option.value === formik.values.driveLine
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
                          (item) => item.value === formik.values["condition"]
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
                        className="form-control  eforms_input_container"
                        placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.vin_number?.toUpperCase()}
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
                    <div className="w-100 p-0 m-0 py-3 px-1">
                      <div className="w-100 p-0 m-0">
                        <lable className="label_style">Option List</lable>
                      </div>
                      <div className="p-3 row p-0 m-0">
                        {OptionsList?.map((option, i) => {
                          return (
                            <span className="col-lg-4 p-0 m-0 col d-flex align-items-center mr-4 mr-lg-0">
                              <input
                                onClick={() => {
                                  let newoption = OptionsList;
                                  newoption.map((e) => {
                                    if (e.label === option?.label) {
                                      if (e.value === true) {
                                        e.value = false;
                                      } else {
                                        e.value = true;
                                      }
                                    }
                                  });
                                  setOptionsList(newoption);
                                }}
                                type="checkbox"
                                className="mr-1"
                              />
                              <label
                                className="text-dark"
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {option?.label}
                              </label>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div
                      className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1"
                      ref={myRefPrice}
                    >
                      <lable className="label_style">
                        Approximate amount owning
                        <br />
                        (If financed/leased)
                      </lable>
                      <input
                        name="amount_owning"
                        className="form-control  eforms_input_container"
                        placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount_owning}
                      />
                      {formik.errors.amount_owning &&
                        formik.touched.amount_owning && (
                          <p className="text-danger">
                            {formik.errors.amount_owning}
                          </p>
                        )}
                    </div>
                    <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                      <lable className="label_style">
                        Accident/Claim history
                        <br />
                        <br />
                      </lable>
                      <Select
                        className="form-select w-100  eforms_input_container"
                        // placeholder="Exterior color"
                        options={historyOption}
                        styles={reactSelectInputStyle}
                        value={historyOption?.filter(
                          (h) =>
                            h?.value === formik.values.accident_claim_history
                        )}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "accident_claim_history",
                            e?.value
                          );
                        }}
                      />
                    </div>
                    <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0  p-1">
                      <lable className="label_style">
                        Any mechanical issues
                        <br /> (If Yes please describe in info box below)
                      </lable>
                      <Select
                        className="form-select w-100  eforms_input_container"
                        // placeholder="Exterior color"
                        options={yesNoOption}
                        styles={reactSelectInputStyle}
                        value={yesNoOption?.filter(
                          (item) =>
                            item?.value === formik.values.has_mechanical_issues
                        )}
                        onChange={(e) => {
                          formik.setFieldValue(
                            "has_mechanical_issues",
                            e?.value
                          );
                        }}
                      />
                    </div>
                    <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
                      <lable className="label_style">
                        Any damages beside minor scratches
                        <br /> (If Yes please describe in info box below)
                      </lable>
                      <Select
                        className="form-select w-100  eforms_input_container"
                        // placeholder="Exterior color"
                        options={yesNoOption}
                        styles={reactSelectInputStyle}
                        value={yesNoOption?.filter(
                          (item) =>
                            item?.value === formik.values.has_minor_damages
                        )}
                        onChange={(e) => {
                          formik.setFieldValue("has_minor_damages", e?.value);
                        }}
                      />
                    </div>
                    <div className=" row w-100 p-0 m-0 py-3 d-flex align-items-center">
                      <div className="form-group p-px-3 py-2 m-0  ">
                        <label
                          htmlFor="images"
                          className={`btn window_sticker-btn px-3 shadow blue_button_3`}
                          // onClick={() => (inputRef.current.value = "")}
                        >
                          Upload your car images{" "}
                        </label>
                        <input
                          ref={inputRef}
                          type="file"
                          name="images"
                          id="images"
                          multiple
                          accept="image/png,image/jpeg"
                          className="d-none"
                          onChange={(e) => handleUploadImage(e)}
                        />

                        {/* {
                          isLoading ? <Loading/> : (<p className="">
                            You have selected {images.length} photos
                          </p>)
                        } */}
                      </div>
                      {images.length > 0 && (
                        <div className="">
                          <p className="pl-4">
                            You have selected {images.length} photos
                          </p>
                        </div>
                      )}
                    </div>
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
                    {query?.selected_vehicle &&
                      query?.selected_vehicle !== null &&
                      query?.selected_vehicle !== "" ? (
                        <div className="p-1 px-2 col-12">
                          <h4>You Choosed a Vehicle</h4>
                        </div>
                      ) : (
                        <>
                          <div className="p-0 pt-3 m-0 w-100 d-flex justify-content-left align-items-center">
                            <EformsHeader title="Choose Your Vehicle" />
                          </div>
                          {console.log("dd", vehicleDataForSearch)}
                          <div className="p-1 m-0 w-100">
                            <FinanceSearchForVehicle
                              vehicleDataForSearch={vehicleDataForSearch}
                              formik={formik}
                            />
                          </div>
                        </>
                      )}
                  </div>

                  <div className="p-1 m-0 col-12 row align-items-center justify-content-start">
                    <div className="p-0 m-0 col-4">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          type="submit"
                          className="px-2 py-1 mb-3 blue_button_3"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFinancialValueyourtrade(
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
            {typeof otherFormik === "undefined" ? (
              <div className="p-0 m-0  col-12 col-lg-5 col-xl-4">
                <div className="pt-5 p-lg-0 e-contact-on-top m-0  pl-lg-4 pr-lg-2">
                  <EformsConatctInfo dealerData={dealerData} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuetradeCustomerWeb;
