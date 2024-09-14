import React, { createContext } from "react";

export const MainContext = createContext({});
export const stepContext = createContext({
  currentStepHome: "",
  setCurrentStepHome: () => {},
});
