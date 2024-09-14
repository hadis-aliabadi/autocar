export const phonenumberConvertor = (phone = "") =>
  "Tel:" + phone?.toString().replace(/\D/g, "");
