import Link from "next/link";

import {
  FaDollarSign,
  FaCarAlt,
  FaRegCalendarAlt,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaCar,
} from "react-icons/fa";

const LinkTo = (props) => {
  const { dealerData } = props;
  const iconsStyles = {
    color: "#fff",
    width: "40px",
    height: "40px",
  };
  const items = [
    {
      route: "/cars",
      src: "/images/home/department/department (1).webp",
      title: "Used Inventory",
      content: "Find your dream car.",
      buttonText: "View Inventory",
      iconComponent: <FaCarAlt style={iconsStyles} />,
    },
    {
      route: "/forms/value-your-trade",
      src: "/images/home/department/department (2).webp",
      title: "Trade-in Estimate",
      content: "Shop with confidence.",
      buttonText: "Apprise My Trade",
      iconComponent: <FaDollarSign style={iconsStyles} />,
    },
    {
      route: "/forms/test-drive",
      src: "/images/home/department/department (3).webp",
      title: "Book a test drive",
      content: "Book your test drive now!",
      buttonText: "Test Drive",
      iconComponent: <FaRegCalendarAlt style={iconsStyles} />,
    },
    {
      route: "/forms/finance",
      src: "/images/home/department/department (4).webp",
      title: "Finance Made Easy",
      content: "Your road to car ownership.",
      buttonText: "Finance Application",
      iconComponent: <FaMoneyBillWave style={iconsStyles} />,
    },
  ];

  return (
    <>
      <div className="p-0 m-0 row w-100">
      <div className="p-0 m-0 col-12 col-md-4 px-sm-2 py-2 py-lg-0">
        <Link href="/cars">
          <a className="p-0 m-0 col-12 scale_hover_sistem h-100">
            <div
              className="p-0 m-0 w-100 h-100 d-flex flex-column"
              style={{ position: "relative" }}
            >
              <div className="p-0 m-0 w-100 h-100 home_category_img_bg_layer">
                <img
                  style={{ objectFit: "cover" }}
                  className="w-100 h-100"
                  src={`/images/home/departments/home-inventory.webp`}
                  alt=""
                />
              </div>
              <div className="p-0 m-0 py-1 text-center home-category_title d-flex flex-column justify-content-around">
                <i className="p-0 m-0 ">
                  <FaCar color="#fff" size="50" />
                </i>
                <span className="p-0 m-0">
                  FIND YOUR DREAM CAR AT A COMPETITIVE PRICE.
                </span>
                <div className=" m-0">VIEW INVENTORY</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 col-12 px-sm-2 py-2 py-lg-0 col-md-4" style={{ overflow: "hidden" }}>
        <div className="p-0 m-0 w-100 row h-100">
          <Link href="/forms/finance">
            <a className="p-0 m-0 col-12 scale_hover_sistem h-100">
              <div
                className="p-0 m-0 w-100 h-100 d-flex flex-column"
                style={{ position: "relative" }}
              >
                <div className="p-0 m-0 w-100 h-100 home_category_img_bg_layer">
                  <img
                    style={{ objectFit: "cover" }}
                    className="w-100 h-100"
                    src={`/images/home/departments/Home-finance.webp`}
                    alt=""
                  />
                </div>
                <div className="p-0 m-0 py-1 text-center home-category_title d-flex flex-column justify-content-around">
                  <i className="p-0 m-0 ">
                    <FaDollarSign color="#fff" size="50" />
                  </i>
                  <span className="p-0 m-0">
                    BE PREPARED AND SHOP WITH CONFIDENCE.
                  </span>
                  <div className="px-0 m-0">APPLY FOR FINANCING</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="p-0 m-0 col-12 col-md-4 px-sm-2 py-2 py-lg-0">
        <Link href="/forms/contact-us">
          <a className="p-0 m-0 col-12 scale_hover_sistem h-100">
            <div
              className="p-0 m-0 w-100 h-100 d-flex flex-column"
              style={{ position: "relative" }}
            >
              <div className="p-0 m-0 w-100 h-100 home_category_img_bg_layer">
                <img
                  style={{ objectFit: "cover" }}
                  className="w-100 h-100"
                  src={`/images/home/departments/Home-Contact.webp`}
                  alt=""
                />
              </div>
              <div className="p-0 m-0 py-1 text-center home-category_title d-flex flex-column justify-content-around">
                <i className="p-0 m-0 ">
                  <FaExchangeAlt color="#fff" size="50" />
                </i>
                <span className="p-0 m-0">
                  TRADE-IN YOUR VEHICLE FOR A NEW ONE.
                </span>
                <div className=" m-0">CONTACT US</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>

    </>
  
  );
};

export default LinkTo;
