import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DoctorList } from "./components/DoctorList/DoctorList";
import { Login } from "./components/Login/Login";
import { SignUp } from "./components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import { Homepage } from "./pages/Homepage/Homepage";
import { Footer } from "./Shared/Footer/Footer";
import { Navbar } from "./Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/doctors/:typeOfdoctor" element={<DoctorList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
