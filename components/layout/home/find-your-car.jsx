import 'bootstrap/dist/css/bootstrap.min.css';

const FindYourCar = () => {
  return (
    
      <div className="row  shadow-sm w-100 " style={{ margin: '5% 10%' ,borderRadius:'15px',backgroundColor:'#fff'}}>
      <div className="col-md-12 p-5 ">
        <h2 className='text-center font-weight-bolder'>Find Your Next Car</h2>
      </div>
      <div className="col-md-12  d-flex flex-column flex-md-row justify-content-center align-items-center g pt-2 pb-5">
        <div className="btn-low-center">
          <a className="btn " title="Browse All Vehicles" href="used-cars" style={{backgroundColor:'#ff271e'}}>
           <button className='btn px-2 py-1 text-white'> Browse All Vehicles</button>
          </a>
        </div>
        <div className="px-4 py-4 py-lg-0">
          <h6 className='font-weight-bolder'>OR</h6>
        </div>
        <div className="btn-low-center ">
          <a className="btn  " title="Get Pre-Approved" href="car-loan-application" style={{backgroundColor:'#ff271e'}}>
            <button className='btn px-2 py-1 text-white'>Get Pre-Approved</button>
          </a>
        </div>
      </div>
      </div>
    
  );
};

export default FindYourCar;