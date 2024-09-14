export function splitTextOnCapitalLetters(text) {
  const result = text.replace(/([a-z])([A-Z])/g, "$1 $2");
  return result.replace(/([A-Z]{2,})([A-Z][a-z])/g, "$1 $2");
}
