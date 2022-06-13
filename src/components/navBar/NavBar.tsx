import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import { useStateContext } from "../../hooks/useStateContext";
import Carts from "../carts/Carts";
import Chat from "../chat/Chat";
import NavButton from "../navButton/NavButton";
import Notification from "../notification/Notification";
import UserProfile from "../userProfile/UserProfile";

const NavBar = () => {
  const { setActiveMenu, isClicked, handleClick, currentColor } =
    useStateContext();

  return (
    <div className="relative flex justify-between p-2 md:mx-6">
      <NavButton
        title="Menu"
        customFn={() => setActiveMenu((prev) => !prev)}
        icon={<AiOutlineMenu />}
        color={currentColor}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFn={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color={currentColor}
        />

        <NavButton
          title="Chat"
          customFn={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color={currentColor}
          dotColor="#03c9d7"
        />

        <NavButton
          title="Notification"
          customFn={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color={currentColor}
          dotColor="#03c9d7"
        />

        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 p-1 rounded-lg cursor-pointer hover:bg-light-gray"
            onClick={() => handleClick("userProfile")}
          >
            <Image
              src="/images/avatar.jpg"
              className="rounded-full "
              width="50px"
              height="50px"
              alt=""
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="ml-1 font-bold text-gray-400 text-14">Mike</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked?.cart && <Carts />}
        {isClicked?.chat && <Chat />}
        {isClicked?.notification && <Notification />}
        {isClicked?.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
