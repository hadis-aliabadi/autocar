import Link from "next/link";
import { FaAngleRight, FaCalendar, FaCarAlt, FaDollarSign, FaRetweet } from "react-icons/fa";

const HomeDepartments = (props) => {
  const { dealerData } = props;
  const cardsData = [
    {
      title: "Pre-Owned Inventory",
      description: "Search For Your Next Vehicle",
      icon: <FaCarAlt  style={{fontSize:'50px'}}/>,
      btn:'View Inventory',
      color:'#d7d7d7'
    },
    {
      title: "Trade-In Appraisal",
      description: "Tell Us About Your Vehicle.",
      icon: <FaRetweet style={{fontSize:'50px'}}/>,
      btn:'Get My Apprisal',
      color:'#f6f6f6'
    },
    {
      title: "Get Approved Now",
      description: "Apply For Financing.",
      icon: <FaDollarSign style={{fontSize:'50px'}}/>,
      btn:'Applay Now',
      color:'#d7d7d7'
    },
    {
      title: "Like What You See?",
      description: "Book A Test Drive Today!",
      icon: <FaCalendar style={{fontSize:'50px'}}/>,
      btn:'Book Appointment',
      color:'#f6f6f6'
    },
  ];
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      {/* <div
        className="p-1  m-0 w-100 d-flex row align-items-center justify-content-center linkto_div__conatiner_home-5"
        style={{ backgroundColor: "#333" }}
      >
        <div className="p-0 m-0 col-11 px-3 py-4">
          <div className="p-0 m-0 row py-5">
            <div className="p-0 px-lg-3 m-0 col-12 col-md-12">
              <div className="p-0 m-0 col-12 pb-3 about_us_header_section d-flex justify-content-start">
                <h4 className="p-0 m-0 py-1">Explore Our Departments</h4>
              </div>
              <div className="p-0 m-0 row py-3 col-12">
                <div className="row p-0 m-0 col-12 col-md-6">
                  <div className="row p-0 m-0 h-100 col-12 d-flex row align-items-scratch justify-content-between">
                    <div
                      className="p-0 pr-md-2 m-0 py-3 py-md-0 pb-md-1 col-6"
                      style={{ height: "180px" }}
                    >
                      <Link href="/forms/finance">
                        <a className="p-0 m-0 w-100 h-100">
                          <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                            <div className="bg-dark-category"></div>
                            <img
                              src={`/images/home/department/home.financing.webp`}
                              alt=""
                              loading="lazy"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                maxHeight: "245px",
                              }}
                            />
                            <div className="p-0 m-0 py-2 d-none text_hover_show  ">
                              <div className="d-flex px-2 align-items-center justify-content-between w-100">
                                <p>Financing</p>
                                <FaAngleRight />
                              </div>
                            </div>
                            <div className=" m-0 linkto_img_text_div__container_home-5">
                              <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column justify-content-start">
                             

                              
                                <div
                                  className="m-0 px-1"
                                  style={{ fontWeight: "700" }}
                                >
                                  Financing
                                </div>
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                    <div
                      className="p-0 pr-md-2 m-0 py-3 py-md-0 pb-md-1 col-6"
                      style={{ height: "180px" }}
                    >
                      <Link href="/forms/car-finder">
                        <a className="p-0 m-0 w-100 h-100">
                          <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                            <div className="bg-dark-category"></div>
                            <img
                              src={`/images/home/department/home.carfinder.webp`}
                              alt=""
                              loading="lazy"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                maxHeight: "245px",
                              }}
                            />
                            <div className="p-0 m-0 py-2 d-none text_hover_show  ">
                              <div className="d-flex px-2 align-items-center justify-content-between w-100">
                                <p>Car Finder</p>
                                <FaAngleRight />
                              </div>
                            </div>
                            <div className=" m-0 linkto_img_text_div__container_home-5">
                              <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column justify-content-start">
                               

                              
                                <div
                                  className="m-0 px-1"
                                  style={{ fontWeight: "700" }}
                                >
                                  Car Finder
                                </div>
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  <div className="p-0 m-0 h-100 col-12 d-flex row align-items-scratch justify-content-between">
                    <div
                      className="p-0 pr-md-2 m-0 py-3 py-md-0 pb-md-1 col-12 col-md-12"
                      style={{ height: "190px" }}
                    >
                      <Link href="/forms/book-appointment">
                        <a className="p-0 m-0 w-100 h-100">
                          <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                            <div className="bg-dark-category"></div>
                            <img
                              src={`/images/home/department/home.testdrive.webp`}
                              alt=""
                              loading="lazy"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                maxHeight: "245px",
                              }}
                            />
                            <div className="p-0 m-0 py-2 d-none text_hover_show  ">
                              <div className="d-flex px-2 align-items-center justify-content-between w-100">
                                <p>BOOK A TEST DRIVE</p>
                                <FaAngleRight />
                              </div>
                            </div>
                            <div className=" m-0 linkto_img_text_div__container_home-5">
                              <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column justify-content-start">
                               
                                <div
                                  className="m-0 px-1"
                                  style={{ fontWeight: "700" }}
                                >
                                  Book a Test Drive
                                </div>
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
                <div
                  className="INV p-0 m-0 py-3  py-md-0 px-md-1 col-12 col-md-6 "
                  style={{ maxHeight: "368px" }}
                >
                  <Link href="/cars">
                    <a className="p-0 m-0 w-100 h-100">
                      <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                        <div className="bg-dark-category"></div>
                        <img
                          src="/images/home/department/home.inventory.webp"
                          alt=""
                          loading="lazy"
                          className="p-0 m-0 h-100 w-100 about_large_img"
                        />
                        <div className="p-0 m-0 py-2 d-none text_hover_show  ">
                          <div className="d-flex px-3 align-items-center justify-content-between w-100">
                            <p>Inventory</p>
                            <FaAngleRight />
                          </div>
                        </div>
                        <div className=" m-0 linkto_img_text_div__container_home-5">
                          <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column justify-content-start">
                           
                            <div
                              className="m-0 px-1"
                              style={{ fontWeight: "700" }}
                            >
                              Inventory
                            </div>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      <div className="row g-0 w-100 ">
        {cardsData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 p-0 w-100">
            <div className="card  h-100 border-0" style={{backgroundColor:`${card.color}`}}>
              <div className="d-flex justify-content-center align-items-center p-5">
                {card.icon}
              </div>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text text-center p-4">{card.description}</p>
              </div>
              <div className="d-flex p-3 justify-content-center align-items-center ">
                <button className="p-2 btn text-white w-75 mb-4" style={{backgroundColor:`#ff271e`}}>
                  <a> {card.btn}</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default HomeDepartments;
