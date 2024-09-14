const EformsHeader = ({ title = "", className = "" }) => {
  return (
    <div
      className={`eform_form_header_div__conatiner  pb-3 p-0 m-0 w-100 ${className}`}
    >
      {title}{" "}
    </div>
  );
};

export default EformsHeader;
