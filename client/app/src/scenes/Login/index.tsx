import React from "react";
import LogoWithTitle from "../../components/LogoWithTitle";
import { Link } from "react-router-dom";

interface LoginProps {
  isMember: boolean;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { isMember } = props;

  return (
    <form action="" className="form">
      <div className="form-logo">
        <LogoWithTitle
          logoWidth="w-8"
          logoHeight="h-8"
          titleTextSize="text-sm"
          titleTextBold="font-bold"
          titleTextColor="text-primary-500"
          titleTextLineHeight="leading-9"
        />
      </div>
      <h3 className="form-title-h3">{isMember ? "Login" : "Register"}</h3>
      <div className="form-row">
        <label htmlFor="email" className="form-row-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-row-input"
        />
      </div>

      <div className="form-row">
        <label htmlFor="password" className="form-row-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-row-input"
        />
      </div>

      <button className="btn form-submit-btn">Submit</button>
      {!isMember ? (
        <p className="form-hint-p">
          Already a member?
          <Link to="/login" className="link form-toggle-link">
            Login
          </Link>
        </p>
      ) : (
        <p className="form-hint-p">
          Not a member yet?
          <Link to="/register" className="link form-toggle-link">
            Register
          </Link>
        </p>
      )}
    </form>
  );
};
export default Login;
