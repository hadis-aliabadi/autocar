export const conditionStatus = (status) => {
  switch (+status) {
    case 1:
      return "New";
    case 2:
      return "Like new";
    case 3:
      return "Excelent";
    case 4:
      return "Good";
    case 5:
      return "Fair";

    default:
      return "";
  }
};
export const handleSpecialPricePercent = (sellPrice, specialPrice) => {
  if (sellPrice && specialPrice) {
    const percent = Object.is(
      NaN,
      Math.round((+sellPrice * 100) / +specialPrice)
    )
      ? 0
      : Math.round((+sellPrice * 100) / +specialPrice);
    return percent;
  } else {
    return 0;
  }
};
export const handleSortOfInventory = async (formik, kind = "", number) => {
  await new Promise((res, rej) => {
    if (formik.values.sortKind?.kind === kind) {
      formik.setFieldValue("sortKind", {
        kind: kind,
        type:
          formik.values.sortKind?.order === 0
            ? `${number ? "DESC" : "ASC"}`
            : formik.values.sortKind?.order === 1
            ? `${number ? "ASC" : "DESC"}`
            : null,
        order:
          formik.values.sortKind?.order === 2
            ? 0
            : Number(formik.values.sortKind?.order) + 1,
      });
      res();
    } else {
      formik.setFieldValue("sortKind", {
        kind: kind,
        type: number ? "DESC" : "ASC",
        order: 1,
      });
      res();
    }
  })
    .then(() => formik.handleSubmit())
    .catch((err) => console.log(err));
};
