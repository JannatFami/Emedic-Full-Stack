import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AppointPatientCard from "./AppointPatientCard";

export const AppointedPatient = () => {
  const { user } = useAuth();
  const [userinfo, setUserInfo] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://project-101-doctor.herokuapp.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        setFIlteredData(
          userinfo.filter((usr) => usr.Doctor === user.displayName)
        );
      });
  }, [userinfo, filteredData, user.displayName]);

  return (
    <div className="ml-24 mt-5">
      <div>
        {filteredData.length === 0 ? (
          <div>No Appointment Available</div>
        ) : (
          <div className="flex flex-wrap flex-row gap-4 mt-20">
            {filteredData.map((data) => (
              <AppointPatientCard key={data._id} props={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
