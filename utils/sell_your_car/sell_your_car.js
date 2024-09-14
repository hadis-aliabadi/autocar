import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const onSubmitSellUsYourCar = async (
  values,
  domain,
  optionsList,
  images
) => {
  let options_list = [];
  optionsList?.map((e) => {
    if (e.value === true) {
      options_list.push(e.label);
    }
  });

  // images :
  const formData = new FormData();
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  // console.log(formData);

  // others

  values.make && formData.append("make", values.make);
  values.model && formData.append("model", values.model);
  +values.year && formData.append("model_year", +values.year);
  values.trim && formData.append("trim", values.trim);
  +values.bodyStyle && formData.append("frk_bodyStyle", +values.bodyStyle);
  +values.transmission &&
    formData.append("frk_transmission", +values.transmission);
  values.driveLine &&
    formData.append("drive_type", values.driveLine ? values.driveLine : "");
  +values.frk_exterior_color &&
    formData.append("frk_exterior_color", +values.frk_exterior_color);
  options_list && formData.append("options_list", options_list);
  values?.firstName && formData.append("f_name", values?.firstName);
  values?.lastName && formData.append("l_name", values?.lastName);
  values?.email && formData.append("email", values?.email);
  values?.phone && formData.append("mobile", values?.phone);
  values?.accident_claim_history &&
    formData.append("accident_claim_history", values?.accident_claim_history);
  values?.has_mechanical_issues &&
    formData.append("has_mechanical_issues", values?.has_mechanical_issues);
  values?.has_minor_damages &&
    formData.append("has_minor_damages", values?.has_minor_damages);
  values?.amount_owning &&
    formData.append("amount_owning", +values?.amount_owning);
  values?.additional_info &&
    formData.append("additional_info", values?.additional_info);
  +values?.vehicle_kilometers &&
    formData.append("vehicle_kilometers", Number(+values?.vehicle_kilometers));
  +values?.vehicle_miles &&
    formData.append("vehicle_miles", Number(+values?.vehicle_miles));

  const _res = await httpRequest(
    "POST",
    `/v2/api/dealerweb/sellYourCar/add/${domain}`,
    formData,
    getToken() ? { authorization: getToken() } : {},
    // getToken() ? { authorization: getToken() } : {},

    // After back fixed this form, uncomment the abouve comment and send formData instead
    false
  );
  return _res;
};

export const colorOption = (colorData) => {
  return colorData?.map((extriorColor) => ({
    value: extriorColor?.name,
    label: extriorColor?.name,
    colorObject: extriorColor,
  }));
};
