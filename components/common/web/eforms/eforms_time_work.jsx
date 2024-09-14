import { FaClock } from "react-icons/fa";

const EformsTimeWork = (props) => {
  const { timework } = props;
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className={`p-0 m-0 my-3 col-11  col-sm-6 col-lg-11`}>
      <div className="d-felx flex-row align-items-center ">
        <FaClock className="mr-1" />
        <span className="contact-e-title my-3">Business Hours</span>
      </div>

      <div className="p-0 m-0">
        <div className="d-flex flex-column pt-3 justify-content-center">
          {timework?.map((time, index) => (
            <div className="p-0 m-0 d-flex  align-items-center justify-content-between">
              <p
                className="p-0 m-0  my-1 footer_desc_hour2 text-dark "
                style={{ fontSize: "13px" }}
              >
                {Days[index]}
              </p>
              <p
                className="p-0 m-0  footer_desc_hour2 text-dark"
                style={{ fontSize: "13px" }}
              >
                {time?.startAt}
                {time?.holiday === 1 ? "" : " - "}
                {time?.endAt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EformsTimeWork;
