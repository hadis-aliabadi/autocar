import Select from "react-select";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import EformsHeader from "../../../common/layout/header/eform_header";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";

const FinancialCurrntAddress = ({ formik }) => {
  const { ProvinceOptions } = useGetAllCitiesWithDetail();

  return (
    <div className="p-0 m-0 row w-100">
      <div className="form-group col-12 col-md-6 p-0 m-0  pr-md-3 pr-0   p-1">
        <label className="label_style">Address (required)</label>

        <input
          name="user_currAddr"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr}
        />
        {formik.errors.user_currAddr && formik.touched.user_currAddr && (
          <small className="text-danger">{formik.errors.user_currAddr}</small>
        )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pl-md-3 pl-0 ">
        <label className="label_style">City (required)</label>
        <input
          name="current_city"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.current_city}
        />
        {/* <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={cityOptions}
          onChange={(option) => {
            formik.setFieldValue("current_city", option?.value);
            formik.setFieldValue("province", option?.province);
            formik.setFieldValue("country", option?.country);
          }}
          placeholder="City"
          name="city"
          onBlur={formik.handleBlur}
        /> */}

        {formik.errors.current_city && (
          <small className="text-danger">{formik.errors.current_city}</small>
        )}
      </div>

      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pr-md-3 pr-0 ">
        <label className="label_style">Province (required)</label>
        {/* <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={ProvinceOptions}
          onChange={(option) => {
            formik.setFieldValue(
              "frk_user_curr_adr_province_id",
              option?.value
            );
          }}
          placeholder="Province"
          name="frk_user_curr_adr_province_id"
          onBlur={formik.handleBlur}
        /> */}
          <Select
          className="form-select w-100  eforms_input_select_container"
          styles={reactSelectInputStyle}
          options={ProvinceOptions}
          onChange={(option) => {
            formik.setFieldValue(
              "frk_user_curr_adr_province_id",
              option?.value
            );
          }}
          placeholder="Province"
          name="frk_user_curr_adr_province_id"
          onBlur={formik.handleBlur}
        />
        {formik.errors.frk_user_curr_adr_province_id && (
          <small className="text-danger">{formik.errors.frk_user_curr_adr_province_id}</small>
        )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0  pl-md-3 pr-0   p-1">
        <label className="label_style">Postal code (required)</label>
        <input
          name="user_currAddr_postalcode"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_postalcode}
        />
        {formik.errors.user_currAddr_postalcode && (
          <small className="text-danger">
            {formik.errors.user_currAddr_postalcode}
          </small>
        )}
      </div>
      {/*      
      <div className="form-group col-12 col-md-6 p-0 m-0 mt-2 mb-2 p-1 pl-md-3 pl-0 ">
        <label className="label_style">Country</label>
        <input
          placeholder=""
          name="country"
          className="form-control eforms_input_container"
          value={formik.values.country}
          disabled
        />
      </div> */}

      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pr-md-3 pr-0 ">
        <label className="label_style">Duration year (required)</label>
        <input
          name="user_currAddr_Duration_year"
          className="form-control eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_Duration_year}
        />
        {formik.errors.user_currAddr_Duration_year &&
          formik.touched.user_currAddr_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_currAddr_Duration_year}
            </small>
          )}
      </div>

      <div className="form-group col-12 col-md-6   p-0 m-0 p-1 pl-md-3 pl-0 ">
        <label className="label_style">Duration Month (required)</label>
        <input
          name="user_currAddr_Duration_month"
          className="form-control eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_Duration_month}
        />
        {formik.errors.user_currAddr_Duration_month &&
          formik.touched.user_currAddr_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_currAddr_Duration_month}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-12 p-0 m-0 mt-3  p-1 pr-md-3 pr-0">
        <EformsHeader title="Home Rent/Mortgage Information" />
      </div>

      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pr-md-3 pr-0 ">
        <label className="label_style">Home Status (required)</label>
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
            formik.setFieldValue("user_currAddr_home_status", e?.value);
          }}
        />
        {formik.errors.user_currAddr_home_status && (
          <small className="text-danger">
            {formik.errors.user_currAddr_home_status}
          </small>
        )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pl-0 ">
        <label className="label_style">Monthly payment (required)</label>
        <input
          name="user_currAddr_monthly_payment"
          className="form-control eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_currAddr_monthly_payment}
        />
        {formik.errors.user_currAddr_monthly_payment &&
          formik.touched.user_currAddr_monthly_payment && (
            <small className="text-danger">
              {formik.errors.user_currAddr_monthly_payment}
            </small>
          )}
      </div>
    </div>
  );
};

export default FinancialCurrntAddress;
