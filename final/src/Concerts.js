import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./concert.css";

const Concert = () => {
  const concerts = [
    "Karan Aujla Live",
    "Coldplay Concert",
    "Ed Sheeran Concert",
    "Dilluminati Live Concert",
    "Adele Live Performance",
    "The Weeknd Tour",
    "Imagine Dragons Concert",
    "Shawn Mendes Tour",
    "Taylor Swift Era Tour",
    "BTS Live in Seoul",
    "Justin Bieber World Tour",
  ];

  const [concertName, setConcertName] = useState("");
  const [concertDetails, setConcertDetails] = useState("");
  const [concertImage, setConcertImage] = useState("");
  const [concertDate, setConcertDate] = useState("");
  const [concertPrice, setConcertPrice] = useState("");
  const [concertLocation, setConcertLocation] = useState("");

  const concertDescriptions = {
    "Karan Aujla Live": {
      details: "Join Karan Aujla for an unforgettable night filled with his hit Punjabi tracks and energetic stage presence.",
      image: "/images/c1.jpg",
      date: "13th December 2024",
      price: "₹5000",
      location: "Bangalore, Karnataka",
    },
    "Coldplay Concert": {
      details: "Experience Coldplay's magic live!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4MEhz3oYiq-YqRWxyVqKlmBo6WUs6z126g&s",
      date: "30th November 2024",
      price: "₹5,000", 
      location: "Delhi, NCR",
    },

    "Ed Sheeran Concert": {
      details: "Ed Sheeran is here to serenade you with his soulful ballads and upbeat hits. Don't miss this live concert!",
      image: "/images/c2.jpg",
      date: "5th December 2024",
      price: "₹3,000",
      location: "Bangalore, Karnataka",
    },
    "Dilluminati Live Concert": {
      details: "Diljit brings its iconic performances, along with all the fan-favorite Punjabi hits. Prepare for an epic night!",
      image: "/images/c3.jpg",
      date: "10th December 2024",
      price: "₹2,000",
      location: "Chandigarh, Punjab",
    },
    "Adele Live Performance": {
      details: "Adele's powerful voice and emotional ballads will leave you mesmerized in this intimate live performance.",
      image: "/images/c4.jpg",
      date: "15th December 2024",
      price: "₹4,500",
      location: "Hyderabad, Telangana",
    },
    "The Weeknd Tour": {
      details: "Catch The Weeknd live on his tour with his smooth R&B beats and chart-topping hits.",
      image: "/images/c5.png",
      date: "20th December 2024",
      price: "₹3,500",
      location: "Pune, Maharashtra",
    },
    "Imagine Dragons Concert": {
      details: "Get ready for a night of high-energy rock music with Imagine Dragons! A concert to remember.",
      image: "/images/c6.jpg",
      date: "25th December 2024",
      price: "₹4,000",
      location: "Chennai, Tamil Nadu",
    },
    "Shawn Mendes Tour": {
      details: "Shawn Mendes' heartfelt songs and powerful vocals will create an unforgettable concert experience.",
      image: "/images/c7.png",
      date: "30th December 2024",
      price: "₹2,800",
      location: "Jaipur, Rajasthan",
    },
    "Taylor Swift Era Tour": {
      details: "Taylor Swift brings her iconic Era tour to the stage. Relive her greatest hits!",
      image: "/images/c8.jpg",
      date: "5th January 2025",
      price: "₹5,500",
      location: "Kolkata, West Bengal",
    },
    "BTS Live in Seoul": {
      details: "Experience BTS live from Seoul, delivering energetic performances and mesmerizing visuals.",
      image: "/images/c9.jpg",
      date: "10th January 2025",
      price: "₹6,000",
      location: "Ahmedabad, Gujarat",
    },
    "Justin Bieber World Tour": {
      details: "Justin Bieber is back on stage with his global tour, bringing chart-topping hits to life.",
      image: "/images/c10.jpg",
      date: "15th January 2025",
      price: "₹3,200",
      location: "Lucknow, Uttar Pradesh",
    },
  };

  const updateConcert = (concert) => {
    setConcertName(concert);
    setConcertDetails(concertDescriptions[concert]?.details || "Details not available.");
    setConcertImage(concertDescriptions[concert]?.image || "");
    setConcertDate(concertDescriptions[concert]?.date || "Date not available.");
    setConcertPrice(concertDescriptions[concert]?.price || "Price not available.");
    setConcertLocation(concertDescriptions[concert]?.location || "Location not available.");
  };

  return (
    <div className="events-container">
      <div className="header">
        <button className="back-button">BACK</button>
        <h1 className="title">CONCERTS</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Search for concerts..."
        />
      </div>

      <div className="content">
        <div className="events-list">
          {concerts.map((concert, index) => (
            <button
              onClick={() => updateConcert(concert)}
              key={index}
              className="event-button"
            >
              {concert}
            </button>
          ))}
        </div>

        <div className="event-details">
          {concertName && (
            <>
              <h2>{concertName}</h2>
              <p><strong>Date:</strong> {concertDate}</p>
              <p><strong>Location:</strong> {concertLocation}</p>
              <p><strong>Price:</strong> {concertPrice}</p>
              <p>{concertDetails}</p>
              <img
                src={concertImage}
                alt={concertName}
                className="concert-image"
              />
              <Link to="/register" state={{ concertName, concertPrice }}>
                <button className="book-now">Book Now</button>
              </Link>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Concert;