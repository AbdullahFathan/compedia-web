import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadLomba from "../features/upload_lomba/pages/UploadLomba";
import LandingPage from "../features/landing_page/pages/LandingPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/upload" element={<UploadLomba />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
