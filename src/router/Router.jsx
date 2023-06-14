import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Video from "../components/Video/Video";
import SingIn from "../components/SingIn/SingIn";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/singin",
            element: <SingIn/>
        },
        {
            path: "/video/:id",
            element: <Video/>
        },
      ]
    },
  ]);
