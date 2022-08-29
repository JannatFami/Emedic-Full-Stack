import { useEffect, useState } from "react";
const useDoctorlist = () => {
  const [doctorlists, setDoctorlists] = useState([]);
  useEffect(() => {
    fetch("https://ruseable.onrender.com/doctorlist")
      .then((res) => res.json())
      .then((data) => setDoctorlists(data));
  }, []);
  return [doctorlists, setDoctorlists];
};
export default useDoctorlist;
