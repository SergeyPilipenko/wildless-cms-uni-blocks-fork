export const getCurrentDate = () => {
  return new Date().toJSON().slice(0, "YYYY-MM-DD".length);
};
