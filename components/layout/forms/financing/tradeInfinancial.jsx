import React from "react";
import { Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { useGetColor } from "../../../../hooks/common/useGetColor";
import { useGetFooterData } from "../../../../hooks/common/useGetFooterData";
import ValueYourDate from "../../../../pages/forms/value-your-trade";
import { getToken } from "../../../../utils/common/get_token";
import Loading from "../../../common/web/loading/loading";

const TradeInFinansial = (props) => {
  const {
    onClose,
    show,
    formik,
    domain,
    vehicleDataForSearch,
    advanceSearchData,
    inModal
  } = props;
  const [showPersonal, setShowPersonal] = React.useState(() =>
    getToken() ? false : true
  );
  const { data, isLoading, isFetching, isError, isSuccess, error } =
    useGetFooterData(domain);
  const { data: colorData } = useGetColor();

  return (
    isSuccess && (
      <Modal
        show={show}
        size="xl"
        onHide={onClose}
        contentClassName="eforms_div__container"
        className="modal-background-image"
      >
        {(isLoading || isFetching) && <Loading />}
        <Modal.Header>
          <Modal.Title style={{ color: "#000" }}>APPRAISE MY TRADE</Modal.Title>
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
        <Modal.Body>
          <ValueYourDate
            showPersonal={showPersonal}
            setShowPersonal={setShowPersonal}
            otherFormik={formik}
            dealership={data}
            domain={domain}
            vehicleDataForSearch={vehicleDataForSearch}
            colors={colorData}
            onClose={onClose}
            advanceSearchData={advanceSearchData}
            inModal={true}
          />
        </Modal.Body>
      </Modal>
    )
  );
};

export default React.memo(TradeInFinansial);
