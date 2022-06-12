import { useEffect } from "react";
import { useStateContext } from "../../hooks/useStateContext";
import NavBar from "../navBar/NavBar";
import SideBar from "../sidebar/SideBar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const { activeMenu, screenSize, setActiveMenu, setScreenSize } =
    useStateContext();

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
    <div className="flex w-screen h-screen ">
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
      {/* <div className="flex flex-col"> */}
      <div
        className={`dark:bg-main-bg bg-main-bg   ${
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

      <div className=" w-full mt-[75px]">{children}</div>
    </div>
    // </div>
  );
};

export default Layout;
