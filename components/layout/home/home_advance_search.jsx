import { useFormik } from "formik";
import { reactSelectInputStyleHome } from "../../../utils/common/react_select_styles";
import SelectBox from "../forms/select_box";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Search from "./slider/search";

export const HomeAdvanceSearch = (props) => {
  const { advanceSearchData, vehicleDataForSearch } = props;
  const { vehicleModel, vehicleModelYear } = advanceSearchData;
  const makes = vehicleModel ? Object.entries(vehicleModel) : [];
  const yearOption = vehicleModelYear ? Object.entries(vehicleModelYear) : [];
  let uniqueChars = [];
  const getOptionsForMakeAndModel = (typeOfState) => {
    let makeOption = [];
    let modelOption = [];
    let yearrrOption = [];
    let yearssssssss = [];

    makes?.map((makeAndModel) => {
      makeOption.push({
        value: makeAndModel[0],
        label: makeAndModel[0],
        models: makeAndModel[1],
        years: yearOption?.filter((item) => item[0] === makeAndModel[0])[0][1],
      });

      makeAndModel[1].map((model) => {
        modelOption.push({
          value: model,
          label: model,
        });
      });
      yearOption
        ?.filter((item) => item[0] === makeAndModel[0])[0][1]
        .map((model) => {
          if (!yearrrOption.includes(model)) {
            yearrrOption.push(model);
          }

          // yearrrOption.push({
          //   value: model,
          //   label: model,
          // });
        });
    });
    yearrrOption
      ?.sort()
      .map((item) => yearssssssss.push({ value: item, label: item }));
    if (typeOfState === "make") {
      return makeOption;
    } else if (typeOfState === "model") {
      return modelOption;
    } else if (typeOfState === "year") {
      return yearssssssss;
    } else {
      return [];
    }
  };
  const [makeOptions, setMakeOptions] = useState(() =>
    getOptionsForMakeAndModel("make")
  );
  const [modelOptions, setModelOptions] = useState(() =>
    getOptionsForMakeAndModel("model")
  );
  const [yearOptions, setYearOptions] = useState(() =>
    getOptionsForMakeAndModel("year")
  );
  const [yearOptionsSort, setYearOptionsSort] = useState(() =>
    getOptionsForMakeAndModel("year")
  );
  const formik = useFormik({
    initialValues: {
      make: "",
      model: "",
      Minyear: "",
      Maxyear: "",
    },
  });
  return (
    <div
      className="row p-0 m-0 w-100 d-flex row py-lg-5 px-lg-5 px-3 justify-content-center"
      style={{
        position: "relative",
        zIndex: 8,
      }}
    >
      <div className="col-lg-11 row p-0 m-0 ">
        <div className="col-lg-10 p-0 m-0 row">
          <div className="w-100 row p-0 m-0">
            <div className="p-0 m-0 col-6 col-lg-3 px-1 ">
              <SelectBox
                style={reactSelectInputStyleHome}
                options={makeOptions}
                name={"make"}
                placeholder={"Any Make"}
                formik={formik}
                onChange={(e) => {
                  formik.setFieldValue("make", e?.value);
                  const modelOption = e?.models?.map((model) => ({
                    value: model,
                    label: model,
                  }));

                  e?.years?.sort().forEach((c) => {
                    if (!uniqueChars.includes(c)) {
                      uniqueChars.push(c);
                    }
                  });

                  const yearr = uniqueChars.map((model) => ({
                    value: model,
                    label: model,
                  }));
                  const minyearr = Object.assign([], yearr);
                  setModelOptions(modelOption);
                  setYearOptions(minyearr);
                  setYearOptionsSort(yearr);
                }}
                className="w-100 my-lg-2 mt-2 border-sm-right border-dark  "
              />
            </div>
            <div className="p-0 m-0 col-6 col-lg-3 px-1 back_image_select">
              <SelectBox
                style={reactSelectInputStyleHome}
                options={modelOptions}
                name={"model"}
                placeholder={"Any Model"}
                formik={formik}
                className="w-100 my-lg-2 mt-2 border-sm-right border-dark  "
              />
            </div>
            <div className="p-0 m-0 col-6 col-lg-3 px-1 back_image_select">
              <SelectBox
                style={reactSelectInputStyleHome}
                options={yearOptions}
                name={"Minyear"}
                placeholder={"Min Year"}
                formik={formik}
                className="w-100 my-lg-2 mt-2 border-sm-right border-dark"
              />
            </div>
            <div className="p-0 m-0 col-6 col-lg-3 px-1 back_image_select">
              <SelectBox
                style={reactSelectInputStyleHome}
                options={yearOptionsSort.sort((a, b) => b.label - a.label)}
                name={"Maxyear"}
                placeholder={"Max Year"}
                formik={formik}
                className="w-100 my-lg-2 mt-2 "
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 p-0 m-0 row h-lg-100">
          <Link
            href={`/cars?make=${formik.values.make}&model=${formik.values.model}&Minyear=${formik.values.Minyear}&Maxyear=${formik.values.Maxyear}`}
          >
            <a className="text-decoration-none h-100 w-100 pr-lg-0 p-0 m-0">
              <div className=" m-0 py-2 px-1  d-flex w-100 h-100 justify-content-center align-items-center">
                <div
                  className="py-2 blue_button_3 h-100 d-flex w-100 align-items-center justify-content-center"
                  style={{ backgroundColor: "#ee161b", borderColor: "#e74c3c" }}
                >
                 <FaSearch className='text-white' />  <span className="px-2">Search</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="p-0 m-0 col-sm-12 col-lg col-12 px-lg-1">

      </div> */}
    </div>
  );
};
export default HomeAdvanceSearch;
