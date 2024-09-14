import Select from "react-select";
import { USER_EMPLOYMENT_OPTIONS } from "../../../../constant/fainancial/fainancial";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";

const FinancialCurrentEmployment = ({ formik }) => {
  const { ProvinceOptions } = useGetAllCitiesWithDetail();
  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pr-md-3 pr-0">
        <label className="label_style">Type (required)</label>
        <Select
          styles={reactSelectInputStyle}
          options={USER_EMPLOYMENT_OPTIONS}
          className="form-select w-100  eforms_input_select_container"
          name="user_curr_employment"
          placeholder="Type"
          onChange={(option) => {
            formik.setFieldValue("user_curr_employment", option.value);
          }}
          onBlur={formik.handleBlur}
        />
        {formik.errors.user_curr_employment &&
          formik.touched.user_curr_employment && (
            <small className="text-danger">
              {formik.errors.user_curr_employment}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pl-md-3 pl-0">
        <label className="label_style">Employer (required)</label>
        <input
          name="user_curr_employer"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_employer}
        />
        {formik.errors.user_curr_employer &&
          formik.touched.user_curr_employer && (
            <small className="text-danger">
              {formik.errors.user_curr_employer}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pr-md-3 pr-0">
        <label className="label_style">Occupation (required)</label>
        <input
          name="user_curr_emp_occupation"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_occupation}
        />
        {formik.errors.user_curr_emp_occupation &&
          formik.touched.user_curr_emp_occupation && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_occupation}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pr-0">
        <label className="label_style">Employment Address (required)</label>
        {/* <textarea
          rows="3"
          name="user_curr_emp_addr"
          className="form-control eforms_textarea_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_addr}
        /> */}
        <input
          name="user_curr_emp_addr"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_addr}
        />
        {formik.errors.user_curr_emp_addr &&
          formik.touched.user_curr_emp_addr && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_addr}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pr-md-3 pl-0">
        <label className="label_style">City (required)</label>
        {/* <Select
          className="form-select w-100  eforms_input_container"
          styles={reactSelectInputStyle}
          options={cityOptions}
          onChange={(option) => {
            formik.setFieldValue("frk_user_curr_emp_city_id", option?.value);
            formik.setFieldValue(
              "frk_user_curr_emp_province_id",
              option?.province
            );
            formik.setFieldValue(
              "frk_user_curr_emp_country_id",
              option?.country
            );
          }}
          placeholder="City"
          name="frk_user_curr_emp_city_id"
          onBlur={formik.handleBlur}
        /> */}
        <input
          name="current_employment_city"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.current_employment_city}
        />

        {formik.errors.current_employment_city &&
          formik.touched.current_employment_city && (
            <small className="text-danger">
              {formik.errors.current_employment_city}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pr-0">
        <label className="label_style">Province (required)</label>
        <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={ProvinceOptions}
          onChange={(option) => {
            formik.setFieldValue(
              "frk_user_curr_emp_province_id",
              option?.value
            );
          }}
          placeholder="Province"
          name="frk_user_curr_emp_province_id"
          onBlur={formik.handleBlur}
        />
        {formik.errors.frk_user_curr_emp_province_id &&
          formik.touched.frk_user_curr_emp_province_id && (
            <small className="text-danger">
              {formik.errors.frk_user_curr_emp_province_id}
            </small>
          )}
      </div>
      {/* <div className="form-group col-12 col-md-6 col-lg-4 p-0 m-0 mt-2 mb-2 p-1">
              <Select
                name="user_currAddr_home_status"
                className="form-select w-100 eforms_input_select_container"
                placeholder="Home Status"
                options={[
                  { value: 1, label: "Rent" },
                  { value: 2, label: "Own with mortage" },
                  { value: 3, label: "With parent" },
                  { value: 4, label: "Other" },
                ]}
                styles={reactSelectInputStyle}
                onChange={(e) => {
                  formik.setFieldValue(
                    "user_currAddr_home_status",
                    e?.value
                  );
                }}
              />
            </div> */}
      <div className="form-group col-12 col-md-6 p-0 m-0  pr-md-3 pr-0   p-1">
        <label className="label_style">Postal Code (required)</label>
        <input
          name="user_curr_emp_postalcode"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_postalcode}
        />
        {formik.errors.user_curr_emp_postalcode &&
          formik.touched.user_curr_emp_postalcode && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_postalcode}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pl-0">
        {/* <NumberFormat
          prefix="+"
          format="+# (###) ###-####"
          mask="_"
          allowEmptyFormatting={false}
          onValueChange={(e) => {
            formik.setFieldValue("user_curr_emp_phone", e.value);
          }}
          placeholder="Cell Phone Number"
          onBlur={formik.handleBlur}
          name="user_curr_emp_phone"
          // id="phone"
          className="form-control eforms_input_container"
          value={formik.values.user_curr_emp_phone}
        /> */}
        <label className="label_style">Phone (required)</label>
        <input
          name="user_curr_emp_phone"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_phone}
        />
        {formik.errors.user_curr_emp_phone &&
          formik.touched.user_curr_emp_phone && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_phone}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6 mr-3 p-0 m-0 p-1 pr-md-3 pr-0">
        <label className="label_style">Gross Income (required)</label>
        <input
          name="user_curr_emp_income"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_curr_emp_income}
        />
        {formik.errors.user_curr_emp_income &&
          formik.touched.user_curr_emp_income && (
            <small className="text-danger">
              {formik.errors.user_curr_emp_income}
            </small>
          )}
      </div>
      <div className="col-12 row p-0 m-0">
        <div className="form-group col-12 col-md-6   p-0 m-0 2 p-1 pr-md-3 pl-0">
          <label className="label_style">Duration Year (required)</label>
          <input
            name="user_curr_emp_Duration_year"
            className="form-control  eforms_input_container"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_curr_emp_Duration_year}
          />
          {formik.errors.user_curr_emp_Duration_year &&
            formik.touched.user_curr_emp_Duration_year && (
              <small className="text-danger">
                {formik.errors.user_curr_emp_Duration_year}
              </small>
            )}
        </div>
        <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pr-0">
          <label className="label_style">Duration Month (required)</label>
          <input
            name="user_curr_emp_Duration_month"
            className="form-control  eforms_input_container"
            placeholder=""
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_curr_emp_Duration_month}
          />
          {formik.errors.user_curr_emp_Duration_month &&
            formik.touched.user_curr_emp_Duration_month && (
              <small className="text-danger">
                {formik.errors.user_curr_emp_Duration_month}
              </small>
            )}
        </div>
      </div>
      {/* </div> */}

      {/* <div className="form-group col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1 pl-md-3 pl-0">
        <label className="label_style">Country</label>
        <input
          placeholder=""
          name="frk_user_curr_emp_country_id"
          className="form-control eforms_input_container"
          value={formik.values.frk_user_curr_emp_country_id}
          disabled
        />
        {formik.errors.frk_user_curr_emp_country_id &&
          formik.touched.frk_user_curr_emp_country_id && (
            <small className="text-danger">
              {formik.errors.frk_user_curr_emp_country_id}
            </small>
          )}
      </div> */}
    </div>
  );
};

export default FinancialCurrentEmployment;
