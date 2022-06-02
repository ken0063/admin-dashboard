type Props = {
  activeMenu: boolean;
};

const NavBar = ({ activeMenu }: Props) => {
  return (
    <div
      className={`dark:bg-main-bg bg-main-bg h-[50px]  ${
        activeMenu ? " md:ml-72" : " flex-2 "
      }`}
    >
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"></div>
    </div>
  );
};

export default NavBar;
