export const dateHandler = (date) => {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    // year: "numeric",
    // month: "long",
    // day: "2-digit",
    // hour: "numeric",
    // minute: "numeric",
  }).format(new Date(date).getTime());
};
