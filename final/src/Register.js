import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const location = useLocation();
  const { concertName, concertPrice, hackathonName, hackathonFee, tournamentName, tournamentPrice, socialname, socialprice } = location.state || {};

  const eventName = concertName || hackathonName || tournamentName || socialname || "";
  const eventAmount = concertPrice || hackathonFee || tournamentPrice || socialprice || "";

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    mailId: "",
    event: eventName,
    amount: eventAmount,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (!location.state) {
      alert("Invalid event details. Redirecting...");
      window.location.href = "/";
    }
  }, [location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        window.location.href = "/success";
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>REGISTER</h2>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            required
          />{" "}
          Female
        </div>

        <div>
          <label>Contact No.:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Mail ID:</label>
          <input
            type="email"
            name="mailId"
            value={formData.mailId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Event:</label>
          <input
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
            disabled
          />
        </div>

        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            disabled
          />
        </div>

        <button type="submit">PAY NOW</button>
      </form>
    </div>
  );
};

export default Register;
