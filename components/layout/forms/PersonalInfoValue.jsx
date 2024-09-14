import { reactSelectInputStyle } from "./../../../utils/common/react_select_styles";
import Select from "react-select";
import EformsHeader from "../../common/layout/header/eform_header";
import NumberFormat from "react-number-format";

const PersonalInfoValue = (props) => {
  const {
    formik,
    complete = false,
    type = 1,
    otherFormik = undefined,
    withoutHeader = false,
    comeFrom,
    home = false,
  } = props;
  return (
    <>
      {home ? (
        <div className="p-0 m-0 row w-100">
          {typeof otherFormik === "undefined" ||
            (withoutHeader && (
              <div className="d-flex row justify-content-start align-items-start text-start col-12">
                <EformsHeader title="Personal Information" />
              </div>
            ))}

          {complete && (
            <>
              <div
                className={`form-group col-12  ${
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 mt-2 "
                }${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">Salutation</label>
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
          <label className="label_style">Gender</label>
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
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6  pr-md-3 pr-0 "
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style">First Name (required)</label>
            <input
              name="firstName"
              className="form-control  eforms_input_container_home"
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
              comeFrom == "us" ? "col-sm-12" : "col-md-6  pl-md-3 pl-0  "
            } ${otherFormik && "col-md-6"} p-0 m-0   p-1`}
          >
            <label className="label_style">Last Name (required)</label>
            <input
              name="lastName"
              className="form-control eforms_input_container_home"
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
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3  pr-0  "
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style">Email (required)</label>
            <input
              name="email"
              className="form-control eforms_input_container_home"
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
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pl-md-3  "
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
                  ? "eforms_input_container_footer"
                  : "eforms_input_container"
                : "eforms_input_container_modal"
            }`}
            value={formik.values.phone}
          /> */}
            <label className="label_style">Phone (required)</label>
            <input
              name="phone"
              className="form-control eforms_input_container_home"
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
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pl-0 "
                } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">Marital Status (required)</label>
                <Select
                  name="user_marital_status"
                  className="form-select w-100 eforms_input_container_home"
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
                  comeFrom == "us" ? "col-sm-12" : "col-md-6  pr-md-3 pl-0 "
                } ${otherFormik && "col-12 col-sm-6"} p-0 m-0  p-1`}
              >
                <lable className="label_style">
                  Birth Date (required) Format (yyyy-mm-dd)
                </lable>
                <input
                  type="text"
                  name="user_birthday"
                  className="form-control eforms_input_container_home"
                  onFocus={(e) => (e.target.type = "date")}
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_birthday}
                />
                {formik.errors.user_birthday &&
                  formik.touched.user_birthday && (
                    <small className="text-danger">
                      {formik.errors.user_birthday}
                    </small>
                  )}
              </div>

              <div
                className={`form-group col-12  ${
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 "
                } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">SIN</label>
                <input
                  name="user_sin_number"
                  className="form-control eforms_input_container_home"
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_sin_number}
                />
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="p-0 m-0 row w-100">
          {typeof otherFormik === "undefined" ||
            (withoutHeader && (
              <div className="d-flex row justify-content-start align-items-start text-start col-12">
                <EformsHeader title="Personal Information" />
              </div>
            ))}

          {complete && (
            <>
              <div
                className={`form-group col-12  ${
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 mt-2 "
                }${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">Salutation</label>
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
          <label className="label_style">Gender</label>
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
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6  pr-md-3 pr-0 "
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style">First Name (required)</label>
            <input
              name="firstName"
              className="form-control  eforms_input_container"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
{/* 
            {console.log("one", formik.touched.firstName)}

            {console.log(
              "result",
              formik.errors.firstName || formik.touched.firstName
            )} */}
            {formik.errors.firstName && (
              <small className="text-danger">{formik.errors.firstName}</small>
            )}
          </div>
          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6  pl-md-3 pl-0  "
            } ${otherFormik && "col-md-6"} p-0 m-0   p-1`}
          >
            <label className="label_style">Last Name (required)</label>
            <input
              name="lastName"
              className="form-control eforms_input_container"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.errors.lastName && (
              <small className="text-danger">{formik.errors.lastName}</small>
            )}
          </div>

          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3  pr-0  "
            } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
          >
            <label className="label_style">Email (required)</label>
            <input
              name="email"
              className="form-control eforms_input_container"
              placeholder=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email  && (
              <small className="text-danger">{formik.errors.email}</small>
            )}
          </div>

          <div
            className={`form-group col-12  ${
              comeFrom == "us" ? "col-sm-12" : "col-md-6 pl-md-3  "
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
                  ? "eforms_input_container_footer"
                  : "eforms_input_container"
                : "eforms_input_container_modal"
            }`}
            value={formik.values.phone}
          /> */}
            <label className="label_style">Phone (required)</label>
            <input
              name="phone"
              className="form-control eforms_input_container"
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
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pl-0 "
                } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">Marital Status (required)</label>
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
                  comeFrom == "us" ? "col-sm-12" : "col-md-6  pr-md-3 pl-0 "
                } ${otherFormik && "col-12 col-sm-6"} p-0 m-0  p-1`}
              >
                <lable className="label_style">
                  Birth Date (required) Format (yyyy-mm-dd)
                </lable>
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
                {formik.errors.user_birthday &&
                  formik.touched.user_birthday && (
                    <small className="text-danger">
                      {formik.errors.user_birthday}
                    </small>
                  )}
              </div>

              <div
                className={`form-group col-12  ${
                  comeFrom == "us" ? "col-sm-12" : "col-md-6 pr-md-3 pr-0 "
                } ${otherFormik && "col-md-6"} p-0 m-0  p-1`}
              >
                <label className="label_style">SIN</label>
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
      )}
    </>
  );
};

export default PersonalInfoValue;
