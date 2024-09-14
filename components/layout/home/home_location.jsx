import Location from "../directions/location";

const HomeLocation = (props) => {
  const { dealerData } = props;
  return (
    <div className="p-0 m-0 d-flex align-items-center justify-content-center">
      <div className="p-0 m-0 w-100">
        <Location dealerData={dealerData} />
      </div>
    </div>
  );
};

export default HomeLocation;
