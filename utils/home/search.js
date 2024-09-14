import { BASE_URL } from "../../constant/base";

export const getdata = async (setdata) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.host;

    const _res = await fetch(`${BASE_URL}/api/dealership/vehicles/${hostname}`);
    const data = await _res.json();
    if (_res.ok) {
      setdata(data);
    } else {
      setdata(true);
    }
  }
};
export const getcars = async (setcars, setmake, setmodel, setbodystyle) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.host;
    const _res = await fetch(`${BASE_URL}/api/dealership/vehicles/${hostname}`);
    const data = await _res.json();
    if (_res.ok) {
      setcars(data.midVehicleDealerships);

      var cars = data.midVehicleDealerships.map((i) => i.Make);
      cars.push("All");
      var resultcars = cars.filter((data, index) => {
        return cars.indexOf(data) === index;
      });

      var models = data.midVehicleDealerships.map((i) => i.Model);
      models.push("All");
      var resultmodels = models.filter((data, index) => {
        return models.indexOf(data) === index;
      });

      var bodystyles = data.midVehicleDealerships.map((i) => i.BodyStyle);
      bodystyles.push("All");
      var resultbodystyles = bodystyles.filter((data, index) => {
        return bodystyles.indexOf(data) === index;
      });
      setmake(
        resultcars.reverse().map((i) => {
          return {
            value: i,
            label: i,
          };
        })
      );
      setmodel(
        resultmodels.reverse().map((i) => {
          return {
            value: i,
            label: i,
          };
        })
      );

      setbodystyle(
        resultbodystyles.reverse().map((i) => {
          return {
            value: i,
            label: i,
          };
        })
      );
    }
  }
};
export const handleChange = (event,setdisplaysearch,setSearchTerm) => {
  if (event.target.value.length > 0) {
    setdisplaysearch(true);
  } else {
    setdisplaysearch(false);
  }
  setSearchTerm(event.target.value?.toLowerCase());
};

export const simplesearches = (i,setvehicle,setdisplaysearch) => {
    setvehicle(
      cars.filter(
        (x) =>
          x.model === i[0].model &&
          x.make === i[0].make &&
          x.model_year === i[0].model_year &&
          x.ids === i[0].id
      )
    );
    setdisplaysearch(false);
  };