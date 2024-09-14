// import { reactSelectInputStyle } from "../../../utils/common/react_select_styles";
import Select from "react-select";
// import EformsHeader from "../../common/layout/header/eform_header";
import EformsHeader from "./../../common/web/eform-header/eforms_header_section";
import NumberFormat from "react-number-format";
import { reactSelectInputStyle } from './../../../utils/common/react_select_styles';

const PersonalInfoModaljsx = (props) => {
  const {
    formik,
    complete = false,
    type = 1,
    otherFormik = undefined,
    withoutHeader = false,
    comeFrom,
  } = props;
  return (
    <div className="p-0 m-0 row w-100">
      {typeof otherFormik === "undefined" ||
        (withoutHeader && (
          <div className="d-flex row justify-content-start align-items-start text-start col-12">
            <EformsHeader title="Personal Information" />
          </div>
        ))}
      <div
        className={`form-group col-12  ${
          comeFrom == "us" ? "col-sm-12" : "col-md-6 mt-2 pr-md-3 pr-0  mb-2"
        } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
      >
        <label className="label_style3">First Name</label>
        <input
          name="firstName"
          className="form-control  eforms_input_container3"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <small className="text-danger">{formik.errors.firstName}</small>
        )}
      </div>
      <div
        className={`form-group col-12  ${
          comeFrom == "us" ? "col-sm-12" : "col-md- mt-2 pl-md-3 pl-0  mb-2"
        } ${otherFormik && "col-md-6"} p-0 m-0   p-1`}
      >
        <label className="label_style3">Last Name</label>
        <input
          name="lastName"
          className="form-control eforms_input_container3"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <small className="text-danger">{formik.errors.lastName}</small>
        )}
      </div>
      <div
        className={`form-group col-12  ${
          comeFrom == "us" ? "col-sm-12" : "col-md-6 mt-2 pr-md-3  pr-0  mb-2 "
        } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
      >
        <label className="label_style3">Email</label>
        <input
          name="email"
          className="form-control eforms_input_container3"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <small className="text-danger">{formik.errors.email}</small>
        )}
      </div>
      <div
        className={`form-group col-12  ${
          comeFrom == "us" ? "col-sm-12" : "col-md-6 pl-md-3   mt-2 mb-2 "
        } ${otherFormik && "col-md-6"} p-0 m-0 p-1`}
      >
        {/* <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={false}
          onValueChange={(e) => {
            formik.setFieldValue("phone", e.value);
          }}
          placeholder="Cell Phone Number"
          onBlur={formik.handleBlur}
          name="phone"
          id="phone"
          className={`form-control  ${
            typeof otherFormik === "undefined"
              ? type === 2
                ? "eforms_input_container3_footer"
                : "eforms_input_container3"
              : "eforms_input_container3_modal"
          }`}
          value={formik.values.phone}
        /> */}
        <label className="label_style3">Phone</label>
        <input
          name="phone"
          className="form-control eforms_input_container3"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.errors.phone && formik.touched.phone && (
          <small className="text-danger">{formik.errors.phone}</small>
        )}
      </div>
      {complete && (
        <>
          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 mt-2 mb-2"
            }${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style3">Salutation</label>
            <Select
              name="user_salutation"
              className="form-select w-100 eforms_input_container3"
              placeholder="Salutation"
              options={[
                { value: 1, label: "Dr" },
                { value: 2, label: "Miss" },
                { value: 3, label: "Mr." },
                { value: 4, label: "Ms." },
                { value: 5, label: "Mrs." },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_salutation", e?.value);
              }}
            />
          </div>
          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pl-md-3 pl-0 mt-2 mb-2"
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style3">Marital Status</label>
            <Select
              name="user_marital_status"
              className="form-select w-100 eforms_input_container3"
              placeholder="Marital Status"
              options={[
                { value: 1, label: "Single" },
                { value: 2, label: "Married" },
                { value: 3, label: "Divorce" },
                { value: 4, label: "Other" },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_marital_status", e?.value);
              }}
            />
          </div>
          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 mt-2 mb-2"
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style3">SIN</label>
            <input
              name="user_sin_number"
              className="form-control eforms_input_container3"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_sin_number}
            />
          </div>
          <div
            className={`1 form-group col-12  ${
              comeFrom == "us"
                ? "col-sm-12"
                : "col-md-6  pl-md-3 pl-0 mt-2 mb-2"
            } ${otherFormik && "col-12 col-sm-6"} p-0 m-0  p-1`}
          >
            <lable className="label_style3">Birth Date</lable>
            <input
              type="text"
              name="user_birthday"
              className="form-control eforms_input_container3"
              onFocus={(e) => (e.target.type = "date")}
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_birthday}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfoModaljsx;
