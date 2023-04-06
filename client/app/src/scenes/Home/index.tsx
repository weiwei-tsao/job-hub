import React from "react";
import logo from "../../assets/logo.png";

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <p className="text-lg text-red-50">Landing Page</p>
        <nav>
          <img src={logo} alt="logo" />
        </nav>

        <div>
          <div></div>
          <img src="" alt="" />
        </div>
      </main>
    </div>
  );
};
export default Home;
