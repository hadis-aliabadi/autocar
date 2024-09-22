import { useFormik } from "formik";
import { useState } from "react";
import NumberFormat from "react-number-format";
import Select from "react-select";
import * as Yup from "yup";
import { reactSelectInputStyle } from "../../../../utils/common/react_select_styles";
import Link from "next/link";
import { FaCalculator, FaWindowClose } from "react-icons/fa";

const CalculatoreCustomerWeb = (props) => {
  const { sellPrice = undefined, modalMode, type } = props;
  const [results, setResults] = useState();
  const [MSRP, setMSRP] = useState();
  const [CostOfBorrowing, setCostOfBorrowing] = useState();
  const [tax, settax] = useState();
  const [confirm, setConfirm] = useState(false);
  const [showtax, setshowtax] = useState(false);
  const [frequency, setfrequency] = useState(1);
  const formik = useFormik({
    initialValues: {
      vehiclePrice: sellPrice ? +sellPrice : "",
      loanTerm: "",
      intRate: "",
      downPayment: "",
      tradeValue: "",
    },
    validationSchema: Yup.object({
      vehiclePrice: Yup.number("You must enter a number").required("Required"),
      loanTerm: Yup.mixed().required("Required").typeError("Required"),
      intRate: Yup.number("You must enter a number")
        .min(1, "must be more than 0")
        .max(100, "must be less than 100")
        .required("Required"),
    }),
    onSubmit: (values) => {
      let price = values?.vehiclePrice;
      if (frequency === 1) {
        // Monthly
        if (confirm === true) {
          //with tax
          if (formik.values.tradeValue !== "") {
            //with tarde in
            price = price - +formik.values.tradeValue;
          }
          price = price + (price * 13) / 100;
          if (formik.values.downPayment !== "") {
            //with down Payment
            price = price - +formik.values.downPayment;
          }
        } else {
          //without tax
          price = values?.vehiclePrice;
          if (formik.values.downPayment !== "") {
            //with down Payment
            price = price - +formik.values.downPayment;
          }
          if (formik.values.tradeValue !== "") {
            //with tarde in
            price = price - +formik.values.tradeValue;
          }
        }
        const rate = values.intRate / 100 / 12;
        const count = values.loanTerm.value;
        const msrp_show =
          (price * rate * Math.pow(1 + rate, count)) /
          (Math.pow(1 + rate, count) - 1);
        setMSRP(
          (price * rate * Math.pow(1 + rate, count)) /
            (Math.pow(1 + rate, count) - 1)
        );
        if (confirm === true) {
          //with tax
          setshowtax(true);
          if (formik.values.downPayment !== "") {
            //with down Payment
            settax((values?.vehiclePrice * 13) / 100);
          }
          if (formik.values.tradeValue !== "") {
            //with tarde in
            settax(
              ((values?.vehiclePrice - +formik.values.tradeValue) * 13) / 100
            );
          }
          if (
            formik.values.tradeValue === "" &&
            formik.values.downPayment === ""
          ) {
            //without tarde in and down payment
            settax((values?.vehiclePrice * 13) / 100);
          }
          setCostOfBorrowing(msrp_show * count - price);
          setResults(
            msrp_show * count +
              +formik.values.downPayment +
              +formik.values.tradeValue
          );
        } else {
          //without tax
          setshowtax(false);
          setCostOfBorrowing(msrp_show * count - price);
          setResults(
            msrp_show * count +
              +formik.values.downPayment +
              +formik.values.tradeValue
          );
        }
      } else {
        //Weekly
        let price = values?.vehiclePrice;
        if (confirm === true) {
          //with tax
          if (formik.values.tradeValue !== "") {
            //with tarde in
            price = price - +formik.values.tradeValue;
          }
          price = price + (price * 13) / 100;
          if (formik.values.downPayment !== "") {
            //with down Payment
            price = price - +formik.values.downPayment;
          }
        } else {
          //without tax
          price = values?.vehiclePrice;
          if (formik.values.downPayment !== "") {
            //with down Payment
            price = price - +formik.values.downPayment;
          }
          if (formik.values.tradeValue !== "") {
            //with tarde in
            price = price - +formik.values.tradeValue;
          }
        }
        const rate = values.intRate / 100 / 26;
        const count = (26 / 12) * values.loanTerm.value;
        const msrp_show =
          (price * rate * Math.pow(1 + rate, count)) /
          (Math.pow(1 + rate, count) - 1);
        setMSRP(
          (price * rate * Math.pow(1 + rate, count)) /
            (Math.pow(1 + rate, count) - 1)
        );
        if (confirm === true) {
          //with tax
          setshowtax(true);
          if (formik.values.downPayment !== "") {
            //with down Payment
            settax((values?.vehiclePrice * 13) / 100);
          }
          if (formik.values.tradeValue !== "") {
            //with tarde in
            settax(
              ((values?.vehiclePrice - +formik.values.tradeValue) * 13) / 100
            );
          }
          if (
            formik.values.tradeValue === "" &&
            formik.values.downPayment === ""
          ) {
            //without tarde in and down payment
            settax((values?.vehiclePrice * 13) / 100);
          }
          setCostOfBorrowing(msrp_show * count - price);
          setResults(
            msrp_show * count +
              +formik.values.downPayment +
              +formik.values.tradeValue
          );
        } else {
          //without tax
          setshowtax(false);
          setCostOfBorrowing(msrp_show * count - price);
          setResults(
            msrp_show * count +
              +formik.values.downPayment +
              +formik.values.tradeValue
          );
        }
      }
    },
  });

  const optionsPercent = [
    {
      label: " 6.98%",
      value: 6.98,
    },
    {
      label: " 6.98%",
      value: 6.98,
    },
    {
      label: " 6.98%",
      value: 6.98,
    },
    {
      label: " 6.98%",
      value: 6.98,
    },
    {
      label: " 6.98%",
      value: 6.98,
    },
    {
      label: " 7.79%",
      value: 7.79,
    },
    {
      label: " 8.09%",
      value: 8.09,
    },
    {
      label: " 8.59%",
      value: 8.59,
    },
  ];
  const options = [
    {
      label: "12 Months",
      value: 12,
    },
    {
      label: "24 Months",
      value: 24,
    },
    {
      label: "30 Months",
      value: 30,
    },
    {
      label: "36 Months",
      value: 36,
    },
    {
      label: "40 Months",
      value: 40,
    },
    {
      label: "48 Months",
      value: 48,
    },
    {
      label: "54 Months",
      value: 54,
    },
    {
      label: "60 Months",
      value: 60,
    },
    {
      label: "66 Months",
      value: 66,
    },
    {
      label: "72 Months",
      value: 72,
    },
    {
      label: "84 Months",
      value: 84,
    },
    {
      label: "96 Months",
      value: 96,
    },
  ];

  const Frequency = [
    {
      label: "Monthly",
      value: 1,
    },
    {
      label: "Bi-Weekly",
      value: 2,
    },
  ];

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="16 m-0 calc-form p-0  w-100 d-flex row align-items-start justify-content-start eforms_calculator_container"
        style={{ borderRadius: "5px" }}
      >
        <div className="col-12 m-0 p-0 calc-form-top d-flex  justify-content-between align-items-center eforms_calculator_header px-2 py-1">
          <div className="pt-1 d-flex justify-content-center align_items-center calc-payment">
            <FaCalculator color="#000" className="mt-1" />
            <p className="p-0 m-0 pl-1">Payment Calculator</p>
          </div>
          {/* <div>
            {" "}
            <button
              className="btn text-center w-100"
              onClick={(e) => {
                e.preventDefault();
                formik.handleReset();
                setMSRP("");
                setCostOfBorrowing("");
                settax("");
                setResults("");
              }}
              id="calculate"
            >
              <span className="p-0 m-0 calc-reset text-nowrap">
                <b className=" lable_style pr-2 ">Reset</b>
                <FaWindowClose color="#606060" />
              </span>
            </button>
          </div> */}
        </div>
        <div
          className="p-0 m-0 col-12 px-2  py-3  label_style_2"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            style={{ fontSize: "13px" }}
            className="p-0 m-0 row w-100 justify-content-between "
          >
            <div className="p-1 m-0 col-12 col-lg-6 d-flex justify-content-center align-items-center ">
              <div className="p-0 m-0 form-group row w-100 align-items-center">
                <label for="loanTerm" className="p-0 m-0 col-12 lable_style">
                  Payment Frequency
                </label>
                <Select
                  className="form-select w-100  eforms_input_select_container   col-12 p-0 m-0"
                  styles={reactSelectInputStyle}
                  options={Frequency}
                  onChange={(e) => {
                    setfrequency(e.value);
                  }}
                  id="frequency"
                  name="frequency"
                />
              </div>
            </div>
            <div className="p-1 m-0 col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start ">
              <div className="p-0 m-0 form-group row w-100 align-items-center">
                <label
                  for="vehiclePrice"
                  className="p-0 m-0 col-12 lable_style "
                >
                  Vehicle Price
                </label>
                <div className="  col-12 p-0 m-0 row">
                <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                  <NumberFormat
                    onValueChange={(e) => {
                      if (e.floatValue) {
                        formik.setFieldValue("vehiclePrice", e.floatValue);
                      } else {
                        formik.setFieldValue("vehiclePrice", "");
                      }
                    }}
                    className="form-control eforms_input_container col-11"
                    id="vehiclePrice"
                    name="vehiclePrice"
                    // placeholder="Vehicle Price"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.vehiclePrice}
                    // prefix={"$ "}
                  />
                  
                </div>
              </div>
              {formik.errors.vehiclePrice && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.vehiclePrice}
                </div>
              )}
            </div>
            <div className="p-1 m-0 col-12 col-lg-6 d-flex flex-column justify-content-start align-items-start">
              <div className="p-0 m-0 form-group row w-100 align-items-center ">
                <label for="downPayment" className="p-0 m-0 col-12 lable_style">
                  Down payment
                </label>
                <div className="  col-12 p-0 m-0 row">
                  <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                    <NumberFormat
                    onValueChange={(e) => {
                      if (e.floatValue) {
                        formik.setFieldValue("downPayment", e.floatValue);
                      } else {
                        formik.setFieldValue("downPayment", "");
                      }
                    }}
                    className="form-control eforms_input_container col-11"
                    id="downPayment"
                    name="downPayment"
                    // placeholder="Down payment"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.downPayment}
                    // prefix={"$ "}
                  />
                </div>
              </div>
              {formik.errors.downPayment && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.downPayment}
                </div>
              )}
            </div>
            <div className="p-1 m-0 col-12 col-lg-6 d-flex flex-column justify-content-start align-items-start">
              <div className="p-0 m-0 form-group row w-100 align-items-center">
                <label for="tradeValue" className="p-0 m-0 col-12 lable_style">
                  Your trade
                </label>
                <div className="  col-12 p-0 m-0 row">
                <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    $
                  </div>
                  <NumberFormat
                    onValueChange={(e) => {
                      if (e.floatValue) {
                        formik.setFieldValue("tradeValue", e.floatValue);
                      } else {
                        formik.setFieldValue("tradeValue", "");
                      }
                    }}
                    className="form-control eforms_input_container col-11"
                    id="tradeValue"
                    name="tradeValue"
                    // placeholder="Your trade"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.tradeValue}
                    // prefix={"$ "}
                  />
                  
                </div>
              </div>
              {formik.errors.tradeValue && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.tradeValue}
                </div>
              )}
            </div>

            {/* MONTH TERM */}

            <div className="p-1 m-0 col-12 col-lg-6 d-flex flex-column justify-content-start align-items-start ">
              <div className="p-0 m-0 form-group row w-100 align-items-center">
                <label for="loanTerm" className="p-0 m-0 col-12 lable_style">
                  Month Term
                </label>
                <Select
                  className="form-select w-100  eforms_input_select_container   col-12 p-0 m-0"
                  styles={reactSelectInputStyle}
                  options={options}
                  onChange={(e) => {
                    formik.setFieldValue("loanTerm", e);

                    // if (
                    //   e.value === 12 ||
                    //   e.value === 24 ||
                    //   e.value === 36 ||
                    //   e.value === 48 ||
                    //   e.value === 60
                    // ) {
                    //   formik.setFieldValue("intRate", 6.98);
                    // } else if (e.value === 72) {
                    //   formik.setFieldValue("intRate", 7.79);
                    // } else if (e.value === 84) {
                    //   formik.setFieldValue("intRate", 8.09);
                    // } else if (e.value === 96) {
                    //   formik.setFieldValue("intRate", 8.59);
                    // }
                  }}
                  id="loanTerm"
                  name="loanTerm"
                  placeholder="36 Months"
                  value={formik.values.loanTerm}
                />
              </div>
              {formik.errors.loanTerm && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.loanTerm}
                </div>
              )}
            </div>
            <div className="p-1 m-0 col-12 col-lg-6 d-flex flex-column justify-content-start align-items-start">
              <div className="p-0 m-0 form-group row w-100 align-items-center">
                <label for="loanTerm" className="p-0 m-0 col-12 lable_style">
                  Interest rate
                </label>
                <div className=" col-12 p-0 m-0 row">
                  <NumberFormat
                    onValueChange={(e) => {
                      if (e.floatValue) {
                        formik.setFieldValue("intRate", e.floatValue);
                      } else {
                        formik.setFieldValue("intRate", "");
                      }
                    }}
                    className="form-control eforms_input_container col-11"
                    id="intRate"
                    name="intRate"
                    // placeholder="Your trade"
                    displayType={"number"}
                    thousandSeparator={true}
                    value={formik.values.intRate}
                    // prefix={"$ "}
                  />
                  <div className="col-1 p-0 m-0 d-flex justify-content-center align-items-center eforms_calculator_icons">
                    %
                  </div>
                </div>

                {/* <Select
                  className="form-select w-100  eforms_input_select_container col-lg-6 col-md-4 col-6 p-0 m-0"
                  styles={reactSelectInputStyle}
                  options={optionsPercent}
                  onChange={(e) => {
                    formik.setFieldValue("intRate", e.value);
                    {console.log(e);}

                    // if (
                    //   e.value === 12 ||
                    //   e.value === 24 ||
                    //   e.value === 36 ||
                    //   e.value === 48 ||
                    //   e.value === 60
                    // ) {
                    //   formik.setFieldValue("intRate", 6.98);
                    // } else if (e.value === 72) {
                    //   formik.setFieldValue("intRate", 7.79);
                    // } else if (e.value === 84) {
                    //   formik.setFieldValue("intRate", 8.09);
                    // } else if (e.value === 96) {
                    //   formik.setFieldValue("intRate", 8.59);
                    // }
                  }}
                  id="loanTerm"
                  name="loanTerm"
                  placeholder="6.98%"
                  value={formik.values.percent}
                /> */}
                {/* {formik.errors.loanTerm && (
                  <div
                    style={{
                      color: "#ce1431",
                    }}
                  >
                    {formik.errors.loanTerm}
                  </div>
                )} */}
              </div>
              {formik.errors.intRate && (
                <div
                  style={{
                    color: "#ce1431",
                  }}
                >
                  {formik.errors.intRate}
                </div>
              )}
            </div>
            {/* MONTH TERM */}

            <div className="row w-100 m-0 p-0">
              {/* <div className="NEW p-0 m-0 col-12 col-lg-12 m-2">
              <div className="p-0 m-0 row align-items-center"> */}
              {/* Estimate */}
              <div className="p-1 m-0 col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="p-0 m-0 form-group row w-100 align-items-center">
                  <p className="d-flex col-12   p-0 m-0 ">
                    Your Estimated Payment
                  </p>
                  <div
                    className=" p-2   col-12 p-0 m-0 d-flex align-items-center form-control  "
                    style={{
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className="calc-input-soms d-flex row  p-0 m-0 justify-content-start align-items-center ">
                      <NumberFormat
                        value={Math.round(MSRP)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              </div>

              {/* Cost Of */}
              <div className="p-1 m-0 col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="p-0 m-0 form-group row w-100 align-items-center">
                  <p className="d-flex col-12 p-0 m-0 ">
                    {" "}
                    Cost Of Borrowing
                  </p>
                  <div
                    className="p-2  col-12 p-0 m-0 d-flex align-items-center form-control "
                    style={{
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className="calc-input-soms d-flex row txt-calc  p-0 m-0 justify-content-start align-items-start text-start">
                      <NumberFormat
                        value={Math.round(CostOfBorrowing)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              </div>

              {/* MSRP */}
              <div className="p-1 m-0 col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="p-0 m-0 form-group row w-100 align-items-center">
                  <p className="d-flex col-12 p-0 m-0 ">
                    MSRP
                  </p>
                  <div
                    className=" p-2  col-12 p-0 m-0 d-flex align-items-center form-control "
                    style={{
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className=" calc-input-soms d-flex txt-calc row  p-0 m-0 justify-content-start align-items-start text-start">
                      <NumberFormat
                        value={formik.values.vehiclePrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="p-1 m-0 col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <div className="p-0 m-0 form-group row w-100 align-items-center">
                  <p className="d-flex col-12 p-0 m-0 ">
                    Total Obligation
                  </p>
                  <div
                    className="w-100 p-2  col-12 p-0 m-0 d-flex align-items-center form-control "
                    style={{
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className="calc-input-soms d-flex txt-calc row w-100 p-0 m-0 justify-content-start align-items-start text-start">
                      <NumberFormat
                        value={Math.round(results)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              </div>

              {showtax && (
                <div className="p-1 m-0 col-12 col-lg-6 row">
                  <p className="d-flex col-6 col-md-6 col-lg-6 p-0 m-0 ">
                    Sales Taxes
                  </p>
                  <div
                    className="col-lg-6 col-md-4 col-6 p-0 m-0 d-flex align-items-center form-control "
                    style={{
                      backgroundColor: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "0",
                    }}
                  >
                    <h5 className="calc-input-soms p-2 txt-calc d-flex row  p-0 m-0 justify-content-start align-items-start text-start">
                      <NumberFormat
                        value={Math.round(tax)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </h5>
                  </div>
                </div>
              )}
              {/* </div>
            </div> */}

              {/* <div className="8 p-0 m-0 col-12 col-lg-6 m-1">
                <div className="p-0 m-0 row justify-content-center align-items-center">
                  <div className="p-1 m-0 col-12 row">
                    <input
                      type="checkbox"
                      name="confirm"
                      id="confirm"
                      className="m-0  "
                      onChange={(e) => {
                        setConfirm(e.target.checked);
                      }}
                    />
                    <label className="m-0 ml-1">Include sales tax</label>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="p-0 m-0 col-12 row justify-content-strat align-items-center">
              <div className="p-1 m-0 pt-2 col-4">
                <button
                  type="submit"
                  style={{ height: "auto !important" }}
                  className="py-1 btn blue_button_3 text-center w-100"
                >
                  <span className="p-0 m-0 pb-2 ">Calculate Payment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container-fluid">
        <table className="table table-striped" id="payment-table">
          <thead>
            <tr>
              <th>Payment Frequency</th>
              <th>Payment Amount</th>
              <th className="align-center">
              <span className="desktop-nowrap">Total Interest to be Paid</span>
              <span className="desktop-nowrap">over the Duration</span>
              <span className="desktop-nowrap"> of the Loan</span>
              </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="center">Monthly</th>
            <td className="center" id="monthly-mp">$0.00</td>
            <td className="center" id="monthly-timp">$0.00</td>
          </tr>
          <tr>
            <th className="center">Bi-weekly</th>
            <td className="center" id="bi-weekly-bwp">$0.00</td>
            <td className="center" id="bi-weekly-tibwp">$0.00</td>
          </tr>
          <tr>
            <th className="center">Weekly</th>
            <td className="center" id="weekly-wp">$0.00</td>
            <td className="center" id="weekly-tiwp">$0.00</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="row w-100 m-0 p-0 justify-content-start align-items-center mt-5 mx-2">
        <Link href="/forms/finance">
          <a className="btn blue_button_3 col-12 col-md-4 px-3 py-2">
            Apply For Financing
          </a>
        </Link>
      </div>
    </>
  );
};

export default CalculatoreCustomerWeb;
