import React, { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../../../utils/common/dash_remover";
import { priceComma } from "../../../../utils/common/price_odometer_handler";

export default function SearchResultLink({
  vehicle,
  handleSelectVehicle,
  formik,
  setSearchResult,
  setSearchKeywordes,
  dealerData,
  isModal = false,
}) {
  //   const vehicleName = vehicle.name.split(" ");

  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });

  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(vehicle?.make),
      model: dashRemoverForSlug(vehicle?.model),
    }));
  }, []);
  return (
    <>
      <a
        key={vehicle?.id}
        className=" row w-100 d-flex flex-wrap align-items-center justify-content-center "
        href={`/cars/used/${vehicle.model_year}-${makeSlug?.make}-${makeSlug?.model}-${vehicle?.id}`}
      >
        <div className="p-0 m-0 py-2 col-4">
          <div className="row p-0 m-0 w-100 justify-content-center">
            <div
              className="rounded-circle p-1"
              style={{ border: "1px solid #e74c3c " }}
            >
              <img
                src={`${dealerData.prefixUrl}${vehicle.media_src}`}
                alt=""
                className="rounded-circle "
                style={{
                  height: isModal ? "60px" : "70px",
                  width: isModal ? "60px" : "70px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-8 p-0 m-0">
          <a
            className="p-0 px-2 m-0 mb-1 col-12"
            onClick={() => {
              // setSearchResult(null);
              setSearchKeywordes("");
              setSearchResult;
              handleSelectVehicle(vehicle?.id, vehicle?.name);
            }}
          >
            <div
              className="p-0 m-0 d-flex flex-column align-items-start justify-content-start"
              style={{ cursor: "pointer" }}
            >
              <span
                className="mx-2 d-block  a-style w-100 "
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#e74c3c ",
                }}
              >
                {vehicle?.model_year} {vehicle?.make} {vehicle?.model}
              </span>
              <span
                className="d-flex felx-wrap mx-2    w-100"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#898989",
                }}
              >
                <p>Odometer:</p>
                <p>{vehicle?.odometer} KM</p>
              </span>
              <span
                className="d-flex felx-wrap mx-2    w-100"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#898989",
                }}
              >
                <p>Stock #:</p>
                <p>{vehicle?.stock_NO} </p>
              </span>
              <span
                className="d-flex felx-wrap mx-2    w-100"
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#898989",
                }}
              >
                <p>Price:</p>
                <p>${vehicle?.price} </p>
              </span>
            </div>
          </a>
        </div>
      </a>
    </>
  );
}
