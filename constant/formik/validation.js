import * as Yup from "yup";
export const VALUE_YOURTRADE_VALIDATION = (inModal) => {
  return Yup.object({
    frk_desire_MidV_id:
      !inModal && Yup.string().required("required").nullable(),
    year: Yup.string().required("required").matches(/^\d+$/, {
      message: "year is a number",
    }),
    temp_odometer: Yup.string().matches(/^\d+$/, {
      message: "Odometer must be a number",
    }),
    transmission: Yup.string().matches(/^\d+$/, {
      message: "transmission is a number",
    }),
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required").email("invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
  });
};
export const CAR_FINDER_VALIDATION = () => {
  return Yup.object({
    year: Yup.string().required("required").matches(/^\d+$/, {
      message: "year is a number",
    }),
    vehicle_kilometers: Yup.string().matches(/^\d+$/, {
      message: "kilometers is a number",
    }),
    vehicle_miles: Yup.string().matches(/^\d+$/, {
      message: "miles is a number",
    }),
    transmission: Yup.string().matches(/^\d+$/, {
      message: "transmission is a number",
    }),
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    make: Yup.string().required("required"),
    model: Yup.string().required("required"),
    email: Yup.string().required("required").email("invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
  });
};

export const SERVICE_APPOINTMENT_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required").email("invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    year: Yup.string().required("required").matches(/^\d+$/, "invalid year"),
    requested_date: Yup.string().required("required"),
  });
};

export const ORDER_SERVICE_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required").email("invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    year: Yup.string().required("required").matches(/^\d+$/, "invalid year"),
    requested_date: Yup.string().required("required"),
  });
};

//not used
export const PERSONAL_VALIDATION = Yup.object({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string().required("required").email("invalid email format"),
  phone: Yup.string()
    .required("required")
    .matches(/^\d+$/, "check your phone number")
    .length(10, "mobile has 10 digits"),
});

export const TEST_DRIVE_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required").email("Check your email"),
    phone: Yup.string()
      .required("required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_salutation: Yup.string().required("required"),
    method_of_contact: Yup.string().required("required"),
    requested_date: Yup.string().required("required"),
  });
};

export const FINANCIAL_VALIDATION_SCHEMA = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("Check your email"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_currAddr_monthly_payment: Yup.string().matches(
      /^\d+$/,
      "monthly payment is a number"
    ),
    user_currAddr_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_currAddr_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
    user_curr_emp_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_curr_emp_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
    user_curr_emp_phone: Yup.string()
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_prev_emp_phone: Yup.string()
      .matches(/^\d+$/, "check your phone number")
      .length(10, "mobile has 10 digits"),
    user_prev_emp_Duration_year: Yup.string().matches(
      /^\d+$/,
      "Duration year is a number"
    ),
    user_prev_emp_Duration_month: Yup.string().matches(
      /^\d+$/,
      "Duration month is a number"
    ),
    // Mortgage
    user_currAddr_home_market_value: Yup.string().when(
      ["user_currAddr_home_status"],
      {
        is: (user_currAddr_home_status) => user_currAddr_home_status == 2,
        then: Yup.string()
          .required("Required")
          .matches(/^\d+$/, "Market value is a number"),
        otherwise: Yup.string(),
      }
    ),

    user_currAddr_remaining_mortgage: Yup.string().when(
      ["user_currAddr_home_status"],
      {
        is: (user_currAddr_home_status) => user_currAddr_home_status == 2,
        then: Yup.string()
          .required("Required")
          .matches(/^\d+$/, "Outstanding amount is a number"),
        otherwise: Yup.string(),
      }
    ),

    user_currAddr_home_mortgage_holder: Yup.string().when(
      ["user_currAddr_home_status"],
      {
        is: (user_currAddr_home_status) => user_currAddr_home_status == 2,
        then: Yup.string().required("Required"),
      }
    ),
    current_employment_city: Yup.string().required("Required"),
    frk_user_curr_emp_country_id: Yup.string().required("Required"),
    frk_user_curr_emp_province_id: Yup.string().required("Required"),
    user_marital_status: Yup.string().required("Required"),
    user_birthday: Yup.string().required("Required"),
    user_currAddr_Duration_month: Yup.string().required("Required"),
    // user_currAddr_Duration_year: Yup.number().required("Required"),
    user_currAddr_home_status: Yup.string().required("Required"),
    // user_currAddr_monthly_payment: Yup.string().required("Required"),

    user_curr_employment: Yup.string().required("Required"),
    user_curr_employer: Yup.string().required("Required"),
    user_curr_emp_occupation: Yup.string().required("Required"),
    user_curr_emp_addr: Yup.string().required("Required"),
    user_curr_emp_postalcode: Yup.string().required("Required"),
    user_curr_emp_phone: Yup.string()
      .required("phone is required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    // message: Yup.string().required("Message is required"),
    user_curr_emp_income: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "income is a number"),
    user_curr_emp_Duration_year: Yup.string().required("Required"),
    user_curr_emp_Duration_month: Yup.string().required("Required"),

    user_currAddr: Yup.string().required("Required"),
    current_city: Yup.string().required("Required"),
    // province: Yup.string().required("Required"),
    user_currAddr_postalcode: Yup.string().required("Required"),
    user_currAddr_monthly_payment: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "monthly payment is a number"),
    // frk_desire_MidVclDS_id: Yup.string().required("required"),
    // frk_desire_MidVclDS_id: Yup.string().when(["desired_mid_vehicle"], {
    //   is: desired_mid_vehicle => !desired_mid_vehicle,
    //   then: Yup.string().required("Required"),
    //   otherwise: Yup.string(),
    // }),
    // user_curr_emp_income: Yup.string().matches(/^\d+$/, "income is a number"),
  });
};
export const TEXT_US_NOW_VALIDATION = () => {
  return Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email()
      .required("Email is required")
      .email("Check email format"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
    message: Yup.string().required("Message is required"),
    frk_midv_id: Yup.string().when(["desired_mid_vehicle"], {
      is: (desired_mid_vehicle) => !desired_mid_vehicle,
      then: Yup.string().required("Required"),
      otherwise: Yup.string(),
    }),
  });
};

export const CONTACT_US_VALIDATION_SCHEMA = Yup.object({
  f_name: Yup.string().required("First Name is required"),
  l_name: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email()
    .required("Email is required")
    .email("Check email format"),
  mobile: Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),
  message: Yup.string().required("Message is required"),
  frk_midv_id: Yup.string().when(["desired_mid_vehicle"], {
    is: (desired_mid_vehicle) => !desired_mid_vehicle,
    then: Yup.string().required("Required"),
    otherwise: Yup.string(),
  }),
});
export const BOOK_APPOINTMENT_VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email().required("email is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),

  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  method_of_contact: Yup.string().required("method of contact is required!"),
  requested_date: Yup.string().required("date is required"),
  comment: Yup.string().required("comment is required!"),
  frk_midv_id: Yup.string().when(["desired_mid_vehicle"], {
    is: (desired_mid_vehicle) => !desired_mid_vehicle,
    then: Yup.string().required("Required"),
    otherwise: Yup.string(),
  }),
});
export const GET_MORE_INFORMATION_VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email()
    .required("Email is required")
    .email("Check email format"),
  phone: Yup.string()
    .required("required")
    .matches(/^\d+$/, "invalid phone number")
    .length(10, "Number has 10 digits"),
  message: Yup.string().required("Message is required"),
});

export const GET_CARFAX_INFORMATION_VALIDATION_SCHEMA = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "invalid phone number")
      .length(10, "Number has 10 digits"),
  });
};

export const VALIDATION_VALUE_YOUR_TRADE = () => {
  return Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    // email: Yup.string().required("Required").email("invalid email format"),
    phone: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "check your phone number")
      .length(10, "phone has 10 digits"),
    // vin_number: Yup.string().required("Required"),
    year: Yup.string().required("Required").matches(/^\d+$/, {
      message: "year is a number",
    }),
  });
};
