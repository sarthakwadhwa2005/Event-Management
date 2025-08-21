import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./hackathon.css";

const HackathonsPage = () => {
  const hackathons = [
    {
      name: "Hack the Future",
      description:
        "Join the biggest hackathon of the year! A 48-hour coding marathon where you can build innovative projects, win exciting prizes, and network with top tech leaders.",
      image: "/images/h1.png",
      location: "Bengaluru, Karnataka",
      entryFee: "₹3,500",
      teamMembers: "1-4",
      date: "December 1-3, 2024",
    },
    {
      name: "CodeFest 2024",
      description:
        "A national-level hackathon bringing together coders, designers, and problem solvers to tackle real-world challenges. Don't miss this opportunity to make an impact!",
      image: "/images/h2.png",
      location: "Mumbai, Maharashtra",
      entryFee: "Free",
      teamMembers: "2-5",
      date: "January 15-17, 2024",
    },
    {
      name: "AI Innovators",
      description:
        "Dive into the world of artificial intelligence! Create AI-driven solutions and compete against the brightest minds to win recognition and prizes.",
      image: "/images/h3.png",
      location: "Hyderabad, Telangana",
      entryFee: "₹2,000",
      teamMembers: "1-3",
      date: "February 20-22, 2024",
    },
    {
      name: "Tech Sprint",
      description:
        "A fast-paced hackathon where speed meets innovation! Collaborate with your peers to build rapid prototypes and solve challenging problems.",
      image: "/images/h4.png",
      location: "Chennai, Tamil Nadu",
      entryFee: "₹3,000",
      teamMembers: "2-4",
      date: "March 5-7, 2024",
    },
    {
      name: "Start Hack 2024",
      description:
        "Bring your startup ideas to life! A hackathon focused on entrepreneurship and business-driven solutions.",
      image: "/images/h5.png",
      location: "Delhi NCR",
      entryFee: "Free",
      teamMembers: "2-5",
      date: "April 10-12, 2024",
    },
    {
      name: "Global Code Challenge",
      description:
        "A global hackathon that connects developers across the world. Collaborate online and solve problems that impact society on a global scale.",
      image: "/images/h1.png",
      location: "Virtual",
      entryFee: "Free",
      teamMembers: "1-5",
      date: "June 15-17, 2024",
    },
    {
      name: "Blockchain Battle",
      description:
        "Enter the world of blockchain technology! Compete in creating decentralized applications and smart contracts in this highly competitive event.",
      image: "/images/h2.png",
      location: "Bengaluru, Karnataka",
      entryFee: "₹5,500",
      teamMembers: "1-3",
      date: "July 8-10, 2024",
    },
    {
      name: "Cybersecurity Clash",
      description:
        "Put your cybersecurity skills to the test in this high-stakes event where participants must defend against real-time simulated cyber attacks.",
      image: "/images/h3.png",
      location: "Pune, Maharashtra",
      entryFee: "₹4,000",
      teamMembers: "1-4",
      date: "August 12-14, 2024",
    },
    {
      name: "GreenTech Hack",
      description:
        "Create solutions for a sustainable future! A hackathon focused on building environmentally-friendly tech solutions to global challenges.",
      image: "/images/h4.png",
      location: "Ahmedabad, Gujarat",
      entryFee: "₹2,500",
      teamMembers: "2-4",
      date: "September 10-12, 2024",
    },
    {
      name: "SpaceTech Hackathon",
      description:
        "Explore the final frontier! Build innovative solutions for space exploration and technology to tackle the challenges of tomorrow.",
      image: "/images/h5.png",
      location: "Chandigarh, Punjab",
      entryFee: "₹6,000",
      teamMembers: "2-5",
      date: "October 1-3, 2024",
    },
    {
      name: "IoT Innovators",
      description:
        "The Internet of Things is revolutionizing industries. Build solutions to create a more connected world with smart devices and data analytics.",
      image: "/images/h1.png",
      location: "Noida, Uttar Pradesh",
      entryFee: "₹3,000",
      teamMembers: "1-4",
      date: "November 5-7, 2024",
    },
    {
      name: "HealthTech Hack",
      description:
        "Develop the next generation of healthcare technologies. From telemedicine to wearables, work on projects that can transform healthcare systems.",
      image: "/images/h2.png",
      location: "Kochi, Kerala",
      entryFee: "₹4,500",
      teamMembers: "2-5",
      date: "December 10-12, 2024",
    },
    {
      name: "EduTech Innovation",
      description:
        "Create innovative solutions for education. Improve learning experiences with tech tools and platforms that make education accessible to everyone.",
      image: "/images/h3.png",
      location: "Jaipur, Rajasthan",
      entryFee: "₹2,000",
      teamMembers: "1-3",
      date: "January 20-22, 2025",
    },
  ];

  const [selectedHackathon, setSelectedHackathon] = useState(null);

  const selectHackathon = (hackathon) => {
    setSelectedHackathon(hackathon);
  };

  return (
    <div className="hackathons-container">
      <div className="header">
        <button className="back-button">BACK</button>
        <h1 className="title">HACKATHONS</h1>
      </div>

      <div className="content">
        <div className="hackathons-list">
          {hackathons.map((hackathon, index) => (
            <button
              onClick={() => selectHackathon(hackathon)}
              key={index}
              className="hackathon-button"
            >
              {hackathon.name}
            </button>
          ))}
        </div>

        {selectedHackathon ? (
          <div className="hackathon-details">
            <img
              src={selectedHackathon.image}
              alt={selectedHackathon.name}
              className="hackathon-image"
            />
            <h2>{selectedHackathon.name}</h2>
            <p>{selectedHackathon.description}</p>
            <p><strong>Location:</strong> {selectedHackathon.location}</p>
            <p><strong>Entry Fee:</strong> {selectedHackathon.entryFee}</p>
            <p><strong>Team Size:</strong> {selectedHackathon.teamMembers}</p>
            <p><strong>Date:</strong> {selectedHackathon.date}</p>
            <Link
  to="/register"
  state={{
    hackathonName: selectedHackathon.name,
    hackathonFee: selectedHackathon.entryFee,
  }}
>
  <button className="register-now">Register Now</button>
</Link>

          </div>
        ) : (
          <div className="hackathon-details">
            <p>Select a hackathon to see details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonsPage;
