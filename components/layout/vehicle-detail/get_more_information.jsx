import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { GET_MORE_INFORMATION_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import { GET_MORE_INFORMATION } from "../../../constant/get-more-information/get_more_information";
import { onSubmit } from "../../../utils/get-more-information/get_more_information";
import Loading from "../../common/web/loading/loading";
import PersonalInfo from "../forms/personalinfo";

import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "../../../constant/base";
import ReCAPTCHA from "react-google-recaptcha";

const GetMoreInformation = (props) => {
  const { domain, vehicleId, modalInformationClose } = props;
  const [isLoading, setLoading] = useState(false);

  // Recaptcha
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };
  const formik = useFormik({
    initialValues: GET_MORE_INFORMATION,
    validationSchema: GET_MORE_INFORMATION_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      if (!recaptchaToken) {
        toast.error("Please complete the reCAPTCHA.");
        return;
      }
      setLoading(true);
      const { status, message, data } = await onSubmit(
        values,
        domain,
        vehicleId
      );
      setLoading(false);
      if (status === 201) {
        modalInformationClose();
        toast.success("Successful");
        resetForm();
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-0 m-0 col-12">
        <div className="form-group col-sm-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
          <PersonalInfo formik={formik} withoutHeader />
          <label className="label_style">Message</label>
          <div className="w-100 px-1 m-0">
            <textarea
              rows="3"
              name="message"
              className="form-control col-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // placeholder="Message"
              value={formik.values.message}
            />
            {formik.errors.message && formik.touched.message && (
              <small className="text-danger">{formik.errors.message}</small>
            )}
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
        <div className="p-1 m-0 col-4">
          <div className="p-0 m-0">
            {isLoading ? (
              <Loading />
            ) : (
              <button
                type="submit"
                className="btn blue_button"
                onClick={formik.handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetMoreInformation;
