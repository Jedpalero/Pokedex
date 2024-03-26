export const useFormattedId = (url: string) => {
  const id = url?.split("/").filter(Boolean).pop();
  const str = "" + id;
  const pad = "000";
  return pad.substring(0, pad.length - str.length) + str;
};