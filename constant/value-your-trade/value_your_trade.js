export const INITIAL_VALUES = (query) => ({
  additional_info: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  make: "",
  model: "",
  year: "",
  trim: "",
  bodyStyle: "",
  transmission: "",
  driveLine: "",
  // condition: "",
  frk_exterior_color: "",
  frk_interior_color: "",
  vin_number: "",
  temp_odometer: "",
  temp_odometer_type: 1,
  frk_desire_MidV_id:
    query?.selected_vehicle &&
    query?.selected_vehicle !== null &&
    query?.selected_vehicle !== ""
      ? query?.selected_vehicle
      : "",
  financial: {
    kind: "",
    type: null,
    order: 0,
  },
});
export const DIREVE_TYPE = [
  {
    label: "4X2",
    value: "4X2",
  },
  {
    label: "4X4",
    value: "4X4",
  },
  {
    label: "AWD",
    value: "AWD",
  },
  {
    label: "FWD",
    value: "FWD",
  },
  {
    label: "RWD",
    value: "RWD",
  },
  {
    label: "2WD",
    value: "2WD",
  },
  {
    label: "Other",
    value: "Other",
  },
];



export const INITIAL_VALUE_YOUR_TRADE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  additional_info: "",
  vin_number: null,
  // vehicle_info: {
  make: "",
  model: "",
  year: "",
  // },
  vehicle_kilometers: "",
  // vehicle_miles: "",
  // images:[],
};