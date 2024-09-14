import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { INITIAL_VALUES } from "../../../constant/fainancial/fainancial";
import ValueTradeFormFinansial from "../../../components/layout/forms/financing/tradeInfinancial";
import CarFinderVehicleFinancial from "../../../components/layout/forms/financing/car-finder-financial";
import DesiredVehiclee from "../../../components/layout/forms/financing/desiredvehicle";
import PersonalInfo from "../../../components/layout/forms/personalinfo";
import { onSubmit } from "../../../utils/fainancial/fainancial";
import { FINANCIAL_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import Loading from "../../../components/common/web/loading/loading";
import { httpRequest } from "../../../apis";
import EFormsHeaderSection from "../../../components/common/web/eform-header/eforms_header_section";
import FinancialCurrntAddress from "../../../components/layout/forms/financing/finance_current_address";
import FinancialPreviousAddress from "../../../components/layout/forms/financing/finance_previous_address";
import FinancialCurrentEmployment from "../../../components/layout/forms/financing/finance_current_employment";
import FinancialPreviousEmployment from "../../../components/layout/forms/financing/finance_previous_employment";
import FinancialOtherInformation from "../../../components/layout/forms/financing/finance_other_information";
import Head from "next/head";
import EformsHeader from "../../../components/common/layout/header/eform_header";
import FinanceSearchForVehicle from "../../../components/layout/forms/financing/finance_search_for_vehicle";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRef } from "react";
import EformsConatctInfo from "../../../components/common/web/eforms/eforms_contact_info";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import FinancialTradeInformation from "../../../components/layout/forms/financing/finance_trade_information";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";
const Fainancial = (props) => {
  const {
    domain,
    advanceSearchData,
    dealerData,
    vehicleDataForSearch,
    otherFormik = undefined,
    vehiclesData2,
  } = props;
  const { query } = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(true);
  const [desiredModal, setDesiredModal] = React.useState(false);
  const [valueYourTrade, setValueYourTrade] = React.useState(false);
  const [carFinder, setCarFinder] = React.useState(false);
  const [selected, setSelected] = useState(null);
  const [advanceSearchCar, setadvanceSearchCar] = useState("");
  const [vehiclequery, setvehiclequery] = useState();
  const [rejectedImages, setRejectedImages] = useState([]);
  const [loading, setloading] = useState(false);
  const [compImg, setCompImg] = useState([]);


    // Recaptcha
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const recaptchaRef = useRef();
  
    const handleRecaptchaChange = (token) => {
      setRecaptchaToken(token);
    };
  const formik = useFormik({
    initialValues: INITIAL_VALUES(query),
    validationSchema: () => FINANCIAL_VALIDATION_SCHEMA(),
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      if (confirm) {
        setLoading(true);
        const { data, status, message } = await onSubmit(
          values,
          domain,
          compImg
        );
        setLoading(false);
        if (status === 201) {
          resetForm();
          return toast.success(message);
        } else if (status === 401) {
          showPersonal(true);
          return toast.error(message);
        } else {
          return toast.error(message);
        }
      } else {
        toast.error("You must confirm the agreement");
      }
    },
    enableReinitialize: true,
  });
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const handleClickSubmit = () => {
    if (!formik.isValid) {
      executeScroll();
      toast.error("Please double-check the form fields");
    }
  };
  const handleRemoveVehicle = () => {
    formik.setFieldValue("frk_desire_MidVclDS_id", "");
    setadvanceSearchCar();
  };
  useEffect(() => {
    if (query.selected_vehicle && vehicleDataForSearch) {
      setvehiclequery(
        vehicleDataForSearch?.data?.filter(
          (item) => item.id === +query.selected_vehicle
        )[0]
      );
    }
  }, [query.selected_vehicle, vehicleDataForSearch]);
  useEffect(() => {
    if (formik?.values?.frk_desire_MidVclDS_id && vehicleDataForSearch) {
      setvehiclequery(
        vehicleDataForSearch?.data?.filter(
          (item) => item.id === +formik?.values?.frk_desire_MidVclDS_id
        )[0]
      );
    }
  }, [formik?.values?.frk_desire_MidVclDS_id, vehicleDataForSearch?.data]);
  useEffect(() => {
    setSelected(
      vehiclequery?.Vehicle?.model_year +
        " " +
        vehiclequery?.Vehicle?.make +
        " " +
        vehiclequery?.Vehicle?.model
    );
  }, [vehiclequery]);

  const imageUploadHandler = async (e) => {
    setRejectedImages([]);
    const filesLength = e.target.files?.length;
    const files = e.target.files;
    setloading(true);
    formik.setFieldValue("drivers_license", files[0]);

    for (
      let i = 0;
      i < filesLength && i < 7 - formik.values.images?.length;
      i++
    ) {
      if (files?.length !== 0) {
        let Singlefile = files[i];

        // Singlefile.order = i;
        setLastOrder((prev) => prev + 1 + i);
        compress(Singlefile, lastOrder + 1 + i);
      }
    }
  };

  // console.log(formik.errors);

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Apply for car loan in ${dealerData?.business_city?.city}, ${
            dealerData?.business_city?.Province?.province
          } with ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group! Contact us today for Car Financing related queries. We like to assist you.`}
        />
        <meta
          name="keywords"
          content={`used cars ${dealerData?.business_city?.city}, car dealerships ${dealerData?.business_city?.city}, ford dealership ${dealerData?.business_city?.city}, used car dealerships ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city}, used cars ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used car dealers ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, second hand cars ${dealerData?.business_city?.city}, cheap cars for sale in ${dealerData?.business_city?.city}, cars for sale in ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, used pickup trucks for sale in ${dealerData?.business_city?.city}, cars in ${dealerData?.business_city?.city}, auto traders ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, autotrader ${dealerData?.business_city?.Province?.province} ${dealerData?.business_city?.city}, ${dealerData?.business_city?.city} mercedes benz dealer, mercedes dealer ${dealerData?.business_city?.city}, used trucks ${dealerData?.business_city?.city}, car for sale by owner ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, honda dealership ${dealerData?.business_city?.city}`}
        />
        <meta
          name="description"
          content={`Fill out the application form for car loan. Tell us your needs, budget and other necessary information for car financing in ${dealerData?.business_city?.city}, ${dealerData?.business_city?.Province?.province}.`}
        />

        <title>
          {`  Used Car Financing | Used Car Loans ${dealerData?.business_city?.city}
          , ${dealerData?.business_city?.Province?.province}| $
          {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name} Group`}
        </title>
        <title>
          {`  Car Loan Application ${dealerData?.business_city?.city},
          ${dealerData?.business_city?.Province?.province} | Car Finance
          Application Form |
          ${dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name} Auto
          Group{" "}`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <DesiredVehiclee
        show={desiredModal}
        onClose={() => setDesiredModal(false)}
        formik={formik}
        domain={domain}
        advanceSearchData={advanceSearchData}
        setadvanceSearchCar={setadvanceSearchCar}
        dealerData={dealerData}
        isModal={true}
        vehiclesData2={vehiclesData2}
      />
      <ValueTradeFormFinansial
        show={valueYourTrade}
        onClose={() => setValueYourTrade(false)}
        formik={formik}
        domain={domain}
        vehicleDataForSearch={vehicleDataForSearch}
        otherFormik={otherFormik}
        advanceSearchData={advanceSearchData}
        inModal={true}
      />
      <CarFinderVehicleFinancial
        show={carFinder}
        onClose={() => setCarFinder(false)}
        formik={formik}
        domain={domain}
        vehicleDataForSearch={vehicleDataForSearch}
      />
      <div
        className="p-0 m-0 w-100"
        style={{ overflow: "hidden", backgroundColor: "#fff" }}
      >
        <div className="px-0 py-0 m-0 row w-100 justify-content-center align-items-start ">
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.financial_image_url}
            showImage={true}
          />
          <div className="row col-12 col-lg-10 px-lg-0 pt-4">
            <div
              className={
                "ZZ pr-lg-4 p-0 m-0 w-100 col-12 col-lg-7 col-xl-8 d-flex justify-content-center align-items-center"
              }
            >
              <form
                ref={myRef}
                onSubmit={formik.handleSubmit}
                style={{ backgroundColor: "#f5f5f5" }}
                className="p-0 m-0 row w-100 eforms_form__container row"
              >
                <div className="w-100 p-0 m-0 my-3 my-md-0 row align-items-start justify-content-around eforms_form_finance_first_div_conatiner">
                  <div className="p-2 px-lg-4 mx-auto m-0 mb-2 col-12 col-md-12 ">
                    <EFormsHeaderSection
                      title="Apply For Credit"
                      image={
                        dealerData?.prefixUrl + dealerData?.financial_image_url
                      }
                      showImage={false}
                    />
                    <div
                      style={{
                        fontFamily: "Montserrat",
                        color: "#000",
                        fontSize: "14px",
                      }}
                    >
                      <b>Get approved from home!</b>
                      <p className="p-0 m-0 pb-3">
                        Please fill out the secure credit application below.
                      </p>
                    </div>

                    <PersonalInfo formik={formik} complete />
                  </div>
                </div>

                <div className="p-0 m-0 my-3 my-md-0 row align-items-center justify-content-around eforms_form_finance_second_div_conatiner">
                  <div className="p-2 px-lg-4 m-0  col-12 ">
                    <EformsHeader title="Current Address" />
                    <FinancialCurrntAddress formik={formik} />
                  </div>
                </div>
                <div className="p-0 m-0 my-3 my-md-0 row align-items-center justify-content-around eforms_form_finance_second_div_conatiner">
                  <div className="p-2 p-lg-4 m-0  col-12 ">
                    <EformsHeader title="Current Employment" />
                    <FinancialCurrentEmployment formik={formik} />
                  </div>
                  <div className="p-2 px-lg-4 m-0 col-12 ">
                    <EformsHeader title="Previous Employment" />
                    <FinancialPreviousEmployment formik={formik} />
                  </div>
                </div>
                <div className="p-0 m-0 my-3 my-md-0 row align-items-center justify-content-around eforms_form_finance_third_div_conatiner">
                  <div className="col-12"></div>
                  <div className="p-2 px-lg-4 py-lg-3 m-0 mb-3 col-12 ">
                    <EformsHeader title="Other information" />
                    <FinancialOtherInformation formik={formik} />

                    <div className="p-0 pr-2 py-2 pb-2 m-0 row">
                      {query?.selected_vehicle &&
                      query?.selected_vehicle !== null &&
                      query?.selected_vehicle !== "" ? (
                        <div className="p-0 m-0  col-12">
                          {query.selected_vehicle ? (
                            <p style={{ fontSize: "14px" }}>
                              <span style={{ fontWeight: "bold" }}>
                                Vehicle Selected:{" "}
                              </span>
                              {vehiclequery?.Vehicle?.model_year +
                                " " +
                                vehiclequery?.Vehicle?.make +
                                " " +
                                vehiclequery?.Vehicle?.model}
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      ) :null} 
                        <>
                          <div className="p-0 pt-3 pl-1 m-0 w-100 d-flex justify-content-left align-items-center">
                            <EformsHeader title="Choose Your Vehicle" />
                          </div>
                          <div className="p-1 m-0 w-100">
                            <FinanceSearchForVehicle
                              vehicleDataForSearch={vehicleDataForSearch}
                              formik={formik}
                              selected={selected}
                              advanceSearchCar={advanceSearchCar}
                            />
                          </div>
                          {formik.values.frk_desire_MidVclDS_id &&
                            advanceSearchCar && (
                              <div className="p-0 m-0 my-2 mb-1 col-12">
                                <div className="p-0 m-0 d-flex align-items-center justify-content-between">
                                  <span className="mx-2">
                                    {advanceSearchCar}
                                  </span>
                                  <FaTrash
                                    color="#1f3336"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleRemoveVehicle}
                                  />
                                </div>
                              </div>
                            )}
                          {/* <div className="p-1 py-2 m-0 col-12" /> */}

                          <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                            <button
                              type="button"
                              onClick={() => setDesiredModal(true)}
                              className={`btn ${
                                formik.values.frk_desire_MidVclDS_id
                                  ? "blue_button financial_button__modal_button_selected"
                                  : "blue_button"
                              }  w-100`}
                            >
                              <span className="p-0 m-0 text-center w-100 d-flex justify-content-center">
                                {formik.values.frk_desire_MidVclDS_id
                                  ? "Vehicle selected"
                                  : "Advance Search"}
                              </span>
                            </button>
                          </div>
                        </>
                     
                      <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                        <button
                          type="button"
                          onClick={() => setValueYourTrade(true)}
                          className={`btn ${
                            formik.values.frk_valueYourTrade_id
                              ? "blue_button financial_button__modal_button_selected"
                              : "blue_button"
                          }  w-100`}
                        >
                          <span className="p-0 m-0 text-center w-100 d-flex justify-content-center">
                            {formik.values.frk_valueYourTrade_id
                              ? "Appraise My Trade selected"
                              : "Appraise My Trade"}
                          </span>
                        </button>
                      </div>
                      <div className="p-1 py-1 py-sm-0 px-sm-1 m-0 col-12 col-sm-4">
                        <button
                          type="button"
                          onClick={() => setCarFinder(true)}
                          className={`btn ${
                            formik.values.frk_carFinder_id
                              ? "blue_button financial_button__modal_button_selected"
                              : "blue_button"
                          }  w-100`}
                        >
                          <span className="p-0 m-0 text-center w-100 d-flex justify-content-center">
                            {formik.values.frk_carFinder_id
                              ? "Car finder selected"
                              : "Car finder"}
                          </span>
                        </button>
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
                    <div className="p-0 m-0 mt-3 col-12">
                      <div className="p-0 m-0 w-100 d-flex">
                        <label
                          htmlFor="confirm_checkbox"
                          className="p-0 m-0 px-2 "
                        >
                          I agree that by submitting this application, I
                          authorize and give this dealership, as well as any
                          potential financing source this dealership presents
                          this application to, my consent to obtain my credit
                          report from any credit reporting agency used to
                          complete an investigation of my credit.
                        </label>
                      </div>
                    </div>

                    <div className="py-4 px-1 ">
                      <span className="finance-form1">Disclaimer:</span>
                      <span className="finance-form2">
                        {" "}
                        By submitting this application, you authorize us to run
                        your credit report.
                      </span>
                    </div>

                    <div className="p-sm-1 p-0 m-0 mt-3 col-md-5 col-6">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          onClick={handleClickSubmit}
                          type="submit"
                          className="btn blue_button"
                        >
                          Get Approved
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="pl-lg-3 p-0 m-0 w-100 col-12 col-lg-5 col-xl-4 d-none d-lg-flex">
              <div className="pt-5 p-lg-0 m-0 px-xl-2 e-contact-on-top">
                <EformsConatctInfo dealerData={dealerData} />
              </div>
            </div>
            {/* <div
              style={{ backgroundColor: "#f5f5f5", fontFamily: "Montserrat" }}
              className="pl-lg-3 pt-3 p-0 m-0 w-100 col-12 col-lg-4 col-xl-4 "
            >
              <div className="pt-5 p-lg-0 m-0 px-2 w-100">
                <b className="finance_contact">Online Credit Application</b>
                <p
                  style={{ fontSize: "14px" }}
                  className="mt-3 p-0 m-0 col-10 contact-seconf-titile"
                >
                  Need help filling out your application? We would be happy to
                  help you.
                </p>
                <div>
                  <Link href="/forms/contact-us">
                    <a className="col-5 col-lg-2">
                      <button className="btn  blue_button d-flex flex-row align-items-center justify-content-center  mt-2 font-weight-normal">
                        Contact Us
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Fainancial;

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: advanceSearchData, status: advanceSearchDataStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      null,
      {},
      false
    );
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});

  const { status: vehiclesStatus2, data: vehiclesData2 } = await httpRequest(
    "GET",
    `/dealership/vehicles/all/with/thumbnail/${domain}`,
    {},
    {},
    false
  );

  if (+vehicleDataForSearchStatus === 200 && +advanceSearchDataStatus === 200) {
    return {
      props: {
        domain,
        advanceSearchData,
        vehicleDataForSearch,
        vehiclesData2,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
