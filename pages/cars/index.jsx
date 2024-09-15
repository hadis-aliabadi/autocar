import Cars from "../../components/common/web/Cars";
import { httpRequest } from "../../apis";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import InventoryFilterContext from "../../context/inventoryFilterContext";
import AdvanceFilter from "../../components/common/web/filter/AdvanceFilter";
import { FaTrashAlt } from "react-icons/fa";
export default function Inventory(props) {
  const { query } = useRouter();
  const {
    domain,
    advanceSearchData,
    vehiclesData,
    dealerData,
    vehicleDataForSearch,
    vehiclesData2,
  } = props;
  const [vehicles, setVehiclesData] = useState(() => vehiclesData);
  const [posts, setPosts] = useState([]);
  const [compare, setCompare] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [selectTitle, setselectTitle] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [keyworder, setkeyworder] = useState();

  const [loadingSearch, setLoadingSearch] = useState(false);

  const [searchKeywordes, setSearchKeywordes] = useState(
    query?.keywords ? query?.keywords : ""
  );

  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${dealerData?.prefixUrl}${dealerData?.tab_logo_url}`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="keywords"
          content={`cars, trucks, SUVs, used cars, new cars, cars for sale, used cars for sale, used car ${dealerData?.business_city?.city} ${dealerData?.business_city?.Province?.province}, Car dealership, Auto sales, ${dealerData?.business_city?.city},Best used cars ,Quality used cars, Low mileage used cars, Affordable used cars, Certified pre-owned cars, Pre-owned vehicles, Used cars for sale`}
        />
        <meta
          name="description"
          content={`Find used cars, trucks and SUVs for sale in our inventory list at  ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          } Group. Contact us to learn more about our inventory`}
        />
        <title>
          {`Used Car | ${
            dealerData?.business_city?.city
          } Used Car Dealer | New and Used Car For Sale | ${
            dealerData?.dba ? dealerData?.dba : dealerData?.bussiness_name
          }`}
        </title>

        <link
          rel="icon"
          href={`${dealerData?.prefixUrl}${dealerData?.logo_url}`}
        />
      </Head>

      <InventoryFilterContext
        domain={domain}
        advanceSearchData={advanceSearchData}
        setVehiclesData={setVehiclesData}
        minOdometer={advanceSearchData?.minOdometer}
        maxOdometer={advanceSearchData?.maxOdometer}
        kmMax={advanceSearchData?.kmMax}
        kmMin={advanceSearchData?.kmMin}
        miMin={advanceSearchData?.miMin}
        miMax={advanceSearchData?.miMax}
        minPrice={advanceSearchData?.minPrice}
        maxPrice={advanceSearchData?.maxPrice}
        setPosts={setPosts}
        makeParam={query?.make}
        modelParam={query?.model}
        minyearParam={query?.Minyear}
        maxyearParam={query?.Maxyear}
        dealerData={dealerData}
        makeBodystyle={query?.bodystyle}
        page={page}
        setPage={setPage}
        limit={limit}
        searchKeywordes={searchKeywordes}
        setSearchKeywordes={setSearchKeywordes}
        keyworder={keyworder}
        setkeyworder={setkeyworder}
      >
        <div
          style={{ backgroundColor: "#f6f6f6" }}
          className="row pt-3 justify-content-center p-0 m-0 w-100"
        >
          <div className="col-12 col-md-12 col-lg-11 mx-auto col-xl-11 p-0 m-0  justify-content-center d-flex">
            <div className="A col-12 m-0 row w-100  justify-content-center px-2">
              <div className="ADVANCE-SEARCH-WRAPPER  col-12  p-0 py-2 px-0 m-0 advance__search__div--position">
                <AdvanceFilter
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
                  keyworder={keyworder}
                  setkeyworder={setkeyworder}
                  searchKeywordes={searchKeywordes}
                  setSearchKeywordes={setSearchKeywordes}
                  vehicleDataForSearch={vehicleDataForSearch}
                  vehiclesData2={vehiclesData2}
                  dealerData={dealerData}
                  setLoadingSearch={setLoadingSearch}
                  loadingSearch={loadingSearch}
                />
              </div>

              <div className="col-12 p-0 mt-4 ">
                <div className="row w-100 m-0 p-0 justify-content-center white-background">
                  <div className="1 pl-4 p-0 m-0 col-12 mt-0 row px-2">
                    <div className="p-0 m-0 col-12 mb-3 pl-2">
                      {selectTitle.length !== 0 && (
                        <div className="p-0 m-0 w-100 row">
                          <h3 className="p-0 pb-2 m-0 w-100">Compare List</h3>
                          {selectTitle.map((car) => {
                            return (
                              <div className="p-0 m-0 col-12 col-md-6 col-lg-4">
                                <div className="p-0 m-0 w-100 row justify-content-start align-items-center">
                                  <span style={{ fontSize: "14px" }}>
                                    {car?.name}
                                  </span>
                                  <button
                                    className="btn p-0 m-0"
                                    onClick={() => {
                                      setCompare(
                                        compare.filter((item) => item != car.id)
                                      );
                                      setselectTitle(
                                        selectTitle.filter(
                                          (item) => item.id != car.id
                                        )
                                      );
                                    }}
                                  >
                                    <i className="eform_list_trash_icon__style">
                                      <FaTrashAlt color="#e62424 " />
                                    </i>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="last col-12 col-md-12 d-flex flex-column p-0 m-0  py-2">
                    <Cars
                      dealerData={dealerData}
                      page={page}
                      setPage={setPage}
                      vehiclesData={vehicles}
                      hasMore={hasMore}
                      setHasMore={setHasMore}
                      domain={domain}
                      advanceSearchData={advanceSearchData}
                      posts={posts}
                      setPosts={setPosts}
                      query={query}
                      getinfoofcars={vehicles}
                      setselectTitle={setselectTitle}
                      selectTitle={selectTitle}
                      setCompare={setCompare}
                      compare={compare}
                      keyworder={keyworder}
                      setkeyworder={setkeyworder}
                      searchKeywordes={searchKeywordes}
                      setVehiclesData={setVehiclesData}
                      setSearchKeywordes={setSearchKeywordes}
                      setLoadingSearch={setLoadingSearch}
                      loadingSearch={loadingSearch}
                      vehiclesData2={vehiclesData2}
                      limit={limit}
                      setLimit={setLimit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InventoryFilterContext>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;
  const currentYear = new Date().getFullYear() + 1;
  const { data: advanceSearchData, status: advanceSearchStatus } =
    await httpRequest(
      "GET",
      `/api/dealership/advance/search/vehicles/get/${domain}`,
      {},
      {},
      false
    );
  const body = {
    year_start: "1900",
    year_end: currentYear,
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
    sold: null,
    fuel_type: "",
    keywords: "",
    sold: null,
    is_coming_soon: null,
    sortKind: {
      kind: "",
      type: null,
      order: 0,
    },
  };
  const query = ctx.query;
  if (
    query?.make !== "" ||
    query?.model !== "" ||
    query?.Minyear !== "" ||
    query?.Maxyear !== "" ||
    query?.Bodystyle !== "" ||
    query?.Doors !== "" ||
    query?.EngineCylinder !== "" ||
    query?.Exteriorcolor !== "" ||
    query?.Interior_color !== "" ||
    query?.MaxPrice !== "" ||
    query?.Maxodometer !== "" ||
    query?.MinPrice !== "" ||
    query?.Minodometer !== "" ||
    query?.Transmission !== "" ||
    query?.Fueltype !== "" ||
    query?.keywords !== ""
  ) {
    body.year_start = +query?.Minyear || "1900";
    body.year_end = +query?.Maxyear || currentYear;
    body.make = query?.make;
    body.model = query?.model;
    body.price_low = +query?.MinPrice;
    body.price_high = +query?.MaxPrice;
    body.odometer_low = +query?.Minodometer;
    body.odometer_high = +query?.Maxodometer;
    body.transmission = query?.Transmission;
    body.body_style = query?.Bodystyle;
    body.doors = +query?.Doors;
    body.interior_color = query?.Interior_color;
    body.Exterior_color = query?.Exteriorcolor;
    body.engine_cylinders = query?.EngineCylinder;
    body.fuel_type = query?.Fueltype;
    body.keywords = query?.keywords;
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10&media=1`,
      body,
      {},
      false
    );
    const { status: vehiclesStatus2, data: vehiclesData2 } = await httpRequest(
      "GET",
      `/dealership/vehicles/all/with/thumbnail/${domain}`,
      {},
      {},
      false
    );
    const { data: vehicleDataForSearch, status: vehicleDataForSearchStatus } =
      await httpRequest("GET", `/dealership/vehicles/all/${domain}`, {}, {});

    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          domain,
          advanceSearchData,
          vehicleDataForSearch,
          vehiclesData,
          vehiclesData2,
        },
      };
    }
  } else if (query?.is_it_special) {
    body.is_it_special = query?.is_it_special || null;
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10&media=1`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          domain,
          advanceSearchData,
          vehiclesData,
        },
      };
    }
  } else {
    const { status: vehiclesStatus, data: vehiclesData } = await httpRequest(
      "POST",
      `/api/dealership/advance/search/vehicles/${domain}?page=1&limit=10&media=1`,
      body,
      {},
      false
    );
    if (vehiclesStatus !== 200 || advanceSearchStatus !== 200) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        domain,
        advanceSearchData,
        vehiclesData,
      },
    };
  }
}
