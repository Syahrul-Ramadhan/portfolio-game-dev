import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";

// detail pages
import SpoiledHeist from "./pages/projects/SpoiledHeist";
import Aksara from "./pages/projects/Aksara";
import PusakaNusantara from "./pages/projects/PusakaNusantara";
import GuideMeOut from "./pages/projects/GuideMeOut";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/spoiled-heist" element={<SpoiledHeist />} />
      <Route path="/aksara" element={<Aksara />} />
      <Route path="/pusaka-nusantara" element={<PusakaNusantara />} />
      <Route path="/guide-me-out" element={<GuideMeOut />} />
    </Routes>
  );
}

export default App;
