import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { useStateContext } from "../../hooks/useStateContext";
import { links } from "../../lib/data/dummy";

const SideBar = (): JSX.Element => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

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
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a
                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
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
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links?.map((item) => (
              <div key={item?.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item?.title}
                </p>
                {item?.links?.map((link) => (
                  <Link href={`/${link?.name}`} key={link?.name}>
                    <a
                      className={!activeMenu ? activeLink : normalLink}
                      onClick={handleClose}
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
