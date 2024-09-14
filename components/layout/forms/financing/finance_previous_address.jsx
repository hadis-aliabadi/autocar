const FinancialPreviousAddress = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100">
      <small>
        <span style={{ color: "red" }}>*</span> If you've lived at your current
        address for less than 2 years, we kindly request that you provide
        information about your previous address as well.
      </small>
      <div className="form-group col-12 col-sm-6  p-0 m-0 p-1 pr-md-3 pr-0">
        <label className="p-0 m-0 label_style ">City</label>
        <input
          type="text"
          name="user_prev_city"
          className="form-control eforms_input_container"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_city}
          // placeholder="City"
        />

        {formik.errors.user_prev_city && formik.touched.user_prev_city && (
          <small className="text-danger">{formik.errors.user_prev_city}</small>
        )}
      </div>{" "}
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 p-1 pl-md-3 pl-0">
        <label className="p-0 m-0 label_style ">Postal Code</label>
        <input
          type="text"
          name="user_prev_postal_code"
          className="form-control eforms_input_container"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_postal_code}
          // placeholder="Postal Code"
        />
      </div>
      <div className="form-group col-12 col-sm-6 p-0 m-0 p-1 pr-md-3 pr-0">
        <label className="p-0 m-0 label_style ">Province</label>

        <input
          type="text"
          name="user_prev_province"
          className="form-control eforms_input_container"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_province}
          // placeholder="Province"
        />
      </div>
      {/* <div className="form-group col-12 col-sm-6 p-0 m-0 p-1">
        <input
          placeholder="Country"
          name="country"
          className="form-control eforms_input_container"
          value={formik.values.country}
          disabled
        />
      </div> */}
      {/* <div className={`finance_header_div__conatiner pt-4 pb-2 col-12`}>
        How Long Have You Lived at Your Current Address?
      </div> */}
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 p-1 pl-md-3 pl-0">
        <label className="p-0 m-0 label_style ">Year(s)</label>
        <input
          type="text"
          name="user_prev_duration_year"
          className="form-control eforms_input_container"
          // placeholder="Yr(s)"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_duration_year}
        />
        {formik.errors.user_prev_duration_year &&
          formik.touched.user_prev_duration_year && (
            <small className="text-danger">
              {formik.errors.user_prev_duration_year}
            </small>
          )}
      </div>
      <div className="form-group col-sm-6 col-md-6 p-0 m-0 p-1 pr-md-3 pr-0">
        <label className="p-0 m-0 label_style ">Month(s)</label>
        <input
          type="text"
          name="user_prev_duration_month"
          className="form-control eforms_input_container"
          // placeholder="Mth(s)"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_duration_month}
        />
        {formik.errors.user_prev_duration_month &&
          formik.touched.user_prev_duration_month && (
            <small className="text-danger">
              {formik.errors.user_prev_duration_month}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-sm-12 p-0 m-0 p-1 ">
        {/* <label for="user_prev_address">Address</label> */}
        <label className="p-0 m-0 label_style ">Address</label>
        <textarea
          rows={4}
          name="user_prev_address"
          className="form-control  eforms_textarea_container"
          // placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_address}
        />
      </div>
      {/* <div className="form-group col-sm-12 col-md-12 p-0 m-0 p-1">
        <Select
          name="user_currAddr_home_status"
          className="form-select w-100 eforms_input_select_container_1"
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
      </div> */}
    </div>
  );
};

export default FinancialPreviousAddress;

//  <div className="form-group col-sm-6 col-md-6 p-0 m-0 p-1">
//    <input
//      name="user_currAddr_monthly_payment"
//      className="form-control eforms_input_container"
//      placeholder="Monthly payment"
//      onChange={formik.handleChange}
//      onBlur={formik.handleBlur}
//      value={formik.values.user_currAddr_monthly_payment}
//    />
//    {formik.errors.user_currAddr_monthly_payment &&
//      formik.touched.user_currAddr_monthly_payment && (
//        <small className="text-danger">
//          {formik.errors.user_currAddr_monthly_payment}
//        </small>
//      )}
//  </div>;
