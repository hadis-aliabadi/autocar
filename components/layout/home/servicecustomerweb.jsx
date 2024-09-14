
import Location from "../directions/location";
import Googlereviewshomepage from "./Googlereviews";

import HomeContactUs from "./home_contact_us";
import BodyshopAbout from "./bodyshop_about";
import BodyshopServices from "./bodyshop_services";
import BosyShopWhyUs from "./bodyshop_whyus";
import BosyShopCta from "./bodyshop_cta";
import ContactBanner from './contact_banner';
const ServiceCustomerWeb = (props) => {
  const {
    data,
    vehicleDataForSearch,
    specialData,
    advanceSearchData,
    dealerData,
    domain,
  } = props;
  return (
    <div className="row w-100 p-0 m-0 header-fix">
      <BodyshopAbout dealerData={data?.dealerData} welcome={props} />
      <BosyShopCta dealerData={data?.dealerData} />
      <ContactBanner
        title={"Book a Service Appointment"}
        subTitle={`We provide a wide range of automotive repair services for your convenience in ${dealerData?.bussiness_name}.`}
        link={"/forms/service-appointment"}
        btnTitle={"BOOK APPOINTMENT"}
      />
      <BodyshopServices dealerData={data?.dealerData} />
      {/* <Slider slider={data?.data4} vehiclesdata={specialData?.data} /> */}
      {/* <Search /> */}
      <BosyShopWhyUs />
      <div className="col-12 d-flex p-0 m-0 justify-content-center overflos-container-slider background_style-googlereview py-5 ">
        <Googlereviewshomepage dealerData={dealerData} />
      </div>

      {/* <HomeAboutUs dealerData={dealerData} /> */}
      {/* <FinanceCta dealerData={dealerData} /> */}
      <HomeContactUs dealerData={dealerData} domain={domain} />

      <Location dealerData={data?.dealerData} type="1" />
    </div>
  );
};

export default ServiceCustomerWeb;
