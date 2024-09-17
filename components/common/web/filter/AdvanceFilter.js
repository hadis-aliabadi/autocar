import { useEffect, useState } from "react";
import { reactSelectAdvanceSearchInputStyleCarDeatail } from "../../../../utils/common/react_select_styles";
import SelectBox from "../../../layout/forms/select_box";
import SwiperCore, { Navigation, Thumbs, Autoplay, Pagination } from "swiper";
import { useInventoryFilterFormik } from "../../../../hooks/context/useInventoryFilterFormik";
import { FaSearch } from "react-icons/fa";
import { calculateOdometers } from "../../../../utils/common/calculate_odometer";
import { calculateYear } from "../../../../utils/common/calculate_year";
import { useRouter } from "next/router";
import Search from "../../../layout/home/search/search";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import { IoIosArrowForward } from "react-icons/io";

SwiperCore.use([Navigation, Thumbs, Autoplay, Pagination]);
const AdvanceFilter = (props) => {
  const {
    domain,
    advanceSearchData,
    minOdometer,
    maxOdometer,
    posts,
    setPosts,
    page,
    setPage,
    otherFormik = undefined,
    searchKeywordes,
    setSearchKeywordes,
    setkeyworder,
    keyworder,
    vehicleDataForSearch,
    vehiclesData2,
    dealerData,
    setLoadingSearch,
    loadingSearch,
    isModal,
  } = props;

  const Router = useRouter();
  const [odometerType, setOdometerType] = useState(2);
  const [kmOdometer, setKmOdometer] = useState();
  const [miOdometer, setMiOdometer] = useState();
  useEffect(() => {
    odometerType === 2
      ? setKmOdometer(advanceSearchData?.odometerKMRange)
      : setMiOdometer(advanceSearchData?.odometerMIRange);
  }, [odometerType]);
  const [years] = useState(calculateYear);
  const [odometers] = useState(calculateOdometers(minOdometer, maxOdometer));
  const [prices] = useState(advanceSearchData?.priceRange);
  const [hours] = useState(advanceSearchData?.odometerHourRange);
  const formik = useInventoryFilterFormik();
  const {
    bodyStyle,
    color,
    drive_type_list,
    transmission,
    vehicleModel,
    vehicleModelYear,
    vehicleYear_full,
    vehicleMake_full,
    vehicleModel_full,
    vehicleEngine_cylinders_full,
    vehicleTransmission_full,
    vehicleBodyStyle_full,
    vehicleFuel_type_full,
    vehicleType_full,
  } = advanceSearchData;
  const [allOptions, setAllOptions] = useState();
  const cureentYear = new Date().getFullYear();
  const makes = vehicleMake_full ? Object.entries(vehicleMake_full) : [];
  const makess = Object.keys(vehicleMake_full);
  const types = vehicleType_full ? Object.entries(vehicleType_full) : [];
  const typess = Object.keys(vehicleType_full);
  const yearOption = vehicleModelYear ? Object.entries(vehicleModelYear) : [];
  const models = vehicleModel_full ? Object.entries(vehicleModel_full) : [];
  const enginecylinders = vehicleEngine_cylinders_full
    ? Object.entries(vehicleEngine_cylinders_full)
    : [];
  const modelss = Object.keys(vehicleModel_full);
  const yearss = Object.keys(vehicleYear_full);
  const enginecylinder = Object.keys(vehicleEngine_cylinders_full);
  const transmissions = Object.keys(vehicleTransmission_full);
  const bodystyle = Object.keys(vehicleBodyStyle_full);
  const typeFuel = Object.keys(vehicleFuel_type_full);

  const engineOptions = [
    { value: 2, label: "2 Cylinder" },
    { value: 4, label: "4 Cylinder" },
    { value: 6, label: "6 Cylinder" },
    { value: 8, label: "8 Cylinder" },
    { value: 10, label: "10 Cylinder" },
    { value: 12, label: "12 Cylinder" },
    { value: "Electric", label: "Electric" },
  ];
  const fuelTypeOptions = [
    { value: "Gasoline", label: "Gasoline" },
    { value: "Electric", label: "Electric" },
    { value: "Hybrid", label: "Hybrid" },
    { value: "Other", label: "Other" },
  ];

  const getOptionsForMakeAndModel = (typeOfState) => {
    let makeOption = [];
    let modelOption = [];
    let yearrrOption = [];
    let enginescylinder = [];

    makes?.map((makeAndModel) => {
      makeOption.push({
        value: makeAndModel[0],
        label: makeAndModel[0],
        models: makeAndModel[1]?.model,
        years: yearOption?.filter((item) => item[0] === makeAndModel[0])[0][1],
        // enginescylinder: makeAndModel[1]?.engine_cylinders,
        // makeAndModel[1]?.year,
      });
      makeAndModel[1]?.model.map((model) => {
        modelOption.push({
          value: model,
          label: model.toUpperCase(),
          years: vehicleModel_full[model].year,
          // enginescylinder: makeAndModel[model]?.engine_cylinders,
        });
      });
      yearOption
        ?.filter((item) => item[0] === makeAndModel[0])[0][1]
        .map((model) => {
          yearrrOption.push({
            value: model,
            label: model,
          });
        });
    });
    if (typeOfState === "make") {
      return makeOption;
    } else if (typeOfState === "model") {
      return modelOption;
    } else if (typeOfState === "year") {
      return yearrrOption;
    } else {
      return [];
    }
  };
  const [makeOptions] = useState(() => getOptionsForMakeAndModel("make"));
  const [modelOptions, setModelOptions] = useState(() =>
    getOptionsForMakeAndModel("model")
  );
  const [yearOptions, setYearOptions] = useState(() =>
    getOptionsForMakeAndModel("year")
  );
  const driveTypeOption = drive_type_list?.map((driveType) => ({
    value: driveType,
    label: driveType,
  }));
  const doorsOption = [1, 2, 3, 4, 6, 8]?.map((doors) => ({
    value: doors,
    label: doors,
  }));
  const bodyStyleOption = bodyStyle?.map((bodyStyle) => ({
    value: bodyStyle?.name,
    label: bodyStyle?.name,
  }));
  const transmitionOption = transmission?.map((transmition) => ({
    value: transmition?.name,
    label: transmition?.name,
  }));
  const yearsOption = years?.map((years) => ({
    value: years,
    label: years,
  }));
  const colorOption = color?.map((extriorColor) => ({
    value: extriorColor?.name,
    label: extriorColor?.name,
    colorObject: extriorColor,
  }));

  let arraymodel = [];
  models.map((value) => {
    if (value[1].make[0] !== "" && formik?.values?.make !== "") {
      if (value[1].make[0] === formik?.values?.make) {
        if (!arraymodel.includes(value[0])) arraymodel.push(value[0]);
      }
    } else if (
      value[1].engine_cylinders[0] !== "" &&
      formik?.values?.engine_cylinders !== ""
    ) {
      if (value[1].engine_cylinders[0] === formik?.values?.engine_cylinders) {
        if (!arraymodel.includes(value[0])) arraymodel.push(value[0]);
      }
    } else if (
      value[1].transmission[0] !== "" &&
      formik?.values?.transmission !== ""
    ) {
      if (value[1].transmission[0] === formik?.values?.transmission) {
        if (!arraymodel.includes(value[0])) arraymodel.push(value[0]);
      }
    } else if (
      value[1].bodyStyle[0] !== "" &&
      formik?.values?.body_style !== ""
    ) {
      if (value[1].bodyStyle[0] === formik?.values?.body_style) {
        if (!arraymodel.includes(value[0])) arraymodel.push(value[0]);
      }
    } else if (
      value[1].Fuel_type[0] !== "" &&
      formik?.values?.fuel_type !== ""
    ) {
      if (value[1].Fuel_type[0] === formik?.values?.fuel_type) {
        if (!arraymodel.includes(value[0])) arraymodel.push(value[0]);
      }
    }
  });
  /*------bodystyle-------*/
  const sortbodystyle = allOptions?.bodyStyle?.sort().map((value) => ({
    label: value,
    value,
  }));
  const getOther = sortbodystyle?.filter((a) => a.label.match(/Other/i));
  const sortbodystylee = sortbodystyle?.filter((a) => !a.label.match(/Other/i));
  useEffect(() => {
    if (sortbodystyle?.length && getOther?.length) {
      sortbodystylee.push(getOther[0]);
    }
  }, [getOther, sortbodystyle]);
  /*------bodystylefirst-------*/
  const sortbodystylefirst = bodystyle.sort().map((value) => ({
    label: value,
    value,
  }));
  const getOtherfirst = sortbodystylefirst?.filter((a) =>
    a.label.match(/Other/i)
  );
  const sortbodystyleefirst = sortbodystylefirst?.filter(
    (a) => !a.label.match(/Other/i)
  );
  useEffect(() => {
    if (sortbodystylefirst?.length && getOtherfirst?.length) {
      sortbodystyleefirst.push(getOtherfirst[0]);
    }
  }, [getOtherfirst, sortbodystylefirst]);
  /*------fueltype-------*/
  const fuelsort = allOptions?.Fuel_type?.sort().map((value) => ({
    label: value,
    value,
  }));
  const getOtherfuel = fuelsort?.filter((a) => a.label.match(/Other/i));
  const fueltypesort = fuelsort?.filter((a) => !a.label.match(/Other/i));
  useEffect(() => {
    if (fuelsort?.length && getOtherfuel?.length) {
      fueltypesort.push(getOtherfuel[0]);
    }
  }, [getOtherfuel, fuelsort]);

  /*------fueltypefirst-------*/
  const fuelsortfirst = typeFuel
    .sort()
    .map((value) => ({ label: value, value }));
  const getOtherfuelfirst = fuelsortfirst?.filter((a) => a.label === "Other");
  const fueltypesortfirst = fuelsortfirst?.filter((a) => a.label !== "Other");
  useEffect(() => {
    if (fuelsortfirst?.length && getOtherfuelfirst?.length)
      fueltypesortfirst.push(getOtherfuelfirst[0]);
  }, [getOtherfuelfirst, fuelsortfirst]);

  const [closeClass, setCloseClass] = useState("mt-3");
  return (
    <>
     <div className="d-flex justify-content-center align-items-center my-4">
      <p className="px-2">
        Did not find what your looking for?
      </p>
      <a href="#">
        <button className="btn text-white " style={{backgroundColor:'#e71d15'}}>
          Click Here To Let Us Know  <IoIosArrowForward className="  font-weight-bolder"/>
        </button>
      </a>
    </div>
    <form
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgb(0 0 0 / 10%)",
        boxShadow: "0 1px 4px 0 rgb(0 0 0 / 10%)",
      }}
      className="p-0 m-0 row w-100"
      onSubmit={formik.handleSubmit}
    >
      <div className="m-0 row w-100 mt-2 px-4 pb-2 pt-0">
        <div
          onClick={() =>
            setCloseClass((prev) =>
              prev !== "mt-3" ? "mt-3" : "mt-0 close-input-container"
            )
          }
          className="p-0 m-0 col-12 cursor-pointer"
          style={{ color: "#000", fontFamily: "Open Sans" }}
        >
          <FaSearch color={"#000"} fontSize={"15"} className="mr-2" />
          Search
        </div>

        <div
          className={`col-auto row w-100 p-0 m-0 filter-input-container ${closeClass}`}
        >
          <div
            className={` p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            }  d-block`}
          >
            <div className=" input_container w-100 p-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.make[0] === formik?.values?.make
                      ? makess.map((value) => ({ label: value, value }))
                      : allOptions?.make.map((value) => ({
                          label: value,
                          value,
                        }))
                    : makess.map((value) => ({ label: value, value }))
                }
                name={"make"}
                placeholder={"Any Make"}
                formik={formik}
                onChange={(e) => {
                  formik.setFieldValue("make", e?.value);
                  const modelOption = e?.models?.map((model) => ({
                    value: model,
                    label: model.toUpperCase(),
                    years: vehicleModel_full[model].year,
                  }));

                  const yearr = e?.years?.map((model) => ({
                    value: model,
                    label: model,
                  }));
                  formik.setFieldValue("model", "");
                  setModelOptions(modelOption);
                  setYearOptions(yearr);
                  setAllOptions(vehicleMake_full[e?.value]);
                }}
                className="col-12 p-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-lg-block d-none pl-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                disabled={allOptions ? false : true}
                options={
                  allOptions
                    ? allOptions?.model[0] === formik?.values?.model
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.model?.sort().map((value) => ({
                          label: value,
                          value,
                        }))
                    : modelss.map((value) => ({ label: value, value }))
                }
                name={"model"}
                placeholder={"Any Model"}
                formik={formik}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("model", e?.value);

                    if (vehicleModel_full[e?.value].vehicle_type[0] == "Boat") {
                      formik.setFieldValue("vehicle_type", 2);
                    } else if (
                      vehicleModel_full[e?.value].vehicle_type[0] ==
                      "Watercraft"
                    ) {
                      formik.setFieldValue("vehicle_type", 6);
                    } else {
                      formik.setFieldValue("vehicle_type", "");
                    }

                    const yearr = e?.years?.map((model) => ({
                      value: model,
                      label: model,
                    }));
                    setYearOptions(yearr);
                    setAllOptions(vehicleModel_full[e?.value]);
                  }
                }}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-lg-none d-block pl-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                disabled={allOptions ? false : true}
                options={
                  allOptions
                    ? allOptions?.model[0] === formik?.values?.model
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.model?.sort().map((value) => ({
                          label: value,
                          value,
                        }))
                    : modelss.map((value) => ({ label: value, value }))
                }
                name={"model"}
                placeholder={"Any Model"}
                formik={formik}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("model", e?.value);
                    const yearr = e?.years?.map((model) => ({
                      value: model,
                      label: model,
                    }));
                    setYearOptions(yearr);
                    setAllOptions(vehicleModel_full[e?.value]);
                  }
                }}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          {/* Min Year */}
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-lg-block d-none pr-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d -flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.year[0] === formik?.values?.year
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.year
                          ?.sort((a, b) => a - b)
                          .map((value) => ({
                            label: value,
                            value,
                          }))
                    : yearss
                        ?.sort((a, b) => a - b)
                        .map((value) => ({ label: value, value }))
                }
                name="year_start"
                placeholder={"Min Year"}
                formik={formik}
                className="w-100 advance-form-style"
              />
            </div>
          </div>
          {/* Max Year */}
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            }  d-lg-block d-none`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.year[0] === formik?.values?.year
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.year
                          ?.sort((a, b) => b - a)
                          .map((value) => ({
                            label: value,
                            value,
                          }))
                    : yearss
                        ?.sort((a, b) => b - a)
                        .map((value) => ({ label: value, value }))
                }
                name={"year_end"}
                placeholder={"Max Year"}
                formik={formik}
                className="w-100 advance-form-style"
              />
            </div>
          </div>
          {/* Min Year */}
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-lg-none d-block pr-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d -flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.year[0] === formik?.values?.year
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.year
                          ?.sort((a, b) => a - b)
                          .map((value) => ({
                            label: value,
                            value,
                          }))
                    : yearss
                        ?.sort((a, b) => a - b)
                        .map((value) => ({ label: value, value }))
                }
                name="year_start"
                placeholder={"Min Year"}
                formik={formik}
                className="w-100 advance-form-style"
              />
            </div>
          </div>
          {/* Max Year */}
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            }  d-lg-none d-block pr-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.year[0] === formik?.values?.year
                      ? arraymodel.map((value) => ({ label: value, value }))
                      : allOptions?.year
                          ?.sort((a, b) => b - a)
                          .map((value) => ({
                            label: value,
                            value,
                          }))
                    : yearss
                        ?.sort((a, b) => b - a)
                        .map((value) => ({ label: value, value }))
                }
                name={"year_end"}
                placeholder={"Max Year"}
                formik={formik}
                className="w-100 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            }  d-lg-block d-none`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.transmission[0] ===
                      formik?.values?.transmission
                      ? transmissions.map((value) => ({ label: value, value }))
                      : allOptions?.transmission.map((value) => ({
                          label: value,
                          value,
                        }))
                    : transmissions.map((value) => ({ label: value, value }))
                }
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("transmission", e?.value);
                    setAllOptions(vehicleTransmission_full[e?.value]);
                  }
                }}
                name={"transmission"}
                placeholder={"Any Transmission"}
                formik={formik}
                className="w-100 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`jj p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-block d-lg-none`}
          >
            <div className="11 p-0 m-0 row w-100 flex-row">
              <div className=" input_container w-100 p-0 m-0 col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyleCarDeatail}
                  options={
                    odometerType === 1
                      ? miOdometer?.map((value) => ({
                          label: priceComma(value, 2),
                          value,
                        }))
                      : kmOdometer
                          ?.sort((a, b) => a - b)
                          ?.map((value) => ({
                            label: priceComma(value, 2),
                            value,
                          }))
                  }
                  name={"odometer_low"}
                  placeholder={"Min Km"}
                  formik={formik}
                  className="w-100 advance-form-style"
                />
              </div>
            </div>
          </div>
          {/* auth */}
          <div
            className={`cc p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-block d-lg-none`}
          >
            <div className="p-0 m-0 row w-100 flex-row">
              <div className=" input_container w-100 p-0 m-0 col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                <SelectBox
                  style={reactSelectAdvanceSearchInputStyleCarDeatail}
                  options={
                    odometerType === 1
                      ? miOdometer?.map((value) => ({
                          label: priceComma(value, 2),
                          value,
                        }))
                      : kmOdometer
                          ?.sort((a, b) => b - a)
                          ?.map((value) => ({
                            label: priceComma(value, 2),
                            value,
                          }))
                  }
                  name={"odometer_high"}
                  placeholder={"Max Km"}
                  formik={formik}
                  className="p-0 m-0 w-100 advance-form-style"
                />
              </div>
            </div>
          </div>
          <div
            className={`FF p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-none d-lg-block`}
          >
            <div className=" input_container w-100 px-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={colorOption}
                name={"Exterior_color"}
                placeholder={"Any Colour"}
                formik={formik}
                className="col-12 p-0 m-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`ss p-1 d-lg-block d-none ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } pl-0`}
          >
            <div className="input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.engine_cylinders[0] ===
                      formik?.values?.engine_cylinders
                      ? enginecylinder.map((value) => ({ label: value, value }))
                      : allOptions?.engine_cylinders?.sort().map((value) => ({
                          label: value,
                          value,
                        }))
                    : enginecylinder.map((value) => ({ label: value, value }))
                }
                name={"engine_cylinders"}
                placeholder={"Any Engine"}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("engine_cylinders", e?.value);
                    setAllOptions(vehicleEngine_cylinders_full[e?.value]);
                  }
                }}
                formik={formik}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`ppppp p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } pr-0 `}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                value={formik.values.price_low}
                options={prices
                  ?.sort((a, b) => a - b)
                  .map((value) => ({ label: priceComma(value, 2), value }))}
                name={"price_low"}
                placeholder={"Min price"}
                formik={formik}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`highhhh p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } pr-0 `}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                value={formik.values.price_high}
                options={prices
                  ?.sort((a, b) => b - a)
                  .map((value) => ({ label: priceComma(value, 2), value }))}
                name={"price_high"}
                placeholder={"Max price"}
                formik={formik}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          
          <div
            className={`engin p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-block d-lg-none pl-0`}
          >
            <div className=" input_container w-100 p-0 m-0  d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.engine_cylinders[0] ===
                      formik?.values?.engine_cylinders
                      ? enginecylinder.map((value) => ({ label: value, value }))
                      : allOptions?.engine_cylinders?.sort().map((value) => ({
                          label: value,
                          value,
                        }))
                    : enginecylinder.map((value) => ({ label: value, value }))
                  // engineOptions
                }
                name={"engine_cylinders"}
                placeholder={"Any Engine"}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("engine_cylinders", e?.value);
                    setAllOptions(vehicleEngine_cylinders_full[e?.value]);
                  }
                }}
                formik={formik}
                className="col-12 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`FUEL p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-none d-md-flex`}
          >
            <div className=" input_container w-100 p-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.Fuel_type[0] === formik?.values?.fuel_type
                      ? typeFuel.map((value) => ({ label: value, value }))
                      : allOptions?.Fuel_type.map((value) => ({
                          label: value,
                          value,
                        }))
                    : typeFuel.map((value) => ({ label: value, value }))
                  // fuelTypeOptions
                }
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("fuel_type", e?.value);
                    setAllOptions(vehicleFuel_type_full[e?.value]);
                  }
                }}
                name={"fuel_type"}
                placeholder={"Any Fuel Type"}
                formik={formik}
                className="col-12 px-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`badi p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-none d-lg-block`}
          >
            <div className="badi input_container w-100 p-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.bodyStyle[0] === formik?.values?.body_style
                      ? sortbodystyleefirst
                      : sortbodystylee
                    : sortbodystyleefirst
                  // bodyStyleOption
                }
                name={"body_style"}
                placeholder={"Any Body Style"}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("body_style", e?.value);
                    setAllOptions(vehicleBodyStyle_full[e?.value]);
                  }
                }}
                formik={formik}
                className="col-12 px-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`vv p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-none d-lg-block `}
          >
            <div className="od p-0 m-0 row w-100 flex-row">
              <div className=" input_container w-100 p-0 m-0 col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
                <SelectBox
                  disabled={
                    formik.values.vehicle_type == 2 ||
                    formik.values.vehicle_type == 6
                      ? true
                      : false
                  }
                  style={reactSelectAdvanceSearchInputStyleCarDeatail}
                  options={
                    odometerType === 1
                      ? miOdometer?.map((value) => ({
                          label: priceComma(value, 2),
                          value,
                        }))
                      : kmOdometer
                          ?.sort((a, b) => a - b)
                          ?.map((value) => ({
                            label: priceComma(value, 2),
                            value,
                          }))
                  }
                  name={"odometer_low"}
                  placeholder={"Min Km"}
                  formik={formik}
                  className="w-100 advance-form-style"
                />
              </div>
            </div>
          </div>
          <div
            className={`bb  p-1 ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } d-none d-lg-block`}
          >
            <div className="p-0 m-0 row w-100 flex-row">
              <div className=" input_container w-100 p-0 d-none d-lg-block m-0 col-12 d-flex justify-content-center align-items-center">
                <SelectBox
                  disabled={
                    formik.values.vehicle_type == 2 ||
                    formik.values.vehicle_type == 6
                      ? true
                      : false
                  }
                  style={reactSelectAdvanceSearchInputStyleCarDeatail}
                  options={
                    odometerType === 1
                      ? miOdometer?.map((value) => ({ label: value, value }))
                      : kmOdometer
                          ?.sort((a, b) => b - a)
                          ?.map((value) => ({
                            label: priceComma(value, 2),
                            value,
                          }))
                  }
                  name={"odometer_high"}
                  placeholder={"Max Km"}
                  formik={formik}
                  className="p-0 m-0 w-100 advance-form-style"
                />
              </div>
            </div>
          </div>

          <div
            className={`SEARCH1 p-1 size-1  d-none d-lg-block`}
          >
            <div className="p-0 m-0  col-12 order-1 order-lg-2">
              <Search
                domain={domain}
                page={page}
                setPage={setPage}
                posts={posts}
                setPosts={setPosts}
                searchKeywordes={searchKeywordes}
                setSearchKeywordes={setSearchKeywordes}
                keyworder={keyworder}
                setkeyworder={setkeyworder}
                vehicleDataForSearch={vehicleDataForSearch}
                vehiclesData2={vehiclesData2}
                dealerData={dealerData}
                isModal={isModal}
              />
            </div>
          </div>
          <div
            className={`SEARCH1 p-1 p-1 size-1 d-none d-lg-block`}
          >
            <button
              onClick={() => {
                Router.pathname === `/forms/finance`
                  ? Router.push(
                      {
                        pathname: `/forms/finance`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/cars/special"
                  ? Router.push(
                      {
                        pathname: `/cars/special`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/cars/sold"
                  ? Router.push(
                      {
                        pathname: `/cars/sold`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.push(
                      {
                        pathname: `/cars`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    );
              }}
              type="submit"
              className="py-2 home_inevntpry_search_button__search home_inevntpry_search_button__search--inventory d-flex w-100 align-items-center justify-content-center btn"
              style={{backgroundColor:'#e71d15'}}
            >
               <FaSearch className="mr-2"/> Search
            </button>
          </div>
          {/* <div className="p-1 size-1 d-none d-lg-block">
            <button
              onClick={() => {
                formik.resetForm();
                formik.handleSubmit();
                Router.pathname === "/cars/special"
                  ? Router.push(
                      {
                        pathname: `/cars/special`,
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/forms/finance"
                  ? Router.push(
                      {
                        pathname: "/forms/finance",
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/cars/sold"
                  ? Router.push(
                      {
                        pathname: "/cars/sold",
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.push(
                      {
                        pathname: `/cars`,
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    );
                setAllOptions("");
                setSearchKeywordes("");
              }}
              type="button"
              className="py-2 home_inevntpry_search_button__search home_inevntpry_search_button__search--inventory d-flex w-100 align-items-center justify-content-center"
            >
              All Inventory
            </button>
          </div> */}
          <div
            className={`NN p-1 d-block d-lg-none ${
              typeof otherFormik !== "undefined" ? "size-1" : "size-1"
            } `}
          >
            <div className=" input_container w-100 px-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={colorOption}
                name={"Exterior_color"}
                placeholder={"Any Colour"}
                formik={formik}
                className="col-12 p-0 m-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`body p-1 ${
              typeof otherFormik !== "undefined" ? "col-12" : "col-12 col-md-3"
            } d-block d-lg-none`}
          >
            <div className=" input_container w-100 p-0 m-0 d-flex justify-content-center align-items-center">
              <SelectBox
                style={reactSelectAdvanceSearchInputStyleCarDeatail}
                options={
                  allOptions
                    ? allOptions?.bodyStyle[0] === formik?.values?.body_style
                      ? sortbodystyleefirst
                      : sortbodystylee
                    : sortbodystyleefirst
                  // bodyStyleOption
                }
                name={"body_style"}
                placeholder={"Any Body Style"}
                onChange={(e) => {
                  if (e !== null) {
                    formik.setFieldValue("body_style", e?.value);
                    setAllOptions(vehicleBodyStyle_full[e?.value]);
                  }
                }}
                formik={formik}
                className="col-12 px-0 advance-form-style"
              />
            </div>
          </div>
          <div
            className={`SEARCH1 p-1 ${
              typeof otherFormik !== "undefined"
                ? "col-12 d-block d-lg-none"
                : "col-12  d-block d-lg-none"
            }`}
          >
            <div className="p-0 m-0  col-12 order-1 order-lg-2">
              <Search
                domain={domain}
                page={page}
                setPage={setPage}
                posts={posts}
                setPosts={setPosts}
                searchKeywordes={searchKeywordes}
                setSearchKeywordes={setSearchKeywordes}
                keyworder={keyworder}
                setkeyworder={setkeyworder}
                vehicleDataForSearch={vehicleDataForSearch}
                vehiclesData2={vehiclesData2}
                dealerData={dealerData}
              />
            </div>
          </div>
          <div className="p-0 m-0 col-12 d-block d-lg-none" />
          <div
            className={`SEARCH p-1 p-1 col-12 size-1 d-block d-lg-none `}
          >
            <button
              onClick={() => {
                Router.pathname === "/cars/special"
                  ? Router.push(
                      {
                        pathname: `/cars/special`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/forms/finance"
                  ? Router.push(
                      {
                        pathname: "/forms/finance",
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/cars/sold"
                  ? Router.push(
                      {
                        pathname: "/cars/sold",
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.push(
                      {
                        pathname: `/cars`,
                        query: `make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.year_start}&Maxyear=${formik.values.year_end}&MinPrice=${formik.values.price_low}&MaxPrice=${formik.values.price_high}&Minodometer=${formik.values.odometer_low}&Maxodometer=${formik.values.odometer_high}&EngineCylinder=${formik.values.engine_cylinders}&Doors=${formik.values.doors}&Bodystyle=${formik.values.body_style}&Fueltype=${formik.values.fuel_type}&Transmission=${formik.values.transmission}&Exteriorcolor=${formik.values.Exterior_color}&Interior_color=${formik.values.interior_color}&vehicleType=${formik.values.vehicle_type}&keywords=${searchKeywordes}`,
                      },
                      undefined,
                      { shallow: true }
                    );
              }}
              type="submit"
              className="py-2 h-100 home_inevntpry_search_button__search home_inevntpry_search_button__search--inventory d-flex w-100 align-items-center justify-content-center"
              style={{backgroundColor:'#e71d15'}}
            >
              <FaSearch className="mr-2"/> Search
            </button>
          </div>
          {/* <div className="RESET p-1 col-12 size-1 d-block d-lg-none">
            <button
              onClick={() => {
                formik.resetForm();
                formik.handleSubmit();
                Router.pathname === "/cars/special"
                  ? Router.push(
                      {
                        pathname: `/cars/special`,
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/forms/finance"
                  ? Router.push(
                      {
                        pathname: `/forms/finance`,
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.pathname === "/cars/sold"
                  ? Router.push(
                      {
                        pathname: "/cars/sold",
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    )
                  : Router.push(
                      {
                        pathname: `/cars`,
                        query: "",
                      },
                      undefined,
                      { shallow: true }
                    );
                setAllOptions("");
                setSearchKeywordes("");
              }}
              type="button"
              className="py-2 home_inevntpry_search_button__search home_inevntpry_search_button__search--inventory  d-flex w-100 align-items-center justify-content-center"
            >
               All Inventory
            </button>
          </div> */}
          {/* <div
          style={{ position: "relative" }}
          className="p-0 m-0 col-12 pb-4  my-4 px-2 my-lg-3 ">
          <MultiRangeSlider
            min={minOdometer}
            max={maxOdometer}
            text="Odometer:"
            type="odometer"
            names={["odometer_low", "odometer_high", "odometer_type"]}
            step={1000}
            onChange={({ min, max }) => {
              formik.setFieldValue("odometer_low", min);
              formik.setFieldValue("odometer_high", max);
            }}
            formik={formik}
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="p-0 m-0 col-12  my-4 px-2 my-lg-3">
          <MultiRangeSlider
            min={1970}
            max={cureentYear}
            type="year"
            text="year:"
            formik={formik}
            names={["year_start", "year_end"]}
            onChange={({ min, max }) => {
              formik.setFieldValue("year_start", min);
              formik.setFieldValue("year_end", max);
            }}
          />
        </div>
        <div
          style={{ position: "relative" }}
          className="p-0 m-0 col-12  my-4 px-2 my-lg-3 ">
          <MultiRangeSlider
            min={minPrice}
            max={maxPrice}
            text="Price:"
            type="price"
            symbol="$"
            step={1000}
            names={["price_low", "price_high"]}
            formik={formik}
            onChange={({ min, max }) => {
              formik.setFieldValue("price_low", min);
              formik.setFieldValue("price_high", max);
            }}
          />
        </div> */}
          {/* <div className="col-12 col-md-6 col-lg-3 px-2  d-flex justify-content-center align-items-center">
          <button type="submit" className="btn green_button w-100 py-3">
            Search
          </button>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "50px",
              height: "53px",
              backgroundColor: "#222",
            }}>
            <FaSearch />
          </div>
        </div> */}
          {/* <div className="col-12 col-md-6 col-lg-3 p-0 m-0 my-3 px-2 d-flex justify-content-center align-items-center">
          <button
            onClick={() => {
              formik.resetForm();
            }}
            type="button"
            className="btn green_button w-100 py-3">
            Reset
          </button>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "50px",
              height: "53px",
              backgroundColor: "#222",
            }}>
            <FaLongArrowAltRight />
          </div>
        </div> */}
        </div>
      </div>
      {/* <div className="row p-0 m-0 mt-4 w-100">
        <div className="col-12 col-md-6 col-lg-3 px-2">
          <button type="submit" className="btn green_button w-100">
            Search
          </button>
        </div>
        <div className="col-6 p-0 m-0 px-2">
          <button
            onClick={() => {
              formik.resetForm();
            }}
            type="button"
            className="btn green_button w-100">
            Reset
          </button>
        </div>
      </div> */}
    </form>
    </>
  );
};
export default AdvanceFilter;
