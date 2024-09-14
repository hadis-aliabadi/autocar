import Link from "next/link";
import { useState } from "react";
import {
  FaArrowRight,
  FaCarAlt,
  FaDollarSign,
  FaExchangeAlt,
} from "react-icons/fa";

const BodyshopAbout = (props) => {
  const { dealerData } = props;
  const [seeMore, setSeeMore] = useState(false);
  const welcomeLinks = [
    {
      title: "Oil Change",
      description:
        "Keep your engine running smoothly with our efficient oil change service.",
      link: "/forms/service-appointment",
      icon: <FaDollarSign size={35} className="mr-4" />,
    },
    {
      title: "Scan & Diagnosis",
      description:
        "Our advanced diagnostic services help identify and resolve issues quickly.",
      link: "/forms/service-appointment",
      icon: <FaExchangeAlt size={35} className="mr-4" />,
    },
    {
      title: "Brakes",
      description:
        "Ensure your safety on the road with our expert brake inspection and repair.",
      link: "/forms/service-appointment",
      icon: <FaCarAlt size={35} className="mr-4" />,
    },
  ];
  return (
    <div
      className="p-0 m-0 col-12 welcomto_div_container"
      style={{
        backgroundImage: `url(/images/bodyshop/pbxmotors-service.webp)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-welcome"></div>
      <div className="p-0 m-0 row w-100 justify-content-center align-items-end pt-sm-5 py-md-5">
        <div className="p-4 m-0 col-12 col-sm-10 d-flex justify-content-between flex-wrap  col-lg-11 welcome_to_div_content_container ">
          <h1 className="p-0 text-white m-0 mb-4 text-uppercase text-center py-3 col-12 home_welcome_title">
            <strong>
              {" "}
              WELCOME TO{" "}
              {dealerData?.dba
                ? dealerData?.dba
                : dealerData?.bussiness_name}{" "}
            </strong>
          </h1>
          <div className="p-0 m-0 col-lg-6 justify-content-start">
            <div className="row m-0 p-0 w-100">
              <div className="p-0 m-0 text-white  mb-3 ">
                <h3>Complete Automotive Repair Service in Brampton</h3>

                {/* <h3>PBX Auto Repair - Brampton, ON</h3> */}

                <p>
                  <strong>Phone:</strong>
                  <a href="tel:9054973100"> (905) 497 3100</a>
                </p>

                <p>
                  At <strong>Auto Runner</strong>, you and your confidence are
                  the most important piece of the puzzle. We provide a wide
                  range of automotive repair services for your convenience. And
                  remember, we want to keep you in our loyal customer family
                  happy. If you don’t see the service you’re looking for, just
                  ask!
                </p>

                <p>
                  <strong>Location:</strong> Complete auto repair service at
                  <a href="https://www.google.com/maps/place/Carzup+Auto+Sales/@43.3353217,-79.8193238,15.28z/data=!4m6!3m5!1s0x882c9f9cf2a2578f:0x407ddcff57ed3db1!8m2!3d43.3353659!4d-79.8192554!16s%2Fg%2F11tw_yjdm5?entry=ttu">
                    200 Essa Rd, unit#3, BARRIE, Ontario, L4N 3L1
                  </a>
                  .
                </p>
              </div>
              {/* <div className="p-0 my-4 m-0 row justify-content-start w-100">
                <Link href="/about-us">
                  <a className="p-0 cardMoto_button_compare m-0 py-2 px-3">
                    Learn More
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#212020",
              borderRight: "5px solid #e74c3c",
            }}
            className="p-0 m-0 col-lg-5 justify-content-start "
          >
            {welcomeLinks.map((link, index) => (
              <Link href={link.link} key={index}>
                <a>
                  <div className="col-12 py-3 pl-4 pr-5 p-0 m-0 d-flex align-items-center justify-content-start welcome_link_hover">
                    <span className="d-flex justify-content-center align-items-center p-0 m-0">
                      {link.icon}
                    </span>
                    <span className="p-0 m-0 welcome_text_link">
                      <h5>{link.title}</h5>
                      <p>{link.description}</p>
                    </span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyshopAbout;
