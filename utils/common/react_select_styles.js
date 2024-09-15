import { RxLetterSpacing } from "react-icons/rx";

export const colorBoxForReactSelect = (color = "#000") => ({
  alignItems: "center",
  display: "flex",
});
export const reactSelectInputStyle = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
    fontSize: "14px",
    borderRadius: "0px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#333",
    border: "none",
    right: "100px",
    borderRadius: "0px",
    fontSize: "14px",
  }),
  control: (base, state) => ({
    ...base,
    background: "#fff",
    border: "1px solid #ccc",
    color: "#333",
    height: "34px",
    fontSize: "14px",
    borderRadius: "5px",
    top: "0",
    fontFamily: "Open Sans",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#fff",
      color: "#333",
      cursor: "pointer",
      fontFamily: "Open Sans",
      borderRadius: "0px",

      zIndex: 1000,
      fontSize: "14px",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#333",
      border: "none",
      fontSize: "14px",
      borderRadius: "0px",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 500,
      fontSize: "14px",
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      fontSize: "14px",
      borderRadius: "0px",

      zIndex: 500,
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#333",
    fontSize: "12px",
    border: "none",
    fontFamily: "Open Sans",
    fontWeight: "600",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#333",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "14px",
    fontFamily: "Open Sans",
    borderRadius: "0px",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderRadius: "0",
    border: "none",
    outLine: "0",
    boxShadow: "0",
    borderRadius: "5px",
  }),
};
export const reactSelectInputStyle_1 = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
    fontSize: "14px",
    borderRadius: "0px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    border: "none",
    right: "100px",
    borderRadius: "0px",
    fontSize: "14px",
    zIndex: "1",
  }),
  control: (base, state) => ({
    ...base,
    background: "#fff",
    border: "none",
    color: "#000",
    height: "40px",
    fontSize: "14px",
    borderRadius: "5px",
    top: "0",
    fontFamily: "Open Sans",
    zIndex: "1",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#fff",
      color: "#000",
      cursor: "pointer",
      fontFamily: "Open Sans",
      borderRadius: "0px",
      fontSize: "14px",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
      fontSize: "14px",
      borderRadius: "0px",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: "1100",
      fontSize: "14px",
      border: "none",
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      fontSize: "14px",
      borderRadius: "0px",
      border: "none",
      zIndex: "1100",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    fontSize: "14px",
    border: "none",
    fontWeight: "400",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "14px",
    fontFamily: "Open Sans",
    borderRadius: "0px",
    border: "none",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderRadius: "none",
    border: "none",
    outLine: "0",
    boxShadow: "0",
    borderRadius: "5px",
  }),
};
export const reactSelectAdvanceSearchInputStyleCarDeatail = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",

    backgroundColor: "#fff",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    right: "100px",
    outLine: "none",
    backgroundColor: "#f6f6f6 !important",
    "&:hover": {
      color: "#000",
    },
  }),

  control: (base, state) => ({
    ...base,
    backgroundColor: "#f6f6f6 !important",
    borderRadius: "1px solid #000",
    color: "#000",
    height: "36px",
    fontSize: "14px",
    // borderRadius: "5px",
    // top: "50%",
    // transform: "translateY(-50%)",
    // WebkitBoxShadow: "1px 1px 5px 1px #222222",
    // boxShadow: "1px 1px 5px 1px #222222",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#fff",
      color: "#000",
      cursor: "pointer",
      border: "none",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
      fontSize: "14px",
      backgroundColor: "#fff !important",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    border: "none",
    backgroundColor: "#f6f6f6 !important",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: "none",
    backgroundColor: "#fff",
  }),
  menu: (provided) => ({ ...provided, zIndex: "15", backgroundColor: "#fff" }),
  container: (provided) => ({
    ...provided,
    border: "none",
    backgroundColor: "#fff",
  }),
};
export const reactSelectInputStyleForm = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#868D9D",
    border: "none",
    right: "100px",
  }),
  control: (base, state) => ({
    ...base,
    background: "#E4E4E4",
    border: "none",
    borderBottom: "2px solid #0d65bf",
    color: "#000",
    height: "38px",
    fontSize: "14px",
    borderRadius: "0",
    top: "0",
    fontFamily: "Open Sans",

    //transform: "translateY(-50%)",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#E4E4E4",
      color: "#000",
      cursor: "pointer",
      zIndex: 1000,
      fontFamily: "Open Sans",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      zIndex: 500,
      fontFamily: "Open Sans",
    };
  },
  menuList: (styles) => {
    return {
      ...styles,
      zIndex: 500,
      fontFamily: "Open Sans",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    border: "none",
    fontFamily: "Open Sans",
    fontSize: "12px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontFamily: "Open Sans",
    fontSize: "14px",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderRadius: 5,
    border: "none",
    outLine: "0",
    boxShadow: "0",
  }),
};

export const reactSelectInputStyles11 = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
    border: "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#555",
    border: "none",
    right: "100px",
  }),
  menu: (base, state) => ({
    ...base,
    zIndex: "5000",
    fontSize: "14px",
  }),

  control: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    border: "1px solid $gray-color",
    color: "#000",
    height: "34px",
    minHeight: "34px",
    borderRadius: "0px",
    fontSize: "14px",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "trasparent",
      color: "#000",
      cursor: "pointer",
      fontSize: "14px",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
      fontSize: "14px",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#555",
    border: "none",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontSize: "14px",
  }),
  container: (provided) => ({ ...provided, border: "none" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    borderRadius: 5,
    border: "none",
    outLine: "0",
    boxShadow: "0",
  }),
};

export const reactSelectInputStyleHome = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",

    backgroundColor: "transparent",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#000",
    right: "100px",
    outLine: "none",
    backgroundColor: "transparent",

    "&:hover": {
      color: "#000",
    },
  }),

  control: (base, state) => ({
    ...base,
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "#fff",
    border: "none !important",
    fontSize: "14px",
    borderRadius: "5px",
    // top: "50%",
    // transform: "translateY(-50%)",
    // WebkitBoxShadow: "1px 1px 5px 1px #222222",
    // boxShadow: "1px 1px 5px 1px #222222",
  }),
  option: (style, { data, isSelected }) => {
    return {
      ...style,
      // ...colorBoxForReactSelect(data?.colorObject?.code),
      backgroundColor: "#fff",
      color: "#000",
      cursor: "pointer",
      fontSize: "14px",
      border: "none",
    };
  },
  input: (styles) => {
    return {
      ...styles,
      color: "#000",
      border: "none",
      fontSize: "16px",
      backgroundColor: "transparent",
    };
  },
  placeholder: (styles) => ({
    ...styles,
    ...colorBoxForReactSelect(),
    color: "#000",
    border: "none",
    backgroundColor: "transparent",
    fontWeight:"600",
    letterSpacing:"0",
    fontSize:"15px"
  }),
  IndicatorsContainer: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    color: "#000",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  }),
  indicatorContainer: (styles) => ({
    ...styles,

    backgroundColor: "transparent",
    color: "#000",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...colorBoxForReactSelect(data?.colorObject?.code),
    color: "#000",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    border: "none",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: "16",
    backgroundColor: "#F8F9FA",
  }),

  container: (provided) => ({
    ...provided,
    bottom: "0",

    background: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.16)",
    height: "50px",
    padding: "3px 0",
    borderRadius: "3px !important",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    // borderBottom: "2px solid #b22222",
  }),
};
