function Error({ statusCode, err }) {
  return (
    <div
      className="p-5 m-0 d-flex w-100 row align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="p-0 m-0 row w-100">
        <div
          className="p-0 m-0 col-12 col-md-6 d-flex flex-column text-center"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 10px 30px #00000033",
          }}
        >
          <div className="text-danger" style={{ fontSize: "120px" }}>
            404
          </div>
          <div>Page Not Found!</div>
        </div>
        <div className="p-0 m-0 col-12 col-md-6">
          {" "}
          <img
            src="/images/404/404.jpg"
            alt="404"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  console.log("err", err);
  console.log("res", res);
  const statusCode = res ? res?.statusCode : err ? err?.statusCode : 404;
  return { statusCode, err };
};

export default Error;
