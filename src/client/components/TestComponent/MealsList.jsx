import React, { useState, useEffect } from 'react';
import Meal from './Meal';

function MealList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
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
        <Meal key={index} meal={meal} />
      ))}
    </div>
  );
}

export default MealList;
