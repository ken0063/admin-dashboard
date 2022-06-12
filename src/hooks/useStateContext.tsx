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
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number>(0);

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
  };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
