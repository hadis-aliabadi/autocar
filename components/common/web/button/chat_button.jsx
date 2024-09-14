import React, { useState, useEffect } from "react";
import { FaComment } from "react-icons/fa";

const ChatButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setHovered] = useState(false);

  //   Popup after 8 seconds in a 30 minute period
  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("whatsappPopupShown");
    const lastPopupTime = localStorage.getItem("lastPopupTime");

    if (
      !hasPopupBeenShown ||
      (lastPopupTime &&
        Date.now() - Number(lastPopupTime) > 1800000) /* 30 minutes */
    ) {
      // Show the popup after 8 seconds
      const popupTimeout = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("whatsappPopupShown", "true");
        localStorage.setItem("lastPopupTime", String(Date.now()));
      }, 8000);

      return () => clearTimeout(popupTimeout);
    }
  }, []);

  // Popup On Hover aswell
  const handleHover = () => {
    setHovered(true);
  };

  const handleUnhover = () => {
    setHovered(false);
  };

  //   Close On Click Everywhere
  const handleBodyClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <>
      <a
        href="https://pf.kakao.com/_xbyIxexl/chat"
        className={`whatsapp_popup ${showPopup || isHovered ? "show" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Hi, How can I help you today?
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://pf.kakao.com/_xbyIxexl/chat"
        className="whatsapp_float d-flex justify-content-center align-items-center"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        <FaComment color="#fff" size={40} />
      </a>
    </>
  );
};

export default ChatButton;
