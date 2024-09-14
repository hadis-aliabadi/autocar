import { useRouter } from "next/router";

const EFormsHeaderSection = ({
  title = "",
  desc = false,
  image = "",
  showImage = true,
  className = "",
  imagePosition = "center",
  domain,
}) => {
  const router = useRouter();

  return (
    <div
      className={`p-0 m-0 py-0 w-100 row h-100 d-flex flex-wrap justify-content-center align-items-center ${className}`}
    >
      <div className="p-0 m-0 d-flex col-12  flex-column align-items-start justify-content-start eform_text_pos"></div>
    </div>
  );
};

export default EFormsHeaderSection;
