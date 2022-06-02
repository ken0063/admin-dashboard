import NavBar from "../navBar/NavBar";
import SideBar from "../sidebar/SideBar";
type Props = {
  children?: React.ReactNode;
};
const Layout = ({ children }: Props): JSX.Element => {
  const activeMenu: boolean = true;
  return (
    <div className="w-screen">
      <SideBar activeMenu={activeMenu} />
      <NavBar activeMenu={activeMenu} />
      <div className="h-[calc(100vh-50px)]">{children}</div>
    </div>
  );
};

export default Layout;
