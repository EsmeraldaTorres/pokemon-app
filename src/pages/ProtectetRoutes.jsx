import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

const ProtectetRoutes = () => {
  const trainer = useSelector((store) => store.trainer);

  if (trainer.length >= 3) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectetRoutes;
