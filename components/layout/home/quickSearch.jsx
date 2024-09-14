import React from "react";
import Link from "next/link";

const QuickSearchHome = () => {
  const bodyStyleData = [
    {
      label: "SUV",
      link: "/cars?Bodystyle=Suv",
      imageSrc: "/images/home/body-style/suv.webp",
    },
    {
      label: "Pickup",
      link: "/cars?Bodystyle=Pickup",
      imageSrc: "/images/home/body-style/pickup.webp",
    },
    {
      label: "Sedan",
      link: "/cars?Bodystyle=Sedan",
      imageSrc: "/images/home/body-style/sedan.webp",
    },
    {
      label: "Minivan/Van",
      link: "/cars?Bodystyle=VAN",
      imageSrc: "/images/home/body-style/van.webp",
    },
    {
      label: "Hatchback",
      link: "/cars?Bodystyle=Hatchback",
      imageSrc: "/images/home/body-style/HATCHBACK.webp",
    },
    
    {
      label: "Convertible",
      link: "/cars?Bodystyle=Convertible",
      imageSrc: "/images/home/body-style/convertible.webp",
    },
    {
      label: "Coupe",
      link: "/cars?Bodystyle=Coupe",
      imageSrc: "/images/home/body-style/coupe.webp",
    },
    
    
    
    {
      label: "Wagon",
      link: "/cars?Bodystyle=Wagon",
      imageSrc: "/images/home/body-style/wagon.webp",
    },
  ];

  return (
    <>
      <div className="px-0 px-2 px-lg-5 m-0 col-12 col-md-12 py-3  home_fixed_finance_bg home_fixed_finance_bg--quick-search">
        {/* <div className="bg-dark-category bg-dark-category--slider"></div> */}

        <div
          className="p-0 m-0 w-100 row justify-content-center align-items-center py-4 position-relative"
          style={{ zIndex: "10" }}
        >
          <div className="p-0  m-0 text-center mx-auto py-3 pt-lg-5">
            <h2 className="special-title text-uppercase">
              {" "}
              QUICK SEARCH BY BODY TYPE
              
            </h2>
            <div className="short"></div>
          </div>
          <div className="p-0 pb-5 m-0 col-12 d-flex justify-content-center">
            <div className="p-0 m-0 col-lg-8 col-12 row justify-content-center align-items-center">
              {bodyStyleData.map((item, index) => (
                <div
                  key={index}
                  className="p-2 m-0 col-8 col-sm-6 col-md-3 p-3 mb-4 text-center text-uppercase"
                >
                  <Link href={item.link}>
                    <a className="p-0 m-0 scale_hover_sistem">
                      <img className="w-75" src={item.imageSrc} alt="" />
                      <div className="p-0 m-0 pt-2 w-100 text-center " style={{ fontSize:"17px",fontWeight:700,color:"white"}}>
                        {item.label}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickSearchHome;
