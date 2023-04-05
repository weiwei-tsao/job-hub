import React from "react";
import { Outlet } from "react-router-dom";

interface LoginLayoutProps {}

const LoginLayout: React.FC = (props: LoginLayoutProps) => {
  return (
    <div>
      LoginLayout
      <Outlet />
    </div>
  );
};
export default LoginLayout;
