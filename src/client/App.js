// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealsList from "./components/TestComponent/MealsList";
import MealDetails from "./components/TestComponent/MealDetails";
import HomePage from "./components/TestComponent/HomePage";
import Header from "./components/TestComponent/Header";

function App() {
  return (
    <Router>
      <Header />
      <Router />
      <div>
        <h1 className="title">Meal Sharing App</h1>
        <Switch>
          <Route path="/meals/:id">
            <MealDetails />
          </Route>
          <Route path="/meals">
            <MealsList />
          </Route>
          <Route path="/" exact>
          <Route path="/meals/:id" component={MealDetails} />

            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
