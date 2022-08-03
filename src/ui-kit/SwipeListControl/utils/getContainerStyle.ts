// styles used to compensate outer container padding to get rid of clipping effect
export const getContainerStyle = (padding: number): Record<string, string> => {
  return {
    marginLeft: `${-padding}px`,
    marginRight: `${-padding}px`,
    paddingLeft: `${padding}px`,
    paddingRight: `${padding}px`,
  };
};
