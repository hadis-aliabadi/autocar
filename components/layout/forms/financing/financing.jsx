import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper";
import { FormikConsumer, useFormik } from "formik";
import { toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import {
  onSubmit,
} from "../../../../utils/fainancial/fainancial2";
import {
  CURRENT_ADDRESS,
  INITIAL_VALUES,
  USER_CURRADDR_DURATION_YEAR,
  USER_EMPLOYMENT_OPTIONS,
  USER_EMP_DURATION_YEAR,
  USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS,
} from "../../../../constant/fainancial/fainancial2";
import { FINANCIAL_VALIDATION_SCHEMA2 } from "../../../../constant/formik/validation";
import PersonalInfo from "../personalinfo";
import FinancialCurrntAddress from "./finance_current_address";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import Pagination from "react-bootstrap/Pagination";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";

import { vehicleTypes } from "../../../../data/vehicle_type_data";

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const Financing = (props) => {
  const {
    domain,
    advanceSearchData,
    dealerData,
    vehicleDataForSearch,
    homepath,
  } = props;
  const router = useRouter();
  const { options: cityOptions } = useGetAllCitiesWithDetail();
  const { query } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [bodyStyleId, setBodyStyleId] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const monthlyBudget = ["UNDER $250", "$250-$350", "$350-$500", "$500 +"];
  const monthlyIncome = [
    "$1800-$2249",
    "$2250-$2999",
    "$3000-$3999",
    "$4000 +",
  ];
  const [income, setIncome] = useState();
  const [budget, setBudget] = useState();
  const [credit, setCredit] = useState();
  const [employOption, setEmployOption] = useState();
  const [deurationYear, setDeurationYear] = useState();
  const [deurationCurrYear, setDeurationCurrYear] = useState();
  const [currAddressYear, setCurrAddressYear] = useState();
  const [state, setState] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("financial"))) ||
      {}
  );
  const nextHandling = () => {
    if (currentStep >= 1 && currentStep !== 10) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(currentStep);
    }
  };
  const backHandling = () => {
    if (currentStep === 1) {
      setCurrentStep(1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };
  // const styles = getBodyStyle().data;

  // const cars = dealerData?.bodyStyle.filter((element) => {
  //   return (
  //     element.name === "VAN" ||
  //     element.name === "SUV" ||
  //     element.name === "Truck" ||
  //     element.name === "Sedan"
  //   );
  // });
  // console.log(cars);
  const [activeindex, setActiveIndex] = useState(0);

  const formik = useFormik({
    initialValues: INITIAL_VALUES(query, state),
    validationSchema: () => FINANCIAL_VALIDATION_SCHEMA2(),
    //  () => ({}),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status, message } = await onSubmit(
        values,
        domain,
        budget,
        bodyStyleId,
        credit,
        employOption,
        deurationYear,
        deurationCurrYear,
        currAddressYear
      );
      setLoading(false);
      if (status === 201) {
        resetForm();
        setCurrentStep(1)

        return toast.success(message);
      } else if (status === 200) {
        resetForm();
        setCurrentStep(1)
        return toast.success(message);
      } else if (status === 401) {
        showPersonal(true);
        return toast.error(message);
      } else {
        return toast.error(message);
      }
    },
    enableReinitialize: true,
  });
  const OnClick = (page) => {
    if (currentStep === page) {
    } else {
      setCurrentStep(page);
    }
  };

  const scrollToSection = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (state) {
      localStorage.setItem("financial", JSON.stringify(state));
    }
  }, [state]);
  const handleChange = (step, stepname) => {
    // console.log({ step });
    setState((prev) => ({
      ...prev,
      [stepname]: step,
    }));
  };
  const [selectedBodyStyle, setSelectedBodyStyle] = useState(null);
  useEffect(() => {
    const selectedStyle = vehicleTypes.find(
      (bodyStyle) => bodyStyle.link === router.asPath
    );
    setSelectedBodyStyle(selectedStyle);
  }, [router.asPath]); // Trigger the effect whenever router.asPath changes

  useEffect(() => {
    // Perform actions that depend on selectedBodyStyle
    if (selectedBodyStyle?.id) {
      setBodyStyleId(selectedBodyStyle.id);
      setCurrentStep(2);
    }
  }, [selectedBodyStyle]); // Trigger the effect whenever selectedBodyStyle changes

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });
  const handleClickSubmit = () => {
    if (!formik.isValid) {
      executeScroll();
      const fieldsToFill = Object.keys(formik.errors);
      toast.error(
        `Please double-check the form fields: ${fieldsToFill.join(", ")}`
      );
    }
  };

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <>
      <div className="p-0 pt-0 m-0 w-100">
        <div className="p-0 px-1 px-md-3 px-lg-5 m-0 w-100 row d-row">
          <div className="p-0 pb-3 m-0 col-12 col-lg-12 col-xl-12">
            <form
              ref={myRef}
              onSubmit={formik.handleSubmit}
              className="p-0 p-sm-2 p-sm-4 m-0 row w-100 eforms_form__container"
            >
              <div className="d-flex justify-content-center flex-wrap w-100">
                {currentStep === 1 && (
                  <>
                    <section
                      className="bodyStyles bg-round-pattern px-0 m-0 home_slider row d-flex w-100 flex-row justify-content-center align-items-center"
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      <div className="p-0 m-0 col-12 pb-3 pb-lg-5">
                        <div className="p-0  m-0 py-3 pt-md-5 home__title quick_cover w-100 text-center d-flex flex-column align-items-center  ">
                          <div className="w-100">WHAT ARE YOU LOOKING FOR?</div>{" "}
                          <small
                            className="col-9 col-md-6 col-lg-4 lh-sm-1"
                            style={{ lineHeight: "1" }}
                          >
                            Explore our inventory and find the perfect make or
                            model for you!{" "}
                          </small>
                        </div>
                        <div>
                          <>
                            <Swiper
                              onSlideChange={(swiper) => {
                                const activeIndex = swiper.realIndex; // Get the active index considering looping
                                setActiveIndex(activeIndex);
                              }}
                              effect={"coverflow"}
                              coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                              }}
                              className=" row w-100 bodyStyles__slider "
                              style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                                position: "relative",
                                padding: 0,
                                margin: 0,
                              }}
                              initialSlide={
                                Math.round(vehicleTypes?.length / 2) - 1
                              }
                            
                              pagination={true}
                              autoplay={{
                                delay: 8000,
                              }}
                              centeredSlides
                              // slidesPerView={1}
                              breakpoints={{
                                1200: {
                                  slidesPerView: 3,
                                  // spaceBetween: 80,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                                460: {
                                  slidesPerView: 1,
                                },
                                
                              }}
                              slidesPerView={3}
                              loop={true}
                            >
                              {vehicleTypes?.map((vehicle) => (
                                <SwiperSlide className=" h-100 ">
                                  <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <a
                                      onClick={() => {
                                        setBodyStyleId(vehicle.id);
                                        OnClick(2);
                                        handleChange(vehicle.id, "car");
                                        setSelectedBodyStyle(vehicle);
                                      }}
                                    >
                                      <img
                                        className="w-75 h-75"
                                        src={vehicle?.imgSrc}
                                      />
                                    </a>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <div className="p-0 m-0 w-100 row align-items-center justify-content-center pt-5">
                              <div className="p-0 m-0 col-6">
                                <div className="text-right pr-2 pr-lg-4 bodyStyles__text">
                                  I WANT A{" "}
                                </div>
                              </div>
                              <div
                                className="p-0 m-0 col-6 "
                                style={{
                                  position: "relative",
                                  zIndex: "9999999999",
                                }}
                              >
                                <a className="  text-center ">
                                  <button className=" linkto_button linkto_button--green bodyStyles__button blue_button_3 btn d-flex align-items-center justify-content-center">
                                    <span
                                      className="px-3 text-center"
                                      onClick={() => {
                                        setBodyStyleId(vehicle.id);
                                        OnClick(2);
                                        handleChange(vehicle.id, "car");
                                        setSelectedBodyStyle(vehicle);
                                      }}
                                    >
                                      {activeindex === 0
                                        ? "Truck"
                                        : activeindex === 1
                                        ? "SUV"
                                        : activeindex === 2
                                        ? "Sedan"
                                        : activeindex === 3
                                        ? "Van"
                                        : ""}
                                      {/* Read More */}
                                    </span>
                                    {/* <img src="/images/home/arrow-down-left.png" /> */}
                                  </button>
                                </a>
                              </div>
                            </div>
                          </>
                        </div>
                      </div>

                      {/* <HomeBrands /> */}
                    </section>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                        <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                          <img
                            className="w-75"
                            src={selectedBodyStyle?.imgSrc}
                          />
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4>Personal Info</h4>
                        </div>
                        <div className="p-0 m-0 mb-3 mb-lg-2 col-12">
                          <div className="p-0 m-0 row w-100">
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>First Name</label>
                              <input
                                name="firstName"
                                className="form-control  eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "firstname");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                              />
                              {formik.errors.firstName &&
                                formik.touched.firstName && (
                                  <small className="text-danger">
                                    {formik.errors.firstName}
                                  </small>
                                )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Last Name</label>
                              <input
                                name="lastName"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "lastname");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                              />
                              {formik.errors.lastName &&
                                formik.touched.lastName && (
                                  <small className="text-danger">
                                    {formik.errors.lastName}
                                  </small>
                                )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Email</label>
                              <input
                                name="email"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "email");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                              />
                              {formik.errors.email && formik.touched.email && (
                                <small className="text-danger">
                                  {formik.errors.email}
                                </small>
                              )}
                            </div>
                            <div
                              className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                            >
                              <label>Phone</label>
                              <input
                                name="phone"
                                className="form-control eforms_input_container"
                                placeholder=""
                                onChange={(e) => {
                                  formik.handleChange(e);
                                  handleChange(e.target.value, "phone");
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                              />
                              {formik.errors.phone && formik.touched.phone && (
                                <small className="text-danger">
                                  {formik.errors.phone}
                                </small>
                              )}
                            </div>
                            <>
                              <div
                                className={`form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1`}
                              >
                                <lable>Date Of Birth</lable>
                                <input
                                  type="text"
                                  onFocus={(e) => (e.target.type = "date")}
                                  name="user_birthday"
                                  className="form-control eforms_input_container"
                                  placeholder=""
                                  onChange={(e) => {
                                    formik.handleChange(e);
                                    handleChange(e.target.value, "birth");
                                  }}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.user_birthday}
                                />
                              </div>
                            </>
                          </div>
                          {/* <PersonalInfo formik={formik} complete /> */}
                          <div className="d-flex justify-content-center">
                            <button
                              // type="submit"
                              className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                              // onClick={() => {
                              //   typeof window !== "undefined" &&
                              //     localStorage.removeItem("financial");
                              // }}
                              onClick={backHandling}
                              disabled={
                                !formik.values.phone &&
                                !formik.values.firstName &&
                                !formik.values.lastName &&
                                !formik.values.email &&
                                !formik.values.user_birthday
                              }
                            >
                              Previous
                            </button>
                            <button
                              // type="submit"
                              className="btn w-50 w-md-50 btn blue_button .  text-center"
                              // onClick={() => {
                              //   typeof window !== "undefined" &&
                              //     localStorage.removeItem("financial");
                              // }}
                              onClick={nextHandling}
                              disabled={
                                !formik.values.phone &&
                                !formik.values.firstName &&
                                !formik.values.lastName &&
                                !formik.values.email &&
                                !formik.values.user_birthday
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                        <div className="p-0 m-0 d-flex justify-content-center align-items-center w-100">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 d-flex d-md-none text-center justify-content-center align-items-center">
                        <div className="p-0 m-0 d-flex justify-content-center align-items-center w-100">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4>SELECT YOUR MONTHLY BUDGET?</h4>
                        </div>
                        {monthlyBudget.map((budget) => {
                          return (
                            <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                              <button
                                type="button"
                                className={`btn btn_finance w-100 w-md-100 h-75 my-2 d-flex justify-content-center ${
                                  budget === state.budget ? "selectbtn" : ""
                                }`}
                                onClick={() => {
                                  setBudget(budget);
                                  OnClick(4);
                                  handleChange(budget, "budget");
                                }}
                              >
                                {budget}
                              </button>
                            </div>
                          );
                        })}
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                            onClick={backHandling}
                          >
                            Previous
                          </button>
                          <button
                            className="btn w-50 w-md-50 btn blue_button .  text-center"
                            onClick={nextHandling}
                            disabled={!state?.budget}
                          >
                            Next
                          </button>
                        </div>
                      </div>

                      <div className="p-0 m-0 col-12 col-md-5 d-none d-md-flex text-center">
                        <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                        <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                          <img src="/images/finance/icon3.png" />
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4>Whats Is Your Employment Status ?</h4>
                        </div>
                        {USER_EMPLOYMENT_OPTIONS?.map((employoption) => {
                          return (
                            <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                              <button
                                type="button"
                                className={`btn btn_finance w-100 w-md-100 h-75 my-2 d-flex justify-content-center ${
                                  employoption.value ===
                                  state.employoptionstatus
                                    ? "selectbtn"
                                    : ""
                                }`}
                                onClick={() => {
                                  setEmployOption(employoption.value);
                                  OnClick(5);
                                  handleChange(
                                    employoption.value,
                                    "employoptionstatus"
                                  );
                                }}
                              >
                                {employoption.label}
                              </button>
                            </div>
                          );
                        })}
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                            onClick={backHandling}
                          >
                            Previous
                          </button>
                          <button
                            className="btn w-50 w-md-50 btn blue_button .  text-center"
                            onClick={nextHandling}
                            disabled={!state?.employoptionstatus}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                        <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                        <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                        <div className="col-12 text-center mb-4 w-100">
                          <h4>Whats Is Your Estimated Credit Rating ?</h4>
                        </div>
                        {USER_PLEASE_RATE_YOUR_CREDIT_OPTIONS.map(
                          (creditmonth) => {
                            return (
                              <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                                <button
                                  type="button"
                                  className={`btn btn_finance w-100 w-md-100 h-75 my-2 d-flex justify-content-center ${
                                    creditmonth.value === state.creditrating
                                      ? "selectbtn"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setCredit(creditmonth.value);
                                    OnClick(6);
                                    handleChange(
                                      creditmonth.value,
                                      "creditrating"
                                    );
                                  }}
                                >
                                  {creditmonth.label}
                                </button>
                              </div>
                            );
                          }
                        )}
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                            onClick={backHandling}
                          >
                            Previous
                          </button>
                          <button
                            className="btn w-50 w-md-50 btn blue_button .  text-center"
                            onClick={nextHandling}
                            disabled={!state?.creditrating}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                        <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                          <img
                            className="w-100"
                            src={selectedBodyStyle.imgSrc}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 6 && (
                  <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                      <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                      <div className="row w-100 justify-content-center p-0 m-0">
                        <div className="col-12 text-center mb-2 w-100">
                          <h4>WHAT IS YOUR MONTHLY INCOME?</h4>
                        </div>
                        <label className="w-100 text-center">
                          Enter amount before taxes & deductions
                        </label>
                        <input
                          type="number"
                          name="user_curr_emp_income"
                          className="form-control w-100 text-center eforms_input_container"
                          placeholder=""
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleChange(e.target.value, "income");
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.user_curr_emp_income}
                        />
                        {formik.errors.user_curr_emp_income &&
                          formik.touched.user_curr_emp_income && (
                            <small className="text-danger">
                              {formik.errors.user_curr_emp_income}
                            </small>
                          )}
                        <div className="col-12 text-center mt-4 w-100">
                          <h4>Where Do You Work ?</h4>
                        </div>
                        <label className="w-100 text-center">
                          Enter company Name{" "}
                        </label>
                        <input
                          name="user_curr_employer"
                          className="form-control w-100 text-center eforms_input_container"
                          placeholder=""
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleChange(e.target.value, "companyname");
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.user_curr_employer}
                        />
                        <div className="col-12 text-center mt-4 w-100">
                          <h4>What Is Your Job ?</h4>
                        </div>
                        <label className="w-100 text-center">
                          Enter Your Job Title
                        </label>
                        <input
                          name="user_curr_emp_occupation"
                          className="form-control w-100 text-center eforms_input_container"
                          placeholder=""
                          onChange={(e) => {
                            formik.handleChange(e);
                            handleChange(e.target.value, "jobtitle");
                          }}
                          onBlur={formik.handleBlur}
                          value={formik.values.user_curr_emp_occupation}
                        />
                      </div>
                      <div className="mt-3 d-flex justify-content-center">
                        <button
                          className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                          onClick={backHandling}
                        >
                          Previous
                        </button>
                        <button
                          className="btn w-50 w-md-50 btn blue_button .  text-center"
                          onClick={nextHandling}
                          disabled={
                            !formik.values.user_curr_emp_income &&
                            !formik.values.user_curr_employer &&
                            !formik.values.user_curr_emp_occupation
                          }
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                      <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 7 && (
                  <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                      <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                      <div className="col-12 text-center mb-4 w-100">
                        <h4>How Long Have You Worked There ?</h4>
                      </div>
                      {USER_EMP_DURATION_YEAR.map((durationmonth) => {
                        return (
                          <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                            <button
                              type="button"
                              className={`btn btn_finance w-100 w-md-100 h-75 my-2 d-flex justify-content-center ${
                                durationmonth.label === state.workedtime
                                  ? "selectbtn"
                                  : ""
                              }`}
                              onClick={() => {
                                setDeurationYear(durationmonth.label);
                                OnClick(8);
                                handleChange(durationmonth.label, "workedtime");
                              }}
                            >
                              {durationmonth.label}
                            </button>
                          </div>
                        );
                      })}
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                          onClick={backHandling}
                        >
                          Previous
                        </button>
                        <button
                          className="btn w-50 w-md-50 btn blue_button .  text-center"
                          onClick={nextHandling}
                          disabled={!state?.workedtime}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                      <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 8 && (
                  <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                      <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                      <div className="col-12 text-center mb-4 w-100">
                        <h4>What Is Home Address ?</h4>
                      </div>
                      <div className="p-0 m-0 row w-100">
                        <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
                          <label>Postal code</label>
                          <input
                            name="user_currAddr_postalcode"
                            className="form-control  eforms_input_container"
                            placeholder=""
                            onChange={(e) => {
                              formik.handleChange(e);
                              handleChange(e.target.value, "postalcode");
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.user_currAddr_postalcode}
                          />
                        </div>
                        <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                          <label>City</label>
                          <Select
                            className="form-select w-100  eforms_input_select_container"
                            styles={reactSelectInputStyle}
                            options={cityOptions}
                            onChange={(option) => {
                              formik.setFieldValue(
                                "frk_user_currAddr_city_id",
                                option?.value
                              );
                              formik.setFieldValue(
                                "province",
                                option?.province
                              );
                              formik.setFieldValue("country", option?.country);
                            }}
                            placeholder=""
                            name="city"
                            onBlur={formik.handleBlur}
                          />
                        </div>
                        <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                          <label>Province</label>
                          <input
                            className="form-control  eforms_input_container w-100"
                            name="province"
                            placeholder=""
                            value={formik.values.province}
                            // disabled
                          />
                        </div>
                        <div className="form-group col-12 col-sm-6 p-0 m-0 mt-2 mb-2 p-1">
                          <label>Country</label>
                          <input
                            placeholder=""
                            name="country"
                            className="form-control  eforms_input_container w-100"
                            value={formik.values.country}
                            // disabled
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                          onClick={backHandling}
                        >
                          Previous
                        </button>
                        <button
                          className="btn w-50 w-md-50 btn blue_button .  text-center"
                          onClick={nextHandling}
                          disabled={
                            !formik?.values?.user_currAddr_postalcode &&
                            !formik?.values?.frk_user_currAddr_city_id
                          }
                        >
                          Next
                        </button>
                      </div>
                      {/* <FinancialCurrntAddress formik={formik} /> */}
                    </div>
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                      <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {currentStep === 9 && (
                  <>
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                      <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                      <div className="col-12 text-center mb-4 w-100">
                        <h4>Do You Rent Or Own Your Home ?</h4>
                      </div>
                      {CURRENT_ADDRESS.map((curraddress) => {
                        return (
                          <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                            <button
                              type="button"
                              className={`btn btn_finance w-100 w-md-100 h-75 my-2 d-flex justify-content-center ${
                                curraddress.label === state.homestatus
                                  ? "selectbtn"
                                  : ""
                              }`}
                              onClick={() => {
                                setCurrAddressYear(curraddress.label);
                                handleChange(curraddress.label, "homestatus");
                              }}
                            >
                              {curraddress.label}
                            </button>
                          </div>
                        );
                      })}
                      <div className="col-12 text-center mb-4 w-100">
                        <h4>Do You Rent Or Own Your Home ?</h4>
                      </div>
                      <div className="p-0 m-0 row w-100 justify-content-center align-items-center">
                        <div className="p-0 m-0 col-12">
                          <lable>Round to Nearest Dollar </lable>
                          <input
                            name="user_currAddr_monthly_payment"
                            className="form-control eforms_input_container"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.user_currAddr_monthly_payment}
                          />
                        </div>
                      </div>
                      <div className="mt-3 d-flex justify-content-center">
                        <button
                          className="btn mr-1 w-50 w-md-50 btn blue_button .  text-center"
                          onClick={backHandling}
                        >
                          Previous
                        </button>
                        <button
                          className="btn w-50 w-md-50 btn blue_button .  text-center"
                          onClick={nextHandling}
                          disabled={
                            !formik?.values?.user_currAddr_monthly_payment &&
                            !state?.homestatus
                          }
                        >
                          Next
                        </button>
                      </div>
                    </div>
                    <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                      <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                        <img
                          className="w-100"
                          src={selectedBodyStyle.imgSrc}
                        />
                      </div>
                    </div>
                  </>
                )}
                {currentStep === 10 && (
                  <>
                    <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                      <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                        <div className="p-0 m-0 col-12 col-md-5 text-center d-flex d-md-none justify-content-center align-items-center">
                          <div className="p-0 m-0 d-flex justify-content-center align-items-center">
                            <img
                              className="w-100"
                              src={selectedBodyStyle.imgSrc}
                            />
                          </div>
                        </div>
                        <div className="p-0 m-0 col-12 col-md-7 finance_wizard_size">
                          <div className="col-12 text-center mb-4 w-100">
                            <h4>
                              How Long Have You Lived at Your Current Address ?
                            </h4>
                          </div>
                          {USER_CURRADDR_DURATION_YEAR.map((deurationcurr) => {
                            return (
                              <div className="p-0 m-0 w-100 row justify-content-center align-items-center">
                                <button
                                  type="button"
                                  className={`btn btn_finance w-50 w-md-50 h-75 my-2 d-flex justify-content-center ${
                                    deurationcurr.label === state.livedtime
                                      ? "selectbtn"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setDeurationCurrYear(deurationcurr.label);
                                    OnClick(10);
                                    handleChange(
                                      deurationcurr.label,
                                      "livedtime"
                                    );
                                  }}
                                >
                                  {deurationcurr.label}
                                </button>
                              </div>
                            );
                          })}
                          <div className="p-0 m-0 mt-3 col-12">
                            <div className="p-0 m-0 w-100 row">
                              <div className="p-0 m-0 w-100 d-flex">
                                <input
                                  type="checkbox"
                                  name="confirm_finance_checkbox"
                                  id="confirm_finance_checkbox"
                                  className="m-0 mt-1"
                                  onChange={(e) => {
                                    setConfirm(e.target.checked);
                                  }}
                                  style={{
                                    minHeight: "20px",
                                    minWidth: "20px",
                                  }}
                                />
                                <label
                                  htmlFor="confirm_finance_checkbox"
                                  className="p-0 m-0 px-2"
                                  style={{
                                    textAlign: "justify",
                                  }}
                                >
                                  I agree that by submitting this application, I
                                  authorize and give Auto Plus Financing, as
                                  well as any potential financing source Auto
                                  Plus Financing presents this application to,
                                  my consent to obtain my credit report from any
                                  credit reporting agency used to complete an
                                  investigation of my credit.
                                </label>
                              </div>
                              <div className="p-1 m-0 mt-3 col-6 text-center">
                                <button
                                  className="btn mr-1 w-100 w-md-100 btn blue_button .  text-center"
                                  onClick={backHandling}
                                >
                                  Previous
                                </button>
                              </div>
                              <div className="p-1 m-0 mt-3 col-6 text-center">
                                <button
                                  type="submit"
                                  className="btn w-100 w-md-100 btn blue_button .  text-center"
                                  onClick={() => {
                                    typeof window !== "undefined" &&
                                      localStorage.removeItem("financial");
                                  }}
                                  disabled={!confirm && !state?.deurationcurr}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-0 m-0 col-12 col-md-5 text-center d-none d-md-flex">
                          <div className="p-0 m-0 d-flex justify-content-end align-items-end w-100">
                            <img
                              className="w-100"
                              src={selectedBodyStyle.imgSrc}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="p-0 pt-4 m-0 d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                {currentStep !== 1 ? (
                  <Pagination
                    size="sm"
                    className="m-0 d-flex justify-content-between align-items-center"
                  >
                    {/* <Pagination.Prev onClick={backHandling} /> */}
                    {currentStep ? (
                      <>
                        {currentStep === 1 ? (
                          <Pagination.Item
                            active
                            // onClick={() => OnClick(1)}
                            className="p-0 m-0"
                          >
                            <span className="white-bullet"></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(1)}
                            className="p-0 m-0"
                            style={{ backgroundColor: "#1c9bf0" }}
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 2 ? (
                          <Pagination.Item active>
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(2)}
                            style={
                              currentStep < 2
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                          >
                            <span className="white-bullet "> </span>
                          </Pagination.Item>
                        )}
                        {currentStep === 3 ? (
                          <Pagination.Item
                            active
                            // onClick={() => OnClick(3)}
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.monthly_budget &&
                            //   !formik.values.user_please_rate_your_credit
                            // }
                          >
                            {/* {1} */}
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(3)}
                            style={
                              currentStep < 3
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.monthly_budget &&
                            //   !formik.values.user_please_rate_your_credit
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 4 ? (
                          <Pagination.Item
                            active
                            // onClick={() => OnClick(4)}
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            {/* {4} */}
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(3)}
                            style={
                              currentStep < 4
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 5 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(5)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(5)}
                            style={
                              currentStep < 5
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 6 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(6)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(6)}
                            style={
                              currentStep < 6
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 7 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(7)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_curr_emp_occupation
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(7)}
                            style={
                              currentStep < 7
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_curr_emp_occupation
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 8 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(8)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_curr_emp_occupation
                            // }
                          >
                            <span className="white-bullet"></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(8)}
                            style={
                              currentStep < 8
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday
                            // }
                          >
                            {/* {console.log(formik.values.monthly_budget)} */}
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 9 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(9)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_currAddr_postalcode &&
                            //   !formik.values.frk_user_currAddr_city_id &&
                            //   !formik.values.province &&
                            //   !formik.values.country
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(9)}
                            style={
                              currentStep < 9
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_currAddr_postalcode &&
                            //   !formik.values.frk_user_currAddr_city_id &&
                            //   !formik.values.province &&
                            //   !formik.values.country
                            // }
                          >
                            <span className="white-bullet"></span>
                          </Pagination.Item>
                        )}
                        {currentStep === 10 ? (
                          <Pagination.Item
                            // onClick={() => OnClick(10)}
                            active
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_currAddr_monthly_payment &&
                            //   !formik.values.user_currAddr_postalcode &&
                            //   !formik.values.frk_user_currAddr_city_id &&
                            //   !formik.values.province &&
                            //   !formik.values.country
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        ) : (
                          <Pagination.Item
                            // onClick={() => OnClick(10)}
                            style={
                              currentStep < 10
                                ? { backgroundColor: "#b8b8b8" }
                                : undefined
                            }
                            // disabled={
                            //   !formik.values.phone &&
                            //   !formik.values.firstName &&
                            //   !formik.values.lastName &&
                            //   !formik.values.email &&
                            //   !formik.values.user_birthday &&
                            //   !formik.values.user_currAddr_monthly_payment &&
                            //   !formik.values.user_currAddr_postalcode &&
                            //   !formik.values.frk_user_currAddr_city_id &&
                            //   !formik.values.province &&
                            //   !formik.values.country
                            // }
                          >
                            <span className="white-bullet "></span>
                          </Pagination.Item>
                        )}
                      </>
                    ) : (
                      ""
                    )}
                    {/* <Pagination.Next onClick={nextHandling} /> */}
                  </Pagination>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financing;
