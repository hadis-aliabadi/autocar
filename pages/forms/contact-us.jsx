import Head from "next/head";
import { useFormik } from "formik";
import { CONTACT_US_INITIAL_VALUE } from "../../constant/contact-us/contact_us";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../constant/formik/validation";
import Loading from "../../components/common/web/loading/loading";
import { useState, useRef, useEffect } from "react";
import { onSubmit } from "../../utils/contact-us/contact_us";
import { toast } from "react-toastify";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import EFormsHeaderSection from "../../components/common/web/eform-header/eforms_header_section";
import { useRouter } from "next/router";
import SearchForVehicle from "../../components/layout/forms/search/mvd_search";
import { httpRequest } from "../../apis";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUpPage(props) {
  const { dealerData, domain, vehicleDataForSearch } = props;

  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  const handleClickSubmit = () => {
    if (!formik.isValid) {
      toast.error("Please double-check the form fields");
      executeScroll();
    }
  };

  const { query } = useRouter();
  const router = useRouter();
  const id = query.selected_vehicle;
  const [vehiclequery, setvehiclequery] = useState();

  useEffect(() => {
    if (query.selected_vehicle && vehicleDataForSearch) {
      setvehiclequery(
        vehicleDataForSearch?.data?.filter(
          item => item.id === +query.selected_vehicle
        )[0]
      );
    }
  }, [query.selected_vehicle, vehicleDataForSearch]);
  const [isLoading, setIsLoading] = useState(false);

    // Recaptcha
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const recaptchaRef = useRef();
  
    const handleRecaptchaChange = (token) => {
      setRecaptchaToken(token);
    };
  const formik = useFormik({
    initialValues: CONTACT_US_INITIAL_VALUE,
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {

      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      setIsLoading(true);
      const { data, message, status } = await onSubmit(values, domain, id);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
        setIsLoading(false);
      } else {
        toast.error(message);
        setIsLoading(false);
      }
    },
  });

  return (
    <>
      {/* <Head>
        <title>Online car dealership | {dealerData?.bussiness_name} </title>
        <meta
          name="description"
          content={`${dealerData?.bussiness_name} site as an online car dealership in ${dealerData?.business_city?.city}
          ${dealerData?.business_city?.Province?.Country?.country} , provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
      </Head> */}
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
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group is located at ${dealerData?.business_street} ${
            dealerData?.business_city?.city
          }, ${dealerData?.business_city?.Province?.province}, ${
            dealerData?.business_postal
          }. Call us at: ${dealerData?.business_phone}`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car dealership, Auto sales, ${dealerData?.business_city?.city},Best used cars ,Quality used cars,Car financing, Affordable used cars, Low mileage used cars, Certified pre-owned cars, Best Dealer in ${dealerData?.business_city?.city}`}
        />

        <title>
          {`Contact Information | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group | ${dealerData?.business_city?.city} used car
          dealer`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <div style={{ backgroundColor: "#f6f6f6" }} className="p-0 m-0 w-100">
        <div className="p-0 m-0 w-100 row justify-content-center contact_us_pos">
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.contactUs_image_url}
            showImage={true}
          />
          <div className="row col-12 col-lg-10 p-0 m-0 pt-4 px-4 px-xl-0">
            <div className="p-1 p-md-3 m-0 col-12 col-lg-7 col-xl-8 ">
              <div
                style={{ backgroundColor: "#fff" }}
                className="p-2 p-lg-3 m-0 row w-100 contact_us_container"
              >
                <form
                  onSubmit={formik.handleSubmit}
                  className="p-0 m-0 row"
                  ref={myRef}
                >
                  <div className="p-0 m-0 col-12">
                    <div className="p-0 m-0 row ">
                      <div className="p-1  m-0 form-group col-md-9 col-12">
                        <EFormsHeaderSection
                          showImage={false}
                          title="Contact Us "
                        />
                        <label className="label_style">
                          First Name (required)
                        </label>
                        <input
                          id="f_name"
                          name="f_name"
                          type="text"
                          className="form-control eforms_input_container_contact_us"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.f_name}
                        />

                        {formik.errors.f_name && formik.touched.f_name && (
                          <div className="text-danger">
                            {formik.errors.f_name}
                          </div>
                        )}
                      </div>

                      <div className="p-1  m-0 form-group col-md-9 col-12">
                        <label className="label_style">
                          Last Name (required)
                        </label>
                        <input
                          id="l_name"
                          name="l_name"
                          type="text"
                          className="form-control eforms_input_container_contact_us"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.l_name}
                        />

                        {formik.errors.l_name && formik.touched.l_name && (
                          <div className="text-danger">
                            {formik.errors.l_name}
                          </div>
                        )}
                      </div>

                      <div className="p-1  m-0 form-group col-md-9 col-12">
                        <label className="label_style">Email (required)</label>

                        <input
                          id="email"
                          name="email"
                          type="text"
                          className="form-control eforms_input_container_contact_us"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        )}
                      </div>

                      <div className="p-1 m-0 form-group col-md-9 col-12">
                        <label className="label_style">Phone (required)</label>
                        <input
                          id="mobile"
                          name="mobile"
                          type="text"
                          className="form-control eforms_input_container_contact_us"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobile}
                        />
                        {formik.errors.mobile && formik.touched.mobile && (
                          <div className="text-danger">
                            {formik.errors.mobile}
                          </div>
                        )}
                      </div>
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
                      <div className="p-1 m-0 form-group col-md-9 col-12">
                        {/* <SearchForVehicle
                          vehicleDataForSearch={vehicleDataForSearch}
                          formik={formik}
                        /> */}
                        <label className="label_style">Message</label>

                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="form-control eforms_textarea_container_contact_us"
                          placeholder=""
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.message}
                        />
                        {formik.errors.message && formik.touched.message && (
                          <div className="text-danger">
                            {formik.errors.message}
                          </div>
                        )}
                      </div>
                      <div className="p-1 m-0 col-12">
                      {/* <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        size="compact" // or "compact" or "invisible"
                        onChange={handleRecaptchaChange}
                        style={{
                          background: "transparent",
                        }}
                        theme="light"
                      /> */}
                    </div>
                      <div className="p-1 m-0 col-sm-8 col-12 d-flex my-2 justify-content-start align-items-end">
                        <div className="p-0 m-0 w-50">
                          {isLoading ? (
                            <Loading />
                          ) : (
                            <button
                              type="submit"
                              className="btn blue_button_3 w-75"
                              onClick={handleClickSubmit}
                            >
                              Send
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="p-0 m-0 pt-lg-3  col-12 col-lg-5 col-xl-4 justify-content-center d-none d-lg-flex">
              <div className=" pt-3 pt-lg-0  p-lg-0 m-0 px-1 px-lg-2 ">
                <EformsConatctInfo dealerData={dealerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
    await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});

  if (+vehicleDataForSearchStatus === 200) {
    return {
      props: {
        domain,
        vehicleDataForSearch,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
