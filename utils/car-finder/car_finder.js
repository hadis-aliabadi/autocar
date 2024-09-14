import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const onSubmit = async (values, domain) => {
  const vehicle_info = {
    make: values.make,
    model: values.model,
    year: +values.year,
    trim: values.trim,
    condition: values.condition,
    fuel_type: values.fuel_type,
    frk_bodyStyle: values.bodyStyle === "" ? null : +values.bodyStyle,
    frk_transmission: values.transmission === "" ? null : +values.transmission,
    drive_type: values.driveLine,
    bodyStyle: values.bodyStyle,
    transmission: values.transmission,
    driverLine: values.driveLine,
    vin_number : values?.vin_number ,
    // condition: values.condition,
    frk_exterior_color:
      values.frk_exterior_color === "" ? null : +values.frk_exterior_color,
    frk_interior_color:
      values.frk_interior_color === "" ? null : +values.frk_interior_color,
    financial: {
      kind: "",
      type: null,
      order: 0,
    },
  };
  const body = {
    vehicle_info,
    f_name: values.firstName,
    l_name: values.lastName,
    email: values.email,
    mobile: values.phone,
    vehicle_kilometers: values.odometer_type === 1 ? +values.odometer : null,
    vehicle_miles: values.odometer_type === 2 ? +values.odometer : null,
    additional_info: values.additional_info,
    search_period: values.searchPeriod === "" ? null : +values.searchPeriod,
  };

  const _res = await httpRequest(
    "POST",
    `/api/dealerweb/carfinder/add/${domain}${
      values?.financial?.type !== null ? "?" + "financial=0" : ""
    }`,
    body,
    getToken() ? { authorization: `Bearer ${getToken()}` } : {},
    false
  );
  return _res;
};
export const handleFinancialCarfinder = async (formik, kind = "", number) => {
  await new Promise((res, rej) => {
    if ("/forms/car-finder" === kind) {
      formik.setFieldValue("financial", {
        kind: kind,
        type:
          formik.values.financial?.order === 0
            ? `${number}`
            : formik.values.financial?.order === 1
            ? `${number}`
            : null,
        order:
          formik.values.financial?.order === 2
            ? 0
            : Number(formik.values.financial?.order) + 1,
      });
      res();
    } else {
      formik.setFieldValue("financial", {
        kind: kind,
        type: null,
        order: "",
      });
      res();
    }
  })
    .then(() => formik.handleSubmit())
    .catch((err) => console.log(err));
};
