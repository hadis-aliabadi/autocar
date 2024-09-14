import Link from "next/dist/client/link";
import { FaTags, FaWpforms, FaCar, FaComments } from "react-icons/fa";
import { findScript } from "../../../utils/common/html_script";

const BosyShopCta = (props) => {
  const { dealerData } = props;
  return (
    <section className="section about-section bg-gray " id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h6 className="theme-color lead">Need a Proper Detailing?</h6>
              <h3 className="dark-color">
                No worries,
                <br />
                <mark> we're here to assist! </mark>
              </h3>

              <p className="text-dark ">
                {dealerData?.serviceApointment_desc && (
                  <div
                    className="aboutus_div__description"
                    dangerouslySetInnerHTML={{
                      __html: findScript(dealerData?.serviceApointment_desc),
                    }}
                  />
                )}
              </p>
              <div className="p-0 my-4 m-0 row justify-content-start">
                <Link href="/forms/service-appointment">
                  <a className="p-0 cardMoto_button_compare m-0 py-2 px-3">
                    Contact Us Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img src="/images/bodyshop/designed image.webp" title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BosyShopCta;
