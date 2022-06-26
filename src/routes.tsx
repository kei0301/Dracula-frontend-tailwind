// import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import FullLayout from "layouts/Fulllayout";
import MainLayout from "layouts/MainLayout";

// pages
// import NotFound from 'pages/NotFound';
import Migrate from "pages/Migrate";
import RiskyGame from "pages/RiskyGame";

export default function Router() {
  return useRoutes([
    {
      path: "/app",
      element: <MainLayout />,
      children: [
        { path: "migrate", element: <Migrate /> },
        { path: "risky-game", element: <RiskyGame /> },
        // { path: 'wool-pouches', element: <WoolPouches /> },
        // { path: 'land', element: <Land /> },
      ],
    },
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to="/app/migrate" /> },
        { path: "/", element: <Navigate to="/app/risky-game" /> },
        // { path: '/', element: <Navigate to='/app/wool-pouches' /> },
        // { path: '/', element: <Navigate to='/app/land' /> },
        // { path: '404', element: <NotFound /> },
        // { path: '*', element: <Navigate to='/404' /> }
      ],
    },
    // { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}
