export const dashRemoverForSlug = (arrg) => {
  if (typeof arrg === "string") {
    const replecedDash = arrg.replaceAll(/[^\w\d]/g, "");
    return replecedDash.toLowerCase();
  } else {
    return "";
  }
};

export const ANDRemoverForSlug = (arrg) => {
  if (typeof arrg === "string") {
    const replecedDash = arrg.replace(/ & /g, "-*");
    return replecedDash.toLowerCase();
  } else {
    return "";
  }
};
export const ANDInsertForSlug = (arrg) => {
  if (typeof arrg === "string") {
    const replecedDash = arrg.replace("-*", " & ");
    return replecedDash.toLowerCase();
  } else {
    return "";
  }
};
