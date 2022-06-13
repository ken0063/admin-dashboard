import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../../hooks/useStateContext";
import Footer from "../footer/Footer";
import NavBar from "../navBar/NavBar";
import SideBar from "../sidebar/SideBar";
import Theme from "../theme/Theme";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const {
    activeMenu,
    screenSize,
    setActiveMenu,
    setScreenSize,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  useEffect(() => {
    const handleScreen = async () => {
      setScreenSize(window?.innerWidth);
    };

    window?.addEventListener("resize", handleScreen);
    handleScreen();
    return window?.removeEventListener("resize", handleScreen);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);
  return (
    <div
      className={` ${
        currentMode === "Dark" ? "dark" : ""
      } flex w-screen h-full`}
    >
      <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
        <TooltipComponent content="Settings" position="TopCenter">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
            style={{ background: currentColor, borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      <>
        {activeMenu ? (
          <div className="fixed h-full bg-white w-72 sidebar dark:bg-secondary-dark-bg">
            <SideBar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            {" "}
            <SideBar />
          </div>
        )}
      </>

      {themeSettings && <Theme />}
      <div
        className={`dark:bg-main-dark-bg bg-main-bg ${
          activeMenu ? " md:ml-72" : ""
        }`}
      >
        <div
          className={`fixed top-0 ${
            activeMenu ? "w-[calc(100vw-288px)]" : " w-screen"
          }  bg-main-bg dark:bg-main-dark-bg navbar`}
        >
          <NavBar />
        </div>
      </div>

      <div className=" w-full mt-[70px] bg-main-bg dark:bg-main-dark-bg h-full">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
