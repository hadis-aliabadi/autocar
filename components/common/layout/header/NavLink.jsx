import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaArrowDown } from "react-icons/fa";
const NavLink = (props) => {
  const {
    href,
    title,
    className,
    type,
    subLinks,
    disabledDesktopClass = false,
    isMobile = false,
    parent = undefined,
    setParent = undefined,
    parentId = undefined,
    setShowMobile,
    target
  } = props;
  const [showMobileSubMenu, setShowMobileSubmenu] = useState(false);
  const router = useRouter();
  const { asPath } = router;
  const closeMobileMenu = () => setShowMobile(false);

  return (
    <Link href={`${href}`}>
      <a
      target={target?target:'_self'}
        onClick={(e) => {
          if (type == "0") {
            e.stopPropagation();
            if (isMobile) {
              setShowMobileSubmenu(true);
              setParent((prev) => (prev == parentId ? null : parentId));
            }
          } else if (type == "1" && isMobile) {
            isMobile ? setTimeout(() => setShowMobile(false), 500) : "";
          }
        }}
        style={{ position: "relative" }}
        className={` text-decoration-none h-100 m-0 d-flex align-items-start  align-items-lg-center d-flex flex-column ${
          asPath === href && "header_a__active"
        } ${className}`}
      >
        <p className="row p-0 m-0 h-100 w-100 d-flex justify-content-between justify-content-lg-between align-items-center text-center">
          {title}
          {typeof subLinks !== "undefined" ? (
            <>
              <FaAngleDown />
            </>
          ) : null}
        </p>
        {typeof subLinks !== "undefined" && (
          <div
            className={`p-0 m-0 d-flex flex-column w-100 pt-1 ${
              !disabledDesktopClass && "header_a__navlink_submenu_container"
            }`}
          >
            <div className="p-0 m-0"></div>
            <div
              className={`p-0 m-0 d-flex flex-column w-100 pt-1 ${
                !disabledDesktopClass && "header_a__navlink_submenu_content"
              } `}
            >
              {isMobile &&
                showMobileSubMenu &&
                parentId === parent &&
                subLinks?.map((item) => (
                  <Link href={`${item?.href}`}>
                    <a
                      onClick={() => setTimeout(closeMobileMenu, 500)}
                      className={`p-0 d-flex m-0 header_a__navlink_mobileresponsive  justify-content-start w-100 ${
                        !disabledDesktopClass && "header_a__navlink_submenu"
                      } ${className} px-2 py-2 `}
                    >
                      {item?.title}
                    </a>
                  </Link>
                ))}
              {!isMobile &&
                subLinks?.map((item) => (
                  <Link href={`${item?.href}`}>
                    <a
                      // onClick={type === "0" && setTimeout(closeMobileMenu, 500)}
                      className={`p-0 m-0 ${
                        !disabledDesktopClass && "header_a__navlink_submenu"
                      } ${className} px-2 py-2`}
                    >
                      {item?.title}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </a>
    </Link>
  );
};

export default NavLink;
