import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import { FaAngleRight } from "react-icons/fa";

const SpecialInventoryCars = (props) => {
  const {
    item,
    bodyStyleData,
    activeIndex,
    index,
    transmissionData,
    type,
    dealerData,
  } = props;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });
  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(item?.Vehicle?.make),
      model: dashRemoverForSlug(item?.Vehicle?.model),
    }));
  }, []);
  return (
    <>
      <div
        style={{ position: "relative" }}
        className="row d-flex flex-column h-100 p-0 m-0 w-100 header-shadow"
      >
        <div
          className={`home_div__secial_slider w-100
          deactive

        ${
          index == activeIndex + 1
            ? "second"
            : index == activeIndex + 2
            ? "third"
            : index == activeIndex + 3
            ? "fourth"
            : ""
        }
         d-flex flex-column align-items-center jsutify-content-center`}
        >
          {" "}
          <Link
            href={`/cars/used/${item?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.id}`}
          >
            <a className="text-decoration-none w-100 border border-4 border-black">
              <>
                <div
                  className={`1 p-0 w-100 m-0 ${
                    type == "1" ? "" : "home_div__secial_img_container"
                  } `}
                >
                  <img
                    className="222"
                    src={
                      item?.cover_image
                        ? dealerData?.prefixUrl + item?.cover_image
                        : `${dealerData?.prefixUrl}/test/default-inventory-image-car-med.jpeg`
                    }
                    width="100%"
                    loading="lazy"
                  />
                  
                  <div
                    style={{ minHeight: "125px" }}
                    className={`p-0 m-0 w-100 row  deactive_car_info ${
                      type == "1" ? "" : "home_div__secial_img_container"
                    } `}
                  >
                    <a
                      style={{ minHeight: "125px" }}
                      className={`p-0 h-100 m-0 w-100 px-3 justify-content-between align-items-start py-3 w-100 text-center d-flex flex-column  ${
                        type == 1 ? "" : "car_name"
                      }  `}
                    >
                      <p
                        className="col-12 p-0 style-special-title   "
                        style={{
                          color: "#000",
                          fontWeight: "700",
                          fontSize: "14px",
                          textAlign: "center",
                          letterSpacing: "1px",
                        }}
                      >
                        {item?.Vehicle?.model_year}&nbsp;
                        {item?.Vehicle?.make}&nbsp;
                        {item?.Vehicle?.model} -{" "}
                        <small>{item?.Vehicle?.body_style}</small>
                      </p>
                      <p
                        className="col-12 p-0 border-bottom border-gray "
                        style={{
                          color: "#000",
                          fontWeight: "400",
                          fontSize: "16px",
                          textAlign: "left",
                        }}
                      ></p>

                      <p className="mx-auto fw-bold">
                        {!item?.vehicle_site_detail?.call_for_price ? (
                          <>
                            {item?.special_price ? (
                              <small
                                style={{
                                  color: "red",
                                  textDecoration: "line-through",
                                }}
                              >
                                ${priceComma(item?.sell_price, 2)}
                              </small>
                            ) : (
                              <>
                                <small>Price</small>
                                <br></br>${priceComma(item?.sell_price, 2)}
                              </>
                            )}
                            {item?.special_price !== 0 && (
                              <>
                                <br></br>${priceComma(item?.special_price, 2)}
                              </>
                            )}
                          </>
                        ) : (
                          <>Call For Price</>
                        )}
                      </p>
                    </a>
                  </div>
                </div>
              </>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SpecialInventoryCars;
