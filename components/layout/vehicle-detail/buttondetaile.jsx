import { useFormik } from "formik";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";

import * as Yup from "yup";
import {
  FaDollarSign,
  FaCalculator,
  FaInfoCircle,
  FaMapMarker,
  FaRegComments,
  FaCamera,
  FaCameraRetro,
  FaVideo,
} from "react-icons/fa";
import GetMoreInformation from "./get_more_information";
import { useRouter } from "next/router";
import CalculatoreCustomerWeb from "../../common/web/calculator/calculator";

const ButtonDetaileProduct = (props) => {
  const { dealerData, domain, data } = props;
  const [confirm, setConfirm] = useState(false);
  const [loanTerm, setLoanTerm] = useState();
  const [intRate, setIntRate] = useState();
  const [downPayment, setDownPayment] = useState();
  const [tradeValue, setTradeValue] = useState();
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState();
  const [token, setToken] = useState("");
  const [results, setResults] = useState();
  const [information, setInformation] = useState();
  const [video, setVideo] = useState();
  const [link, setlink] = useState("");
  const [calculate, setCalculate] = useState();
  const calc = () => {
    let data = (
      (parseFloat(intRate) / 1200 +
        parseFloat(intRate) /
          1200 /
          (Math.pow(1 + parseFloat(intRate) / 1200, parseInt(loanTerm)) - 1)) *
      (parseInt(vehiclePrice) -
        (parseInt(downPayment) + parseInt(tradeValue) || 0))
    ).toFixed(2);
    setResults(data);
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  useEffect(() => {
    setToken(getToken());
  }, []);

  const router = useRouter();

  useEffect(() => {
    setlink(`${window.location.host}`);
  }, []);

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

  const formik = useFormik({
    initialValues: {
      dealershld: 1,
      f_name: "",
      l_name: "",
      mobile: "",
      message: "",
      email: "",
      status: 1,
    },
    validationSchema: Yup.object({
      dealershld: Yup.number(),
      f_name: !token && Yup.string().required(),
      l_name: !token && Yup.string().required(),
      email: !token && Yup.string().email().required(),
      mobile: !token && Yup.number().required(),
      message: !token && Yup.string().required(),
    }),
    onSubmit: submitHandler,
  });

  async function submitHandler(values) {
    const token = getToken();
    const config = token
      ? {
          Headers: {
            Authorization: token,
          },
        }
      : undefined;

    try {
      const res = await agent.contactUs.post(values, config);
    } catch (err) {
      console.log(err);
    }
  }
  const showmodal = () => {
    setModal(true);
  };
  const modallocationClose = () => {
    setLocation(false);
  };
  const modalcalculatorClose = () => {
    setCalculate(false);
  };
  const modalCloseHandle = () => {
    setModal(false);
  };
  const modalInformationClose = () => {
    setInformation(false);
  };
  const modalVdeoClose = () => {
    setVideo(false);
  };
  return (
    <>
      <Modal
        show={modal}
        onHide={modalCloseHandle}
        size="xl"
        onSubmit={formik.handleSubmit}
        onClick={formik.handleSubmit}
      >
        <Modal.Header
          style={{ color: "#fff", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Request Information</Modal.Title>
          <CloseButton
            onClick={() => {
              modalCloseHandle();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#fff", backgroundColor: "#000" }}>
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 p-0 pr-1">
                <input
                  style={{ borderColor: "#fff" }}
                  id="f_name"
                  name="f_name"
                  type="text"
                  className={`form-control  my-1 ${
                    formik.touched.f_name && formik.errors.f_name
                  } border-3`}
                  placeholder="Your First Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.f_name}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                <input
                  style={{ borderColor: "#fff" }}
                  id="l_name"
                  name="l_name"
                  type="text"
                  className={`form-control ${
                    formik.touched.l_name && formik.errors.l_name
                  } border-3`}
                  placeholder="Your Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.l_name}
                />
              </div>
            </div>
          )}
          {!token && (
            <div className="d-flex row justify-content-center align-items-center text-center col-12 m-0">
              <div className="col-12 col-md-6 my-1 p-0 pr-1">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                  } border-3`}
                  placeholder="Your Email"
                  style={{ borderColor: "#fff" }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <div className="col-12 col-md-6 my-1 p-0">
                {/* <NumberFormat
                  prefix="+"
                  format="+# (###) ###-####"
                  mask="_"
                  allowEmptyFormatting={false}
                  onValueChange={(e) => {
                    formik.setFieldValue("mobile", e.value);
                  }}
                  placeholder="Cell Phone Number"
                  onBlur={formik.handleBlur}
                  name="mobile"
                  id="mobile"
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  value={formik.values.mobile}
                /> */}
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  style={{ borderColor: "#fff" }}
                  className={`form-control ${
                    formik.touched.mobile && formik.errors.mobile
                  } border-3`}
                  placeholder="Your mobile"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                />
              </div>
            </div>
          )}
          <div className="col-12">
            <textarea
              style={{ borderColor: "#fff" }}
              id="message"
              name="message"
              rows={6}
              className="form-control w-100 h-100 border-3"
              placeholder="Some Text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
          </div>
          <div className="p-0 m-0 mt-4 col-12 d-flex row align-items-center justify-content-start">
            <div className="col-12 d-flex row align-items-center justify-content-start">
              <input
                type="checkbox"
                name="confirmation"
                checked={confirm}
                value={confirm}
                id="confirmation"
                className="col-1 d-flex align-items-center justify-content-end"
                onChange={() => {
                  setConfirm((prev) => {
                    if (prev === false) {
                      formik.setFieldError("confirm", false);
                    }
                    return !prev;
                  });
                }}
              />
              <label
                className="col-11 d-flex align-items-center justify-content-start pl-0 mb-0"
                style={{ wordWrap: "break-word", color: "#fff" }}
              >
                Disclaimer : By submitting this application , you authorize us
                to run your credit report.
              </label>
              {formik.errors.confirm && (
                <p className="p-0 mt-1 mb-3 ml-3 text-danger">Accept rules</p>
              )}
            </div>
            <div className="col-12 mt-4">
              <button
                type="submit"
                className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center"
                style={{
                  backgroundColor: "#ce1431",
                  color: "#f6fbff",
                }}
                disabled={confirm ? false : true}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
          <CloseButton
            color={"#fff"}
            onClick={() => {
              modalVdeoClose();
            }}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 youtube_video_size">
            <iframe
              src={`${linkToEmbed(data?.youtube_link)}`}
              width={"100%"}
              className="youtube_video_size"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalcalculatorClose}
        show={calculate}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Calculate Your Auto Loan Payment:</Modal.Title>
          <CloseButton
            color={"#fff"}
            onClick={() => {
              modalcalculatorClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <CalculatoreCustomerWeb comFrom="modal" data={props} />
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
          style={{ color: "#fff", backgroundColor: "#000" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Location</Modal.Title>
          <CloseButton
            onClick={() => {
              modallocationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#fff", backgroundColor: "#000" }}>
          <Link href="#" class="d-flex col-12">
            <div className="p-0 m-0 d-flex row col-12 justify-content-center align-items-center text-center">
              <h3 className="vehicle_modal_header-style border-1 col-12 d-flex row">
                {dealerData?.dba
                  ? dealerData?.dba
                  : dealerData?.data?.bussiness_name}
              </h3>
              <p className="d-flex row col-12 justify-content-start align-items-start text-start">
                {dealerData?.data?.business_street} {" ,"}
                {dealerData?.data?.business_postal}
              </p>
              <iframe
                src={dealerData?.data?.map_url}
                frameborder="0"
                height="400"
                class="border-0 w-100 d-flex row col-12"
                aria-hidden="false"
                tabindex="0"
                width="100%"
                className={`mb-2`}
              ></iframe>
              <Link href="/directions">
                <button
                  type="submit"
                  className="btn pl-4 pr-4 pt-1 pb-1 d-flex col-12 text-center align-items-center justify-content-center blue_button --finance"
                >
                  <span className="p-0 m-0 w-100">Get Directions</span>
                </button>
              </Link>
            </div>
          </Link>
        </Modal.Body>
      </Modal>
      <Modal
        onHide={modalInformationClose}
        show={information}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ color: "#000", backgroundColor: "#fff" }}
          className="vehicle_modal_header-style border-1"
        >
          <Modal.Title>Request More information</Modal.Title>
          <CloseButton
            onClick={() => {
              modalInformationClose();
            }}
          />
        </Modal.Header>
        <Modal.Body style={{ color: "#000", backgroundColor: "#fff" }}>
          <GetMoreInformation
            domain={domain}
            vehicleId={data?.id}
            modalInformationClose={modalInformationClose}
          />
        </Modal.Body>
      </Modal>

      <div className="p-0 m-0 px-2 pt-0 w-100 d-flex flex-column justify-content-between align-items-center">
        <div className="p-0 m-0 w-100 pb-lg-0">
          {data?.youtube_link && (
            <div className="px-0 px-md-2 px-lg-0 pb-2 p-0 m-0  col-12 col-md-12 col-lg-12 btn">
              <button
                style={{ borderRadius: "0" }}
                onClick={() => setVideo(true)}
                className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0 py-2 pl-2 btn  blue_button "
              >
                <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                  <FaVideo className="p-0 m-0 mr-1" size="20" />
                  View Video
                </span>
              </button>
            </div>
          )}
          <div className="px-0 px-md-2 px-lg-0 py-2 p-0 m-0  col-12 col-md-12 col-lg-12 btn">
            <button
              style={{ borderRadius: "0" }}
              onClick={() => setInformation(true)}
              className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0 py-2 pl-2 btn  blue_button --finance"
            >
              <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                <FaInfoCircle className="p-0 m-0 mr-1" size="20" />
                Get More Information
              </span>
            </button>
          </div>
          <div className="px-0 px-md-2 px-lg-0 py-2 m-0 col-12 col-md-12 col-lg-12 btn">
            <Link href={`/forms/text-us-now?selected_vehicle=${data?.id}`}>
              <a>
                <button
                  style={{ borderRadius: "0" }}
                  // onClick={() => setLocation(true)}
                  className="d-flex row justify-content-center align-items-center text-center p-0 m-0 w-100 py-2 pl-2 btn  blue_button --finance "
                >
                  <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                    <FaRegComments className="p-0 m-0 mr-1" size="20" />
                    Text Us Now
                  </span>
                </button>
              </a>
            </Link>
          </div>
          <div className="px-0 px-md-2 px-lg-0 py-2 m-0  col-12 col-md-12 col-lg-12 btn">
            <button
              style={{ borderRadius: "0" }}
              onClick={() => setCalculate(true)}
              className="d-flex row justify-content-center align-items-center text-center p-0 m-0 w-100 py-2 pl-2 btn  blue_button --finance "
            >
              <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                <FaCalculator className="p-0 m-0 mr-1" size="20" />
                Payment Calculator
              </span>
            </button>
          </div>
          <div className="px-0 px-md-2 px-lg-0 py-2 m-0 col-12 col-md-12 col-lg-12 btn">
            {/* <Link href={`/forms/finance?selected_vehicle=${data?.id}`}> */}
              <a
                onClick={() =>
                  window.askAva.openModal({ product: "creditTool" })
                }
                style={{ borderRadius: "0" }}
                className="d-flex row justify-content-center align-items-center text-center w-100 p-0 m-0 py-2 pl-2 blue_button blue_button--finance btn"
              >
                <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                  <FaDollarSign className="p-0 m-0 mr-1" size="20" />
                  Apply For Financing
                </span>
              </a>
            {/* </Link> */}
          </div>

          <div className="px-0 px-md-2 px-lg-0 py-2 m-0 col-12 col-md-12 col-lg-12 btn">
            <Link href="/directions">
              <a
                style={{ borderRadius: "0" }}
                // onClick={() => setLocation(true)}
                className="d-flex row justify-content-center align-items-center text-center p-0 m-0 w-100 py-2 pl-2 btn  blue_button --finance  "
              >
                <span className="p-0 m-0 d-flex justify-content-center text-uppercase align-items-center text-center detaile_txt_btn">
                  <FaMapMarker className="p-0 m-0 mr-1" size="20" />
                  Get Directions
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonDetaileProduct;
