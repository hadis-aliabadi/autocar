import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
const TwoCard = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-flex border border-danger  overflow-hidden custom-div" style={{borderRadius:'15px'}}>
            {/* تصویر سمت چپ */}
            <div className="image-container d-none d-md-block">
              <img
                src="/images/sample1.jpg"
                alt="Sample Image 1"
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
            {/* محتوای سمت راست */}
            <div className="p-2 d-block d-lg-none flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center">
              <p className='font-weight-bold '>Sell or Trade.</p>
              <p className="mb-0">Get an instant cash offer.</p>
              <a href='#' className='font-weight-bold text-danger'>Get Offer <FaArrowRightLong /> </a>
            </div>
            <div className="d-none d-lg-block flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center">
              
            </div>
          </div>
        </div>

       
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-flex border border-danger  overflow-hidden custom-div" style={{borderRadius:'15px'}}>
            
            <div className="image-container d-none d-md-block">
              <img
                src="/images/sample2.jpg"
                alt="Sample Image 2"
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
           
            <div className="p-2 d-block d-lg-none flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center">
                <p className='font-weight-bold '>Finance Your Vehicle.</p>
                <p className="mb-0">Content in the right with white background</p>
                <a href='#' className='font-weight-bold text-danger'>Get Pre-Approved <FaArrowRightLong /> </a>
            </div>
            <div className="d-none d-lg-block flex-grow-1 bg-white d-flex flex-column align-items-start justify-content-center"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;