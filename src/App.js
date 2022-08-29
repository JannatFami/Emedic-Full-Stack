import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorList } from "./components/DoctorList/DoctorList";
import { Layout } from "./routes/Layout";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Homepage } from "./pages/Homepage/Homepage";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import NotFound from "./components/404Page/NotFound";
import { UserOutlet } from "./routes/UserOutlet";
import { Appoinment } from "./components/Appoinment/Appoinment";
import { Dashbord } from "./users/doctor/Dashbord/Dashbord";
import { DoctorOutlet } from "./routes/DoctorOutlet";
import { AppointedPatient } from "./users/doctor/AppointedPatient/AppointedPatient";
import MyAppointments from "./users/patient/MyAppoinments/MyAppoinments";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="alldoctors" element={<AllDoctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doctors/:typeOfdoctor" element={<DoctorList />} />
        </Route>

        <Route path="/" element={<UserOutlet />}>
          <Route path="appointment/:pakId" element={<Appoinment />} />
          <Route path="my-appoinments" element={<MyAppointments />} />
        </Route>

        <Route path="/" element={<DoctorOutlet />}>
          <Route path="doctor/dashbord" />
          <Route
            path="doctor/dashbord/appointed-patient"
            element={<AppointedPatient />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
