import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Editor from "./Pages/Editor";
import Template from "./Pages/Template";

const App = () => {
  return (
    <div className="my-4">
      <Routes>
        <Route path="/" element={<Navigate to="/editor" />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </div>
  );
};

export default App;
