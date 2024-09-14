import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { GET_CARFAX_INFORMATION_VALIDATION_SCHEMA } from "../../../constant/formik/validation";
import { onSubmit } from "../../../utils/get_more_information_for_carfax/get_more_information_for_carfax";
import Loading from "../../common/web/loading/loading";
// import PersonalInfo from "../forms/personalinfo";
import PersonalInfoModaljsx from "../forms/PersonalInfoModal";
import { GET_MORE_INFORMATION } from './../../../constant/get-more-information/get_more_information';

const GetMoreInformation = (props) => {
  const router = useRouter();
  const { domain, vehicleId, href } = props;
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: GET_MORE_INFORMATION,
    validationSchema: GET_CARFAX_INFORMATION_VALIDATION_SCHEMA,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { status, message, data } = await onSubmit(
        values,
        domain,
        vehicleId
      );
      setLoading(false);
      if (status === 201) {
        toast.success("Successful");
        resetForm();
        window.open(href, "_blank");
      } else {
        toast.error(message);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-0 m-0 my-md-0 row w-100 align-items-start justify-content-around"
    >
      <div className="p-0 m-0 col-12">
        <div className="form-group col-sm-12 col-md-12 p-0 m-0 mt-2 mb-2 p-1">
          <PersonalInfoModaljsx comeFrom="us" formik={formik} withoutHeader />
          {/* <textarea
            rows="3"
            name="message"
            className="form-control mt-2 eforms_textarea_container_22"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Message"
            value={formik.values.message}
          />
          {formik.errors.message && formik.touched.message && (
            <small className="text-danger">{formik.errors.message}</small>
          )} */}
        </div>
        <div className="p-1 m-0 d-flex w-1-00">
          <div className="p-0 m-0">
            {isLoading ? (
              <Loading />
            ) : (
              <p
                type="submit"
                className="px-5 btn cardMoto_button_compare text-center d-flex justify-content-center"
                onClick={formik.handleSubmit}
              >
                Submit
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetMoreInformation;
