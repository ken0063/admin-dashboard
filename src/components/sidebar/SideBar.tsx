type Props = {
  activeMenu: boolean;
};

const SideBar = ({ activeMenu }: Props): JSX.Element => {
  return (
    <>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white h-full">
          web
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">mobile</div>
      )}
    </>
  );
};

export default SideBar;
