import React from "react";
import main from "../../assets/main.svg";
import { useNavigate } from "react-router";
import LogoWithTitle from "../../components/LogoWithTitle";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    navigate("/login");
  };
  return (
    <main className="block">
      {/* Navbar */}
      <nav className="navbar">
        <LogoWithTitle
          logoWidth="w-8"
          logoHeight="h-8"
          titleTextSize="text-4xl"
          titleTextBold="font-bold"
          titleTextColor="text-primary-500"
          titleTextLineHeight="leading-9"
        />
      </nav>

      {/* Description and the image */}
      <section className="main-section">
        <div className="main-section-div">
          <h1 className="div-h1">
            Job <span className="div-h1-span">Tracking</span> App
          </h1>
          <p className="div-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            architecto, perspiciatis officiis repudiandae voluptate minus
            suscipit alias quo incidunt dolores.
          </p>
          <button className="btn div-btn" onClick={handleClick}>
            Login / Register
          </button>
        </div>
        <img src={main} alt="main image" className="main-section-img" />
      </section>
    </main>
  );
};
export default Home;
