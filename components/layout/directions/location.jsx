const Location = (props) => {
  const { direction, type, dealerData } = props;
  return (
    <>
      <div className="w-100 p-0 m-0 mb-0">
        {type == "1" ? (
          <div
            className="w-100 py-3 text-black d-flex flex-row justify-content-center align-items-center "
            style={{
              backgroundColor: "#595959  ",
            }}
          >
            <a className="font-weight-bold px-2 px-sm-0 ">
              {" "}
              <span className="p-0 m-0 px-2 text-light">
                We are located at {dealerData?.business_street}
                {", "}
                {dealerData?.business_city?.city}
                {", "}
                {dealerData?.business_city?.Province?.province === "Ontario"
                  ? "ON"
                  : dealerData?.business_city?.Province?.province}
                {", "}
                {dealerData?.business_postal}
              </span>
            </a>
          </div>
        ) : (
          ""
        )}
        <div className="w-100 p-0 m-0 ">
          <iframe
            allow="geolocation"
            src={props?.dealerData?.map_url}
            frameborder="0"
            width="100%"
            height={direction ? "200" : "200"}
            className="border-0 w-100 home_page_border_radius-class"
            aria-hidden="false"
            tabindex="0"
            id="iframe"
            gestureHandling="none"
          />
        </div>
      </div>
    </>
  );
};

export default Location;
