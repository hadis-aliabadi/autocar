import Select from "react-select";
import { USER_EMPLOYMENT_OPTIONS } from "../../../../constant/fainancial/fainancial";
import { useGetAllCitiesWithDetail } from "../../../../hooks/city/useGetAllCitiesWithDetail";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { useState } from "react";

const FinancialTradeInformation = ({ formik }) => {
  const [years] = useState(calculateYear);

  return (
    <div className="p-0 m-0 row align-items-start justify-content-start">
    {" "}
    <div className="form-group col-12 col-md-6 p-0 pr-md-3 m-0  p-1">
      <lable className="label_style">Make</lable>
      <input
        name="valueYourTradeInfo_vehicle_info_make"
        className="form-control  eforms_input_container"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.vehicleMake}
      />
       {formik.errors.valueYourTradeInfo_vehicle_info_make && formik.touched.valueYourTradeInfo_vehicle_info_make && (
        <p className="text-danger">{formik.errors.valueYourTradeInfo_vehicle_info_make}</p>
      )}
    </div>
    <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
      <lable className="label_style">Model</lable>
      <input
        name="valueYourTradeInfo_vehicle_info_model"
        className="form-control  eforms_input_container"
        placeholder=""
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.valueYourTradeInfo_vehicle_info_model}
      />
       {formik.errors.valueYourTradeInfo_vehicle_info_model && formik.touched.valueYourTradeInfo_vehicle_info_model && (
        <p className="text-danger">{formik.errors.valueYourTradeInfo_vehicle_info_model}</p>
      )}
    </div>
    <div className="form-group  col-12 col-md-6 p-0 pr-md-3  m-0 p-1">
      <lable className="label_style">Year</lable>
      <Select
        name="valueYourTradeInfo_vehicle_info_year"
        className="form-select w-100 eforms_input_container"
        placeholder="Year"
        options={years}
        styles={reactSelectInputStyle}
        value={years?.filter(
          (year) => year?.value === formik.values.year
        )}
        onChange={(e) => {
          formik.setFieldValue("valueYourTradeInfo_vehicle_info_year", e?.value);
        }}
      />
      {formik.errors.valueYourTradeInfo_vehicle_info_year && formik.touched.valueYourTradeInfo_vehicle_info_year && (
        <p className="text-danger">{formik.errors.valueYourTradeInfo_vehicle_info_year}</p>
      )}
    </div>
    
    
 
 
    <div className="form-group  col-12 col-md-6 p-0 pl-md-3  m-0  p-1">
      <lable className="label_style">Kilometer</lable>
      <input
        name="valueYourTradeInfo_vehicle_info_vehicle_kilometers"
        className="form-control  eforms_input_container"
        placeholder=" "
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.valueYourTradeInfo_vehicle_info_vehicle_kilometers}
      />
       {formik.errors.valueYourTradeInfo_vehicle_info_vehicle_kilometers && formik.touched.valueYourTradeInfo_vehicle_info_vehicle_kilometers && (
        <p className="text-danger">{formik.errors.valueYourTradeInfo_vehicle_info_vehicle_kilometers}</p>
      )}
    </div>
    <div className="form-group  col-12 p-0  m-0  p-1">
      <lable className="label_style">Comment</lable>
      <input
        name="valueYourTradeInfo_comment"
        className="form-control  eforms_input_container"
        placeholder=" "
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.valueYourTradeInfo_comment}
      />
       {formik.errors.valueYourTradeInfo_comment && formik.touched.valueYourTradeInfo_comment && (
        <p className="text-danger">{formik.errors.valueYourTradeInfo_comment}</p>
      )}
    </div>
   
  
  
  </div>
  );
};

export default FinancialTradeInformation;
