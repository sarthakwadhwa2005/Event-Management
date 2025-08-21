import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sports.css";

const SportsTournamentsPage = () => {
  const tournaments = [
    {
      name: "Cricket World Cup",
      description:
        "Experience the thrill of the ICC Cricket World Cup! Watch top teams battle it out for cricket's ultimate glory.",
      image: "/images/sp1.png",
      date: "October 2024",
      location: "Mumbai, India",
      price: "₹2000",
    },
    {
      name: "Football Champions League",
      description:
        "Catch the action-packed matches of the UEFA Champions League, where Europe’s finest football clubs compete for supremacy.",
      image: "/images/sp2.png",
      date: "May 2025",
      location: "Delhi, India",
      price: "₹1500",
    },
    {
      name: "Boxing Championship",
      description:
        "Step into the ring with world-class fighters! Witness intense bouts in the International Boxing Championship.",
      image: "/images/sp3.png",
      date: "March 2025",
      location: "Bangalore, India",
      price: "₹3000",
    },
    {
      name: "Tennis Grand Slam",
      description:
        "Watch legends and rising stars compete in one of the prestigious Grand Slam tournaments. Don’t miss the action!",
      image: "/images/sp4.png",
      date: "July 2025",
      location: "Hyderabad, India",
      price: "₹2500",
    },
    {
      name: "NBA Playoffs",
      description:
        "Follow the excitement of the NBA Playoffs as teams face off to claim basketball’s biggest prize.",
      image: "/images/sp5.png",
      date: "April 2025",
      location: "Kolkata, India",
      price: "₹1800",
    },
    // Additional events
    {
      name: "School Sports Day",
      description:
        "Join the fun at the annual school sports day! Cheer for your classmates as they compete in a variety of athletic events.",
      image: "/images/sp6.png",
      date: "November 2024",
      location: "Chennai, India",
      price: "₹100",
    },
    {
      name: "Inter-School Cricket Tournament",
      description:
        "A thrilling cricket tournament where top schools compete for the championship. Witness the best young talent from across the country!",
      image: "/images/sp7.png",
      date: "January 2025",
      location: "Pune, India",
      price: "₹500",
    },
    {
      name: "State-Level Basketball Championship",
      description:
        "Top basketball teams from across the state compete for the championship title. Who will reign supreme in this intense competition?",
      image: "/images/sp8.png",
      date: "February 2025",
      location: "Lucknow, India",
      price: "₹800",
    },
    {
      name: "National Badminton Championship",
      description:
        "The best badminton players from across India face off to claim the national title. Don't miss the incredible action on the court!",
      image: "/images/sp9.png",
      date: "June 2025",
      location: "Mumbai, India",
      price: "₹1000",
    },
    // New Events
    {
      name: "State Athletics Championship",
      description:
        "Witness the best athletes from across the state compete in track and field events. Who will take home the gold?",
      image: "/images/sp10.png",
      date: "August 2025",
      location: "Chandigarh, India",
      price: "₹600",
    },
    {
      name: "National Hockey Tournament",
      description:
        "Catch the top hockey teams from across India battling it out for the national title in this action-packed tournament.",
      image: "/images/sp11.png",
      date: "October 2025",
      location: "Bhubaneswar, India",
      price: "₹1200",
    },
    {
      name: "School Football League",
      description:
        "The best school football teams go head-to-head in a fast-paced, action-filled league. Who will emerge as the champions?",
      image: "/images/sp12.png",
      date: "December 2024",
      location: "Jaipur, India",
      price: "₹400",
    },
    {
      name: "Inter-School Table Tennis Championship",
      description:
        "Top table tennis players from schools across India compete for the coveted championship trophy.",
      image: "/images/sp13.png",
      date: "March 2025",
      location: "Surat, India",
      price: "₹500",
    },
    {
      name: "National Volleyball Cup",
      description:
        "Watch elite volleyball teams from all over the country compete in the prestigious National Volleyball Cup.",
      image: "/images/sp14.png",
      date: "November 2025",
      location: "Ahmedabad, India",
      price: "₹700",
    },
  ];

  const [selectedTournament, setSelectedTournament] = useState(null);

  const selectTournament = (tournament) => {
    setSelectedTournament(tournament);
  };

  return (
    <div className="sports-container">
      <div className="header">
        <button className="back-button">BACK</button>
        <h1 className="title">SPORTS TOURNAMENTS</h1>
      </div>

      <div className="content">
        <div className="tournaments-list">
          {tournaments.map((tournament, index) => (
            <button
              onClick={() => selectTournament(tournament)}
              key={index}
              className="tournament-button"
            >
              {tournament.name}
            </button>
          ))}
        </div>

        {selectedTournament ? (
          <div className="tournament-details">
            <img
              src={selectedTournament.image}
              alt={selectedTournament.name}
              className="tournament-image"
            />
            <h2>{selectedTournament.name}</h2>
            <p>{selectedTournament.description}</p>
            <p><strong>Date:</strong> {selectedTournament.date}</p>
            <p><strong>Location:</strong> {selectedTournament.location}</p>
            <p><strong>Price:</strong> {selectedTournament.price}</p>
            <Link
              to="/register"
              state={{
                hackathonName: selectedTournament.name,
                hackathonFee: selectedTournament.price, 
              }}
            >
              <button className="book-now">Register Now</button>
            </Link>
          </div>
        ) : (
          <div className="tournament-details">
            <p>Select a tournament to see details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsTournamentsPage;
