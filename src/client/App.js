import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MealsList from "./components/TestComponent/MealsList";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Meal Sharing App</h1>
        <MealsList />
      </div>
    </Router>
  );
}

export default App;
