import EformsConatctInfo from "../components/common/web/eforms/eforms_contact_info";

const Trade = (props) => {
  const { dealerData } = props;
  return(
    <div style={{ backgroundColor: "#f6f6f6" }} className="p-0 m-0 w-100">
        <div className="p-0 m-0 w-100 row justify-content-center contact_us_pos">
          
          <div className="row col-12 col-lg-10 p-0 m-0 pt-4 px-4 px-xl-0">
            <div className="p-1 p-md-3 m-0 col-12 col-lg-7 col-xl-8 ">
              <div
                style={{ backgroundColor: "#fff" }}
                className="p-2 p-lg-3 m-0 row w-100 contact_us_container"
              >
                image 
              </div>
            </div>
            <div className="p-0 m-0 pt-lg-3  col-12 col-lg-5 col-xl-4 justify-content-center ">
              <div className=" pt-3 pt-lg-0  p-lg-0 m-0 px-1 px-lg-2 ">
                <EformsConatctInfo dealerData={dealerData} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export async function getServerSideProps(ctx) {
  const domain = ctx.req.headers.host;

  return {
    props: {
      domain,
    },
  };
}

export default Trade;