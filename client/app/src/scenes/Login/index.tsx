import React from "react";
import LogoWithTitle from "../../components/LogoWithTitle";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    // <div className="justify-self-center">
    <form
      action=""
      className="w-[90vw] justify-self-center border border-solid border-sky-600 rounded-md max-w-[400px] border-t-4 shadow-md my-3 mx-auto px-8 py-10"
    >
      <div className="mt-0 mx-auto mb-5">
        <LogoWithTitle
          logoWidth="w-8"
          logoHeight="h-8"
          titleTextSize="text-sm"
          titleTextBold="font-bold"
          titleTextColor="text-sky-600"
          titleTextLineHeight="leading-9"
        />
      </div>
      <h3 className="text-2xl text-center mt-0 mx-auto mb-5">
        Login / Register
      </h3>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm tracking-wider mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-[35px] bg-gray-50 border-solid border border-gray-200 rounded-md py-[0.375rem] px-3"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm tracking-wider mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full h-[35px] bg-gray-50 border-solid border border-gray-200 rounded-md py-3 px-3"
        />
      </div>

      <button className="mt-4 mb-4 h-[35px] w-full bg-sky-600 border-transparent rounded-md shadow-sm text-white cursor-pointer tracking-[1px] py-[0.375rem] px-3">
        Submit
      </button>
      <p className="mt-4 mb-0 mx-0 text-center max-w-[40em]">
        Already a member?
        <Link
          to="login"
          className="bg-transparent cursor-pointer tracking-[1px] py-[1px] px-[6px] text-sky-600"
        >
          Login
        </Link>
      </p>

      {/* <p>Not a member yet?</p>
      <Link to="register">Register</Link> */}
    </form>
    // </div>
  );
};
export default Login;
