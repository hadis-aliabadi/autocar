import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const TwoCard = () => {
  return (
    <div className="container">
      <div className="row">
        {/* اولین دیو */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-flex border border-danger rounded overflow-hidden custom-div">
            {/* تصویر سمت چپ */}
            <div className="image-container">
              <img
                src="/images/sample1.jpg"
                alt="Sample Image 1"
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
            {/* محتوای سمت راست */}
            <div className="flex-grow-1 bg-white d-flex align-items-center justify-content-center">
              <p className="mb-0">Content in the right with white background</p>
            </div>
          </div>
        </div>

        {/* دومین دیو */}
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-flex border border-danger rounded overflow-hidden custom-div">
            {/* تصویر سمت چپ */}
            <div className="image-container">
              <img
                src="/images/sample2.jpg"
                alt="Sample Image 2"
                width={150}
                height={150}
                className="img-fluid"
              />
            </div>
            {/* محتوای سمت راست */}
            <div className="flex-grow-1 bg-white d-flex align-items-center justify-content-center">
              <p className="mb-0">Another content on the right</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoCard;