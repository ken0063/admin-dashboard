import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { useStateContext } from "../../hooks/useStateContext";
import { links } from "../../lib/data/dummy";

const SideBar = (): JSX.Element => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const handleClose = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto ">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a
                className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
                onClick={handleClose}
              >
                <SiShopware />
                <span>Shoppy</span>
              </a>
            </Link>
            <TooltipComponent content={"Menu"} position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu((prev) => !prev)}
                className="block p-3 mt-4 text-xl rounded-full hover:bg-light-gray "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links?.map((item) => (
              <div key={item?.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">
                  {item?.title}
                </p>
                {item?.links?.map((link) => (
                  <Link href={`/${link?.name}`} key={link?.name}>
                    <a
                      onClick={handleClose}
                      style={{
                        backgroundColor: activeMenu ? currentColor : "",
                      }}
                      className={activeMenu ? activeLink : normalLink}
                    >
                      {link?.icon}
                      <span className="capitalize">{link?.name}</span>
                    </a>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
