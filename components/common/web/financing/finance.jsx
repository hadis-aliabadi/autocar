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
        <h3 className="my-4 font-weight-bold" style={{fontSize:'17px'}}>{title}</h3>
        <p style={{fontSize:'14px'}}>{description}</p>
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
              <h1 style={{fontSize:'28px',fontWeight:'bold'}}>Finance</h1>
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

                <div className="row d-flex justify-content-center align-items-center mt-5">
                  <div className="col-sm-12 d-flex justify-content-center align-items-center ">
                    <a className="btn text-white p-3" title="Get Pre-Approved" href="car-loan-application" style={{backgroundColor:'#ff271e'}}>
                      Get Pre-Approved
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 mt-5">
                <div className="row  f-section" >
                  <div className="col-md-6" style={{ padding: '60px 0 0 40px' }}>
                    <h2 className='font-weight-bold' style={{fontSize:'24px'}}>Get Pre-Approved Before Buying</h2>
                    <div className="space-10"></div>
                    <div className="mt-4">
                      <p style={{fontSize:'14px'}}>
                        Buy with confidence by knowing what you can afford. A pre-approval will guide you in the right direction in getting you behind the wheel of your choice.
                      </p>
                      <p style={{fontSize:'14px'}}>Regardless of your credit situation, we will get you behind the wheels.</p>
                      <br />
                      <a className="btn text-white" title="Get Pre-Approved" href="car-loan-application" style={{backgroundColor:'#ff271e'}}>
                        Get Pre-Approved
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 overflow-hidden" style={{ paddingRight: 0,borderRadius:'15px' }}>
                    <img
                      src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts1.png"
                      alt="Get Pre-Approved"
                      className="overflow-hidden"
                    />
                  </div>
                </div>

                <div className="row " style={{marginTop:'100px'}}>
                  <div className="col-md-8 d-flex align-items-center">
                    <div>
                      <h2 className='font-weight-bolder' style={{fontSize:'24px'}}>How it works</h2>
                      <br/>
                      <div className="">
                        <h3 className='font-weight-bolder' style={{fontSize:'20px'}}>1). Get Pre-approved</h3>
                        <p style={{fontSize:'14px'}}>Get pre-approved regardless of your credit. Know your terms with full transparency.</p>
                        <br/>
                        <h3 className='font-weight-bolder'  style={{fontSize:'20px'}}>2). Browse Vehicles</h3>
                        <p style={{fontSize:'14px'}}>Search the vehicle of your choice based on your pre-approval.</p>
                        <br/>
                        <h3 className='font-weight-bolder' style={{fontSize:'20px'}}>3). Drive</h3>
                        <p style={{fontSize:'14px'}}>Our team of professionals will guide you through the entire loan process and get you the vehicle of your choice.</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center col-md-4 mt-5 mt-md-0 overflow-hidden" style={{ paddingRight: 0, borderRadius:'15px' }}>
                    <img
                      src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts2.png"
                      alt="How it works"
                      className="overflow-hidden"
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
