import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Dashbord } from "../users/doctor/Dashbord/Dashbord";

export const DoctorOutlet = () => {
  const { doctor } = useAuth();
  return (
    <>
      <main className="">
        {doctor ? (
          <>
            <div className="flex">
              <Dashbord />
              <Outlet />
            </div>
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </main>
    </>
  );
};
