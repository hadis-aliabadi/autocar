import { Cookies } from "react-cookie";
import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const onSubmit = async (values, services, domain) => {
  const service_pack = await services.filter(
    (item) => item.requested_service !== "" || item.comment !== ""
  );

  const body = {
    f_name: values.firstName,
    l_name: values.lastName,
    email: values.email,
    mobile: values.phone,
    service_pack,
    requested_date: values.requested_date,
    comment: values.comments,
    vehicle_info: {
      make: values.make,
      model: values.model,
      year: +values.year,
      trim: values.trim,
      vin_number: values.vin_number,
    },
  };
  const { data, status, message } = await httpRequest(
    "POST",
    `/api/dealerweb/service_apointment/add/${domain}`,
    JSON.stringify(body),
    {},
    false
  );
  return { data, status, message };
};

export const handleAddClick = (service, setService) => {
  if (
    service.length === 1 &&
    service[0].requested_service !== "" &&
    service[0].comment !== ""
  ) {
    setService([...service, { requested_service: "", comment: "" }]);
  } else if (
    service[service.length - 1].requested_service !== "" &&
    service[service.length - 1].comment !== ""
  ) {
    setService([...service, { requested_service: "", comment: "" }]);
  }
};
export const handleInputChange = (e, index, service, setService, formik) => {
  const { name, value } = e.target;
  const list = [...service];
  list[index][name] = value;
  setService(list);
  if (
    service.length === 1 &&
    (service[0].requested_service !== "" || service[0].comment !== "")
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
