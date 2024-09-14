import VehicleDetailList from "../../../components/layout/vehicle-detail/vehicle_detail_list";
import DetaileProductSliderCustomrWeb from "../../../components/layout/vehicle-detail/gallery_slider";
import StandardOptions from "../../../components/layout/vehicle-detail/standardoption";
import { BASE_URL } from "../../../constant/base";
import ButtonDetaileProduct from "../../../components/layout/vehicle-detail/buttondetaile";
import Dscription from "../../../components/layout/vehicle-detail/Dscription";
import Waranty from "../../../components/layout/vehicle-detail/Waranty";
import Head from "next/head";
import Link from "next/link";
import {
  FaAngleLeft,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLinkedin,
  FaMapMarker,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { httpRequest } from "../../../apis";
import SpecialInventoryCars from "../../../components/layout/home/special-inventory/specialinventory_cars";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const DetailProduct = (data) => {
  const { dealerData, domain, similarData, data2 } = data;

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
  } = data?.data;
  // Cargurus
  // useEffect(() => {
  //   var CarGurus = window.CarGurus || {};
  //   window.CarGurus = CarGurus;
  //   CarGurus.DealRatingBadge = window.CarGurus.DealRatingBadge || {};
  //   CarGurus.DealRatingBadge.options = {
  //     style: "STYLE1",
  //     minRating: "GOOD_PRICE",
  //     defaultHeight: "40",
  //   };
  //   var script = document.createElement("script");
  //   script.src =
  //     "https://static.cargurus.com/js/api/en_CA/1.0/dealratingbadge.js";
  //   script.async = true;
  //   var entry = document.getElementsByTagName("script")[0];
  //   entry.parentNode.insertBefore(script, entry);
  // });

  const router = useRouter();

  const [link, setlink] = useState("");

  // Next & Prev
  let prevModel;
  let nextModel;
  let prevMake;
  let nextMake;

  data?.data?.previousVehicle
    ? (prevModel = data?.data?.previousVehicle?.Vehicle?.model.replaceAll(
        /[^\w\d]/g,
        ""
      ))
    : null;

  data?.data?.nextVehicle
    ? (nextModel = data?.data?.nextVehicle?.Vehicle?.model.replaceAll(
        /[^\w\d]/g,
        ""
      ))
    : null;

  data?.data?.previousVehicle
    ? (prevMake = data?.data?.previousVehicle?.Vehicle?.make.replaceAll(
        /[^\w\d]/g,
        ""
      ))
    : null;

  data?.data?.nextVehicle
    ? (nextMake = data?.data?.nextVehicle?.Vehicle?.make.replaceAll(
        /[^\w\d]/g,
        ""
      ))
    : null;
  const comment = data?.data?.comment || ""; // Ensure comment is not undefined or null
  const strippedComment = comment
    .replace(/<[^>]+>/g, (match) => {
      if (match === "<br>" || match == "</p>") {
        return "\n";
      } else {
        return "";
      }
    })
    .replace(/&nbsp;/g, " ") // Replace &nbsp; with space
    .replace(/&#xFEFF;/g, "")
    .trim();

  useEffect(() => {
    setlink(`${window.location.host}`);


  }, []);

   // * Scroll To Previous Vehicle Functionality
   const [lastPage, setLastPage] = useState(null);
   const [inventoryUrl, setInventoryUrl] = useState(null);
   const [lastQuery, setLasQuery] = useState(null);
 
   const getLastPage = () => {
     return localStorage.getItem("last-page");
   };
   const getLastquery = () => {
     return localStorage.getItem("last-query");
   };
   const getInventoryUrl = () => {
     return localStorage.getItem("inventory-url");
   };
   useEffect(() => {
     setLastPage(() => getLastPage());
     setLasQuery(() => getLastquery());
     setInventoryUrl(() => getInventoryUrl());
   }, []);
 
   const handleBackToInventoryClick = (e) => {
     e.preventDefault();
     const vehcilQuery = JSON.parse(lastQuery);
     localStorage.setItem("last-viewed-car", data?.data?.id);
     lastQuery
       ? router.push(
           `/${+inventoryUrl || "cars"}?make=${vehcilQuery.make || ""}&model=${
             vehcilQuery.model || ""
           }&Minyear=${vehcilQuery.Minyear || ""}&Maxyear=${
             vehcilQuery.Maxyear || ""
           }&MinPrice=${vehcilQuery.MinPrice || ""}&MaxPrice=${
             vehcilQuery.MaxPrice || ""
           }&Minodometer=${vehcilQuery.Minodometer || ""}&Maxodometer=${
             vehcilQuery.Maxodometer || ""
           }&EngineCylinder=${vehcilQuery.EngineCylinder || ""}&Doors=${
             vehcilQuery.Doors || ""
           }&Bodystyle=${vehcilQuery.Bodystyle || ""}&Fueltype=${
             vehcilQuery.Fueltype || ""
           }&Transmission=${vehcilQuery.Transmission || ""}&Exteriorcolor=${
             vehcilQuery.Exteriorcolor || ""
           }&Interior_color=${vehcilQuery.Interior_color || ""}&vehicleType=${
             vehcilQuery.vehicleType || ""
           }&page=${lastPage}`
         )
       : router.push(`/${inventoryUrl || "cars"}?page=${lastPage}`);
   };
   // * Scroll To Previous Vehicle Functionality

  return (
    <>
      <Head>
        <meta
          property="og:site_name"
          value={dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name}
        />
        <title>{`${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}`}</title>
        <meta
          property="og:title"
          content={`${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}`}
          key=""
        />
        <meta
          property="og:url"
          content={`https://${dealerData?.business_website}/cars/used/${data?.data?.Vehicle?.model_year}-${data?.data?.Vehicle?.make}-${data?.data?.Vehicle?.model}-${data?.data?.id}`}
        />
        <meta
          name="image"
          property="og:image"
          content={
            data2[0]?.media_src
              ? `${dealerData.prefixUrl}${data2[0]?.media_src}`
              : `${dealerData.prefixUrl}${data?.data?.cover_image}`
          }
        />
        <meta
          property="og:image:url"
          content={
            data2[0]?.media_src
              ? `${dealerData.prefixUrl}${data2[0]?.media_src}`
              : `${dealerData.prefixUrl}${data?.data?.cover_image}`
          }
        />
        <meta property="og:description" content={`${strippedComment}`} />;
        <meta property="og:image:width" content="700" />
        <meta property="og:image:height" content="500" />
        <meta property="og:image:type" content="image/jpg" />
        {/* <meta property="og:description" content="new car" /> */}
        <meta property="og:price:currency" content="" />
        <meta property="og:locale" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="description"
          content={`Find used cars, trucks and SUVs for sale at ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car appraisal, Best used cars, Car financing, ${data?.data?.Vehicle?.model_year} ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model}, ${data?.data?.Vehicle?.make} ${data?.data?.Vehicle?.model} Detail`}
        />
        <title>
          {`${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>
        {/* <meta
          name="title"
          property="og:title"
          content={`${data?.Vehicle?.model_year} ${data?.Vehicle?.make} ${data?.Vehicle?.model}`} 
        /> */}
        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>
      <div
        className="py-5 px-0 px-md-3 px-lg-5 m-0 col-12 w-100 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="p-0 m-0 col-11 col-lg-12 col-xl-11">
          <div className="px-0 px-md-1 px-lg-2 py-1 py-sm-5 py-lg-2 m-0 row w-100 justify-content-center align-items-center">
            <div className="col-12 d-flex flex-wrap pb-0 px-0 px-sm-2 pb-sm-3 justify-content-between">
              <div className="p-0 m-0 d-flex ">
                {/* <Link href={"/cars"}> */}
                  <a
                   onClick={handleBackToInventoryClick}
                   style={{ whiteSpace: "nowrap",cursor:"pointer" }}
                    className="p-0 py-2 py-lg-0 blue_button px-2 d-flex justify-content-center align-items-center w-100"
                  >
                    <FaAngleLeft color="#fff" /> Back To inventory
                  </a>
                {/* </Link> */}
              </div>
              <div className="p-0 m-0 d-flex pt-3 pt-sm-0 flex-wrap justify-content-center">
                {data?.data?.previousVehicle && (
                  <div
                    className="p-0 m-0 row pr-3 pr-sm-5 align-items-center"
                    style={{ fontSize: "18px" }}
                  >
                    <Link
                      href={`/cars/used/${data?.data?.previousVehicle?.Vehicle?.model_year}-${prevMake}-${prevModel}-${data?.data?.previousVehicle?.id}`}
                    >
                      <a className="d-flex align-items-center my-link-btn">
                        <p className="py-1 white-space-nowrap">
                          <FaArrowCircleLeft className="" />
                          &nbsp;&nbsp;Previous Vehicle
                        </p>
                      </a>
                    </Link>
                  </div>
                )}
                {data?.data?.nextVehicle && (
                  <div
                    className="p-0 m-0 row my-link-btn"
                    style={{ fontSize: "18px", color: "red" }}
                  >
                    <Link
                      href={`/cars/used/${data?.data?.nextVehicle?.Vehicle?.model_year}-${nextMake}-${nextModel}-${data?.data?.nextVehicle?.id}`}
                    >
                      <a className="d-flex align-items-center my-link-btn">
                        <p className="py-1 white-space-nowrap">
                          Next Vehicle &nbsp;&nbsp;
                          <FaArrowCircleRight className="" />
                        </p>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-0 m-0 w-100 row py-3 justify-content-around align-items-start white-background ">
            <div className="p-0 m-0 row w-100 justify-content-center align-items-start">
              <div className="p-0 m-0 col-12 col-sm-8  d-flex justify-content-start align-items-start">
                <p className="py-0 py-lg-2 px-1 py-2 px-md-4 m-0 row DetaileProductCustomrWeb-title flex-row justify-content-center align-items-center">
                  {data?.data?.Vehicle?.model_year} {data?.data?.Vehicle?.make}{" "}
                  {data?.data?.Vehicle?.model} {data?.data?.Vehicle?.trim}{" "}
                </p>
              </div>
              <div className="p-0 m-0 col-12 col-sm-4 order-1 order-lg-2 px-md-4 d-flex flex-row justify-content-end align-items-end">
                <p className="row d-flex DetaileProductCustomrWeb-price justify-content-center align-items-center p-2 m-0">
                  {data?.data?.vehicle_status === 7 ||
                  data?.data?.vehicle_status === 6
                    ? ""
                    : !data?.data?.vehicle_site_detail?.call_for_price &&
                      data?.data?.special_price !== 0 && (
                        <div className="p-0 m-0">
                          <p className="p-0 m-0 inventory_p__price">
                            ${priceComma(special_price, 2)}
                          </p>
                        </div>
                      )}{" "}
                  &nbsp;
                  {data?.data?.vehicle_status === 7 ||
                  data?.data?.vehicle_status === 6 ? (
                    ""
                  ) : !data?.data?.vehicle_site_detail?.call_for_price &&
                    sell_price !== 0 ? (
                    <p
                      className={`CERAMIK SELL-PRICE-&-PAYMENT d-flex justify-content-center align-item-center p-0 m-0 inventory_p__price`}
                    >
                      {" "}
                      <p
                        className={`SELL-RICE d-inline inventory_p__price m-0 ${
                          special_price !== 0 && "inventory_p__sellprice_line"
                        } `}
                      >
                        $ {priceComma(sell_price, 2)}
                      </p>
                      <p
                        className="PAYMENT d-flex align-items-center justify-content-center ml-2"
                        style={{ fontSize: "15px", whiteSpace: "nowrap" }}
                      >
                        {data?.data?.payment ? data?.data?.payment : ""}
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
                </p>
              </div>
            </div>
            <div className="p-0 m-0 pb-2 d-flex d-lg-none align-items-center justify-content-between col-12 ">
              {data?.data?.vehicle_site_detail?.carfax_link === true &&
                data?.data?.vehicle_site_detail?.carfax_link &&
                data?.data?.Vehicle?.carfax_link && (
                  <div className="p-0 m-0 carfax_inventory">
                    <a
                      className="p-0 m-0 w-100"
                      href={data?.data?.Vehicle?.carfax_link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="/images/inventory/carfax.svg"
                        alt=""
                        style={{
                          width: "100px",
                          objectFit: "contain",
                          maxWidth:"90px"

                        }}
                      />
                    </a>
                  </div>
                )}
              {data?.data?.vehicle_site_detail?.carfax_link &&
                !data?.data?.Vehicle?.carfax_link &&
                data?.data?.Vehicle?.carfax_pdf && (
                  <div className="p-0 m-0 carfax_inventory col-2">
                    <a
                      className="p-0 m-0 w-100"
                      href={data?.data?.Vehicle?.carfax_pdf}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="/images/inventory/carfax.svg"
                        alt=""
                        className="w-100"
                        style={{
                          height: "auto",
                          minWidth: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </div>
                )}
              {data?.data?.is_certified ? (
                <div className="finaceForm-size d-flex">
                  <img
                    src="/images/inventory/certified2.jpg"
                    alt=""
                    style={{
                      width: "100px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : null}
              <span
                className="pl-2 pb-2"
                style={{ width: "140px" }}
                data-cg-vin={data?.data?.Vehicle?.vin_number}
                data-cg-price={
                  data?.data.special_price
                    ? data?.data.special_price
                    : data?.data.sell_price
                }
              ></span>
            </div>{" "}
            <div className="p-0 m-0 col-12 col-lg-7">
              {" "}
              <DetaileProductSliderCustomrWeb
                data={data?.data}
                vehicleData={data?.data}
                data2={data?.data2}
                dealerData={dealerData}
              />
              <div
                className={`p-0 m-0 ${
                  data?.data?.comment === null ? "d-none" : "d-flex  col-12"
                }`}
              >
                <Dscription data={data?.data} data2={data?.data2} />
              </div>
              <div
                className={`p-0 m-0 mt-2 ${
                  data?.data?.waranty === null ? "d-none" : "d-flex col-12"
                }`}
              >
                <Waranty data={data?.data} data2={data?.data2} />
              </div>
              <div className="p-0 m-0 row w-100 d-none d-lg-block">
                <StandardOptions data={data} />
              </div>
            </div>
            <div className="p-0 m-0 col-12 col-md-12 col-lg-8 px-sm-2 pb-3 row w-100 d-block d-lg-none">
              <StandardOptions data={data} />
            </div>
            <div className="p-0 m-0  col-12 col-lg-4 pb-2">
              {/* Certification */}
              <div className=" d-none d-lg-flex pb-2">
                {data?.data.vehicle_site_detail?.carfax_link &&
                  Vehicle?.carfax_link && (
                    <div className="p-0 m-0 carfax_inventory w-100 mt-1 ml-2">
                      <a
                        className="p-0 m-0 w-100"
                        href={Vehicle?.carfax_link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="/images/inventory/carfax.svg"
                          alt=""
                          className="w-100"
                          style={{
                            height: "auto",
                            objectFit: "contain",
                            maxWidth:"90px"

                          }}
                        />
                      </a>
                    </div>
                  )}
                {data?.data.vehicle_site_detail?.carfax_link &&
                  !Vehicle?.carfax_link &&
                  Vehicle?.carfax_pdf && (
                    <div className="p-0 m-0 carfax_inventory w-100">
                      <a
                        className="p-0 m-0 w-100"
                        href={Vehicle?.carfax_pdf}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src="/images/inventory/carfax.svg"
                          alt=""
                          className="w-100"
                          style={{
                            height: "auto",
                            objectFit: "contain",
                            maxWidth:"90px"
                          }}
                        />
                      </a>
                    </div>
                  )}
                {data?.data.is_certified ? (
                  <img
                    src="/images/inventory/certified2.jpg"
                    style={{ aspectRatio: "19/6", maxHeight: "35px" }}
                    className="w-100"
                  />
                ) : null}
                <span
                  className="pl-2 pb-2 cargurus_logo_sizing w-100"
                  data-cg-vin={Vehicle?.vin_number}
                  data-cg-price={special_price ? special_price : sell_price}
                ></span>
              </div>
              <div class="AskAva-cta" data-product="creditTool" data-type="inline"></div>
              <VehicleDetailList data={data} />
              <ButtonDetaileProduct
                domain={domain}
                data={data?.data}
                data2={data?.data2}
                dealerData={dealerData}
              />
              <div className="p-0 m-0 w-100 pt-3">
                <div
                  className="p-0 m-0 py-4 px-3 contact_container"
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                  <div className="p-0 m-0 location_title d-flex flex-row">
                    <FaMapMarker size={"30px"} color="#000" />
                    <b
                      className="pb-3"
                      style={{
                        color: "#000",
                        fontSize: "24px",
                        fontWeight: "800",
                        fontFamily: "Open Sans",
                      }}
                    >
                      &nbsp; Location
                    </b>
                  </div>
                  <div className="p-0 m-0 px-2 phone_address_style text-dark">
                    <address className="p-0 m-0">
                      {dealerData?.business_street}
                      {/* <br /> */}
                      {dealerData?.business_city?.city}
                      {", "}
                      {dealerData?.business_city?.Province?.province ===
                      "British Columbia"
                        ? "BC"
                        : dealerData?.business_city?.Province?.province}
                      {/* <br /> */}&nbsp;
                      {dealerData?.business_postal}
                    </address>
                  </div>
                  <div className="11 p-0 pt-2 m-0 px-2 phone_address_style">
                    <a
                      href={phonenumberConvertor(dealerData?.business_phone)}
                      rel="noopener noreferrer"
                      className="p-0 m-0"
                    >
                      <FaPhoneAlt color="#000" className="mr-2" />
                      {dealerData?.business_phone}
                    </a>
                  </div>
                  <div className="p-0 pt-4 m-0 w-100 row">
                    <div className="col-3 col-sm-2 col-lg-4 p-0 pt-2 m-0 px-2 phone_address_style">
                      <a href="https://twitter.com/share">
                        <div
                          className="pl-1"
                          style={{
                            backgroundColor: "#0073b1",
                            width: "70px",
                            borderRadius: "3px",
                            color: "#fff",
                          }}
                        >
                          <FaTwitter color="#fff" className="mr-2" />
                          Tweet
                        </div>
                      </a>
                    </div>
                    <div className="col-6 p-0 pt-2 m-0 px-2 phone_address_style">
                      <a
                        onClick={() =>
                          window.open(
                            // ` https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2F${link}`,
                            `https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2F${link}%2Fcars%2Fused%2F${router.query.vehicleBase}%2F`,
                            // "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.sinoneauto.com%2Fcars%2Fused%2F2017-Mercedes-Benz-GLA-Class-SUV-357125%2F",
                            "_blank",
                            "location=yes,height=520,width=520,scrollbars=yes,status=yes"
                          )
                        }
                        style={{ cursor: "pointer" }}
                        //  //
                        // href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.sinoneauto.com%2Fcars%2Fused%2F2017-Mercedes-Benz-GLA-Class-SUV-357125%2F"
                      >
                        <div
                          className="pl-1"
                          style={{
                            backgroundColor: "#0073b1",
                            width: "70px",
                            borderRadius: "3px",
                            color: "#fff",
                          }}
                        >
                          <FaLinkedin color="#fff" className="mr-2" />
                          Share
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            style={{ fontSize: "10pt", fontStyle: "italic" }}
            className="w-100 px-3"
          >
            Information and availability subject to change. Please confirm
            accuracy of the information with a sales representative.
          </span>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { req, params } = context;
  const host = req.headers.host;
  let id = params?.vehicleBase.split("-")[3];

  const res = await fetch(
    `${BASE_URL}/api/dealership/mid/vehicle/single/${host}/${params?.vehicleBase}`
  );
  const res2 = await fetch(
    `${BASE_URL}/api/vehicle/dealership/media/mid/all/${host}/${params?.vehicleBase}`
  );
  // const { data: similarData, status: similarStatus } = await httpRequest(
  //   "GET",
  //   `/similar/mid/vehicle/${id}/${host}`,
  //   {},
  //   {}
  // );
  if (res.status === 200 && res2.status === 200) {
    const data = await res.json();
    const data2 = await res2.json();
    return { props: { data, data2, domain: host } };
  } else {
    return {
      notFound: true,
    };
  }
}
export default DetailProduct;
