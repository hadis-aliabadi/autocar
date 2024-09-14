import { FaArrowCircleRight, FaChevronDown } from "react-icons/fa";

const AccordianToggleStandard = (props) => {
  const { children, onClick, className } = props;
  return (
    <div
      onClick={onClick}
      className="d-flex justify-content-between align-items-end w-100 p-0 m-0"
      style={{ cursor: "pointer" }}
    >
      <p
        className="p-0 m-0"
        style={{
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        {children}
      </p>
      <div
        className="p-0 m-0 d-flex align-items-center justify-content-center mb-2"
        style={{
          width: "35px",
          height: "35px",
          fontSize: "24px",
          color: "#000",
          // border: "2px solid #aaaaaa",
          // borderRadius: "50%",
        }}
      >
        <i className={`p-0 m-0 w-100 ${className}`}>
          +{/* <FaChevronDown /> */}
        </i>
      </div>
    </div>
  );
};

export default AccordianToggleStandard;
