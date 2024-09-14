import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
// import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import {
  FaTachometerAlt,
} from "react-icons/fa";
const EachSpecialInHomePage = (props) => {
  const { vehicle, dealerData } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(vehicle?.Vehicle?.make),
      model: dashRemoverForSlug(vehicle?.Vehicle?.model),
    }));
  }, []);
  return (
    <Link
      href={`/cars/used/${vehicle?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${vehicle?.id}`}
    >
      <a className="p-0 mx-2 m-0 w-100 h-100" style={{ background: "#FFFFFF" }}>
        <div className="p-0 m-0 w-100 ">
          <div
            style={{ boxShadow: "0 5px 18px rgba(0,0,0,.18)" }}
            className="p-0 m-0 d-flex flex-column align-items-center "
          >
            <div className="p-0 m-0 w-100">
              <img
                src={`${dealerData?.prefixUrl}${vehicle?.cover_image}`}
                alt=""
                className="p-0 m-0 home_special_vehicle_img-style"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                  maxHeight: "200px",
                  minHeight: "150px",
                }}
              />
            </div>
            <div className="p-0 px-2 m-0 pt-3 row justify-content-start style-special-title align-items-start">
              <p className="text-center">
                {vehicle?.Vehicle?.model_year +
                  " " +
                  vehicle?.Vehicle?.make +
                  " " +
                  vehicle?.Vehicle?.model}
              </p>
            </div>
            <div className="p-0 px-2 py-2 pb-4 m-0 row flex-column w-100 justify-content-center align-items-center">
              <p style={{ fontWeight: "700", color: "#000", fontSize: "14px" }}>
                ${priceComma(vehicle?.sell_price, 2)}
              </p>
              <p className="pt-2" style={{ color: "#000", fontSize: "14px" }}>
                <FaTachometerAlt /> {priceComma(vehicle?.odometer, 2)}{" "}
                {vehicle?.odometer_type === 1 ? "Mile" : "Km"}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default EachSpecialInHomePage;
