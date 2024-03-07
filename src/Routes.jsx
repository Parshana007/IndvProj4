import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DSlicerHome from "pages/DSlicerHome";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "dslicerhome",
      element: <DSlicerHome />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
