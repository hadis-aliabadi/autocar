import { httpRequest } from "../../apis";

export const onSubmit = async (values, domain, id) => {
  const body = {
    // values,
    email: values.email,
    f_name: values.firstName,
    l_name: values.lastName,
    message: values.message,
    mobile: values.phone,
  };
  const { status, message, data } = await httpRequest(
    "POST",
    `/api/dealerweb/moreInfo/${id}/${domain}`,
    JSON.stringify(body),
    {},
    false
  );
  return { status, message, data };
};
