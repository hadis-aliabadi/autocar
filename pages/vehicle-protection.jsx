import 'bootstrap/dist/css/bootstrap.min.css';

const WarrantySection = ({ title, description, listItems }) => (
  <div className="col-md-6">
    <h2 className='font-weight-bold' style={{fontSize:'33px'}}>{title}</h2>
    <div className="space-10"></div>
    <div className="f-txt">
      {description.map((para, index) => (
        <p style={{fontSize:'14px'}} key={index}>{para}</p>
      ))}
      {listItems && (
        <ul className="" >
          {listItems.map((item, index) => (
            <li style={{fontSize:'14px'}} key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const VehicleProtectionComponent = () => {
  const extendedWarrantyList1 = [
    'Engine',
    'Electronic Ignition',
    'Turbo Charger',
    'Electric System',
    'Transmission',
    'Fuel Injection System',
    'Transfer Case',
    'Brakes & ABS Brakes',
    'Transaxle'
  ];

  const extendedWarrantyList2 = [
    'Power Steering',
    'Differential',
    'Car Rental',
    'Air Conditioning',
    'Trip Interruption',
    'Seals & Gaskets',
    'Sensors',
    'Electric System-Extended',
    'Cooling System'
  ];

  const extendedWarrantyList3 = [
    'Front Suspension',
    'Rear Suspension',
    'Other Elements',
    'Navigation System',
    'Entertainment System',
    'Telephone System',
    'Airbag Electronics',
    'Repairs at any Licensed Mechanic'
  ];

  return (
    <>
      <div className="header_image w-100" />
      
      <div className="d-flex justify-content-center align-items-center m-0 p-0">
        <div id="primary" className="p-5">
          <main id="main" className="site-main" role="main">
            <div className="">
              <div className="row f2-section">
                <WarrantySection
                  title="Extended Warranty"
                  description={[
                    'Cars break down at the most inconvenient times and cost a lot to repair.',
                    'The Guarantee VC extended warranties and fast hassle-free claims procedure gives you the peace of mind about future repairs.',
                    '“Let’s keep your car on the road.”'
                  ]}
                />
                <div className="col-md-6" style={{ paddingLeft: 0 ,borderRadius:'15px' } }>
                  <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts3.png" alt="Get Pre-Approved" className='mt-4 mt-lg-0' style={{  borderRadius:'15px' }} />
                </div>
              </div>

              <div className="row mt-5 shadow " style={{ margin: 0 ,borderRadius:'15px' }} >
                <div className="col-md-6" style={{ paddingLeft: 0 }}>
                  <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts4.png" alt="Get Pre-Approved"   style={{ margin: 0 ,borderRadius:'15px' }}/>
                </div>
                <div className='pt-5 '>
                  <WarrantySection
                    title="Manufacturer’s Warranty"
                    description={['Refers to manufacturer’s basic Powertrain Warranty.']}
                    listItems={['Engine', 'Transmission', 'Drive axle']}
                  />
                </div>
              </div>

              <div className="row mt-5 p-4">
                <div className="col-md-12">
                  <h2 className='font-weight-bold'>Extended Warranty</h2>
                </div>
                <div className="col-md-4">
                  <ul className="inner-list">
                    {extendedWarrantyList1.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="inner-list">
                    {extendedWarrantyList2.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="inner-list">
                    {extendedWarrantyList3.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="row mt-5 p-4">
                <div className="col-md-6" style={{ paddingRight: 0,borderRadius:'15px' }}>
                  <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/1042/web-content/GAP-Insurance.png" alt="GAP Insurance" style={{borderRadius:'15px'}} />
                </div>
                <WarrantySection
                  title="GAP Insurance"
                  description={[
                    'The GVC Financial GAP Bundle Protects You Against The Unexpected. Making an Insurance Claim After a TOTAL LOSS May Not Cover You Completely.',
                    'After your vehicle has been declared a TOTAL LOSS, your Insurance Company will only reimburse you for a certain amount, BUT you may have a larger balance owing to your Finance Company. GVC Financial GAP Bundle will help cover this gap in coverage.',
                    'Most insurance policies have a deductible associated with any AT FAULT ACCIDENT. In these cases Guarantee VC Financial GAP Bundle COVERS YOUR DEDUCTIBLE up to a Maximum of $1,000.'
                  ]}
                />
              </div>

              <div className='mt-5 p-5' >
              <div className="row shadow " style={{borderRadius:'15px'}} >
                <div className="col-md-12 p-5 ">
                  <h2 className='text-center font-weight-bolder'>Protect yourself</h2>
                </div>
                <p className='mt-3 col-md-12 text-center' style={{fontSize:'14px'}}>Get in touch with us to learn more about our protection plans.</p>
                <div className="col-md-12  d-flex flex-column flex-md-row justify-content-center align-items-center g pt-2 pb-5">
                  <div className="btn-low-center w-100 text-center">
                    <a className="btn text-white px-4 by-2 w-md-25"  title="Browse All Vehicles" href="used-cars" style={{backgroundColor:'#ff271e'}}>
                      Contact Us
                    </a>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default VehicleProtectionComponent;
