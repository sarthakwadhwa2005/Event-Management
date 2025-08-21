import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const events = [
    {
      name: "Hackathon 2023",
      description: "A 24-hour coding competition that brought together tech enthusiasts from across the globe.",
      image: "/images/hackathon.jpg",
    },
    {
      name: "Annual Sports Meet",
      description: "A day full of sports activities and team-building events for professionals and students.",
      image: "/images/sports-meet.jpg",
    },
    {
      name: "Music Fest 2023",
      description: "An unforgettable evening of music, food, and fun featuring popular bands and solo artists.",
      image: "/images/music-fest.jpg",
    },
    {
      name: "Social Connect 2023",
      description: "A networking event for professionals to meet, connect, and grow together.",
      image: "/images/social-connect.jpg",
    },
    {
      name: "Grand Wedding Ceremony",
      description: "A stunning celebration of love and unity, planned to perfection for the couple and guests.",
      image: "/images/wedding.jpg",
    },
    {
      name: "Birthday Bash",
      description: "A lively birthday party with games, decorations, and unforgettable moments.",
      image: "/images/birthday.jpg",
    },
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Evensta</strong>! Our mission is to make event management seamless 
        and accessible for everyone. Whether you’re looking to organize an event or participate 
        in one, we’ve got you covered.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>
          <strong>Organize Events:</strong> Create, manage, and promote events with ease using our platform.
        </li>
        <li>
          <strong>Join Events:</strong> Discover and participate in a wide range of events, 
          from hackathons to concerts, and everything in between.
        </li>
      </ul>
      <h2>Previous Events</h2>
      <div className="events-gallery">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.name} className="event-image" />
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-member">
          <h3>Sarthak Garg</h3>
          <p>SRN: PES2UG23CS534</p>
        </div>
        <div className="team-member">
          <h3>Sarthak Wadhwa</h3>
          <p>SRN: PES2UG23CS535</p>
        </div>
        <div className="team-member">
          <h3>Shravan M</h3>
          <p>SRN: PES2UG23CS551</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
