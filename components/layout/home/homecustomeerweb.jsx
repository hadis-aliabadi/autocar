import Slider from "./slider/slider";
import SpecialInventorySlider from "./special-inventory/special_inventory";
import Location from "../directions/location";
import HomeAdvanceSearch from "./home_advance_search";
import HomeWhyUs from "./home_whyus";
import GoogleReviewsHomePage from "./Googlereviews";
import HomeDepartments2 from "./home_departments2";
import AboutUSHome from "./aboutus";
import HomeFinanceCTA from "./home_finance_cta";
import HomeDepartments from "./home_departments";
import HomeWelcome from "./home-components/welcome_home";
import QuickSearchHome from "./quickSearch";
// import WelcomeHome from "./home-components/welcome_home";
// import Googlereviewshomepage from "./Googlereviews";
// import ContactBanner from "./contact_banner";
// import LinkTo from "../../../components/layout/home/link-to/linkto";
// import HomeContactUs from "./home_contact_us";
// import QuickSearchHome from "./quickSearch";
// import HomeBrands from "./home_brands";
// import HomeDepartments from "./home_departments";
// import BodyshopServices from "./bodyshop_services";
// import WelcomeHome from "./home-components/welcome_home";

const HomeCustomeerWeb = (props) => {
  const {
    data,
    vehicleDataForSearch,
    specialData,
    advanceSearchData,
    dealerData,
    domain,
    vehiclesData,
  } = props;
  return (
    <div className="row w-100 p-0 m-0 header-fix">
      <div className="m-0 p-0 col-12 w-100">
        <Slider
          media={data?.data4?.rows}
          dealerData={data?.dealerData}
          vehicleDataForSearch={vehicleDataForSearch}
          advanceSearchData={advanceSearchData}
        />
      </div>
      {/* <div
        class="AskAva-cta"
        data-product="creditTool"
        data-type="banner"
      ></div> */}

      <div className="d-flex justify-content-center col-12 p-0 m-0 home__search-div ">
        <HomeAdvanceSearch
          vehicleDataForSearch={vehicleDataForSearch}
          advanceSearchData={advanceSearchData}
        />
      </div>


      {specialData?.data.length > 0 && (
        <div className="col-12 d-flex p-0 m-0 pb-3 justify-content-center overflos-container-slider background_special-inventory py-0 ">
          <SpecialInventorySlider
            specialCars={specialData?.data}
            dealerData={dealerData}
            title={"Featured Vehicles"}
          />
        </div>
      )}
      <HomeDepartments />
      <HomeWelcome dealerData={data?.dealerData} />
        {/* <AboutUSHome dealerData={data?.dealerData} /> */}
        <QuickSearchHome />

        {/* <HomeFinanceCTA dealerData={dealerData} /> */}
      {/* <HomeWhyUs /> */}
      <div className="col-12 d-flex p-0 m-0 justify-content-center home_fixed_finance_bg py-5 ">
        <GoogleReviewsHomePage />
      </div>

      <Location dealerData={data?.dealerData} type="1" />
    </div>
  );
};

export default HomeCustomeerWeb;
