import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Dashboard/CarbsHome";
import MealPlan from "./Dashboard/MealPlan";
import LandingPage from "./Website";
import Layout from "./Layout";
import Login from './Website/Login';

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="meal-plan" element={<MealPlan />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MainRouter;
