import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorList } from "./components/DoctorList/DoctorList";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import { Homepage } from "./pages/Homepage/Homepage";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doctors/:typeOfdoctor" element={<DoctorList />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
