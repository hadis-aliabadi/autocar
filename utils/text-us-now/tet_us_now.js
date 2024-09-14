import { httpRequest } from "../../apis";
import { getToken } from "../common/get_token";

export const handleSubmit = async (values, domain) => {
  const body = {
    mobile: values.phone,
    l_name: values.lastName,
    f_name: values.firstName,
    email: values.email,
    message: values.message,
    frk_midv_id: values.frk_midv_id,
    desired_mid_vehicle: values.desired_mid_vehicle,
  };
  const { status, message, data } = await httpRequest(
    "POST",
    `/api/dealerweb/textus/add/${domain}`,
    JSON.stringify(body),
    getToken() ? { authorization: `Bearer ${getToken()}` } : {},
    false
  );
  return { status, message, data };
};
