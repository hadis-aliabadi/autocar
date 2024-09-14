import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import EformsTimeWork from "./eforms_time_work";
import Link from "next/link";
import { phonenumberConvertor } from "../../../../utils/common/phone_number_converter";
import { useRouter } from "next/router";

const EformsConatctInfo = (props) => {
  const { dealerData } = props;
  const router = useRouter();
  return (
    <div
      className="p-4  pt-0 m-0 mb-4 w-100 eform_contact_container "
      style={{
        boxShadow: "0 0 3.6rem rgba(0, 0, 0, 0.10)",
      }}
    >
      <h3 className="contact_info_title2 my-3">Contact Information</h3>

      <span className="contact-e-title"> Location 1: </span>

      <p className="p-0 m-0 my-2">
        <FaPhoneAlt color="#000" className="" />
        <a
          href={phonenumberConvertor(dealerData?.business_phone)}
          className="p-0 m-0 text-decoration-none contact_info"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <span className="contact-e-title"> Phone:</span>
          <span className="contact-e-phone mx-1">
            {dealerData?.business_phone}
          </span>
        </a>
      </p>
      <p className="p-0 m-0 contact_info my-3">
        <div className="d-flex flex-row align-items-center ">
          <FaMapMarker />
          <span className="contact-e-title ">Address:</span>
        </div>
        {dealerData?.business_street}
        {", "}
        {dealerData?.business_city?.city}
        {", "}
        {dealerData?.business_city?.Province?.province === "British Columbia"
          ? "BC"
          : dealerData?.business_city?.Province?.province}
        {", "}
        {dealerData?.business_postal}
      </p>
      <span className="contact-e-title"> Location 2: </span>

      {dealerData?.business_phone2 ? (
        <p className="p-0 m-0 my-2">
          <FaPhoneAlt color="#000" className="" />
          <a
            href={phonenumberConvertor(dealerData?.business_phone2)}
            className="p-0 m-0 text-decoration-none contact_info"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
          >
            <span className="contact-e-title"> Phone: </span>
            <span className="contact-e-phone mx-1">
              {dealerData?.business_phone2}
            </span>
          </a>
        </p>
      ) : null}

     
      <p className="p-0 m-0 contact_info my-3">
        <div className="d-flex flex-row align-items-center ">
          <FaMapMarker />
          <span className="contact-e-title ">Address:</span>
        </div>
        {dealerData?.business_caption}
      </p>
      <div className="w-100 p-0 m-0 my-3">
        <EformsTimeWork timework={dealerData?.timeWork} />
      </div>
      {router.pathname !== "/directions" && (
        <div className="w-100 p-0 m-0 ">
          <Link href="/directions">
            <a className=" p-0 pt-3 col-8 col-md-4 col-lg-8 d-flex align-items-center justify-content-start">
              <p className="blue_button_3 px-2 py-1"> Get Directions</p>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default EformsConatctInfo;
