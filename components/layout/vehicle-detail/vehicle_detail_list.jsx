import { priceComma } from "../../../utils/common/price_odometer_handler";
import Link from "next/link";
import { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";
import Location from "../directions/location";
import GetMoreInformation from "./get_more_information";
import {
  FaTachometerAlt,
  FaCar,
  FaCogs,
  FaGasPump,
  FaPaintRoller,
  FaTruck,
  FaArrowsAltH,
  FaDoorOpen,
  FaBurn,
  FaUserFriends,
  FaFileSignature,
} from "react-icons/fa";

const VehicleDetailList = (props) => {
  const { dealerData, domain } = props;
  const vehicleData = props?.data?.data;
  const showDetail = vehicleData?.vehicle_site_detail;
  const [location, setLocation] = useState();
  const [calculate, setCalculate] = useState();
  const [information, setInformation] = useState();
  const modallocationClose = () => {
    setLocation(false);
  };
  const modalcalculatorClose = () => {
    setCalculate(false);
  };
  const modalInformationClose = () => {
    setInformation(false);
  };

  function containsAnyLetters(str) {
    return /[L]/.test(str);
  }

  const details = [
   
    {
      label: "Year",
      value: vehicleData?.Vehicle?.model_year,
    },
    {
      label: "Make",
      value: vehicleData?.Vehicle?.make,
    },
    {
      label: "Model",
      value: vehicleData?.Vehicle?.model,
    },
    {
      icon: FaCar,
      label: "Body Style",
      value: vehicleData?.Vehicle?.BodyStyle?.name,
    },
    // {
    //   label: "Odometer",
    //   value: `${priceComma(vehicleData?.odometer, 2)} ${
    //     vehicleData?.odometer_type === 1 ? "MI" : "KM"
    //   }`,
    // },

    {
      label: "Drivetrain",
      value: vehicleData?.Vehicle?.drive_type,
    },
    {
      label: "Exterior Color",
      value: vehicleData?.Vehicle?.exterior_color?.name,
      color: vehicleData?.Vehicle?.exterior_color?.code,
    },
    {
      label: "Interior Color",
      value: vehicleData?.Vehicle?.interior_color?.name,
      color: vehicleData?.Vehicle?.interior_color?.code,
    },
    {
      icon: FaTachometerAlt,
      label: "Odometer",
      value: `${priceComma(vehicleData?.odometer, 2)} ${
        vehicleData?.odometer_type === 1 ? "MI" : "KM"
      }`,
    },
    {
      icon: FaCogs,
      label: "Engine Size",
      value: containsAnyLetters(vehicleData?.Vehicle?.engine_size)
        ? vehicleData?.Vehicle?.engine_size
        : `${vehicleData?.Vehicle?.engine_size} L`,
    },
    {
      icon: FaCogs,
      label: "Engine Cylinders",
      value: vehicleData?.Vehicle?.engine_cylinders,
    },
    // {
    //   icon: FaPaintRoller,
    //   label: "Exterior Color",
    //   value: vehicleData?.Vehicle?.exterior_color?.name,
    // },
    {
      icon: FaTruck,
      label: "Transmission",
      value: vehicleData?.Vehicle?.Transmission?.name,
    },
    // {
    //   icon: FaPaintRoller,
    //   label: "Interior Color",
    //   value: vehicleData?.Vehicle?.interior_color?.name,
    // },
    {
      icon: FaArrowsAltH,
      label: "Drivetrain",
      value: vehicleData?.Vehicle?.drive_type,
    },
    {
      icon: FaDoorOpen,
      label: "Doors",
      value: vehicleData?.Vehicle?.doors,
    },
    {
      icon: FaGasPump,
      label: "Fuel Type",
      value: vehicleData?.Vehicle?.fuel_type,
    },
    {
      icon: FaBurn,
      label: "Passenger",
      value: vehicleData?.Vehicle?.passenger,
    },
    ...(showDetail?.frk_titleStatus && vehicleData?.TitleStatus?.name
      ? [
          {
            icon: FaFileSignature,
            label: "Title Status",
            value: vehicleData?.TitleStatus?.name,
          },
        ]
      : []),
    ...(showDetail?.vin_number && vehicleData?.Vehicle?.vin_number
      ? [
          {
            icon: FaFileSignature,
            label: "Vin",
            value: vehicleData?.Vehicle?.vin_number,
          },
        ]
      : []),
      ...(showDetail?.stock_NO && vehicleData?.stock_NO
        ? [
            {
              icon: FaFileSignature,
              label: "Stock",
              value: vehicleData?.stock_NO,
            },
          ]
        : []),
  ];

  // Filter out objects with undefined or null values
  const filteredDetails = details.filter(
    (detail) => detail.value !== undefined && detail.value !== null
  );


  return (
    <>
      <Modal
        onHide={modalcalculatorClose}
        show={calculate}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Financing Calculator:</Modal.Title>
          <CloseButton
            style={{ color: "#000" }}
            onClick={() => {
              modalcalculatorClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <CalculatoreCustomerWeb data={props} />
        </Modal.Body>
      </Modal>
      <Modal
        show={location}
        onHide={modallocationClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="vehicle_modal_header-style border-1"
          style={{ color: "#000", backgroundColor: "#fff" }}
        >
          <Modal.Title>Location</Modal.Title>
          <CloseButton
            onClick={() => {
              modallocationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <Link href="#" class="d-flex col-12">
            <div className="d-flex row col-12 justify-content-center align-items-center text-center">
              <h3 className="vehicle_modal_header-style border-1 col-12 d-flex row">
                {dealerData?.bussiness_name}
              </h3>
              <p className="d-flex row col-12 justify-content-start align-items-start text-start">
                {dealerData?.business_street} {" ,"}
                {dealerData?.business_postal}
              </p>
              <Location dealerData={dealerData} />
              <Link href="/directions">
                <button
                  style={{ borderRadius: "0", backgroundColor: "#D0660" }}
                  onClick={() => setLocation(true)}
                  className="btn red_button my-3 col-12 p-0 m-0 vehicle__btn--button btn"
                >
                  <p className="m-sm-0  m-0 py-3">Get Directions</p>
                </button>
              </Link>
            </div>
          </Link>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalInformationClose}
        show={information}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>GET MORE INFORMATION</Modal.Title>
          <CloseButton
            onClick={() => {
              modalInformationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <GetMoreInformation
            domain={domain}
            vehicleId={vehicleData?.id}
            modalInformationClose={modalInformationClose}
          />
        </Modal.Body>
      </Modal>
      <div className="col-12 row p-md-3 p-0 m-0 d-flex justify-content-center align-items-center">
        {filteredDetails.map((detail, index) => (
          <DetailItem key={index} {...detail} />
        ))}
      </div>
    </>
  );
};

export default VehicleDetailList;

const DetailItem = ({ icon: Icon, label, value ,color}) => (
  <div className="p-0 px-2 m-0 w-100 d-flex align-items-center justify-content-between vehicle_single_detail_div__container vehicle_single_detail_change_div__container col-12">
    <span classname="col-6 p-0 m-0 d-flex justify-content-center">{label}</span>
    
    {color?
     <div className="p-0 m-0 d-flex align-items-center">
     <div
       className="p-0 m-0 mx-0 mx-md-2"
       style={{
         width: "20px",
         height: "20px",
         backgroundColor: `#${color}`,
       }}
     />
     <span className="d-none d-md-inline">
       {value}
     </span>
   </div>
    :<span classname="col-6 p-0 m-0 d-flex justify-content-center">{value}</span>}
   
  </div>
);
