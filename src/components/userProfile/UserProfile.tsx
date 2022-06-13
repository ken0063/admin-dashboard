import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../../hooks/useStateContext";
import { userProfileData } from "../../lib/data/dummy";
import Button from "../button/Button";

const UserProfile = () => {
  const { currentColor, handleClick } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold dark:text-gray-200">User Profile</p>
        <button
          className="text-2xl rounded-full text-[rgb(153, 171, 180)] hover:drop-shadow-xl hover:bg-light-gray"
          onClick={() => handleClick("")}
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center gap-5 pb-6 mt-6 border-color border-b-1">
        <div className="rounded-full ">
          <Image
            width={"96px"}
            height={"96px"}
            src={"/images/avatar.jpg"}
            alt="user-profile"
          />
        </div>
        <div>
          <p className="text-xl font-semibold dark:text-gray-200">
            {" "}
            Michael Roberts{" "}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            {" "}
            info@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="p-3 text-xl rounded-lg hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
        />
      </div>
    </div>
  );
};

export default UserProfile;
