import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal";
import ReservationForm from "./ReservationForm";

function MealDetails() {
  const { id } = useParams(); 
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  return (
    <div className="meal-details">
      {/* <Meal /> */}
      This is meal details
      {meal ? (
        <div>
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <p>Price: {meal.price}</p>
          <p>Location: {meal.location}</p>
              <ReservationForm id={id} />
        </div>
      ) : (
        <p>Loading meal details...</p>
      )}
    </div>
  );
}

export default MealDetails;
