export const reactSelectStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
  control: (provided) => ({
    ...provided,
    border: "none",
  }),
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#ce1431" }),
};
const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: `#${color}`,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 20,
    width: 20,
    border: "1px dashed #8d99ae99",
  },
});
export const reactSelectColorStyle = {
  control: (base, state) => ({
    ...base,
    // boxShadow: state.isFocused ? "0px 0px 0px 4px rgba(28, 191, 128, 0.3)" : "",
    border: "none",
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
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  input: (styles) => {
    return {
      ...styles,
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#ce1431",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({ ...provided, borderRadius: 5 }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ce1431",
  }),
};

export const reactSelectAdvanceSearchColorStyle = {
  control: (base, state) => ({
    ...base,
    background: "#E4E4E4",
    border: "none",
    borderBottom: "2px solid #000",
    color: "#000",
    height: "48px",
    fontSize: "14px",
    borderRadius: "0",
    top: "0",
    fontFamily: "Open Sans",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#E4E4E4",
      color: "#000",
      cursor: "pointer",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      ...colorBoxForReactSelect(),
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    fontFamily: "Open Sans",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#000",
    fontFamily: "Open Sans",
    ...colorBoxForReactSelect(data?.colorObject?.code),
  }),
  container: (provided) => ({
    ...provided,
    // borderRadius: 220,
    backgroundColor: "#444c5f",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "#F1F1F1",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
  }),
};
export const reactSelectStyleAdvanceSearch = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#f4f4f4",
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "#444c5f",
    border: "2px solid #f4f4f4",
  }),
  input: (styles) => {
    return {
      ...styles,
      color: "red",
      size: "12px",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      zIndex: 500,
    };
  },
  container: (provided) => ({ ...provided, borderRadius: 0 }),
  placeholder: (provided) => ({ ...provided, color: "#f4f4f4" }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: "#f4f4f4",
  }),
};
