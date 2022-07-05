import "./App.css";
import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navigation
        mainLinks={[
          { label: "00 HOME", link: "/" },
          { label: "01 DESTINATION", link: "/destination" },
          { label: "02 CREW", link: "/crew" },
          { label: "03 TECHNOLOGY", link: "/technology" },
        ]}
      />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
