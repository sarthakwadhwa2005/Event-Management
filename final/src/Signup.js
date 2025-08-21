import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name || !user.password || !user.email) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
          window.location.href = "/login"; 
        }, 2000);
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Create a password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email id"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Signup;
