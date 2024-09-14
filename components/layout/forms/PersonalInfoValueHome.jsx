import { reactSelectInputStyle } from "./../../../utils/common/react_select_styles";
import Select from "react-select";
import EformsHeader from "../../common/layout/header/eform_header";
import NumberFormat from "react-number-format";

const PersonalInfoValueHome = (props) => {
  const {
    formik,
    complete = false,
    type = 1,
    otherFormik = undefined,
    withoutHeader = false,
    comeFrom,
  } = props;
  return (
    <div className=" p-0 m-0 row w-100">
      {typeof otherFormik === "undefined" ||
        (withoutHeader && (
          <div className="d-flex row justify-content-start align-items-start text-start col-12">
            <EformsHeader title="Personal Information" />
          </div>
        ))}

      {complete && (
        <>
          <div
            className={`yy form-group 11 col-12 col-md-6 ${
              comeFrom == "us"
                ? "zz col-12 col-md-6"
                : "xx col-md-6 pr-md-3 row justify-content-start pr-0 mt-2"
            }${otherFormik && "col-md-6"} p-0 m-0  p-1  `}
          >
            <label className="label_style text-white">Salutation</label>
            <Select
              name="user_salutation"
              className="form-select w-100 eforms_input_container"
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
        </>
      )}

      {/* <div
        className={`form-group col-12  ${
          comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 mt-2 mb-2"
        }${otherFormik && "col-md-6"} p-0 m-0  p-1`}
      >
        <label className="label_style text-white">Gender</label>
        <Select
          name="Gender"
          className="form-select w-100 eforms_input_container"
          placeholder="Gender"
          options={[
            { value: 1, label: "Male" },
            { value: 2, label: "Female" },
          ]}
          styles={reactSelectInputStyle}
          onChange={(e) => {
            formik.setFieldValue("Gender", e?.value);
          }}
        />
      </div> */}
      <div
        className={`form-group col-12 col-md-6  ${
          comeFrom == "us"
            ? "col-sm-12"
            : "col-md-6  pr-md-3 row justify-content-start pr-0 "
        } ${otherFormik && "col-md-6"} p-0 m-0 p-1`}
      >
        <label className="label_style text-white">First Name:</label>
        <div className="p-0 m-0 col-12 border_card_1">
          <input
            name="f_name"
            className="form-control  eforms_input_container border-gradient border-gradient-purple"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.f_name}
          />
        </div>
        {formik.errors.f_name && (
          <small className="text-danger">{formik.errors.f_name}</small>
        )}
      </div>
      <div
        className={`form-group col-12 col-md-6  ${
          comeFrom == "us"
            ? "col-sm-12"
            : "col-md-6  pl-md-3 row justify-content-start pl-0  "
        } ${otherFormik && "col-md-6"} p-0 m-0   p-1`}
      >
        <label className="label_style text-white">Last Name:</label>
        <div className="p-0 m-0 col-12 border_card_1">
          <input
            name="l_name"
            className="form-control eforms_input_container"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.l_name}
          />
        </div>
        {formik.errors.l_name && (
          <small className="text-danger">{formik.errors.l_name}</small>
        )}
      </div>

      <div
        className={`form-group col-12 col-md-6  ${
          comeFrom == "us"
            ? "col-sm-12"
            : "col-md-6 pr-md-3 row justify-content-start  pr-0  "
        } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
      >
        <label className="label_style text-white">Email:</label>
        <div className="p-0 m-0 col-12 border_card_1">
          <input
            name="email"
            className="form-control eforms_input_container"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <small className="text-danger">{formik.errors.email}</small>
        )}
      </div>

      <div
        className={`form-group col-12 col-md-6  ${
          comeFrom == "us"
            ? "col-sm-12"
            : "col-md-6 pl-md-3 row justify-content-start "
        } ${otherFormik && "col-md-6"} p-0 m-0 p-1`}
      >
        {/* <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={false}
          onValueChange={(e) => {
            formik.setFieldValue("mobile", e.value);
          }}
          placeholder="Cell mobile Number"
          onBlur={formik.handleBlur}
          name="mobile"
          id="mobile"
          className={`form-control  ${
            typeof otherFormik === "undefined"
              ? type === 2
                ? "eforms_input_container_footer"
                : "eforms_input_container"
              : "eforms_input_container_modal"
          }`}
          value={formik.values.mobile}
        /> */}
        <label className="label_style text-white">Phone:</label>
        <div className="p-0 m-0 col-sm-12 border_card_1">
          <input
            name="mobile"
            className="form-control eforms_input_container"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
        </div>
        {formik.errors.mobile && (
          <small className="text-danger">{formik.errors.mobile}</small>
        )}
      </div>

      {complete && (
        <>
          <div
            className={`form-group col-12  ${
              comeFrom == "us"
                ? "col-sm-12"
                : "col-md-6 pr-md-3 pl-0 row justify-content-start "
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style text-white">Marital Status:</label>
            <Select
              name="user_marital_status"
              className="form-select w-100 eforms_input_container"
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
            {formik.errors.user_marital_status &&
              formik.touched.user_marital_status && (
                <small className="text-danger">
                  {formik.errors.user_marital_status}
                </small>
              )}
          </div>
          <div
            className={`form-group col-12  ${
              comeFrom == "us"
                ? "col-sm-12"
                : "col-md-6  pr-md-3 pl-0 row justify-content-start"
            } ${otherFormik && "col-12 col-sm-6"} p-0 m-0  p-1`}
          >
            <lable className="label_style text-white">Birth Date:</lable>
            <input
              type="text"
              name="user_birthday"
              className="form-control eforms_input_container"
              onFocus={(e) => (e.target.type = "date")}
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_birthday}
            />
            {formik.errors.user_birthday && formik.touched.user_birthday && (
              <small className="text-danger">
                {formik.errors.user_birthday}
              </small>
            )}
          </div>

          <div
            className={`form-group col-12  ${
              comeFrom == "us"
                ? "col-sm-12"
                : "col-md-6 pr-md-3 pr-0 row justify-content-start"
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style text-white">SIN</label>
            <input
              name="user_sin_number"
              className="form-control eforms_input_container"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_sin_number}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfoValueHome;
