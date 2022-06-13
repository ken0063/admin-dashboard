import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../hooks/useStateContext";
import { chatData } from "../../lib/data/dummy";
import Button from "../button/Button";

const Notification = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <p className="text-lg font-semibold dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="p-1 px-2 text-xs text-white rounded bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
        <button
          className="text-2xl rounded-full text-[rgb(153, 171, 180)] hover:drop-shadow-xl hover:bg-light-gray"
          onClick={() => handleClick("")}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-3 leading-8 border-b-1 border-color"
          >
            <div className="rounded-full ">
              <Image
                src={item.image}
                alt={item.message}
                width={"40px"}
                height={"40px"}
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
