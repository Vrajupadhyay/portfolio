import "./App.css";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/PageNotFound";
import AboutUs from "./Pages/AboutUs";
import TechStack from "./Pages/TechStack";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CreateProject from "./Pages/Dashboard/AddProject";
import RequireAuth from "./Components/auth/RequireAuth";
import Denied from "./Pages/Denied";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/techstack" element={<TechStack />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/myprojects" element={<Project />}></Route>
        <Route path="/myprojects/details" element={<ProjectDetails />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/denied" element={<Denied />}></Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/project/create" element={<CreateProject />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
