export const calculateYear = () => {
  const year = new Date().getFullYear();
  let createDate = new Array(100);

  for (let i = 0; i < createDate.length; i++) {
    createDate[i] = { value: year - i, label: year - i };
  }
  return createDate;
};
