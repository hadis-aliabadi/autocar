import { useRouter } from "next/router";
import { httpRequest } from "../../apis";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { priceComma } from "../../utils/common/price_odometer_handler";
import Link from "next/link";
import { useEffect, useState } from "react";
import { dashRemoverForSlug } from "../../utils/common/dash_remover";
import StandardOptionsCompare from "../../components/layout/vehicle-detail/standardoptioncompare";
import { splitTextOnCapitalLetters } from "../../utils/common/split_text_on_capital_letters";
import Head from "next/head";
const Compare = (props) => {
  const { dealerData } = props;
  const router = useRouter();
  const query = router?.query?.compare;
  const id = query.split(",");
  const ids = [];

  id.map((item) => {
    ids.push(+item);
  });
  // const compareArray = [
  //   "Odometer":[],
  //   "Body Style":[],
  //   "Transmission":[],
  //   "Engine":[],
  //   "Engine Size":[],
  //   "Driveline":[],
  //   "Exterior":[],
  //   "Interior":[],
  //   "Doors":[],
  //   "Passengers":[],
  //   "Fuel Type":[],
  //   "City Fuel":[],
  //   "Hwy Fuel":[],
  //   "Stock Number":[],
  //   "VIN":[],
  // ];
  const carNameArray = ["Car Name"];
  const odometerArray = ["Odometer"];
  const bodyStyleArray = ["Body Style"];
  const transmissionArray = ["Transmission"];
  const engineCylindersArray = ["Engine"];
  const engineSizeArray = ["Engine Size"];
  const drivelineArray = ["Driveline"];
  const exteriorArray = ["Exterior"];
  const interiorArray = ["Interior"];
  const doorsArray = ["Doors"];
  const passengersArray = ["Passengers"];
  const fuelTypeArray = ["Fuel Type"];
  const cityFuelArray = ["City Fuel"];
  const hwyFuelArray = ["Hwy Fuel"];
  const stockNumberArray = ["Stock Number"];
  const vinArray = ["VIN"];

  props?.carCompare.map((car) => {
    carNameArray.push(
      car?.Vehicle?.model_year +
        " " +
        car?.Vehicle?.make +
        " " +
        car?.Vehicle?.model
    );

    odometerArray.push(
      `${priceComma(car.odometer, 2)} ${car.odometer_type === 1 ? "MI" : "KM"}`
    );
    bodyStyleArray.push(car.Vehicle.body_style);
    transmissionArray.push(car.Vehicle.transmission);
    engineCylindersArray.push(car.Vehicle.engine_cylinders);
    engineSizeArray.push(car.Vehicle.engine_size);
    drivelineArray.push(car.Vehicle.drive_type);
    exteriorArray.push(car.Vehicle.exterior_color?.name);
    interiorArray.push(car.Vehicle.interior_color?.name);
    doorsArray.push(car.Vehicle.doors);
    passengersArray.push(car.Vehicle.passenger);
    fuelTypeArray.push(car.Vehicle.fuel_type);
    cityFuelArray.push(car.Vehicle.city_fuel);
    hwyFuelArray.push(car.Vehicle.hwy_fuel);
    stockNumberArray.push(car.stock_NO);
    vinArray.push(
      car?.vehicle_site_detail?.vin_number ? car.Vehicle.vin_number : ""
    );
  });

  const rows = [
    carNameArray,
    odometerArray,
    bodyStyleArray,
    transmissionArray,
    engineCylindersArray,
    engineSizeArray,
    drivelineArray,
    exteriorArray,
    interiorArray,
    doorsArray,
    passengersArray,
    fuelTypeArray,
    cityFuelArray,
    hwyFuelArray,
    stockNumberArray,
    vinArray,
  ];

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />

        <title>
          Online car dealership | Used Car Dealer | New and Used Car For Sale |{" "}
          {dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        </title>
        <meta
          name="description"
          content={`${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } site as an online car dealership in ${
            dealerData?.business_city?.city
          } ${
            dealerData?.business_city?.Province?.Country?.country
          }, provide buy, sell or trade-in value services with the best price and quality.`}
        />
        <meta name="keywords" content="online car dealership" />
      </Head>

      <div className="p-0 m-0 w-100 row justify-content-center align-items-start">
        <div className="p-3 m-0 w-100">
          <Link href="/cars">
            <a className="p-0 m-0 ">
              <button className="px-4 btn blue_button  p-2 m-0">
                Back To Inventory
              </button>
            </a>
          </Link>
        </div>
        <div className="p-0 m-0 col-12 col-md-10">
          <div className="p-0 m-0 w-100 row justify-content-center">
            <div className="p-0 m-0 row with_image_compare justify-content-center">
              {props?.carCompare.map((item, index) => {
                const {
                  stock_NO: stockNO,
                  cover_image: coverImage,
                  Vehicle,
                  id,
                  odometer,
                  odometer_type,
                  sell_price,
                  special_price,
                  vehicle_condition,
                  model_year,
                  make,
                  model,
                  vin_number,
                  photoCount,
                } = item;
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
                    <Link
                      href={`/cars/used/${item?.Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${item?.id}`}
                    >
                      <a
                        className={`p-0 px-3 m-0 w-100 text-center d-flex justify-content-center col-11 col-sm-8 ${
                          props?.carCompare.length === 3
                            ? `col-md-${Math.round(
                                12 / props?.carCompare.length
                              )}`
                            : props?.carCompare.length === 2
                            ? `col-md-${Math.round(
                                12 / (props?.carCompare.length + 1)
                              )}`
                            : props?.carCompare.length === 1 &&
                              `col-md-${Math.round(
                                12 / (props?.carCompare.length + 2)
                              )}`
                        }`}
                      >
                        <div
                          style={{
                            backgroundColor: "#0E050A",
                            boxShadow: "0px 0px 7px #ffffff80",
                          }}
                          className={`home_div__secial_slider d-flex w-100 flex-column align-items-center justify-content-between`}
                        >
                          <div className="p-0 m-0 h-100 w-100 home_div__secial_img_container_compare ">
                            <img
                              src={dealerData?.prefixUrl + item?.cover_image}
                              width="100%"
                              loading="lazy"
                              className="h-100"
                            />
                          </div>
                          <div
                            className={`py-3 px-2 m-0 d-flex flex-column w-100 justify-content-center align-items-center special_details_style`}
                          >
                            <div className="p-0 m-0 w-100 d-flex flex-column align-items-center">
                              <div
                                style={{ color: "#fff" }}
                                className="p-0 m-0 make_style text-start"
                              >
                                {" "}
                                {item?.Vehicle?.model_year +
                                  " " +
                                  item?.Vehicle?.make +
                                  " " +
                                  item?.Vehicle?.model}
                              </div>
                              <div className="p-0 m-0 price_style_compare">
                                {!item?.vehicle_site_detail?.call_for_price ? (
                                  <p
                                    className={`CERAMIK SELL-PRICE-&-PAYMENT d-flex justify-content-center align-item-center p-0 m-0 inventory_p__price`}
                                  >
                                    {" "}
                                    <p
                                      className={`SELL-RICE d-inline inventory_p__price m-0 text-light ${
                                        special_price !== 0 &&
                                        "inventory_p__sellprice_line text-danger"
                                      } `}
                                    >
                                      $ {priceComma(sell_price, 2)}
                                    </p>
                                    <p
                                      className="PAYMENT d-flex align-items-center justify-content-center ml-2 text-light"
                                      style={{
                                        fontSize: "15px",
                                        whiteSpace: "nowrap",
                                      }}
                                    >
                                      {item?.payment ? item?.payment : ""}
                                    </p>
                                  </p>
                                ) : (
                                  <p
                                    className={`CERAMIK SELL-PRICE-&-PAYMENT d-flex justify-content-center align-item-center p-0 m-0 inventory_p__price`}
                                  >
                                    {" "}
                                    <p
                                      className={
                                        "SELL-RICE d-inline car_item_p__price_text m-0"
                                      }
                                    >
                                      Call For Price
                                    </p>
                                  </p>
                                )}

                                {!item?.vehicle_site_detail?.call_for_price &&
                                  special_price !== 0 && (
                                    <div className="p-0 m-0">
                                      <p className="p-0 m-0 inventory_p__price text-light">
                                        ${priceComma(special_price, 2)}
                                      </p>
                                    </div>
                                  )}
                              </div>
                            </div>
                            <div className="p-0 m-0 d-flex align-items-center justify-content-center w-100">
                              <div className="p-0 m-0 mr-1">
                                <img
                                  src="/images/home/6646418_dashboard_essentials_stats_ui_icon.png"
                                  alt=""
                                  loading="lazy"
                                  style={{
                                    objectFit: "contain",
                                    maxHeight: "16px",
                                    maxWidth: "16px",
                                  }}
                                />
                              </div>
                              <div className="p-0 m-0 odometer_style_compare d-flex">
                                {priceComma(item?.odometer, 2)}
                                {item?.odometer_type === 2 ? " KM" : " MI"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                    {/* <div
                  className={`p-0 px-1 m-0 align-items-between ${
                    index !== props?.carCompare.length ? "ui_compare" : ""
                  } col-12 col-md-${Math.round(12 / props?.carCompare.length)}`}
                >
                  <div className="p-0 m-0 w-100">
                    <h5 className="w-100">
                      {car?.Vehicle?.model_year +
                        " " +
                        car?.Vehicle?.make +
                        " " +
                        car?.Vehicle?.model +
                        " " +
                        car?.Vehicle?.trim}
                    </h5>
                    <h5 className="mt-0 mb-0" style={{ color: "#ee0909" }}>
                      ${car?.sell_price}
                    </h5>
                  </div>
                  <img
                    src={dealerData?.prefixUrl + car?.cover_image}
                    className="w-100"
                  />
                </div> */}
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-4 m-0 w-100">
          <Tabs
            defaultActiveKey=" Vehicle Overview"
            id="uncontrolled-tab-example"
            className="p-0 m-0 col-12 d-flex justify-content-start style-tab mb-4 align-items-center text-decoration-none text-center"
          >
            {/* Start Tab 1 */}

            <Tab
              eventKey=" Vehicle Overview"
              title=" Vehicle Overview"
              className="p-0 m-0 mt-3 w-100 text-decoration-none tabel_scroll tab_title"
            >
              <div className="p-0 m-0 w-100 d-flex justify-content-md-center">
                <table className="col-12 w-100 py-5 table-dark  table-striped tabel_scroll">
                  <tbody>
                    {rows.map((rowArray) => {
                      if (rowArray[0] == "Car Name") {
                        rowArray[0] = "";
                      }
                      return (
                        <tr>
                          {rowArray.map((row) => {
                            return (
                              <td
                                className={
                                  rowArray[0] == "" ? "row-head " : "row-data"
                                }
                              >
                                {row}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Tab>

            {/* Start Tab 2 */}

            <Tab
              eventKey="More Options"
              title="More Options"
              className="p-0 m-0 text-decoration-none"
            >
              <div className="bb p-0 m-0 row w-100 justify-content-center align-items-center">
                <table className="row p-0 m-0 w-100">
                  {props?.carCompare.map((car, index) => {
                    return (
                      <>
                        <tr className="col-12 col-md-4">
                          <div
                            className="p-2 m-0 my-2 w-100 row"
                            style={{ color: "#000" }}
                          >
                            <h4
                              className="p-0 pb-2 px-2 py-2 m-0 col-12 mobile_title_responsive"
                              style={{
                                color: "#000",
                              }}
                            >
                              {car?.Vehicle?.model_year +
                                " " +
                                car?.Vehicle?.make +
                                " " +
                                car?.Vehicle?.model}
                            </h4>
                            {car?.more_option
                              ? car?.more_option.map((options) => {
                                  return (
                                    <span className="p-0 m-0 col-12 ">
                                      {splitTextOnCapitalLetters(options)}
                                    </span>
                                  );
                                })
                              : "-"}
                          </div>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </Tab>

            {/* start Tab 3 */}

            <Tab
              eventKey="Standard Options"
              title="Standard Options"
              className="p-0 m-0 text-decoration-none"
            >
              <div className="ss p-0 m-0 row w-100 justify-content-center align-items-start">
                {props?.carCompare.map((standard) => {
                  return (
                    <StandardOptionsCompare
                      data={{ data: standard }}
                      compare={true}
                    />
                  );
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers["x-forwarded-host"]
    ? ctx.req.headers["x-forwarded-host"]
    : ctx.req.headers.host;

  const query = ctx?.query?.compare.split(",");
  const ids = [];
  query.map((item) => {
    ids.push(+item);
  });
  const { data: carCompare, status: carCompareStatus } = await httpRequest(
    "GET",
    `/cars/compare/${domain}`,
    { ids: ids },
    {},
    false
  );
  return {
    props: {
      domain,
      carCompare,
    },
  };
}
export default Compare;
