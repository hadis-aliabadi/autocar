import { Cookies } from "react-cookie";
import { httpRequest } from "../../apis";
// import { BASE_URL, COOKIE_MAX_AGE } from "../../constant/base";
import { getToken } from "../common/get_token";

export const onSubmit = async (values, services, domain) => {
  const part_detail = await services.filter(
    (item) => item.part_name !== "" || item.comment !== ""
  );

  const vehicle_info = {
    make: values.make,
    model: values.model,
    year: +values.year,
    // vin_number: values.vin_number,
  };
  const body = {
    vehicle_info,
    f_name: values.firstName,
    l_name: values.lastName,
    email: values.email,
    mobile: values.phone,
    part_detail: part_detail,
    requested_date: values.requested_date,
    comment: values.comment,
    // vin_number: values.vin_number,
  };
  const { data, status, message } = await httpRequest(
    "POST",
    `/api/dealerweb/orderpart/add/${domain}`,
    JSON.stringify(body),
    getToken() ? { authorization: `Bearer ${getToken()}` } : {},
    false
  );
  return { data, status, message };
};
export const handleAddClick = (service, setService) => {
  if (
    service.length === 1 &&
    service[0].part_name !== "" &&
    service[0].comment !== ""
  ) {
    setService([...service, { part_name: "", comment: "" }]);
  } else if (
    service[service.length - 1].part_name !== "" &&
    service[service.length - 1].comment !== ""
  ) {
    setService([...service, { part_name: "", comment: "" }]);
  }
};
export const handleInputChange = (e, index, service, setService, formik) => {
  const { name, value } = e.target;
  const list = [...service];
  list[index][name] = value;
  setService(list);
  if (
    service.length === 1 &&
    (service[0].part_name !== "" || service[0].comment !== "")
  ) {
    formik.setFieldError("services", false);
  }
};
export const handleRemoveClick = (index, service, setService) => {
  if (service.length > 1) {
    const list = [...service];
    list.splice(index, 1);
    setService(list);
  }
};
