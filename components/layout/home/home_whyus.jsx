import { FaCar, FaDollarSign, FaThumbsUp } from "react-icons/fa";
import { FiMapPin, FiBox, FiUsers, FiDollarSign } from "react-icons/fi";

const HomeWhyUs = (props) => {
  const infos = [
    {
      title: "Quality Selection",
      description: "Our diverse inventory caters to every taste and budget.",
      icon: <FiBox color="#e74c3c" size="34px" />,
    },
    {
      title: "Exceptional Service",
      description:
        "Our friendly team is here to assist you in every step of the car-buying process.",
      icon: <FiUsers color="#e74c3c" size="34px" />,
    },
    {
      title: "Local & Trusted",
      description:
        "As part of the community, we're your neighbors and friends, ensuring you get the personalized service you deserve.",
      icon: <FiMapPin color="#e74c3c" size="34px" />,
    },
    {
      title: "Trade-Ins & Financing",
      description:
        "We make trading in your old vehicle and securing financing for your new one simple and hassle-free.",
      icon: <FiDollarSign color="#e74c3c" size="34px" />,
    },
  ];

  return (
    <div
      className="m-0 p-0 py-5 w-100 row justify-content-around align-items-center ba_img_handler-welcome"
      style={{ backgroundColor: "#ca1515" }}
    >
      <div className="col-12 col-sm-3 py-0 pb-3 px-md-3 pb-md-0 d-flex flex-column justify-content-center align-items-center">
        <div>
          <FaThumbsUp color="#fff" size={90} />
        </div>
        <div
          className="text-white text-center pt-3"
          style={{ fontSize: "26px" }}
        >
          <b>
            Complete
            <br />
            Satisfaction
          </b>
        </div>
      </div>
      <div className="col-12 col-sm-3 py-0 pb-3 px-md-3 pb-md-0 d-flex flex-column justify-content-center align-items-center">
        <div>
          <FaCar color="#fff" size={90} />
        </div>
        <div
          className="text-white text-center pt-3"
          style={{ fontSize: "26px" }}
        >
          <b>
            Wide <br />
            Selection
          </b>
        </div>
      </div>
      <div className="col-12 col-sm-3 py-0 pb-3 px-md-3 pb-md-0 d-flex flex-column justify-content-center align-items-center">
        <div>
          <FaDollarSign color="#fff" size={90} />
        </div>
        <div
          className="text-white text-center pt-3"
          style={{ fontSize: "26px" }}
        >
          <b>
            Great <br /> Prices
          </b>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyUs;
