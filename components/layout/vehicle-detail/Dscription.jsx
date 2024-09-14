import { findScript } from "../../../utils/common/html_script";

const Dscription = (props) => {
  return (
    <div className="p-0 m-0">
      <div className="d-flex row col-12 justify-content-start align-items-start text-start p-0 m-0 ">
        <h3 className="mt-3 description_title">Description</h3>
        <div
          className="col-12 m-0 py-3 px-2 DetaileProductCustomrWeb-description-text"
          dangerouslySetInnerHTML={{
            __html: findScript(props?.data?.comment),
          }}
        />
      </div>
    </div>
  );
};

export default Dscription;
