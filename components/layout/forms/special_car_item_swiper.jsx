import { useEffect, useState } from "react";
import Link from "next/link";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
export const SpecialCarItemSwiper = (props) => {
  const { car  , dealerData} = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(car?.Vehicle?.make),
      model: dashRemoverForSlug(car?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      key={`specialVehicle${car?.id}`}
      href={`/cars/used/${car?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${car?.id}`}
    >
      <a className="px-1 px-md-4 py-2 m-0 mb-0 mb-lg-3 col-12 text-decoration-none">
        <div className="p-0 m-0 row w-100" style={{ backgroundColor: "#fff" }}>
          <div className="p-0 m-0 col-12 d-flex align-items-center justify-content-center special_cars_img__container_swiper">
            {car?.cover_image !== null ? (
              <img
                className=""
                src={`${dealerData?.prefixUrl}${car?.cover_image}`}
              />
            ) : (
              <img
                className=""
                src={`${dealerData?.prefixUrl}/test/default-inventory-image-car-med.jpeg`}
              />
            )}
          </div>
          <div className="p-0 m-0 col-12 w-100 d-flex flex-column justify-content-start align-items-start">
            <div
              className="p-0 m-0 row justify-content-center align-items-center"
              style={{ height: "80px" }}
            >
              {" "}
              <div className="p-0 px-2 special_cars_detail_div__style text-start">
                {car?.Vehicle?.model_year +
                  " " +
                  car?.Vehicle?.make +
                  " " +
                  car?.Vehicle?.model +
                  " " +
                  car?.Vehicle?.make}
              </div>
            </div>
            <div className="p-0 m-0 row justify-content-between align-items-center">
              <div className="px-2 p-0 m-0 my-3 special_cars_detail_price__style">
                <span>{"Price: $" + priceComma(car?.special_price, 2)}</span>
              </div>
              <div className="px-2 p-0 m-0 special_cars_detail_km__style">
                <span>
                  {"Odometer: "}
                  {priceComma(car?.odometer, 2)}{" "}
                  {car?.odometer_type === 1 ? "Mi" : "Km"}
                </span>
              </div>
              <div className="btn red_button w-100">View Details</div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default SpecialCarItemSwiper;
