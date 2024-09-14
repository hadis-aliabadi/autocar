import { FaWrench, FaTools, FaShieldAlt, FaUserCheck } from "react-icons/fa";
const WhyChooseUsData = [
  {
    icon: <FaWrench color="#fff" size="34px" />,
    title: "Expert Repairs",
    description:
      "Our skilled technicians provide expert repairs, ensuring your vehicle is in top-notch condition. From routine maintenance to complex repairs, we've got you covered.",
  },
  {
    icon: <FaTools color="#fff" size="34px" />,
    title: "State-of-the-Art Equipment",
    description:
      "Equipped with state-of-the-art tools and diagnostic equipment, we leverage the latest technology to diagnose and address issues with precision and efficiency.",
  },
  {
    icon: <FaShieldAlt color="#fff" size="34px" />,
    title: "Quality Assurance",
    description:
      "We stand behind the quality of our work. Our repairs come with a satisfaction guarantee, ensuring you leave our shop with a car that meets or exceeds your expectations.",
  },
  {
    icon: <FaUserCheck color="#fff" size="34px" />,
    title: "Customer Satisfaction",
    description:
      "Dedicated to customer satisfaction, our friendly staff is committed to providing excellent service. Your trust is our priority, and we strive to exceed your repair shop expectations.",
  },
];

const BodyShopWhyUs = () => {
  return (
    <div className="row p-0 m-0 w-100 px-md-0 justify-content-center py-4 home_minivans_caontainer d-flex " style={{ background: "#212121" }}>
      <div className="p-0 m-0 text-uppercase pt-5 pb-4 special-title text-white font-weight-bold" style={{ fontWeight: "bold" }}>
        WHY <span className="p-0 m-0 text-white">CHOOSE</span> US
      </div>
      <div className="p-0 m-0 p-md-4 col-12 col-xl-11 d-flex justify-content-center align-items-center">
        <div className="p-0 m-0 row w-100">
          {WhyChooseUsData.map((item, index) => (
            <div key={index} className="p-2 py-lg-0 m-0 col-12 col-sm-6 col-lg-6 col-xl-3 mb-3 d-flex align-items-start">
              <div className="d-flex justify-content-center align-items-start icon_style">{item.icon}</div>
              <div className="px-3 why_choose_us_bg p-0 m-0 d-flex flex-column justify-content-start align-items-start why_choose_us_bg h-100">
                <div className="p-0 m-0 pb-2 about_title">{item.title}</div>
                <div className="p-0 m-0 about_text text-start">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyShopWhyUs;
