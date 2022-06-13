import React, { createContext, useContext, useState } from "react";
import { IContext, IInitialState } from "../types/context";

const initialState: IInitialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext<IContext>({
  activeMenu: true,
  isClicked: initialState,
  screenSize: 0,
  currentColor: "",
  currentMode: "",
  themeSettings: false,
  setScreenSize: () => {
    /* do nothing */
  },
  setIsClicked: () => {
    /* do nothing */
  },
  setActiveMenu: () => {
    /* do nothing */
  },
  handleClick: () => {
    /* do nothing */
  },

  setCurrentColor: () => {
    /* do nothing */
  },
  setCurrentMode: () => {
    /* do nothing */
  },
  setThemeSettings: () => {
    /* do nothing */
  },
  setMode: () => {
    /* do nothing */
  },
  setColor: () => {
    /* do nothing */
  },
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState<string>("#03C9D7");
  const [currentMode, setCurrentMode] = useState<string>("Light");
  const [themeSettings, setThemeSettings] = useState<boolean>(false);
  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const data = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setCurrentColor,
    setCurrentMode,
    setThemeSettings,
    themeSettings,
    setMode,
    setColor,
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
