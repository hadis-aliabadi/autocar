import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const FinanceModalBoxContainer = ({ title = "", children, hasError }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  return (
    <>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        centered
        contentClassName="p-2 m-0 rounded eforms_div__container"
      >
        <Modal.Header className="p-0 m-0 border-0">
          <Modal.Title className="p-0 m-0 w-100">
            <div className="p-1 m-0 mb-3 d-flex row align-items-center justify-content-between">
              <h4 className="p-0  m-0 footer_h4__category_title">{title}</h4>
              <button
                className="p-0 m-0 modal_close_button__style"
                onClick={handleClose}
              >
                <FaTimes size={28} />
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 m-0 eforms_div__container">
          <>
            {children}
            <div className="p-0 px-1 m-0 w-100">
              <button
                type="button"
                className="btn px-4 py-2 eform_binventory_dark_blue_btnutton__submit"
                disabled={hasError}
                onClick={() => handleClose()}
              >
                Save Changes
              </button>
            </div>
          </>
        </Modal.Body>
      </Modal>
      <div className="p-0 m-0 d-flex flex-column align-items-center justify-content-center eform_finance_modal_div__container">
        <div className="p-0 px-2 m-0 w-100 d-flex align-items-center justify-content-between">
          <span>{title}</span>
          <div className="eform_modal_checkbox_div__style d-flex align-items-center justify-content-center">
            {!hasError && <FaCheck size={10} />}
          </div>
        </div>
        <img
          src="/icons/common/finance-modal-icon-polygan.png"
          alt=""
          className="eform_finance_modal_img__container"
          onClick={() => handleOpen()}
        />
      </div>
    </>
  );
};

export default FinanceModalBoxContainer;
