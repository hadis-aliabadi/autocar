import Link from "next/link";
import React from "react";
import { FaChevronUp } from "react-icons/fa";

export default function SubFooter({ data }) {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="p-0 m-0 py-2 w-100 col-12"
      style={{ backgroundColor: "#000", position: "relative" }}
    >
      <div className="p-0 m-0 d-flex flex-column flex-md-row align-items-center justify-content-center">
        <div className="p-0  m-0 footer_txt_border row">
          <Link href="/">
            <a>
              <p
                style={{ fontSize: "13px", color: "#fff" }}
                className="p-0 m-0"
              >
                &copy; {currentYear}{" "}
                {data?.dba ? data?.dba : data?.bussiness_name}.
              </p>
            </a>
          </Link>
        </div>
        <p
          className="p-0 m-0 d-none d-md-flex"
          style={{ color: "#fff", fontSize: "13px" }}
        >
          |
        </p>
        <div className="p-0 m-0 text-white py-1 py-md-0 footer_txt_border row">
          <Link href="/privacy">
            <a className="" style={{ color: "#fff" }}>
              <p style={{ fontSize: "13px" }} className="p-0 m-0 pr-1 ">
                Privacy & Policy
              </p>
            </a>
          </Link>
        </div>
        <p
          style={{ color: "#fff", fontSize: "13px" }}
          className="p-0 m-0 d-none d-md-flex"
        >
          |
        </p>

        <div className="p-0 m-0 row">
          <a
            href="https://www.hillzdealer.com"
            className="p-0 px-1 m-0  text-decoration-none d-flex align-items-center"
            style={{
              zIndex: 100,
            }}
          >
            <div
              className="p-0 m-0 p  my-md-0"
              style={{
                color: "#fff",
                zIndex: 2,
              }}
            >
              <p style={{ fontSize: "13px" }} className="p-0 m-0 pr-1 ">
                Powered by
              </p>
            </div>
            <img
              src="/images/hillz_big_logo.png"
              alt=""
              style={{
                height: "23px",
                width: "23px",
              }}
            />
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
