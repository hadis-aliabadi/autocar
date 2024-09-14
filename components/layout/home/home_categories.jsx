import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const HomeCategory = props => {
  const { dealerData } = props;
  return (
    <>
      <div className="p-1 pb-5 bg-white m-0 w-100 d-flex row align-items-center justify-content-center linkto_div__conatiner_home-5">
        <div className="p-0 m-0 col-12 col-md-12 flex-wrap d-flex justify-content-center col-lg-12 pt-5">
          <div className="p-0 col-10  m-0 title_our_brands_home_3 mb-4">
            Explore Our Departments
          </div>
          <div className="p-0 m-0 row py-3 col-12 col-md-10 ">
            <div className="p-0 pr-lg-3 m-0 col-12 col-md-6">
              <div className="p-0 m-0 h-100 w-100 d-flex row align-items-scratch justify-content-between">
                <div className="p-0 pr-md-2 m-0 py-3 py-md-0 pb-md-1 col-12 col-md-6">
                  <Link href="/forms/book-appointment">
                    <a className="p-0 m-0 w-100 h-100">
                      <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                        <div className="bg-dark-category"></div>
                        <img
                          src={`/images/home/department/carinc.bookappointment.webp`}
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
                          <div className="d-flex px-3 align-items-center justify-content-between w-100">
                            <p>APPLY NOW</p>
                            <FaAngleRight />
                          </div>
                        </div>
                        <div className=" m-0 linkto_img_text_div__container_home-5">
                          <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column align-items-center justify-content-center text-center">
                            {/* <img src="/images/home/department/about-us/Arrow.png" /> */}

                            <div className="m-0 p-1">Book Appointment</div>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="p-0  pl-md-2 m-0 py-3 py-md-0 pb-md-1 col-12 col-md-6">
                  <Link href="/forms/car-finder">
                    <a className="p-0 m-0 w-100 h-100">
                      <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                        <div className="bg-dark-category"></div>
                        <img
                          src={`/images/home/department/carinc.carfinder.webp`}
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
                          <div className="d-flex px-3 align-items-center justify-content-between w-100">
                            <p>FIND YOURS</p>
                            <FaAngleRight />
                          </div>
                        </div>
                        <div className=" m-0 linkto_img_text_div__container_home-5">
                          <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column align-items-center justify-content-center text-center">
                            <div className="m-0 p-1">Car Finder</div>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="p-0 m-0 py-3 mt-md-3 py-md-0 col-12 col-md-12">
                  <Link href="/forms/book-appointment">
                    <a className="p-0 m-0 w-100 h-100">
                      <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                        <div className="bg-dark-category"></div>
                        <img
                          src={`/images/home/department/carinc.testdrive.webp`}
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
                          <div className="d-flex px-3 align-items-center justify-content-between w-100">
                            <p>BOOK NOW</p>
                            <FaAngleRight />
                          </div>
                        </div>
                        <div className="m-0 linkto_img_text_div__container_home-5">
                          <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column align-items-center justify-content-center text-center">
                            {/* <FaDollarSign color="#fff" size="50" />
                            <div className="p-0 m-0 py-2">
                              BE PREPARED AND SHOP WITH CONFIDENCE
                            </div> */}

                            <div className="m-0 p-1">Book a Test Drive</div>
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="INV p-0 m-0 py-3  py-md-0 px-md-1 col-12 col-md-6 order-first order-md-last">
              <Link href="/cars">
                <a className="p-0 m-0 w-100 h-100">
                  <div className="p-0 m-0 h-100 linkto_img_container_home-5">
                    <div className="bg-dark-category"></div>
                    <img
                      src="/images/home/department/carinc.inventory.webp"
                      alt=""
                      loading="lazy"
                      className="p-0 m-0 h-100 w-100 about_large_img"
                    />
                    <div className="p-0 m-0 py-2 d-none text_hover_show  ">
                      <div className="d-flex px-3 align-items-center justify-content-between w-100">
                        <p>FIND YOURS TODAY</p>
                        <FaAngleRight />
                      </div>
                    </div>
                    <div className=" m-0 linkto_img_text_div__container_home-5">
                      <span className="linkto_img_text_span__container_home-5 py-2 d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="m-0 p-1">Inventory</div>
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
