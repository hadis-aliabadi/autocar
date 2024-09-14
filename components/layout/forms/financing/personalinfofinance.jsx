
import NumberFormat from "react-number-format";
import Select from "react-select";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";

const PersonalInfoFinance = (props) => {
  const { formik, complete = false } = props;
  return (
    <div className="p-0 m-0 row w-100">
      <div className="d-flex row justify-content-between align-items-start text-start col-12 pr-0">
        <h4 className="eform_h4__form_header my-2">Personal Information</h4>
    
        <a
          href="https://creditonline.dealertrack.ca/Web/Default.aspx?Token=d0ebd800-1a41-4acb-a6ad-ad7fefa22d31&Lang=en"
          className="p-2 inventory_dark_blue_btn m-0 text-decoration-none"
        >
          <h6 className="mb-0">Credit Application</h6>
          <h5>Apply Now</h5>
        </a>
   
      </div>
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="firstName"
          className="form-control  p-3 eforms_input_container"
          placeholder="First Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p className="text-danger">{formik.errors.firstName}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="lastName"
          className="form-control  p-3 eforms_input_container"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p className="text-danger">{formik.errors.lastName}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
        <input
          name="email"
          className="form-control p-3 eforms_input_container"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
      </div>
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
        <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={true}
          onValueChange={(e) => {
            formik.setFieldValue("phone", e.value);
          }}
          placeholder="Cell Phone Number"
          onBlur={formik.handleBlur}
          name="phone"
          id="phone"
          className="form-control p-3 eforms_input_container"
          value={formik.values.phone}
        />
        {/* <input
          name="phone"
          className="form-control p-3 eforms_input_container"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />*/}
        {formik.errors.phone && formik.touched.phone && (
          <p className="text-danger">{formik.errors.phone}</p>
        )}
      </div>
      {complete && (
        <>
          <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
            <Select
              name="user_salutation"
              className="form-select w-100 eforms_input_select_container"
              placeholder="Salutation"
              options={[
                { value: 1, label: "Dr" },
                { value: 2, label: "Miss" },
                { value: 3, label: "Mr" },
                { value: 4, label: "Mrs" },
                { value: 5, label: "Ms" },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_salutation", e?.value);
              }}
            />
          </div>
          <div className="form-group col-sm-6 col-md-6 p-0 m-0 mt-2 mb-2 p-1">
            <Select
              name="user_marital_status"
              className="form-select w-100 eforms_input_select_container"
              placeholder="Marital Status"
              options={[
                { value: 1, label: "Single" },
                { value: 2, label: "Married" },
                { value: 3, label: "divorce" },
                { value: 4, label: "Other" },
              ]}
              styles={reactSelectInputStyle}
              onChange={(e) => {
                formik.setFieldValue("user_marital_status", e?.value);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfoFinance;
