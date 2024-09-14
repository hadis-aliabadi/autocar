const OperationHoures = (props) => {
  return (
    <>
      <div className="p-0 m-0">
        <div className=" p-0 m-0 pb-2">
          <h3 className="p-0 m-0 footer_title_container">Our Hours</h3>
        </div>
        <div
          className="row justify-content-center align-items-center col-lg-12 col-sm-8 col-md-9 p-0 m-0 "
          // style={{ fontSize: "13px" }}
        >
          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Monday</p>
              <p className="p-0 m-0 ">
                {props?.timeWork[0]?.startAt}{" "}
                {props?.timeWork[0]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[0]?.endAt}
              </p>
            </div>
          </div>
          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Tuesday</p>
              <p className="p-0 m-0">
                {props?.timeWork[1]?.startAt}{" "}
                {props?.timeWork[1]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[1]?.endAt}
              </p>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Wednesday</p>
              <p className="p-0 m-0">
                {props?.timeWork[2]?.startAt}{" "}
                {props?.timeWork[2]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[2]?.endAt}
              </p>
            </div>
          </div>

          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Thursday</p>
              <p className="p-0 m-0">
                {props?.timeWork[3]?.startAt}{" "}
                {props?.timeWork[3]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[3]?.endAt}
              </p>
            </div>
          </div>
          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Friday</p>
              <p className="p-0 m-0">
                {props?.timeWork[4]?.startAt}{" "}
                {props?.timeWork[4]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[4]?.endAt}
              </p>
            </div>
          </div>
          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Saturday</p>
              <p className="p-0 m-0">
                {props?.timeWork[5]?.startAt}{" "}
                {props?.timeWork[5]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[5]?.endAt}
              </p>
            </div>
          </div>
          <div className="col-12 p-0 m-0">
            <div className="row justify-content-between p-0 m-0 align-items-center footer_desc_hour py-1">
              <p className="p-0 m-0">Sunday</p>
              <p className="p-0 m-0">
                {props?.timeWork[6]?.startAt}{" "}
                {props?.timeWork[6]?.holiday === 1 ? "" : "-"}{" "}
                {props?.timeWork[6]?.endAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationHoures;
