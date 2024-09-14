import { useFormik } from "formik";
import { useRouter } from "next/router";
import { createContext } from "react";
import { useGetVehiclesBaseOnFilter } from "../hooks/vehicles/useGetVehiclesBaseOnFilter";

export const InventoryFilterContextFormik = createContext();
export const InventoryFilterContextFormLoading = createContext();
const InventoryFilterContext = ({
  children,
  domain,
  setVehiclesData,
  kmMin,
  kmMax,
  miMin,
  miMax,
  minPrice,
  maxPrice,
  page,
  setPage,
  setadvancesearchData,
  limit,
  searchKeywordes,
}) => {
  const { isLoading, mutate } = useGetVehiclesBaseOnFilter(
    {
      onSuccessFunction: data => {
        setVehiclesData(data);
        setadvancesearchData(false);
      },
    },
    domain,
    page,
    limit,
    searchKeywordes
  );
  const Router = useRouter();
  const { query } = useRouter();
  const currentYear = new Date().getFullYear();
  const formik = useFormik({
    initialValues: {
      // url: domain,
      fuel_type: Router?.query?.Fueltype ? Router?.query?.Fueltype : "",
      body_style: Router?.query?.Bodystyle ? Router?.query?.Bodystyle : "",
      engine_cylinders: Router?.query?.EngineCylinder
        ? Router?.query?.EngineCylinder
        : "",
      year_end: Router?.query?.Maxyear
        ? +Router?.query?.Maxyear
        : currentYear + 1,
      price_low: Router?.query?.MinPrice
        ? +Router?.query?.MinPrice
        : minPrice - 1,
      price_high: Router?.query?.MaxPrice
        ? +Router?.query?.MaxPrice
        : maxPrice + 1,
      odometer_type: 2,
      make: Router?.query?.make ? Router?.query?.make : "",
      model: Router?.query?.model ? Router?.query?.model : "",
      transmission: Router?.query?.Transmission
        ? Router?.query?.Transmission
        : "",

      drive_train: "",
      doors: Router?.query?.Doors ? +Router?.query?.Doors : "",
      interior_color: Router?.query?.Interior_color
        ? Router?.query?.Interior_color
        : "",
      Exterior_color: Router?.query?.Exteriorcolor
        ? Router?.query?.Exteriorcolor
        : "",
      sortKind: {
        kind: "",
        type: null,
        order: 0,
      },
      sold: Router?.pathname === "/cars/sold" ? 1 : "",
      is_coming_soon: Router?.pathname === "/cars/coming-soon" ? 1 : "",
      is_it_special: Router.pathname === "/cars/spacial" ? 1 : null,
      year_start: Router?.query?.Minyear ? +Router?.query?.Minyear : "0", //query?.is_classic === "1" ? "0" : "1970",
      odometer_low: Router?.query?.Minodometer
        ? +Router?.query?.Minodometer
        : null,
      odometer_high: Router?.query?.Maxodometer
        ? +Router?.query?.Maxodometer
        : null,
    },
    onSubmit: (values, { resetForm }) => {
      const body = {
        ...values,
        fuel_type: values.fuel_type,
        engine_cylinders: values.engine_cylinders,
        make: values.make,
        is_it_special: Router.pathname === "/cars/spacial" ? 1 : null,
        is_coming_soon: Router?.pathname === "/cars/coming-soon" ? 1 : "",
        sold: Router?.pathname === "/cars/sold" ? 1 : "",
        model: values.model,
        transmission: values.transmission,
        body_style: values.body_style,
        drive_train: values.drive_train,
        doors: values.doors,
        interior_color: values.interior_color,
        Exterior_color: values.Exterior_color,
        odometer_type: values.odometer_type,
        odometer_low: values?.odometer_low
          ? values.odometer_low
          : values.odometer_type === 2
          ? kmMin
          : miMin,
        odometer_high: values?.odometer_high
          ? values.odometer_high
          : values.odometer_type === 2
          ? kmMax
          : miMax,
      };
      page !== 1 && setPage(1);
      mutate(body);
    },
    enableReinitialize: true,
  });
  return (
    <InventoryFilterContextFormik.Provider value={formik}>
      <InventoryFilterContextFormLoading.Provider value={isLoading}>
        {children}
      </InventoryFilterContextFormLoading.Provider>
    </InventoryFilterContextFormik.Provider>
  );
};

export default InventoryFilterContext;
