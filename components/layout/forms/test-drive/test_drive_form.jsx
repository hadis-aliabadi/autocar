import { useFormik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { onSubmit } from "../../../../utils/test-drive/test_drive";
import Select from "react-select";
import { TEST_DRIVE_VALIDATION } from "../../../../constant/formik/validation";
import {
  INITIAL_VALUES,
  METHOD_OF_CONTACT,
  USER_SALUTATION,
} from "../../../../constant/test-drive/test_drive";
import EformsConatctInfo from "../../../common/web/eforms/eforms_contact_info";
import FinanceSearchForVehicle from "../financing/finance_search_for_vehicle";
import EFormsHeaderSection from "../../../common/web/eform-header/eforms_header_section";
import { useRef } from "react";
import DatePickerCustom from "../datepicker";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import PersonalInfoValue from "../PersonalInfoValue";
import Loading from "../../../common/web/loading/loading";
import EformsHeader from "../../../common/layout/header/eform_header";

const TestDriveFrom = props => {
  const { domain, vehicleDataForSearch, dealerData } = props;

  const router = useRouter();
  const [vehicle_id, setvehicle_id] = useState();
  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: () => TEST_DRIVE_VALIDATION(),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const { data, status } = await onSubmit(values, domain, vehicle_id, "");
      setLoading(false);
      if (+status === 201) {
        toast.success("successful");
        resetForm();
        return;
      } else {
        return toast.error("Failed");
      }
    },
  });
  const token = true;
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  const handleClickSubmit = () => {
    if (!formik.isValid) {
      toast.error("Please double-check the form fields");
      executeScroll();
    }
  };
  return (
    <div className="p-0 m-0 w-100">
      <div className="px-0 pb-4  m-0 row w-100 justify-content-center align-items-start ">
        <EFormsHeaderSection
          image={dealerData?.prefixUrl + dealerData?.testDrive_image_url}
          showImage={true}
        />
        <div className="row col-12 col-lg-10 p-0 pt-4">
          <div className={"pr-lg-3 p-0 m-0 w-100 col-12 col-lg-7 col-xl-8"}>
            <form
              onSubmit={formik.handleSubmit}
              ref={myRef}
              className="p-0 m-0 row w-100 px-3 col-12 py-4 eforms_form__container"
            >
              <div className="p-1 m-0 w-100">
                <EFormsHeaderSection
                  title="Book A Test Drive"
                  desc={dealerData?.testDrive_desc}
                  image={""}
                  showImage={false}
                />
                <EformsHeader title="Vehicle Information" />
                <FinanceSearchForVehicle
                  vehicleDataForSearch={vehicleDataForSearch}
                  setvehicle_id={setvehicle_id}
                  formik={formik}
                />
              </div>
              <EformsHeader title="Personal Information" />

              <PersonalInfoValue formik={formik} />

              <EformsHeader title="Appointment Date & Time" />

              <div className="p-0 m-0 w-100 row justify-content-start ">
                <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                  <div className="w-100 col-12 p-0 mx-3">
                    <div className=" w-100  p-0 m-0">
                      <label className="label_style">Requested Date</label>
                      {/* <input
                    name="requested_date"
                    className="form-control p-3 eforms_input_container"
                    placeholder="Requested Date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="date"
                    value={formik.values.requested_date}
                  /> */}
                      <DatePickerCustom
                        value={formik.values.requested_date}
                        formik={formik}
                        name="requested_date"
                      />
                    </div>
                    {formik.errors.requested_date &&
                      formik.touched.requested_date && (
                        <small className="text-danger">
                          {formik.errors.requested_date}
                        </small>
                      )}
                  </div>
                </div>
                <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                  <div className="w-100 col-12 p-0 m-0">
                    <div className=" w-100  p-0 m-0">
                      <label className="label_style">User Salutation</label>
                      {/* <select
                        name="user_salutation"
                        className="form-select w-100 eforms_input_select_container"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.user_salutation}
                      >
                        <option value="">User Salutation</option>
                        {USER_SALUTATION?.map(({ value, label }, index) => (
                          <option key={`value${index}`} value={value}>
                            {label}
                          </option>
                        ))}
                      </select> */}
                      <Select
                        name="user_salutation"
                        className="form-select w-100 eforms_input_container"
                        // placeholder="Year"
                        options={USER_SALUTATION}
                        styles={reactSelectInputStyle}
                        onChange={e => {
                          formik.setFieldValue("user_salutation", e?.value);
                        }}
                        onBlur={formik.handleBlur}
                        value={USER_SALUTATION?.filter(
                          option =>
                            option.value === formik.values.user_salutation
                        )}
                      />
                    </div>
                    {formik.errors.user_salutation &&
                      formik.touched.user_salutation && (
                        <small className="text-danger">
                          {formik.errors.user_salutation}
                        </small>
                      )}
                  </div>
                </div>
                <div className="form-group col-12 col-md-6 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                  <div className="w-100 col-12 p-0 m-0">
                    <div className=" w-100  p-0 m-0">
                      <label className="label_style">Method Of Contact</label>
                      {/* <select
                        name="method_of_contact"
                        className="form-select w-100 eforms_input_select_container"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.method_of_contact}
                      >
                        <option value="">Method Of Contact</option>
                        {METHOD_OF_CONTACT?.map(({ value, label }, index) => (
                          <option key={`value${index}`} value={value}>
                            {label}
                          </option>
                        ))}
                      </select> */}
                      <Select
                        name="method_of_contact"
                        className="form-select w-100 eforms_input_container"
                        // placeholder="Year"
                        options={METHOD_OF_CONTACT}
                        styles={reactSelectInputStyle}
                        onBlur={formik.handleBlur}
                        value={METHOD_OF_CONTACT?.filter(
                          option =>
                            option.value === formik.values.method_of_contact
                        )}
                        onChange={e => {
                          formik.setFieldValue("method_of_contact", e?.value);
                        }}
                      />
                    </div>
                    {formik.errors.method_of_contact &&
                      formik.touched.method_of_contact && (
                        <small className="text-danger">
                          {formik.errors.method_of_contact}
                        </small>
                      )}
                  </div>
                </div>
              </div>
              <div className="form-group col-12 d-flex justify-content-center p-0 m-0 mt-2 p-1">
                <div className="w-100 col-12 p-0 m-0">
                  <div className=" w-100  p-0 m-0">
                    <label className="label_style">Comment</label>
                    <textarea
                      rows="8"
                      name="comment"
                      className="form-control eforms_textarea_container"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.comment}
                    />
                  </div>
                  {formik.errors.comment && formik.touched.comment && (
                    <small className="text-danger">
                      {formik.errors.comment}
                    </small>
                  )}
                </div>
              </div>

              <div className="p-0 m-0 row w-100 text-center justify-content-start align-items-center">
                <div className="p-1 m-0 col-12 col-md-12 d-flex justify-content-start align-items-center">
                  <div className="p-0 m-0 w-100 d-flex justify-content-start align-items-center">
                    {isLoading ? (
                      <Loading />
                    ) : (
                      <button
                        type="submit"
                        onClick={handleClickSubmit}
                        className="blue_button_3 d-flex align-items-center justify-content-center  px-4  py-2"
                      >
                        Send
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="pl-lg-3 p-0 m-0 w-100 col-12 col-lg-5 col-xl-4 ">
            <div className="pt-5 p-lg-0 m-0 px-lg-2 e-contact-on-top">
              <EformsConatctInfo dealerData={dealerData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDriveFrom;
