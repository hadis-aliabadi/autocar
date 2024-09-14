import React from "react";
import Link from "next/link";
import { findScript } from "../../../utils/common/html_script";

const HomeWelcome_7 = (props) => {
  const { dealerData } = props;
  return (
    <>
      <div className="p-0 m-0 row w-100">
        <Link href="/forms/finance">
          <a
            className="col-12 col-lg-6 p-0 m-0 home-cat-sec-1"
            style={{ cursor: "pointer" }}
          >
            <div className="2 row w-100 m-0 p-0">
              <div className="col-6 m-0 p-0">
                <img className="w-100" src="/images/Ford.webp" />
              </div>
              <div className="col-6 d-flex align-items-start justify-content-center flex-column px-1">
                <p className="home-cat-title  mb-2">
                  Apply For Financing
                </p>
                <p className="home-cat-desc ">Get Approved Today</p>
              </div>
            </div>
          </a>
        </Link>

        <Link href="/forms/value-your-trade">
          <a
            className="col-12 col-lg-6 p-0 m-0 home-cat-sec-2"
            style={{ cursor: "pointer" }}
          >
            <div className="4 row w-100 m-0 p-0 h-100">
              <div className="col-6 d-flex align-items-start justify-content-center flex-column px-3 pl-lg-3">
                <p className="home-cat-title  mb-2">
                  Trade Your Car
                </p>
                <p className="home-cat-desc ">Appraise My Trade</p>
              </div>
              <div className="col-6 m-0 p-0 text-right">
                <img className="w-100" src="/images/jeep.webp" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeWelcome_7;
