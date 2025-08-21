import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./social.css";

const SocialEventsPage = () => {
  const events = [
    {
      name: "Samay Raina Stand-Up",
      description:
        "Laugh your heart out with Samay Raina’s hilarious stand-up comedy. Book your tickets now for an unforgettable evening!",
      image: "/images/s1.png",
      date: "December 15, 2024",
      location: "Mumbai, India",
      price: "₹500",
    },
    {
      name: "Kenny Sebastian Live",
      description:
        "Join Kenny Sebastian for a night of quirky humor, witty observations, and lots of laughter. Reserve your seats today!",
      image: "/images/s2.png",
      date: "January 10, 2025",
      location: "Bangalore, India",
      price: "₹700",
    },
    {
      name: "Open Mic Night",
      description:
        "Discover new talent at our Open Mic Night! From stand-up comedy to soulful storytelling, enjoy raw and authentic performances.",
      image: "/images/s3.png",
      date: "February 5, 2025",
      location: "Delhi, India",
      price: "₹300",
    },
    {
      name: "Zakir Khan - Haq Se Single",
      description:
        "Catch Zakir Khan’s iconic special, ‘Haq Se Single,’ live. Don’t miss his relatable humor and signature storytelling style.",
      image: "/images/s4.png",
      date: "March 18, 2025",
      location: "Hyderabad, India",
      price: "₹800",
    },
    {
      name: "Storytelling Workshop",
      description:
        "Learn the art of storytelling from seasoned performers. Enhance your skills and share your unique story with the world.",
      image: "/images/s5.png",
      date: "April 22, 2025",
      location: "Chennai, India",
      price: "₹1000",
    },
    {
      name: "The Comedy Showdown",
      description:
        "A hilarious battle of comedians! Watch some of the best comedians face-off on stage in this fun-filled event.",
      image: "/images/s6.png",
      date: "May 30, 2025",
      location: "Pune, India",
      price: "₹600",
    },
    {
      name: "Improv Night",
      description:
        "Join us for a night of improvisational comedy! Watch performers create humor on the spot, with no scripts, no limits!",
      image: "/images/s7.png",
      date: "June 12, 2025",
      location: "Kolkata, India",
      price: "₹400",
    },
    {
      name: "Laugh Factory Live",
      description:
        "A night full of side-splitting laughter from a range of comedic geniuses! Get ready for some serious belly laughs.",
      image: "/images/s8.png",
      date: "July 20, 2025",
      location: "Jaipur, India",
      price: "₹650",
    },
    {
      name: "The Roast Battle",
      description:
        "A night of roasts and comebacks! Watch comedians tear each other down in the funniest way possible, with no holds barred!",
      image: "/images/s9.png",
      date: "August 5, 2025",
      location: "Lucknow, India",
      price: "₹550",
    },
    {
      name: "Stand-Up for a Cause",
      description:
        "A charity comedy event featuring some of the top comedians. All proceeds go to supporting education for underprivileged children.",
      image: "/images/s10.png",
      date: "September 10, 2025",
      location: "Kochi, India",
      price: "₹400",
    },
    {
      name: "Laughter Yoga Workshop",
      description:
        "Combine comedy and wellness in this unique laughter yoga workshop! Learn to laugh your way to a healthier mind and body.",
      image: "/images/s11.png",
      date: "October 25, 2025",
      location: "Goa, India",
      price: "₹750",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectEvent = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="social-container">
      <div className="header">
        <button className="back-button">BACK</button>
        <h1 className="title">SOCIAL EVENTS</h1>
      </div>

      <div className="content">
        <div className="events-list">
          {events.map((event, index) => (
            <button
              onClick={() => selectEvent(event)}
              key={index}
              className="event-button"
            >
              {event.name}
            </button>
          ))}
        </div>

        {selectedEvent ? (
          <div className="event-details">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="event-image"
            />
            <h2>{selectedEvent.name}</h2>
            <p>{selectedEvent.description}</p>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Price:</strong> {selectedEvent.price}</p>
            <Link
              to="/register"
              state={{
                hackathonName: selectedEvent.name,
                hackathonFee: selectedEvent.price,
              }}
            >
              <button className="book-now">Register Now</button>
            </Link>
          </div>
        ) : (
          <div className="event-details">
            <p>Select an event to see details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialEventsPage;
