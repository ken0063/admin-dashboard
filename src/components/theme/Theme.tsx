import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { BsCheck } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../hooks/useStateContext";
import { themeColors } from "../../lib/data/dummy";

const Theme = () => {
  const { currentColor, currentMode, setColor, setThemeSettings, setMode } =
    useStateContext();
  return (
    <div
      className="fixed top-0 right-0 w-screen bg-half-transparent nav-item"
      style={{ zIndex: 174389050 }}
    >
      <div className="float-right h-screen bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-400">
        <div className="flex items-center justify-between p-4 ml-4 ">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{
              color: "rgb(153,171,180)",
              borderRadius: "50%",
            }}
            className="p-3 text-2xl hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4 ">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 cursor-pointer text-md">
              Light
            </label>
          </div>

          <div className="mt-4 ">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 cursor-pointer text-md">
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col p-4 ml-4 border-t-1 border-color">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors?.map((item, idx) => (
              <TooltipComponent
                key={idx}
                content={item?.name}
                position="TopCenter"
              >
                <div className="relative flex items-center gap-5 mt-2 cursor-pointer">
                  <button
                    className="w-10 h-10 rounded-full cursor-pointer"
                    type="button"
                    style={{ backgroundColor: item?.color }}
                    onClick={() => setColor(item?.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item?.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
