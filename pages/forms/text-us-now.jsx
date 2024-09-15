import { useRef, useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { TEXT_US_NOW_INITIAL_VALUES } from "../../constant/text-us-now/text_us_now";
import { TEXT_US_NOW_VALIDATION } from "../../constant/formik/validation";
import { handleSubmit } from "../../utils/text-us-now/tet_us_now";
import Loading from "../../components/common/web/loading/loading";
import PersonalInfoValue from "../../components/layout/forms/PersonalInfoValue";
import EFormsHeaderSection from "../../components/common/web/eform-header/eforms_header_section";
import Head from "next/head";
import EformsConatctInfo from "../../components/common/web/eforms/eforms_contact_info";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { httpRequest } from "../../apis";
import EformsHeader from "../../components/common/layout/header/eform_header";
import SearchForVehicle from "../../components/layout/forms/search/mvd_search";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUpPage(props) {
  const { domain, dealerData, vehicleDataForSearch } = props;
  const [isLoading, setLoading] = useState(false);
  const { query } = useRouter();
  const [vehiclequery, setvehiclequery] = useState();

  useEffect(() => {
    if (query.selected_vehicle && vehicleDataForSearch) {
      setvehiclequery(
        vehicleDataForSearch?.data?.filter(
          (item) => item.id === +query.selected_vehicle
        )[0]
      );
    }
  }, [query.selected_vehicle, vehicleDataForSearch]);

  // Recaptcha
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const formik = useFormik({
    initialValues: TEXT_US_NOW_INITIAL_VALUES,
    validationSchema: () => TEXT_US_NOW_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      setLoading(true);
      const { status, message, data } = await handleSubmit(values, domain);
      setLoading(false);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
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
          content={`Find used cars, trucks and SUVs for sale at ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car appraisal, Best used cars, Car financing`}
        />

        <title>
          {`${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <div className="p-0 m-0 w-100">
        <div className="p-0 m-0 mb-3">
          <EFormsHeaderSection
            image={dealerData?.prefixUrl + dealerData?.text_us_now_url}
            showImage={true}
          />
        </div>

        <div className="px-0 px-md-5 px-xl-4 py-3 m-0 row w-100 justify-content-center align-items-start ">
          <div className="row col-12 col-lg-10 p-0 pt-2 px-2 px-lg-0">
            <div
              style={{ backgroundColor: "#fff" }}
              className={"pr-lg-3 p-0 m-0 w-100 col-12 col-lg-7 col-xl-8"}
            >
              <form
                onSubmit={formik.handleSubmit}
                className="p-0 m-0 my-3 my-md-0 row col-12 col-md-10 eforms_form__container row align-items-start justify-content-around"
              >
                <div className="p-2 px-lg-4 m-0  col-12 col-md-12">
                  <EFormsHeaderSection
                    title="Text Us Now"
                    desc=""
                    image={dealerData?.prefixUrl + dealerData?.text_us_now_url}
                    showImage={false}
                  />
                  <PersonalInfoValue formik={formik} comeFrom="us" />
                </div>
                <div className="p-2 px-lg-4 m-0 col-12 col-md-12">
                  {/* <EformsHeader title="Your Message" /> */}
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
                  {/* <div className="form-group col-sm-12 col-md-12 p-0 m-0 mb-2 p-1">
                    <SearchForVehicle
                      vehicleDataForSearch={vehicleDataForSearch}
                      formik={formik}
                    />
                    <label className="label_style">Message</label>
                    <textarea
                      rows="8"
                      name="message"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder=""
                      value={formik.values.message}
                    />
                    {formik.errors.message && formik.touched.message && (
                      <small className="text-danger">
                        {formik.errors.message}
                      </small>
                    )}
                  </div> */}
                  {/* <div className="p-1 m-0 col-12">
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
                    </div> */}
                  <div className="p-1 m-0 col-12 d-flex justify-content-start">
                    <div className="p-0 m-0 col-2 col-lg-4 d-flex justify-content-start">
                      {isLoading ? (
                        <Loading />
                      ) : (
                        <button
                          type="submit"
                          className="btn blue_button_3 w-100"
                        >
                          Send Text
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-0 m-0  col-12 col-lg-5 col-xl-4">
              <div className=" p-lg-0  m-0  pl-lg-4 pr-lg-2">
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
  return {
    props: {
      domain,
      vehicleDataForSearch,
    },
  };
}
