import Link from "next/link";
import { FaCamera, FaCheck, FaTachometerAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { dashRemoverForSlug } from "../../../utils/common/dash_remover";
import { priceComma } from "../../../utils/common/price_odometer_handler";
import { useRouter } from "next/router";

// Youtube Modal
import { CloseButton, Modal } from "react-bootstrap";
import { FaMapMarker, FaPhoneAlt, FaTimes } from "react-icons/fa";

const CarItem = ({
  car,
  isFinancial,
  otherFormik,
  onClose,
  dealerData,
  setselectTitle,
  selectTitle,
  setCompare,
  compare,
  onBeforeViewDetailClick
}) => {
  const soldImage = dealerData?.soldImg?.src;
  const [makeSlug, setMakeSlug] = useState({
    make: "",
    model: "",
  });

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
  } = car;
  const router = useRouter();

  const title = `${Vehicle?.model_year} ${Vehicle?.make} ${Vehicle?.model} ${
    Vehicle?.drive_type ? Vehicle?.drive_type : ""
  }`;
  const imgSrc =
    coverImage && coverImage !== null
      ? `${dealerData?.prefixUrl}${coverImage}`
      : `${dealerData.prefixUrl}/hillz/thumb-coming_soon.jpg`;

  useEffect(() => {
    setMakeSlug(() => ({
      make: dashRemoverForSlug(Vehicle?.make),
      model: dashRemoverForSlug(Vehicle?.model),
    }));
  }, []);
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

  // Video Button
  const [video, setVideo] = useState();
  const linkToEmbed = (youtubeURL) => {
    let videoId = null;

    // if WATCH => v=
    if (youtubeURL?.match(/v=([a-zA-Z0-9_-]*)/)) {
      videoId = youtubeURL?.match(/v=([a-zA-Z0-9_-]*)/)[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // if SHORT => youtu.be
    if (youtubeURL?.includes("https://youtu.be/")) {
      return youtubeURL?.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );
    }

    // if EMBED => /embed/

    return youtubeURL;
  };
  const modalVdeoClose = () => {
    setVideo(false);
  };

  const inputRef = useRef(null); 


  return (
    <>
      {/* YouTube Modal */}
      <Modal
        onHide={modalVdeoClose}
        show={video}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <FaTimes
            color={"#000"}
            style={{ cursor: "pointer" }}
            onClick={() => {
              modalVdeoClose();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 youtube_video_size">
            <iframe
              src={`${linkToEmbed(car?.youtube_link)}`}
              width={"100%"}
              className="youtube_video_size"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
      <div className="row p-0 m-0 w-100 h-100 bg-white cart-item-wrapper">
       
        <div className="p-0 m-0 col-12 w-100">
          {car?.youtube_link && (
            <div
              style={{ borderRadius: "0" }}
              onClick={() => setVideo(true)}
              className=" play-video px-0 px-md-4 px-lg-0 pb-4 p-0 m-0  col-12 col-md-12 col-lg-12 btn"
            >
              <a className="glightbox_video">
                <svg
                  width="131"
                  height="131"
                  viewBox="0 0 131 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="inner-circle"
                    d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                    fill="white"
                  ></path>
                  <circle
                    className="outer_circle"
                    cx="65.5"
                    cy="65.5"
                    r="64"
                    stroke="white"
                  ></circle>
                  <path
                    className="play"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M60 76V57L77 66.7774L60 76Z"
                    fill="#f58634"
                  ></path>
                </svg>
              </a>
            </div>
          )}
          {imgSrc === `${dealerData.prefixUrl}/hillz/thumb-coming_soon.jpg` ? (
            <div
              className="p-0 m-0 row w-100 justify-content-center align-items-center"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <Link
                href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
              >
                <img
                  height="100%"
                  width="100%"
                  src={imgSrc}
                  className="carItem_fixed_size_img"

                  onClick={onBeforeViewDetailClick}

                />
              </Link>
              <div
                style={{ color: "#333", fontSize: "12px" }}
                className="p-0 m-0 w-100 bg-photo d-flex justify-content-center  py-1 align-items-center"
              >
                {photoCount ? photoCount : 0} &nbsp;
                <FaCamera color="#333" size={12} />
              </div>
              {car?.vehicle_status === 7 || car?.vehicle_status === 6 ? (
                <div className="overly-ribbon-wrapper">
                  <div className="ribbon-sold d-flex align-items-center justify-content-center">
                    SOLD
                  </div>
                </div>
              ) : car?.vehicle_status === 5 ? (
                <>
                  {" "}
                  <div className="ribbon-wrapper">
                    {" "}
                    <div className="ribbon ribbon-pending">Pending </div>{" "}
                  </div>
                </>
              ) : car?.is_coming_soon ? (
                <div className="ribbon-wrapper">
                  <div className="ribbon ribbon-comingsoon">Coming Soon</div>
                </div>
              ) : car?.special_price != 0 ? (
                <>
                  <div className="ribbon-wrapper">
                    <div className="ribbon ribbon-special-price">
                      Special Price
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              {car?.in_transit === 1 && (
                <img
                  height="50%"
                  width="50%"
                  src="/images/photo_2023-10-11_15-56-4.png"
                  className="inventory_soldImage-style"
                />
              )}
            </div>
          ) : (
            <div
              className="p-0 m-0 row w-100 justify-content-center align-items-center"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <Link
                href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
              >
                <a
                          onClick={onBeforeViewDetailClick}
                
                className="p-0 m-0 text-decoration-none w-100">
                  {" "}
                  <img
                    src={imgSrc}
                    className="carItem_fixed_size_img p-0 m-0 w-100"
                  />
                  <div
                    style={{ color: "#333", fontSize: "12px" }}
                    className="p-0 m-0 w-100 bg-photo d-flex justify-content-center  py-1 align-items-center"
                  >
                    {photoCount} &nbsp;
                    <FaCamera color="#333" size={12} />
                  </div>
                  {car?.vehicle_status === 7 || car?.vehicle_status === 6 ? (
                    <div className="overly-ribbon-wrapper">
                      <div className="ribbon-sold d-flex align-items-center justify-content-center">
                        SOLD
                      </div>
                    </div>
                  ) : car?.vehicle_status === 5 ? (
                    <>
                      {" "}
                      <div className="ribbon-wrapper">
                        {" "}
                        <div className="ribbon ribbon-pending">
                          Pending{" "}
                        </div>{" "}
                      </div>
                    </>
                  ) : car?.is_coming_soon ? (
                    <div className="ribbon-wrapper">
                      <div className="ribbon ribbon-comingsoon">
                        Coming Soon
                      </div>
                    </div>
                  ) : car?.special_price != 0 ? (
                    <>
                      <div className="ribbon-wrapper">
                        <div className="ribbon ribbon-special-price">
                          Special Price
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {car?.in_transit === 1 && (
                    <img
                      height="50%"
                      width="50%"
                      src="/images/photo_2023-10-11_15-56-4.png"
                      className="inventory_soldImage-style"
                    />
                  )}
                </a>
              </Link>
            </div>
          )}
          <div className="p-0 mb-1 m-0   row w-100 justify-content-between">
            {typeof otherFormik === "undefined" ? (
              <>
                <div className="p-0 m-0  col-4 justify-content-center align-items-center ">
                  <Link
                    href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                  >
                    <a
                          onClick={onBeforeViewDetailClick}
                    
                    className="btn text-decoration-none p-0 m-0 w-100 btn blue_button  py-2 px-1 justify-content-center align-items-center d-flex">
                      Details
                    </a>
                  </Link>
                </div>
                <div
                  style={{
                    borderLeft: "1px solid #fff",
                    borderRight: "1px solid #fff",
                  }}
                  className="p-0 m-0 col-4 justify-content-center align-items-center "
                >
                  <Link href={`/forms/contact-us?selected_vehicle=${id}`}>
                    <a className="btn text-decoration-none p-0 m-0 w-100 btn blue_button  py-2 px-1 justify-content-center align-items-center d-flex">
                      Contact Us
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0  col-4 justify-content-center align-items-center ">
                  {/* <Link href={`/forms/finance?selected_vehicle=${id}`}> */}
                  <a
                    onClick={() =>
                      window.askAva.openModal({ product: "creditTool" })
                    }
                    className="btn text-decoration-none p-0 m-0 w-100 btn blue_button blue_button--finance w-100 py-2 px-1 justify-content-center align-items-center d-flex"
                  >
                    Financing
                  </a>
                  {/* </Link> */}
                </div>
              </>
            ) : (
              <>
                <div className="p-0 m-0 px-1 col-12 justify-content-center align-items-center ">
                  <Link href="">
                    <a>
                      <button
                        className="btn text-decoration-none p-0 m-0 w-100 btn blue_button my-1 py-2 px-2 justify-content-center align-items-center d-flex"
                        onClick={() => {
                          if (onClose && typeof otherFormik !== "undefined") {
                            otherFormik.setFieldValue(
                              "frk_desire_MidVclDS_id",
                              +id
                            );
                            onClose();
                          }
                        }}
                      >
                        Select for Finance
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0 px-1 col-12 justify-content-center align-items-center ">
                  <Link
                    href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
                  >
                    <a className="btn text-decoration-none p-0  m-0 w-100 btn blue_button my-1 py-2 px-2 justify-content-center align-items-center d-flex">
                      View Details
                    </a>
                  </Link>
                </div>
              </>
            )}
          </div>
          {router.pathname !== "/forms/finance" ? (
            <div className="d-flex col-lg-6 px-1 justify-content-between col-lg-12 p-0 m-0 align-items-center flex-wrap  ">
              {/* <form className="p-0 m-0 col-12" onSubmit={formik.handleSubmit}> */}
              <div
                className="d-flex px-1 justify-content-between col-lg-12 p-0 m-0 align-items-center flex-wrap "
                style={{ border: "1px solid #c7bbbb42" }}
              >
                <div
                  className="p-0 m-0 py-1  mr-3 d-flex align-items-center "
                  style={{ fontSize: "12px" }}
                >
                  <input
                    ref={inputRef} 
                    type="checkbox"
                    className="p-0 m-0 custom-input"
                    name={car?.id}
                    id={car?.id}
                    style={{ cursor: "pointer" }}
                    checked={compare?.includes(`${car.id}`)}
                    // disabled={compare.length > 3 ? true : false}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCompare((prev) => [...prev, e.target.id]);
                        if (selectTitle.length < 3) {
                          setselectTitle((prev) => [
                            ...prev,
                            { name: title, id: e.target.id },
                          ]);
                        }
                      }
                      if (e.target.checked === false) {
                        const diselect = compare.filter(
                          (item) => item !== e.target.id
                        );
                        setCompare(diselect);
                        setselectTitle(
                          selectTitle.filter((item) => item.id != car.id)
                        );
                      }
                    }}
                  />
                  {/* <span onClick={()=>(inputRef.current.focus())} className="span-style"/> */}
                  <label className="p-0  pl-1 m-0">Add To Compare</label>
                </div>

                <div className="p-0 m-0 py-1  text-left">
                  {compare?.length > 3 || compare?.length == 0 ? (
                    <a
                      onClick={() => {
                        toast(
                          "Maximum number of vehicles for comparison is 3!",
                          {
                            hideProgressBar: true,
                            autoClose: 2000,
                            type: "warning",
                          }
                        );
                      }}
                      rel="noopener noreferrer"
                      target={"_blank"}
                    >
                      <button className="btn d-none inventory_btn px-4 p-1 m-0">
                        Compare
                      </button>
                    </a>
                  ) : (
                    <Link
                      href={{
                        pathname: `/compare/[id]`,
                        query: compare,
                      }}
                      as={`/compare/${compare}`}
                      target={"_blank"}
                    >
                      <a rel="noopener noreferrer">
                        <button className="btn blue_button_2 px-4 p-1 m-0">
                          Compare
                        </button>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className={`col-12 w-100 p-0 m-0 style-pic p-2`}
          // style={{ display: "flex", alignItems: "flex-end" }}
        >
          <div className="w-100 row p-0 m-0">
            <span className="col-9 p-0 m-0 ">
              <Link
                href={`/cars/used/${Vehicle?.model_year}-${makeSlug?.make}-${makeSlug?.model}-${id}`}
              >
                <a
                          onClick={onBeforeViewDetailClick}
                
                className="p-0 py-1 text-decoration-none text-start inventory_a__title_2 w-100 ">
                  {title.substring(0, 30) + (title.length > 30 ? "..." : "")}
                </a>
              </Link>
            </span>
            <span className="col-3 p-0 m-0">
              <span
                className="p-2 w-100"
                data-cg-vin={Vehicle?.vin_number}
                data-cg-price={special_price ? special_price : sell_price}
              ></span>
            </span>
          </div>

          <div className="p-0 m-0 py-3 d-flex flex-row justify-content-between align-items-center w-100">
            <p className="p-0 m-0 p__odometer">
              <FaTachometerAlt /> &nbsp;
              {priceComma(odometer, 2)} {odometer_type === 1 ? "Mi" : "Km"}
            </p>
            {car?.vehicle_status === 7 || car?.vehicle_status === 6 ? (
              ""
            ) : !car?.vehicle_site_detail?.call_for_price && sell_price != 0 ? (
              <p
                className={`CERAMIK SELL-PRICE-&-PAYMENT d-flex justify-content-center align-item-center p-0 m-0 inventory_p__price`}
              >
                {" "}
                <p
                  className={`SELL-RICE d-inline inventory_p__price m-0 ${
                    special_price !== 0 && "inventory_p__sellprice_line"
                  } `}
                  style={{color:'#2bc400'}}
                >
                  $ {priceComma(sell_price, 2)}
                </p>
                <p
                  className="PAYMENT d-flex align-items-center justify-content-center ml-2"
                  style={{ fontSize: "15px", whiteSpace: "nowrap" }}
                >
                  {car?.payment ? car?.payment : ""}
                </p>
              </p>
            ) : (
              <p
                className={`CERAMIK SELL-PRICE-&-PAYMENT d-flex justify-content-center align-item-center p-0 m-0 inventory_p__price`}
              >
                {" "}
                <p className={"SELL-RICE d-inline car_item_p__price_text m-0"}>
                  Call For Price
                </p>
              </p>
            )}

            {car?.vehicle_status === 7 || car?.vehicle_status === 6
              ? ""
              : !car?.vehicle_site_detail?.call_for_price &&
                special_price !== 0 && (
                  <div className="p-0 m-0">
                    <p className="p-0 m-0 inventory_p__price">
                      ${priceComma(special_price, 2)}
                    </p>
                  </div>
                )}
          </div>
          <div className="p-0 m-0 car_item_div__layer_content_container">
            <div className="d-flex flex-wrap  col-12  py-2 p-0 m-0 px-0 justify-content-between align-items-start change_1 inventory-details">
              <div
                className="p-0 m-0   col-6  pr-2 "
                // style={{ borderRight: "1px solid #000" }}
              >
                <div className="col-12 p-0 m-0 inv-details-line">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Stock # :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">{stockNO}</p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0 ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Engine :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.engine_cylinders}
                    </p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0 ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Fuel Type :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.fuel_type}
                    </p>
                  </div>
                </div>
                <div className=" col-12  p-0 m-0 inv-details-line  ">
                  <div className="1 d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Exterior :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.exterior_color?.name}
                    </p>
                  </div>
                </div>

                <div className=" col-12  p-0 m-0  inv-details-line">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Transmission :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.Transmission?.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6   p-0 m-0 pl-2 ">
                <div className=" col-12  p-0 m-0 inv-details-line ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Body Style :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.BodyStyle?.name}
                    </p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0  ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1 inv-details-line-sol">
                    <p className="p-0 m-0 col-6">Odometer :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {priceComma(odometer, 2)}{" "}
                      {odometer_type === 1 ? "MI" : "KM"}
                    </p>
                  </div>
                </div>

                <div className=" col-12  p-0 m-0 inv-details-line ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Drivetrain :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.drive_type}
                    </p>
                  </div>
                </div>

                {/* <div className=" col-12  p-0 m-0 inv-details-line">
                <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                  <p className="p-0 m-0 col-6">Vin :&nbsp;</p>
                  <p className="p-0 m-0 col-6 right-in-left overflow-hidden">
                    {car?.Vehicle?.vin_number}
                  </p>
                </div>
              </div> */}
                <div className="col-12   p-0 m-0  inv-details-line ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Doors :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.doors}
                    </p>
                  </div>
                </div>
                <div className="col-12   p-0 m-0  inv-details-line ">
                  <div className="d-flex inventory_div__cell p-0 m-0 py-1">
                    <p className="p-0 m-0 col-6">Interior :&nbsp;</p>
                    <p className="p-0 m-0 col-6 right-in-left">
                      {Vehicle?.interior_color?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-0 mt-3 col-12 d-flex px-3 pb-2 row w-100">
              {car?.is_certified ? (
                <span
                  className="p-0 m-0 col-6"
                  style={{
                    fontSize: "11px",
                    color: "#606060",
                    fontWeight: "700",
                  }}
                >
                  <FaCheck /> Certified Pre-Owned
                </span>
              ) : (
                ""
              )}
              {car?.vehicle_site_detail?.carfax_link &&
                Vehicle?.carfax_link && (
                  <div className="p-0 m-0  col-12 w-100 c">
                    <a
                      className="p-0 m-0 w-100 d-flex justify-content-end"
                      href={Vehicle?.carfax_link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img
                        src="/images/inventory/carfax.svg"
                        alt=""
                        style={{
                          width: "100px",
                          objectFit: "contain",
                        }}
                      />
                    </a>
                  </div>
                )}
              {car?.vehicle_site_detail?.carfax_link &&
                !Vehicle?.carfax_link &&
                Vehicle?.carfax_pdf && (
                  <div className="p-0 m-0 mt-2 carfax_inventory col-12 ">
                    <a
                      className="p-0 m-0 w-100 d-flex justify-content-end"
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
                         
                        }}
                      />
                    </a>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItem;
