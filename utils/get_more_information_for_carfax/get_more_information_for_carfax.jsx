// import { httpRequest } from "../../apis";
import { httpRequest } from "../../apis";

export const onSubmit = async (values, domain, id) => {
  const body = {
    // values,
    email: values.email,
    f_name: values.firstName,
    l_name: values.lastName,
    mobile: values.phone,
    midvid: id,
  };
  const { status, message, data } = await httpRequest(
    "POST",
    `api/dealerweb/carfax/mid/add/${domain}`,
    JSON.stringify(body),
    {},
    false
  );
  return { status, message, data };
};
