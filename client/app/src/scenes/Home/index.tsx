import React from "react";
import main from "../../assets/main.svg";
import { useNavigate } from "react-router";
import LogoWithTitle from "../../components/LogoWithTitle";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    navigate("login");
  };
  return (
    <main className="block">
      {/* Navbar */}
      <nav className="my-0 mx-auto w-11/12 max-w-6xl h-24 flex items-center justify-start">
        <LogoWithTitle
          logoWidth="w-8"
          logoHeight="h-8"
          titleTextSize="text-4xl"
          titleTextBold="font-bold"
          titleTextColor="text-sky-600"
          titleTextLineHeight="leading-9"
        />
      </nav>

      {/* Description and the image */}
      <section className="min-h-[calc(100vh-6rem)] my-0 mx-auto w-11/12 max-w-6xl grid md:grid-cols-[1fr_1fr] gap-3 items-center">
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="font-bold text-5xl">
            Job <span className="text-sky-600">Tracking</span> App
          </h1>
          <p className="text-left max-w-sm text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quisquam itaque dolores facere asperiores expedita magni distinctio
            nisi quia, quam repellat iure praesentium consequatur est molestias
            quod vero ducimus harum.
          </p>
          <button
            className="w-fit h-fit border-s-sky-700 bg-sky-700 text-gray-50 rounded py-2 px-5"
            onClick={handleClick}
          >
            Login / Register
          </button>
        </div>
        <img
          src={main}
          alt="main image"
          className="justify-self-center hidden  md:block md:w-[438px] md:h-[368px]"
        />
      </section>
    </main>
  );
};
export default Home;
