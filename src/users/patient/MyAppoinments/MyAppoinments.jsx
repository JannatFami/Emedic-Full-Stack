import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyAppointmentCard from "./MyAppoinmentCard";

const MyAppointments = () => {
  const { user } = useAuth();
  const [morder, setMorder] = useState([]);
  const [filteredData, setFIlteredData] = useState([]);
  useEffect(() => {
    fetch("https://ruseable.onrender.com/users-info")
      .then((res) => res.json())
      .then((data) => {
        setMorder(data);
        setFIlteredData(morder.filter((mor) => mor.Email === user.email));
      });
  }, [morder, user.email]);
  return (
    <div className="h-[80vh]">
      <div className="flex justify-center items-center p-14 flex-col gap-1 overflow-y-auto">
        {filteredData.map((fdata) => (
          <MyAppointmentCard key={fdata._id} data={fdata}></MyAppointmentCard>
        ))}
      </div>
    </div>
  );
};
export default MyAppointments;
