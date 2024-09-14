import { Modal } from "react-bootstrap";
import React from "react";
import DesiredVehicleFinancial from "./desiredvehiclefinancial";
import { FaTimes } from "react-icons/fa";
import EformsHeader from "../../../common/layout/header/eform_header";

const DesiredVehiclee = (props) => {
  const {
    show,
    onClose,
    formik,
    domain,
    advanceSearchData,
    dealerData,
    setadvanceSearchCar , 
    isModal,
    vehiclesData2,
  } = props;
  return (
    <Modal
      size="xl"
      centered
      show={show}
      onHide={onClose}
      contentClassName="p-2 m-0  col-12"
    >
      <Modal.Header className="p-0 m-0 border-0 col-12">
        <Modal.Title className="p-0 m-0 w-100">
          <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
            <h6>Advance Search</h6>
            <button
              className="p-0 m-0 modal_close_button__style d-flex align-items-center justify-content-center"
              onClick={onClose}
            >
              <FaTimes size={18} />
            </button>
          </div>
        </Modal.Title>
      </Modal.Header>
      <DesiredVehicleFinancial
        onClose={onClose}
        advanceSearchData={advanceSearchData}
        otherFormik={formik}
        domain={domain}
        dealerData={dealerData}
        setadvanceSearchCar={setadvanceSearchCar}
        isModal={true}
        vehiclesData2={vehiclesData2}
      />
    </Modal>
  );
};

export default DesiredVehiclee;
