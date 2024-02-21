// components/TestComponent/MealDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Meal from "./Meal";
import { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState();

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/meals/${id}`);
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="meal-details-container">
      <h2>{meal.title}</h2>
      <p>{meal.description}</p>
      <p>Price: ${meal.price}</p>

      <form onSubmit={handleReservationSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={reservationData.name}
          onChange={(e) => setReservationData({ ...reservationData, name: e.target.value })}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={reservationData.email}
          onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}
          required
        />

        {/* Add more reservation form fields here as needed */}

        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
};

export default MealDetails;
