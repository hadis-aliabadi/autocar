export const calculateOdometers = (min, max) => {
  let createOdometer = new Array();

  for (let i = min; i <= max + 1000; i = i + 1000) {
    createOdometer.push({ value: i.toString(), label: i.toString() });
  }
  return createOdometer;
};
