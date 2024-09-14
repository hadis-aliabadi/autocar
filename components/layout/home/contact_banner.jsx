import Link from "next/link";

const ContactBanner = ({ title, subTitle, link, btnTitle, rtl = false }) => {
  return (
    <>
      <div
        className="p-0 m-0 px-2 px-lg-3 py-4 w-100  direction_title  row justify-content-lg-end align-items-center"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div
          className={`col-xl-11 col-lg-12  p-0 m-0 mx-auto px-3 text-center text-md-left d-flex flex-column justify-content-center justify-content-md-between align-items-center text-uppercase ${
            rtl ? "flex-md-row-reverse" : "flex-md-row"
          } `}
        >
          <p
            className={`${rtl ? "text-md-right" : ""} banner-text`}
            style={{ lineHeight: "1" }}
          >
            {title}
            <br></br>
            <small>{subTitle}</small>
          </p>
          <Link href={link}>
            <a
              className=" text-nowrap py-1  blue_button_3 px-5 px-xl-3 d-flex align-items-center justify-content-center mt-4 mt-md-0 ml-0 ml-md-4 "
              style={{ fontWeight: "normal" }}
            >
              {btnTitle}{" "}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
