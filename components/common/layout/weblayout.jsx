import React, { useRef } from "react";
import FooterCustomerWeb from "./footer/footer";
import HeaderCustomerWeb from "./header/header";
import { Chat, ContextProviders } from "hillz_chat";
import { BASE_URL } from "../../../constant/base";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { phonenumberConvertor } from "../../../utils/common/phone_number_converter";
import SidebarCustomerWeb from "./sidebarcustomerweb";
import SideBarLeft from "./sidebarLeft";
import SubFooter from "./subFooter";
import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const Weblayout = (props) => {
  const { children, domain, dealerData, timeWork, isHome } = props;
  const headerRef = useRef();
  return (
    <div className="p-0 m-0 row w-100">
       {/* <div className="p-0 m-0 sidebar_menu_positioning ">
        <SidebarCustomerWeb data={dealerData} />
      </div> */}
     <ContextProviders>
      <Chat />
     </ContextProviders>
     
    
      <HeaderCustomerWeb
        data={dealerData}
        dealerData={dealerData}
        ref={headerRef}
        isHome={isHome}
        timeWork={timeWork}
      />
      {children}
      <div className="p-0 m-0 w-100 ">
        <FooterCustomerWeb
          data={dealerData}
          ref={headerRef}
          timeWork={timeWork}
        />
        <SubFooter data={dealerData} />
      </div>
    </div>
  );
};

export default Weblayout;
