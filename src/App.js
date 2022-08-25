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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="alldoctors" element={<AllDoctors />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doctors/:typeOfdoctor" element={<DoctorList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
