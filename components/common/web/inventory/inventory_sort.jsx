import { FaFilter } from "react-icons/fa";
import {
  useInventoryFilterFormik,
  useInventoryFilterFormLoading,
} from "../../../../hooks/context/useInventoryFilterFormik";
import { handleSortOfInventory } from "../../../../utils/inventory/inventory";
import { useRouter } from "next/router";

const InventorySortVehicles = ({showMobileFilter,setShowMobileFilter}) => {
  const formik = useInventoryFilterFormik();
  const router = useRouter();
  const loading = useInventoryFilterFormLoading();

  return (
    <>
      <div className="p-0 m-0  mt-lg-0 px-md-1 px-lg-3 col-9 w-100">
        <div className="p-0 m-0  row w-100  align-items-center justify-content-between">
          <div className="p-0 m-0 d-flex flex-wrap align-items-center">
            <b style={{ color: "#000",fontSize:'13px' }} className="mb-2 ">
              Sort:
            </b>
           
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortMake" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortMake" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortMake");
              }}
            >
              Make
            </button>
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortModel" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortModel" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortModel");
              }}
            >
              Model
            </button>
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortYear" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortYear" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortYear", true);
              }}
            >
              Year
            </button>
           
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortPrice" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortPrice" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortPrice", true);
              }}
            >
              Price
            </button>
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortOdometer" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortOdometer" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortOdometer");
              }}
            >
              Mileage
            </button>
            <button
              type="button"
              disabled={loading}
              className={`m-0 mb-2 px-md-3 inventory_sort_button__container ${
                formik.values.sortKind.kind === "sortBodyStyle" &&
                formik.values.sortKind.order === 1
                  ? "ASC"
                  : formik.values.sortKind.kind === "sortBodyStyle" &&
                    formik.values.sortKind.order === 2
                  ? "DESC"
                  : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSortOfInventory(formik, "sortBodyStyle");
              }}
            >
              Body Style
            </button>
           
          </div>
         
        </div>
      </div>
    </>
  );
};

export default InventorySortVehicles;
