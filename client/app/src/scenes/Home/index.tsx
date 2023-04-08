import React from "react";
import logo from "../../assets/logo.png";
import main from "../../assets/main.svg";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-36">
      <nav className="my-0 mx-auto w-11/12 max-w-6xl h-24 flex items-center justify-start">
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-sky-600 font-bold text-4xl leading-9">JobHub</p>
        </div>
      </nav>

      <section className="my-0 mx-auto w-11/12 max-w-6xl flex items-center justify-start">
        <div className="w-full flex flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-start justify-center gap-5">
            <h1 className="font-bold text-5xl">
              Job <span className="text-sky-600">Tracking</span> App
            </h1>
            <p className="text-left max-w-sm text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              quisquam itaque dolores facere asperiores expedita magni
              distinctio nisi quia, quam repellat iure praesentium consequatur
              est molestias quod vero ducimus harum.
            </p>
            <button className="w-fit h-full border-s-sky-700 bg-sky-700 text-gray-50 rounded py-2 px-5">
              Login / Register
            </button>
          </div>
          <img
            src={main}
            alt="main image"
            className="hidden md:block md:w-[355px] md:h-[318px]"
          />
        </div>
      </section>
    </main>
  );
};
export default Home;
