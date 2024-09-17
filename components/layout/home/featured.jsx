import 'bootstrap/dist/css/bootstrap.min.css';

const FeaturedVehicles = () => {
  return (
    <div className='w-100' style={{margin:'100px 90px 50px 90px'}}>
      <div className="container ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12">
            <header className=" d-flex justify-content-center align-items-center">
              <div>
                <h3 className="text-center font-weight-bolder fs-1">Featured Vehicles</h3>
                <p className="text-center mt-2">New and popular items at competitive prices.</p>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default FeaturedVehicles;