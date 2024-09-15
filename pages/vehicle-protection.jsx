import 'bootstrap/dist/css/bootstrap.min.css';

const WarrantySection = ({ title, description, listItems }) => (
  <div className="col-md-6">
    <h2>{title}</h2>
    <div className="space-10"></div>
    <div className="f-txt">
      {description.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
      {listItems && (
        <ul className="inner-list">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
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
    <div className="main-content-inner col-sm-12 col-md-12">
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <div className="post-inner-content">
            <header className="entry-header page-header">
              <h2>Vehicle Protection</h2>
            </header>

            <div className="row f2-section">
              <WarrantySection
                title="Extended Warranty"
                description={[
                  'Cars break down at the most inconvenient times and cost a lot to repair.',
                  'The Guarantee VC extended warranties and fast hassle-free claims procedure gives you the peace of mind about future repairs.',
                  '“Let’s keep your car on the road.”'
                ]}
              />
              <div className="col-md-6" style={{ paddingLeft: 0 }}>
                <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts3.png" alt="Get Pre-Approved" style={{ margin: 0 }} />
              </div>
            </div>

            <div className="row f-section">
              <div className="col-md-6" style={{ paddingLeft: 0 }}>
                <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/common/design/cta/f-2parts4.png" alt="Get Pre-Approved" />
              </div>
              <WarrantySection
                title="Manufacturer’s Warranty"
                description={['Refers to manufacturer’s basic Powertrain Warranty.']}
                listItems={['Engine', 'Transmission', 'Drive axle']}
              />
            </div>

            <div className="row f2-section">
              <div className="col-md-12">
                <h2>Extended Warranty</h2>
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

            <div className="row f2-section">
              <div className="col-md-6" style={{ paddingRight: 0 }}>
                <img src="https://autobunny-docs.s3.ca-central-1.amazonaws.com/1042/web-content/GAP-Insurance.png" alt="GAP Insurance" />
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

            <div className="row f3-section">
              <div className="col-md-12">
                <h2>Protect yourself</h2>
              </div>
              <div className="col-md-12">
                <p>Get in touch with us to learn more about our protection plans.</p>
              </div>
              <div className="col-md-12" style={{ paddingRight: 0 }}>
                <a className="btn" title="Contact Us" href="contact-us">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VehicleProtectionComponent;
