import React, { useContext, useEffect } from "react";
import { languagesString } from "../../../data/languages";

export const Translate = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    let width = window.innerWidth;
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    if (width <= 560) {
      window.googleTranslateElementInit = googleTranslateElementInit;
    } else {
      window.googleTranslateElementInit = googleTranslateElementInitSimple;
    }
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: languagesString, // Updated languages
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  const googleTranslateElementInitSimple = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: languagesString, // Updated languages
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <div className="p-0 m-0 w-100">
      <div id="google_translate_element"></div>
    </div>
  );
};
