import { findScript } from "../../../utils/common/html_script";

const Waranty = (props) => {
  return (
    <div className="p-0 m-0">
      <div
        className={` row col-12 justify-content-start align-items-start text-start p-0 m-0  ${
          props?.data?.waranty === null ? "d-none" : "d-flex"
        } `}
      >
        <h3 className="mt-1 description_title">Warranty</h3>
        <div
          className="col-12 m-0 py-4  px-0 DetaileProductCustomrWeb-description-text"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.waranty),
          }}
        />
      </div>
    </div>
  );
};

export default Waranty;
