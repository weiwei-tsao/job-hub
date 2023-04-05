import React from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: React.FC = (props: MainLayoutProps) => {
  return (
    <div>
      MainLayout
      <Outlet />
    </div>
  );
};
export default MainLayout;
