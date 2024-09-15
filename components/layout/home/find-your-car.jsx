import 'bootstrap/dist/css/bootstrap.min.css';

const FindYourCar = () => {
  return (
    
      <div className="row f3-section shadow w-100 " style={{ margin: '3% 10%' }}>
      <div className="col-md-12 p-5 ">
        <h2 className='text-center'>Find Your Next Car</h2>
      </div>
      <div className="col-md-12  d-flex justify-content-center align-items-center g p-5">
        <div className="btn-low-center">
          <a className="btn btn-danger" title="Browse All Vehicles" href="used-cars">
            Browse All Vehicles
          </a>
        </div>
        <div className="px-4">
          <h6>OR</h6>
        </div>
        <div className="btn-low-center">
          <a className="btn btn-danger" title="Get Pre-Approved" href="car-loan-application">
            Get Pre-Approved
          </a>
        </div>
      </div>
      </div>
    
  );
};

export default FindYourCar;