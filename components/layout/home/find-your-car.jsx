import 'bootstrap/dist/css/bootstrap.min.css';

const FindYourCar = () => {
  return (
    
      <div className="row  shadow w-100 " style={{ margin: '5% 10%' ,borderRadius:'15px',backgroundColor:'#fff'}}>
      <div className="col-md-12 p-5 ">
        <h2 className='text-center font-weight-bolder'>Find Your Next Car</h2>
      </div>
      <div className="col-md-12  d-flex flex-column flex-md-row justify-content-center align-items-center g pt-2 pb-5">
        <div className="btn-low-center">
          <a className="btn text-white" title="Browse All Vehicles" href="used-cars" style={{backgroundColor:'#ff271e'}}>
            Browse All Vehicles
          </a>
        </div>
        <div className="px-4 py-4 py-lg-0">
          <h6 className='font-weight-bold'>OR</h6>
        </div>
        <div className="btn-low-center">
          <a className="btn text-white" title="Get Pre-Approved" href="car-loan-application" style={{backgroundColor:'#ff271e'}}>
            Get Pre-Approved
          </a>
        </div>
      </div>
      </div>
    
  );
};

export default FindYourCar;