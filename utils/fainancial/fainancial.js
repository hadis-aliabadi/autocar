// import { httpRequest } from "../../apis";

import { httpRequest } from "../../apis";

const getProvince = (province) => {
  return province?.map((item) => {
    return {
      value: item.id,
      label: item.province,
    };
  });
};
const getCity = (allProvince, selectedProvinceId) => {
  const province = allProvince.find((item) => item.id === selectedProvinceId);
  if (province && province.Cities.length !== 0) {
    return province.Cities?.map((item) => {
      return {
        value: item.id,
        label: item.city,
      };
    });
  }
  return [];
};

export const onSubmit = async (values, domain) => {
  const { phone, firstName, lastName, ...otherValues } = values;
  const { data, status, message } = await httpRequest(
    "POST",
    `/api/dealerweb/financial/add/${domain}`,
    {
      ...otherValues,
      f_name: firstName,
      l_name: lastName,
      mobile: phone,
      frk_user_curr_emp_country_id: +values?.frk_user_curr_emp_country_id,
      frk_user_curr_emp_province_id: +values?.frk_user_curr_emp_province_id,
      // frk_user_curr_emp_city_id: +values?.frk_user_curr_emp_city_id,
      frk_user_curr_emp_city_id: values?.frk_user_curr_emp_city_id,
      frk_desire_MidVclDS_id:
        +values?.frk_desire_MidVclDS_id !== 0
          ? +values?.frk_desire_MidVclDS_id
          : null,
      frk_valueYourTrade_id:
        +values?.frk_valueYourTrade_id !== 0
          ? +values?.frk_valueYourTrade_id
          : null,

      frk_carFinder_id:
        +values?.frk_carFinder_id !== 0 ? +values?.frk_carFinder_id : null,
      user_salutation: +values?.user_salutation,
      user_marital_status: +values?.user_marital_status,
      user_currAddr_home_status: +values?.user_currAddr_home_status,
      user_currAddr_monthly_payment: +values?.user_currAddr_monthly_payment,
      user_curr_employment: +values?.user_curr_employment,
      user_other_bankruptcy: +values?.user_other_bankruptcy,
      user_other_repossission: +values?.user_other_repossission,
      user_other_is_consiger_available:
        +values?.user_other_is_consiger_available,
      user_please_rate_your_credit: +values?.user_please_rate_your_credit,
      carFinderInfo: {
        vin_number: values?.carFinderInfo_vin_number,
        vehicle_info: {
          make: values?.carFinderInfo_vehicle_info_make,
          model: values?.carFinderInfo_vehicle_info_model,
          year: +values?.carFinderInfo_vehicle_info_year,
        },
      },
      valueYourTradeInfo: {
        vin_number: "",
        vehicle_info: {
          make: +values?.valueYourTradeInfo_vehicle_info_make,
          model: +values?.valueYourTradeInfo_vehicle_info_model,
          year: +values?.valueYourTradeInfo_vehicle_info_year,

          vehicle_kilometers:
            +values?.valueYourTradeInfo_vehicle_info_vehicle_kilometers,
        },
        comment: values?.valueYourTradeInfo_comment,
      },
      desired_mid_vehicle:
        values?.vehicleYear +
        " " +
        values?.vehicleMake +
        " " +
        values?.vehicleModel +
        " " +
        values?.vehicleVin,
    },
    {},
    false
  );
  return { data, status, message };
};

export { getProvince, getCity };
