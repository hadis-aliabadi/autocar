import Link from "next/link";
import { useState } from "react";
import Category_title from "../../common/layout/header/category_title";

const HomeFinanceCTA = (props) => {
  const { dealerData } = props;
  const [seeMore, setSeeMore] = useState(false);
  const financeCTAImages = [
    "td.png",
    "nationalbank.png",
    "edenpark.png",
    "desjardins.png",
  ];
  return (
    <div
      className="col-12 py-5 row m-0 component_container"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="p-0 m-0 px-md-3 col-12 col-md-8 d-flex flex-column justify-content-center justify-content-md-center align-items-lg-start align-items-center">
        <Category_title title={"Used Car Financing in Mississauga, Ontario"} />
        <p className="py-4" style={{ color: "#333",  lineHeight: "27px", fontSize:'13px' }}>
          At {dealerData?.bussiness_name}, we specialize in helping individuals that
          are having an exceptionally difficult time getting approved at other
          dealerships for various reasons such as Bad Credit, Bankruptcy,
          Repossessions, Self Employed, New to Canada, etc. Our customers leave
          with the satisfaction of knowing that they can now rebuild their
          credit or begin building their credit with their quality pre-owned car
          from {dealerData?.bussiness_name}.
        </p>
        <Link href="/forms/finance">
          <a className="w-100">
            <button className="btn w-100 home_inevntpry_search_button__search ">
              {" "}
              Apply Now
            </button>
          </a>
        </Link>
      </div>
      <div className="col-12 col-md-4 m-0 pt-5 pt-md-0">
        <img src={"/images/home/car-keys.png"} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default HomeFinanceCTA;
