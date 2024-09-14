import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Spinner
        className="d-flex align-items-center justify-content-center"
        animation="border"
        variant="primary"
      />
    </div>
  );
};

export default Loading;
