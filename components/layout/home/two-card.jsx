import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
const TwoCard = () => {
  return (
   
      <div className="row p-0 m-0 w-100 mx-5 mt-3">
        
        <div className="col-12 col-lg-6 p-0 m-0">
          <div className="d-flex   cta-car-left-twopart">
           
            <div className="image-container d-none d-md-block">
              <img
                src="//autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/finance-trade-l2.png"
                alt=" Image 1"
                // width={200}
                // height={200}
                className=""
              />
            </div>
            
            <div className="px-1  flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center" style={{marginTop:'20px',marginBottom:'20px'}}>
              <h2 className='font-weight-bold ' style={{fontSize:'22px'}}>Sell or Trade.</h2>
              <p className="mb-0" style={{marginTop:'20px'}}>Get an instant cash offer.</p>
              <div style={{marginTop:'20px'}}>
                <a href='#' className='font-weight-bold ' style={{color:'#ed1f24'}}>Get Offer <FaArrowRightLong /> </a>
              </div>
            </div>
            <div className="d-none d-lg-block flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center">
              
            </div>
          </div>
        </div>

       
        <div className="col-12 col-lg-6 ">
          <div className="d-flex  cta-car-left-twopart" >
            
            <div className="image-container d-none d-md-block">
              <img
                src="//autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/finance-trade-r2.png"
                alt="Image 2"
                
                className="img-fluid"
              />
            </div>
           
            <div className="py-4 px-1 flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center">
                <p className='font-weight-bold ' style={{fontSize:'22px'}}>Finance Your Vehicle.</p>
                <p className="" style={{marginTop:'20px'}}>Find out your payment.</p>
                <div style={{marginTop:'20px'}}>
                  <a href='#' className='font-weight-bold ' style={{color:'#ed1f24'}}>
                  Get Pre Approved <FaArrowRightLong /> </a>
                </div>
            </div>
            <div className="d-none d-lg-block flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center"/>
          </div>
        </div>
      </div>
   
  );
};

export default TwoCard;