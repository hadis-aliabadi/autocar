import { httpRequest } from "../../apis";

export const onSubmit = async (values, domain) => {
  const { status, message, data } = await httpRequest(
    "POST",
    `/api/dealerweb/contactus/add/${domain}`,
    JSON.stringify(values),
    {},
    false
  );
  return { status, message, data };
};
