import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import NotFoundPage from "./Pages/404";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <AnimatedBackground />

      <Home />
      <About />
      <Portofolio />
      <ContactPage />
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;