import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
