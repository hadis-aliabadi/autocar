import { useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { FaTrash } from "react-icons/fa";

const SearchForVehicleApprisal = (props) => {
  const { vehicleDataForSearch, formik } = props;
  const [searchResult, setSearchResult] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const inputRef = useRef(null);
  const stringDataForSearch = useMemo(() => {
    return vehicleDataForSearch?.data?.map((vehicle) => ({
      name:
        vehicle?.Vehicle?.model_year +
        " " +
        vehicle?.Vehicle?.make?.toLowerCase() +
        " " +
        vehicle?.Vehicle?.model?.toLowerCase() +
        " - " +
        vehicle?.stock_NO,
      id: vehicle?.id,
    }));
  }, []);
  const handleSearchBoxChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setSearchResult(null);
    } else {
      const searchingResult = stringDataForSearch?.filter((vehicle) =>
        vehicle?.name?.includes(inputValue.toLowerCase())
      );
      setSearchResult(searchingResult);
      formik.setFieldValue("desired_mid_vehicle", inputValue);
    }
  };
  const handleSelectVehicle = (id, name) => {
    if (formik.values.frk_desire_MidV_id !== id) {
      formik.setFieldValue("desired_mid_vehicle", "");
      formik.setFieldValue("frk_desire_MidV_id", id);
    }
    if (selectedVehicle !== name) {
      setSelectedVehicle(name);
    }
    setSearchResult(null);
    inputRef.current.value = "";
  };
  const handleRemoveVehicle = () => {
    formik.setFieldValue("frk_desire_MidV_id", "");
    setSelectedVehicle();
  };
  return (
    <div className="p-0 m-0 w-100">
      <div
        className="form-group p-0 m-0 mt-3 mb-2 "
        style={{ position: "relative" }}
      >
        <input
          ref={inputRef}
          name="frk_desire_MidV_id"
          className="form-control  eforms_input_container"
          placeholder="Search (Year Make Model)"
          onChange={handleSearchBoxChange}
        />
        {formik.errors.frk_desire_MidV_id ||
          (formik.errors.desired_mid_vehicle && (
            <small className="text-danger">
              {formik.errors.frk_desire_MidV_id}
            </small>
          ))}
        {formik.values.frk_desire_MidV_id && selectedVehicle !== null && (
          <div className="p-0 m-0 my-2 mb-1 col-12">
            <div className="p-0 m-0 d-flex align-items-center justify-content-between">
              <span className="mx-2">{selectedVehicle}</span>
              <FaTrash
                color="#1f3336"
                style={{ cursor: "pointer" }}
                onClick={handleRemoveVehicle}
              />
            </div>
          </div>
        )}
        {searchResult !== null && (
          <div
            className={`p-0 m-0 result-input-simple-search w-100 border-0 ${
              searchResult.length === 0 && "d-none"
            }`}
            style={{
              maxHeight: "245px",
            }}
          >
            <div
              className={`p-1 m-0 w-100 row rounded bg-white ${
                searchResult.length === 0 && "d-none"
              }`}
            >
              {searchResult?.map((vehicle) => (
                <div
                  className="p-0 px-2 m-0 mb-1 col-12"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleSelectVehicle(vehicle?.id, vehicle?.name)
                  }
                >
                  <div className="p-0 m-0 d-flex align-items-center">
                    <input
                      type="checkbox"
                      name={vehicle?.name}
                      id={vehicle?.name}
                      style={{ cursor: "pointer" }}
                      checked={formik.values.frk_desire_MidV_id === vehicle?.id}
                    />
                    <span className="mx-2">{vehicle?.name}</span>
                  </div>
                </div>
              ))}
              {/* {searchResult?.length === 0 && (
                <div className="p-0 m-0 col-12">
                  There isn't any vehicle with this detail
                </div>
              )} */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForVehicleApprisal;
