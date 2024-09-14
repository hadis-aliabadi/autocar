import Link from "next/link";
import { FaCar, FaMapMarkerAlt, FaEnvelope, FaEdit, FaDollarSign } from "react-icons/fa";
import React from "react";
const SidebarCustomerWeb = () => {
  return (
    <div className="p-0 m-0  sidebar_menu_style d-none d-sm-flex d-md-flex flex-column justify-content-center align-items-center">
      <div className="p-0 m-0 py-1 px-3  border-1 border-bottom">
        <Link href="/forms/finance">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              <FaDollarSign size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              Financing
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-1 px-3  border-1 border-bottom">
        <Link href="/cars">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              <FaCar size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              Inventory
            </p>
          </a>
        </Link>
      </div>
      <div className="p-0 m-0 py-1 px-3 border-bottom border-1">
        <Link href="/directions">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              <FaMapMarkerAlt size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              Directions
            </p>
          </a>
        </Link>
      </div>

      <div className="p-0 m-0 py-1 px-3">
        <Link href="/forms/contact-us">
          <a
            className="p-0 px-3  m-0 d-flex w-100 justify-content-between align-items-center side_bar_menu_hover"
            style={{ backgroundColor: "#fff" }}
          >
            <i className="p-0 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              <FaEnvelope size={20} />
            </i>
            <p className=" pl-4 m-0  py-2" style={{ backgroundColor: "#fff" }}>
              <span>Contact&nbsp;Us</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SidebarCustomerWeb;
