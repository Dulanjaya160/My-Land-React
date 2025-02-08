import { ReactNode } from "react";
import { Link } from "react-router-dom";

import "@styles/conponentStyles/layoutStyles/dashboardLayout.css";

import Logo from "@images/logo.png";

interface IDashboardLayoutProps {
  children: ReactNode;
  currentPage: string;
}

export const DashboardLayout = ({
  children,
  currentPage,
}: IDashboardLayoutProps) => {
  const menuItems = [
    {
      label: "Dashboard",
      link: "/",
    },
    {
      label: "Products",
      link: "/products",
    },
  ];

  return (
    <div className="dashboardLayout">
      <div className="sideNav">
        <img src={Logo} className="logo"/>
        <ul>
          {menuItems.map((item) => (
            <li className={currentPage===item.label?"selectedMenuItem":""}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pageContent">{children}</div>
    </div>
  );
};
