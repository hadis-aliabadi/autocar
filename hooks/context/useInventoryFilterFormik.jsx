import { useContext } from "react";
import {
  InventoryFilterContextFormik,
  InventoryFilterContextFormLoading,
} from "../../context/inventoryFilterContext";

export const useInventoryFilterFormik = () =>
  useContext(InventoryFilterContextFormik);
export const useInventoryFilterFormLoading = () =>
  useContext(InventoryFilterContextFormLoading);
