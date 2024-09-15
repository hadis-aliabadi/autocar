import 'bootstrap/dist/css/bootstrap.min.css';
import { FaThumbsUp, FaHeadphones, FaTag } from 'react-icons/fa';

const features = [
  {
    icon: <FaThumbsUp style={{fontSize:'50px'}}/>,
    title: 'Fast and simple',
    description: 'Complete a short application online & we’ll get back to you with your approval terms for the vehicle of your choice.',
  },
  {
    icon: <FaHeadphones style={{fontSize:'50px'}}/>,
    title: 'Transparent & Stressfree',
    description: 'You know exactly what you owe and full disclosure are provided upfront. Hence, no surprise.',
  },
  {
    icon: <FaTag style={{fontSize:'50px'}}/>,
    title: 'Best Rate',
    description: 'Our team of professionals work around the clock to provide you with the best possible finance rate.',
  },
];

const FeatureItem = ({ icon, title, description }) => (
  <div className="col-sm-4">
    <div className="row">
      <div className="col-sm-12 text-center">
        {icon}
        <br />
        <h3 className="my-4" style={{fontSize:'20px'}}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const FinanceComponent = () => {
  return (
    <div className="container col-sm-12 col-md-12">
      <div id="primary" className="content-area">
        <main id="main" className="p-5" role="main">
          <div className="post-inner-content">
            <header className="mb-4">
              <h1 style={{fontSize:'30px',fontWeight:'bold'}}>Finance</h1>
            </header>

            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>

                <div className="row d-flex justify-content-center align-items-center mt-4">
                  <div className="col-sm-12 d-flex justify-content-center align-items-center ">
                    <a className="btn btn-danger" title="Get Pre-Approved" href="car-loan-application">
                      Get Pre-Approved
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mt-5">
                <div className="row  shadow">
                  <div className="col-md-6" style={{ padding: '60px 0 0 40px' }}>
                    <h2>Get Pre-Approved Before Buying</h2>
                    <div className="space-10"></div>
                    <div className="f-txt">
                      <p>
                        Buy with confidence by knowing what you can afford. A pre-approval will guide you in the right direction in getting you behind the wheel of your choice.
                      </p>
                      <p>Regardless of your credit situation, we will get you behind the wheels.</p>
                      <br />
                      <a className="btn" title="Get Pre-Approved" href="car-loan-application">
                        Get Pre-Approved
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ paddingRight: 0 }}>
                    <img
                      src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts1.png"
                      alt="Get Pre-Approved"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-8">
                    <h2>How it works</h2>
                    <div className="space-10"></div>
                    <div className="">
                      <h3>1). Get Pre-approved</h3>
                      <p>Get pre-approved regardless of your credit. Know your terms with full transparency.</p>
                      <h3>2). Browse Vehicles</h3>
                      <p>Search the vehicle of your choice based on your pre-approval.</p>
                      <h3>3). Drive</h3>
                      <p>Our team of professionals will guide you through the entire loan process and get you the vehicle of your choice.</p>
                    </div>
                  </div>
                  <div className="col-md-4" style={{ paddingRight: 0 }}>
                    <img
                      src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts2.png"
                      alt="How it works"
                      className="img-fluid"
                    />
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FinanceComponent;
