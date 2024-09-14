import React, { useState, useEffect } from "react";
import Cars from "../../../common/web/Cars";
import { useGetVehiclesBaseOnFilter } from "../../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import InventoryFilterContext from "../../../../context/inventoryFilterContext";
import AdvanceFilter from "../../../common/web/filter/AdvanceFilter";
import { useRouter } from "next/router";

const DesiredVehicleFinancial = (props) => {
  const {
    domain,
    otherFormik = undefined,
    advanceSearchData,
    onClose,
    dealerData,
    setadvanceSearchCar , 
    isModal,
    vehiclesData2,
  } = props;
  const [vehiclesData, setVehiclesData] = useState([]);
  const [keyworder, setkeyworder] = useState();

  const [searchKeywordes, setSearchKeywordes] = useState(
    query?.keywords ? query?.keywords : ""
  );
  const {
    // data: vehiclesData,
    isLoading,
    mutate,
  } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setVehiclesData(data);
      },
    },

    domain
  );
  const { query } = useRouter();
  const currentYear = new Date().getFullYear();
  const body = {
    // url: domain,
    year_start: "1970",
    year_end: currentYear,
    price_low: 0,
    price_high: 1000000,
    odometer_low: 0,
    odometer_high: 3000000,
    price_low: advanceSearchData?.minPrice,
    price_high: advanceSearchData?.maxPrice,
    odometer_low: advanceSearchData?.minOdometer,
    odometer_high: advanceSearchData?.maxOdometer,
    make: "",
    model: "",
    transmission: "",
    body_style: "",
    drive_train: "",
    doors: "",
    interior_color: "",
    Exterior_color: "",
  };
  useEffect(() => {
    mutate(body);
  }, []);
  const [posts, setPosts] = useState([]);
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);
  return (
    <>
      <InventoryFilterContext
        domain={domain}
        advanceSearchData={advanceSearchData}
        setVehiclesData={setVehiclesData}
        minOdometer={advanceSearchData?.minOdometer}
        maxOdometer={advanceSearchData?.maxOdometer}
        minPrice={advanceSearchData?.minPrice}
        maxPrice={advanceSearchData?.maxPrice}
        makeParam={query?.make}
        makeBodystyle={query?.bodystyle}
        miMin={advanceSearchData?.miMin}
        miMax={advanceSearchData?.miMax}
        kmMin={advanceSearchData?.kmMin}
        kmMax={advanceSearchData?.kmMax}
        page={page}
        setPage={setPage}
        limit={limit}
        searchKeywordes={searchKeywordes}
        setSearchKeywordes={setSearchKeywordes}
        keyworder={keyworder}
        setkeyworder={setkeyworder}
      >
        <div
          style={{ backgroundColor: "#fff" }}
          className="p-0 m-0 imp-background-image"
        >
          {/* <Filter title={"Filter inventory"} /> */}
          <AdvanceFilter
            domain={domain}
            advanceSearchData={advanceSearchData}
            setVehiclesData={setVehiclesData}
            minOdometer={advanceSearchData?.minOdometer}
            maxOdometer={advanceSearchData?.maxOdometer}
            minPrice={advanceSearchData?.minPrice}
            maxPrice={advanceSearchData?.maxPrice}
            makeBodystyle={query?.bodystyle}
            miMin={advanceSearchData?.miMin}
            miMax={advanceSearchData?.miMax}
            kmMin={advanceSearchData?.kmMin}
            kmMax={advanceSearchData?.kmMax}
            page={page}
            setPage={setPage}
            limit={limit}
            otherFormik={otherFormik}
            searchKeywordes={searchKeywordes}
            setSearchKeywordes={setSearchKeywordes}
            keyworder={keyworder}
            setkeyworder={setkeyworder}
            vehiclesData2={vehiclesData2}
            dealerData={dealerData}

          />
          <div className="p-0 m-0 mt-3">
            <div className="px-1 ">
              <Cars
                dealerData={dealerData}
                otherFormik={otherFormik}
                isFinancial
                vehiclesData={vehiclesData}
                onClose={onClose}
                posts={posts}
                setPosts={setPosts}
                getinfoofcars={vehiclesData}
                limit={limit}
                setLimit={setlimit}
                page={page}
                setPage={setPage}
                domain={domain}
                searchKeywordes={searchKeywordes}
                setSearchKeywordes={setSearchKeywordes}
                keyworder={keyworder}
                setkeyworder={setkeyworder}
                setadvanceSearchCar={setadvanceSearchCar}
                isModal={true}
                vehiclesData2={vehiclesData2}
              />
            </div>
            {vehiclesData?.length === 0 && !isLoading && (
              <div
                className="p-0 m-0 d-flex justify-content-center align-items-center"
                style={{
                  color: "#f4f4f4",
                }}
              >
                There isn't any vehicle with this detail...
              </div>
            )}
          </div>
        </div>
      </InventoryFilterContext>
    </>
  );
};

export default DesiredVehicleFinancial;
