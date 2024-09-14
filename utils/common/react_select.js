const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
  backgroundColor: "",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #29292999",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba($color : #ffffff , $alfa : 0.1)",
    border: "none",
    color: "#000",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
      color: "#000",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
  }),
};

export const reactSelectColorStyleForm = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "rgba($color : #E3E3E3 , $alfa : 0.1)",
    border: "none",
    color: "#000",
    border: "none",
    borderBottom: "2px solid #0d65bf",
    color: "#000",
    height: "38px",
    fontSize: "14px",
    borderRadius: "0",
    top: "0",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#868D9D",
      cursor: "pointer",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
      color: "#000",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    fontFamily: "Open Sans",
    fontSize: "14px",
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#868D9D",
  }),
};
