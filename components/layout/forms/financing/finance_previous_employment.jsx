const FinancialPreviousEmployment = ({ formik }) => {
  return (
    <div className="p-0 m-0 row w-100">
      <small>
      <span style={{color:'red'}}>*</span> If your current employment duration is less than two years, we kindly request that you provide information about your previous employment as well.
      </small>
      <div className="form-group col-12 col-md-6 p-0 m-0  pr-md-3 pr-0 p-1">
        <label className="label_style">Previous Employer</label>
        <input
          name="user_prev_employer"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_employer}
        />
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0  p-1 pl-md-3 pl-0">
        <label className="label_style">Phone</label>
        <input
          name="user_prev_emp_phone"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_phone}
        />
        {formik.errors.user_prev_emp_phone &&
          formik.touched.user_prev_emp_phone && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_phone}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6  p-0 m-0  p-1 pr-md-3 pr-0">
        <label className="label_style">Duration Year</label>
        <input
          name="user_prev_emp_Duration_year"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_Duration_year}
        />
        {formik.errors.user_prev_emp_Duration_year &&
          formik.touched.user_prev_emp_Duration_year && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_year}
            </small>
          )}
      </div>
      <div className="form-group col-12 col-md-6 p-0 m-0 p-1 pl-md-3 pl-0">
        <label className="label_style">Duration Month</label>
        <input
          name="user_prev_emp_Duration_month"
          className="form-control  eforms_input_container"
          placeholder=""
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user_prev_emp_Duration_month}
        />
        {formik.errors.user_prev_emp_Duration_month &&
          formik.touched.user_prev_emp_Duration_month && (
            <small className="text-danger">
              {formik.errors.user_prev_emp_Duration_month}
            </small>
          )}
      </div>
      
    </div>
  );
};

export default FinancialPreviousEmployment;
