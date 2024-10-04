import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import ThreeDVisualizer from "./components/3D/3D";
import CO2 from './components/demo/CO2_graph';
import GlobalT from './components/demo/global_temp';
import SeaLevel from './components/demo/sea_level';
import SeaIce from './components/demo/sea_ice';
import IceS from './components/demo/ice_sheets';
import OceanW from './components/demo/ocean_warming';
import Demo from './components/demo/demo';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
          <Route path="/dash" element={<MainDash />} />
              <Route path="/3d-visualizer" element={<ThreeDVisualizer />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/CO2_graph" element={<CO2 />} />
              <Route path="/global_temp" element={<GlobalT />} />
              <Route path="/sea_level" element={<SeaLevel />} />
              <Route path="/sea_ice" element={<SeaIce />} />
              <Route path="/ice_sheets" element={<IceS />} />
              <Route path="/ocean_warming" element={<OceanW />} />
          </Routes>
          <RightSide />
        </div>
      </div>
    </Router>
  );
}

export default App;
