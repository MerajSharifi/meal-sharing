// components/TestComponent/MealsList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Meal from './Meal';

function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/meals');
      const data = await response.json();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="meals-list">
      {meals.map((meal, index) => (
        <div key={index}>
          <Meal meal={meal} />
          <Link to={`/meals/${meal.id}`}>
            <p>See Details...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MealsList;
