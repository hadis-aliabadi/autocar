import React from "react";
const CategoryTitle = ({ title, type = 1, className = "" }) => {
  return (
    <h4
      className={`p-0 m-0 ${className} category_title_h4__container_home d-flex flex-nowrap flex-row justify-content-center align-items-center`}
      // style={{ whiteSpace: "nowrap" }}
    >
      {title}{" "}
     
   
    </h4>
  );
};
export default React.memo(CategoryTitle);
