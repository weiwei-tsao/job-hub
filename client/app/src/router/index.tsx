import { createBrowserRouter } from "react-router-dom";
import Home from "../scenes/Home";
import NotFound from "../scenes/NotFound";
import ErrorBoundary from "../components/ErrorBoundary";
import Dashboard from "../scenes/Dashboard";
import Profile from "../scenes/Profile";
import AddJob from "../scenes/AddJob";
import AllJobs from "../scenes/AllJobs";
import Login from "../scenes/Login";
import MainLayout from "../layouts/MainLayout";
import LoginLayout from "../layouts/LoginLayout";

const router = createBrowserRouter([
  {
    // landing page
    path: "/",
    element: <Home />,
  },
  {
    // login layout pages
    element: <LoginLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        // login page
        path: "/login",
        element: <Login />,
        // loader: async () => {
        //   throw new Response("Unauthorized", { status: 401 });
        // },
        errorElement: <ErrorBoundary />,
      },
      {
        // register page
        path: "/register",
        element: <Login />,
        // loader: async () => {
        //   throw new Response("Forbidden", { status: 403 });
        // },
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    // logged in layout pages
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        // dashboard page
        path: "/dashboard",
        element: <Dashboard />,
        loader: async () => {
          return null;
        },
        errorElement: <ErrorBoundary />,
      },
      {
        // all jobs page
        path: "/all-jobs",
        element: <AllJobs />,
        loader: async () => {
          return null;
        },
        errorElement: <ErrorBoundary />,
      },
      {
        // add job page
        path: "/add-job",
        element: <AddJob />,
        loader: async () => {
          return null;
        },
        errorElement: <ErrorBoundary />,
      },
      {
        // profile page
        path: "/profile",
        element: <Profile />,
        loader: async () => {
          return;
        },
        errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    // other not matched routes
    path: "*",
    element: <NotFound />,
    loader: async () => {
      return null;
    },
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
