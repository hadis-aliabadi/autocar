import React, { useState } from "react";
import { FaList, FaTimes } from "react-icons/fa";
import CarItem from "./CarItem";
import { Modal } from "react-bootstrap";
import AdvanceFilter from "./filter/AdvanceFilter";
import {
  useInventoryFilterFormik,
  useInventoryFilterFormLoading,
} from "../../../hooks/context/useInventoryFilterFormik";
import InventorySortVehicles from "./inventory/inventory_sort";
import Loading from "./loading/loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";
import { useGetVehiclesBaseOnFilter } from "../../../hooks/vehicles/useGetVehiclesBaseOnFilter";
import CarItem2 from "./CarItem2";
import { IoGrid } from "react-icons/io5";
import { useRouter } from "next/router";
const Cars = (props) => {
  const {
    dealerData,
    vehiclesData,
    isFinancial = false,
    otherFormik = undefined,
    onClose,
    mobileRenderComponent,
    domain,
    posts,
    setPosts,
    query,
    advanceSearchData,
    getinfoofcars,
    page,
    setPage,
    setCompare,
    compare,
    otherPlace,
    selectTitle,
    setselectTitle,
    searchKeywordes,
    setSearchKeywordes,
    vehicleDataForSearch,
    setkeyworder,
    keyworder,
    setVehiclesData,
    isModal = false,
    setadvanceSearchCar,
    vehiclesData2,
    limit,
    setLimit
  } = props;
  const [lengthdata, setlengthdata] = useState(vehiclesData.length);
  const [hasData, setHasData] = useState();
  const [pages, setPages] = useState();
  const [cartView, setCartView] = useState(true);

  const loading = useInventoryFilterFormLoading();
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const formik = useInventoryFilterFormik();
  const onCloseHandler = () => {
    setShowMobileFilter(false);
  };
  const router = useRouter();
  const { data, isLoading, mutate } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: (data) => {
        setPosts((prev) => [...prev, ...data]);
        setHasData(data);
      },
    },
    domain,
    page,
    10,
    searchKeywordes
  );

  const [hasMore, setHasMore] = useState(true);


  // * Scroll to Previous state functionality */

  // fetch the last query
  const setLastQuery = (query) => {
    localStorage.setItem("last-query", JSON.stringify(query));
  };
  // BACKTOINVENTORY: choose the way data must be retrieved and set
  function setData(previousPage, cars) {
    if (previousPage && cars && cars.length) {
      setPosts(() => cars);
      setPage(() => previousPage);
    } else if (previousPage) {
      setLimit(() => 10 * previousPage);
      setPosts(() => []);
      setTimeout(() => {
        mutate();
        setPage(() => previousPage);
      }, 500);
    }
  }

  // BACKTOINVENTORY: pass to car item components to call before visiting the detail page
  function onBeforeClick() {
    const scrollY = window.scrollY;
    localStorage.setItem("cached-cars", JSON.stringify(posts));
    localStorage.setItem("scroll-position", scrollY.toString());
    localStorage.setItem("is-cart-view", cartView ? "yes" : "no");
    localStorage.setItem("inventory-url", location.pathname);

    setLastQuery(query);
  }

  // BACKTOINVENTORY: adjust to set data if nothing is cached
  useEffect(() => {
    setLastQuery(query);
    const lastViewedCar = localStorage.getItem("last-viewed-car");
    if (!query?.page || !lastViewedCar) {
      setPosts(vehiclesData);
      setHasData(vehiclesData);
    }
  }, [vehiclesData, query]);

  useEffect(() => {}, [posts, query]);
  useEffect(() => {
    setPosts(vehiclesData);
    setHasData(vehiclesData);
  }, [vehiclesData, query]);

  useEffect(() => {
    setHasMore(
      hasData
        ? hasData[0]?.hasMore === true
          ? true
          : false
        : posts[0]?.hasMore === true
        ? true
        : false
    );
  }, [hasData, posts]);
  // BACKTOINVENTORY: scrolls to the place after got the data
  useEffect(() => {
    const id = localStorage.getItem("last-viewed-car");
    if (!id) return;
    const element = document.getElementById(`vehicle-${id}`);
    if (element) {
      const savedPosition = localStorage.getItem("scroll-position");
      history.scrollRestoration = "manual";
      window.scrollTo(0, parseInt(savedPosition, 10));

      localStorage.removeItem("last-viewed-car");
      localStorage.removeItem("scroll-position");
      localStorage.removeItem("cached-cars");
      localStorage.removeItem("is-cart-view");
    }
  }, [posts]);

  // BACKTOINVENTORY: sets data
  useEffect(() => {
    const previousPage = parseInt(query?.page, 10);
    const cars = JSON.parse(localStorage.getItem("cached-cars") || "[]");
    const lastViewedCar = localStorage.getItem("last-viewed-car");
    const isCartView = localStorage.getItem("is-cart-view");
    setCartView(
      isCartView == "yes" ? true : isCartView == "no" ? false : cartView
    );

    if (lastViewedCar) {
      setData(previousPage, cars);
      const isCartView = localStorage.getItem("is-cart-view");
      setCartView(
        isCartView == "yes" ? true : isCartView == "no" ? false : cartView
      );
    } else {
      localStorage.removeItem("scroll-position");
      localStorage.removeItem("cached-cars");
      localStorage.removeItem("is-cart-view");
    }
  }, []);

  // * Scroll to Previous state functionality */

  return (
    <div
      className={`row p-0 px-1 px-md-2 ${
        otherFormik ? "px-lg-0" : ""
      } m-0 w-100 pt-5 pt-lg-0`}
    >
      <div className="p-0 m-0 mt-lg-0 col-12 w-100 d-flex flex-wrap jsutify-content-center align-items-center ">
        <span className="p-0 pl-1 pl-lg-4 m-0 row w-100 inventory_count_div__container text-center">
          {posts[0]?.fullSearchCount} Vehicles
        </span>
        <div className="d-flex flex-wrap col-12 justify-content-between p-2">
          <InventorySortVehicles
            vehiclesData={vehiclesData}
            setShowMobileFilter={setShowMobileFilter}
            mobileRenderComponent={mobileRenderComponent}
          />

          {/* <div className=" d-flex cart_view_container justify-content-between p-0 m-0 ">
            <div
              className=" p-1 d-flex justify-content-center align-items-center BorderBoxL"
              style={{ backgroundColor: `${cartView ? "#616161" : "#fff"}` }}
              onClick={() => {
                setCartView(false);
              }}
            >
              <BsListUl
                color={cartView ? "#fff" : "#616161"}
                size={20}
                className="mr-1 view_stack"
              />
            </div>
            <div
              className=" p-1 d-flex justify-content-center align-items-center BorderBoxR"
              style={{ backgroundColor: `${cartView ? "#fff" : "#616161"}` }}
              onClick={() => {
                setCartView(true);
              }}
            >
              <BsFillGridFill
                color={cartView ? "#616161" : "#fff"}
                size={20}
                className="ml-1 view_grid"
              />
            </div>
          </div> */}

          <span className="cart_view_container d-flex justify-content-center ">
            <span
              style={{
                backgroundColor: cartView ? "transparent" : "#616161",
              }}
              className="w-50 px-3 py-1 BorderBoxL"
            >
              <FaList
                onClick={() => {
                  setCartView(false);
                }}
                color={cartView ? "#616161" : "#fff"}
                size={16}
                className="view_stack "
              />
            </span>
            <span
              style={{
                backgroundColor: cartView ? "#616161" : "transparent",
              }}
              className="w-50 px-3 py-1 BorderBoxR"
            >
              <IoGrid
                onClick={() => {
                  setCartView(true);
                }}
                color={cartView ? "#fff" : "#616161"}
                size={16}
                className="view_grid "
              />
            </span>
          </span>
        </div>
      </div>

      {loading ? (
        <div className="w-100 d-flex justify-content-center">
          <Loading />
        </div>
      ) : (
        <div className="w-100">
          {posts?.length ? (
            <InfiniteScroll
              dataLength={posts?.length ? posts?.length : []}
              className=" w-100 p-0 m-0 row"
              next={() => {
                // query?.make || query?.model || query?.Minyear || query?.Maxyear
                //   ? undefined
                //   :
                setPage(page + 1);
                mutate(formik?.values);
              }}
              hasMore={hasMore}
              loader={<Loading /> || isLoading}
              style={{ overflow: "hidden", width: "100%" }}

              // endMessage={}
              // endMessage={<h1>ertyuiopdfghjklxcvbnm,.ghjkl;</h1>}
            >
              {posts?.map((item, index) => (
                <div
                  key={`carInventory${item?.id}`}
                  className={`${
                    cartView ? " col-md-6 col-xl-4" : "col-lg-12"
                  } p-0 col-12 m-0 py-1 p-md-2 px-lg-0 p-lg-1`}
                  id={`vehicle-${item?.id}`}
                >
                  {cartView ? (
                    <CarItem
                      car={item}
                      otherFormik={otherFormik}
                      onClose={onClose}
                      dealerData={dealerData}
                      setCompare={setCompare}
                      compare={compare}
                      selectTitle={selectTitle}
                      setselectTitle={setselectTitle}
                      setadvanceSearchCar={setadvanceSearchCar}
                      domain={domain}
                      onBeforeViewDetailClick={onBeforeClick}
                    />
                  ) : (
                    <CarItem2
                      car={item}
                      otherFormik={otherFormik}
                      onClose={onClose}
                      dealerData={dealerData}
                      setCompare={setCompare}
                      compare={compare}
                      selectTitle={selectTitle}
                      setselectTitle={setselectTitle}
                      setadvanceSearchCar={setadvanceSearchCar}
                      domain={domain}
                      onBeforeViewDetailClick={onBeforeClick}
                    />
                  )}
                </div>
              ))}
            </InfiniteScroll>
          ) : null}
        </div>
      )}

      <div className=" p-0 m-0 row w-100 d-flex">
        <Modal
          backdropClassName=""
          size="xl"
          centered
          show={showMobileFilter}
          onHide={onCloseHandler}
          className=""
          contentClassName="p-2 m-0 rounded eforms_div__container d-flex"
        >
          <Modal.Header className="p-0 m-0 border-0">
            <Modal.Title className="black-white d-flex justify-content-between py-3 p-0 m-0 w-100">
              <p className="p-0 m-0 pl-3 modal_title">
                Advance Search <img src="/images/title_icon.png" />
              </p>

              <button
                className="p-0 pr-3 m-0 modal_close_button__style"
                onClick={onCloseHandler}
              >
                <FaTimes size={28} />
              </button>
            </Modal.Title>
          </Modal.Header>
          <AdvanceFilter
            domain={domain}
            advanceSearchData={advanceSearchData}
            setVehiclesData={setVehiclesData}
            minOdometer={advanceSearchData?.minOdometer}
            maxOdometer={advanceSearchData?.maxOdometer}
            minPrice={advanceSearchData?.minPrice}
            maxPrice={advanceSearchData?.maxPrice}
            kmMax={advanceSearchData?.kmMax}
            kmMin={advanceSearchData?.kmMin}
            miMin={advanceSearchData?.miMin}
            miMax={advanceSearchData?.miMax}
            posts={posts}
            onCloseHandler={onCloseHandler}
            searchKeywordes={searchKeywordes}
            setSearchKeywordes={setSearchKeywordes}
            setPosts={setPosts}
            vehicleDataForSearch={vehicleDataForSearch}
            keyworder={keyworder}
            setkeyworder={setkeyworder}
            vehiclesData2={vehiclesData2}
          />
        </Modal>
      </div>
    </div>
  );
};

// export default Cars;
export default React.memo(Cars);
