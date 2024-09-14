import React, { useState } from "react";
import Loading from "../../common/web/loading/loading";
import { useFormik } from "formik";
import { CONTACT_US_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import { toast } from "react-toastify";
import { onSubmit } from "../../../utils/contact-us/contact_us";
import { useRouter } from "next/router";
import { CONTACT_US_HOME_INITIAL_VALUE } from "../../../constant/contact-us/contact_us_home";
import PersonalInfoValueHome from "../forms/PersonalInfoValueHome";

export default function HomeConcatUsForm({ dealerData, domain }) {
  const { query } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: CONTACT_US_HOME_INITIAL_VALUE(query),
    validationSchema: CONTACT_US_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const { data, message, status } = await onSubmit(values, domain, query);
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
    <form
      onSubmit={formik.handleSubmit}
      className="p-0 m-0  col-12"
      style={{
        backgroundImage: `url(${
          dealerData?.prefixUrl + dealerData?.carFinder_image_url
        })`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "5px 65%",
      }}
    >
      <div className="p-0 m-0 col-6" />
      <div className="p-0 m-0 sp-home"></div>

      <div className="p-0 m-0 col-12 col-md-12 col-lg-6 p-5 ">
        <h2 className="text-center p-0 m-0 mb-3 title_our_brands text-white">
          Contact Us
        </h2>
        <PersonalInfoValueHome home formik={formik} fromHome={true} />
        <div className="form-group col-sm-12 col-md-12 p-0 m-0 p-1">
          <label className="label_style text-white">Message</label>
          <textarea
            name="message"
            rows={1}
            className="form-control eforms_textarea_container_home"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <small className="text-danger">{formik.errors.message}</small>
          )}
        </div>
        <div className="p-1 m-0 position-relative">
          {isLoading ? (
            <Loading />
          ) : (
            <button type="submit" className="blue_button_3 py-2 my-3 w-100">
              SUBMIT
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
