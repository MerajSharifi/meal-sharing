import React, { useState } from "react";

function ReservationForm({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact_name: name,
          contact_email: email,
          contact_phonenumber: phoneNumber,
          number_of_guests: 4,
          meal_id: id,
        }),
      });

      if (response.ok) {
        alert("Reservation successful!");
      } else {
        alert("Reservation failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
    <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
