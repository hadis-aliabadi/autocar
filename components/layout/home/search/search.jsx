import React, { useState, useEffect, useRef, useMemo } from "react";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import { useInventoryFilterFormik } from "../../../../hooks/context/useInventoryFilterFormik";
import SearchResultLink from "./searchResultLink";
import { priceComma } from "../../../../utils/common/price_odometer_handler";
import Link from "next/link";
import { useRouter } from "next/router";
const Search = (props) => {
  const {
    data: dataForSearch,
    domain,
    page,
    limit,
    setPosts,
    searchKeywordes,
    setSearchKeywordes,
    setkeyworder,
    vehiclesData2,
    dealerData,
    isModal,
  } = props;

  const [simplesearchname, setsimplesearchname] = useState("");
  const [data] = useState(dataForSearch);
  const [searchTerm, setSearchTerm] = useState("");
  const [showsearchResults, setShowSearchResults] = useState(false);
  const formik = useInventoryFilterFormik();
  const router = useRouter()
  const isHome = router.pathname ==='/'

  // **************** key search **************************
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [searchResult, setSearchResult] = useState(null);

  // *******************************************for close keyword search

  const windowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (windowRef.current && !windowRef.current.contains(event.target)) {
        // A click outside of the windowRef element has occurred
        // console.log("A click outside of the element has occurred");
        setSearchResult(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ********************************************************************

  const {
    // data: vehiclesData,
    isLoading,
    mutate,
  } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setPosts(data);
        setShowSearchResults(false);
      },
    },
    domain,
    page,
    limit,
    searchTerm
  );

  // //////********************* */

  const stringDataForSearch = useMemo(() => {
    return vehiclesData2?.data?.map((vehicle) => ({
      name:
        vehicle?.Vehicle?.model_year +
        " " +
        vehicle?.Vehicle?.make?.toLowerCase() +
        " " +
        vehicle?.Vehicle?.model?.toLowerCase() +
        " - " +
        "$" +
        priceComma(vehicle?.sell_price) +
        "-" +
        priceComma(vehicle?.odometer, 2) +
        "km" +
        "-" +
        "#" +
        vehicle?.stock_NO,
      stock_NO: vehicle?.stock_NO,
      model: vehicle?.Vehicle?.model?.toLowerCase(),
      make: vehicle?.Vehicle?.make?.toLowerCase(),
      model_year: vehicle?.Vehicle?.model_year,
      id: vehicle?.id,
      media_src: vehicle?.cover_image,
      price: priceComma(vehicle?.sell_price),
      odometer: priceComma(vehicle?.odometer, 2),
    }));
  }, []);

  const handleSelectVehicle = (id, name) => {
    if (selectedVehicle !== name) {
      setSelectedVehicle(name);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value?.toLowerCase());
    setSearchKeywordes(event.target.value?.toLowerCase());
    if (event.target.value === "") {
      setSearchResult(null);
    } else {
      const searchingResult = stringDataForSearch?.filter((vehicle) =>
        vehicle?.name?.includes(event.target.value?.toLowerCase())
      );
      setSearchResult(searchingResult);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      mutate(formik.value);
      setkeyworder(true);
      event.target.value = "";
    }
  };
  return (
    <div className="p-0 m-0 d-flex row justify-content-start align-items-center w-100">
      <div className="p-0 m-0 col-12 ">
        <div
          className="p-0 m-0 d-flex row justify-content-center align-items-center"
          style={{
            position: "relative",
          }}
        >
          <input
          
            className={`p-0 pl-1 m-0 col-12 px-2 search-input ${isHome?'search-input--home':'eforms_input_container'}`}
            type="text"
            placeholder="Search (Make, Model, Price, Stock...)"
            defaultValue={simplesearchname}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e)}
            value={searchKeywordes}
          />

          {/* {console.log(searchResult)} */}
          {searchResult !== null && (
            <div
              ref={windowRef}
              className={`p-0 m-0 result-input-simple-search w-100 border-0 `}
              style={{
                maxHeight: "300px",
              }}
              onClick={() =>
                useOnClickOutside(windowRef, () => setSearchResult(null))
              }
            >
              <div
                className={`p-1 m-0 w-100 row rounded bg-white  justify-content-center`}
              >
                {searchResult?.length > 0 ? (
                  searchResult?.map((vehicle) => (
                    <SearchResultLink
                      key={vehicle?.id}
                      vehicle={vehicle}
                      formik={formik}
                      vehiclesData2={vehiclesData2}
                      setSearchResult={setSearchResult}
                      handleSelectVehicle={handleSelectVehicle}
                      setSearchKeywordes={setSearchKeywordes}
                      dealerData={dealerData}
                      isModal={isModal}
                    />
                  ))
                ) : (
                  <>
                    <div className="w-100 text-center">
                      <span>Let Us Find Your Dream Car!</span>
                      <Link href="/forms/car-finder">
                        <a className="mx-1">Car Finder</a>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
