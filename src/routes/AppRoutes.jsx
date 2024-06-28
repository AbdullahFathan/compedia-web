import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UploadLomba from "../features/upload_lomba/pages/UploadLomba";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UploadLomba />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
