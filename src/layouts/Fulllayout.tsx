import React from "react";
import { Outlet } from "react-router-dom";

function FullLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default FullLayout;
