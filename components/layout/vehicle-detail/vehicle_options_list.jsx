import VehicleDetailOptionAccordian from "./vehicle-detail-options/vehicle_detail_option_accordian";

const VehicleOptionList = (props) => {
  const { options } = props;
  const arrayOfOptions = Object.entries(options);
  return (
    <div className="p-0 m-0 mt-5 w-100">
      <div className="p-0 m-0 row">
        {arrayOfOptions?.map((option) => (
          <VehicleDetailOptionAccordian
            optionTitle={option[0]}
            OptionList={option[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleOptionList;
