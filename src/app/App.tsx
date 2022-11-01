import React, { useContext, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import DailyHabits from "../components/DailyHabits/DailyHabits";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import HabitContext from "../context/HabitContext";
import NavBar from "../nav/NavBar/NavBar";
import { SideBar } from "../nav/SideBar/SideBar";
import HabitSummary from "../components/HabitSummary/HabitSummary";
import WeeklyHabits from "../components/WeeklyHabits/WeeklyHabits";

const App = () => {
  initializeIcons();

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const showSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <>
      <HabitContext>
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar sideBarVisible={sideBarVisible} showSideBar={showSideBar} />
          <div className="nav-bar__wrapper">
            {sideBarVisible ? <SideBar /> : ""}
            <div className="nav-bar__router">
              <>
                <Routes>
                  <Route path="/" element={<WelcomePage />} />
                  <Route path="/summary" element={<HabitSummary />} />
                  <Route path="/daily" element={<DailyHabits />} />
                  <Route path="/weekly" element={<WeeklyHabits />} />
                  <Route path="statistics" />
                  <Route path="account" />
                </Routes>
              </>
            </div>
          </div>
        </Router>
      </HabitContext>
    </>
  );
};

export default App;
