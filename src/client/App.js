// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealsList from "./components/TestComponent/MealsList";
import MealDetails from "./components/TestComponent/MealDetails";
import HomePage from "./components/TestComponent/HomePage";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Meal Sharing App</h1>
        <Switch>
          <Route path="/meals/:id" render={({ match }) => <MealDetails mealId={match.params.id} />} />
          <Route path="/meals" component={MealsList} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
