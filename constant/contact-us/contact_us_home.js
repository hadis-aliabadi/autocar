export const CONTACT_US_HOME_INITIAL_VALUE = (query) => ({
  firstName: "",
  lastName: "",
  phone: "",
  message: "",
  email: "",
  frk_midv_id: query?.selected_vehicle ? query?.selected_vehicle : "",
  desired_mid_vehicle: "",
});
