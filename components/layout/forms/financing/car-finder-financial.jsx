import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useGetColor } from "../../../../hooks/common/useGetColor";
import { useGetFooterData } from "../../../../hooks/common/useGetFooterData";
import { getToken } from "../../../../utils/common/get_token";
import Loading from "../../../common/web/loading/loading";
import CarFinderForm from "../car-finder/car_finder_form";

const CarFinderVehicleFinancial = (props) => {
  const { show, onClose, formik, domain , dealerData} = props;
  const [showPersonal, setShowPersonal] = React.useState(() =>
    getToken() ? false : true
  );
  const { data, isLoading, isFetching, isError, error, isSuccess } =
    useGetFooterData(domain);
  const { data: colorData } = useGetColor();
  return (
    isSuccess && (
      <Modal
        contentClassName="eforms_div__container"
        show={show}
        size="xl"
        onHide={onClose}
        className="modal-background-image"
      >
        {(isLoading || isFetching) && <Loading />}
        <Modal.Header >
          <Modal.Title className="" style={{ color: "#000" }}>
            Car Finder
          </Modal.Title>
          <button
            style={{ backgroundColor: "transparent" }}
            className="border-0"
            onClick={() => {
              onClose();
            }}
          >
            <FaTimes
              style={{
                border: "0px",
                color: "#000",
              }}
            />
          </button>
        </Modal.Header>
        <Modal.Body >
          <CarFinderForm
            showPersonal={showPersonal}
            setShowPersonal={setShowPersonal}
            otherFormik={formik}
            dealership={data}
            domain={domain}
            colors={colorData}
            dealerData={dealerData}
          />
        </Modal.Body>
      </Modal>
    )
  );
};

export default CarFinderVehicleFinancial;
