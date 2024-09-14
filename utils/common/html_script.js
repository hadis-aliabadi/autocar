export const findScript = (htmlText = "") => {
  if (htmlText?.length !== 0 && typeof htmlText === "string") {
    return htmlText.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gim, "");
  }
  return "";
};
