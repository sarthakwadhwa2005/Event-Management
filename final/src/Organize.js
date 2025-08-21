import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Organize.css';

const Organize = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/registerorg'); 
  };

  return (
    <div className="organize-container">
      <h1 className="organize-header">Organize Any Event You Need with Us</h1>

      <div className="intro-section">
        <p>
          At our core, we specialize in organizing all kinds of events tailored to your unique needs. Whether it’s a personal celebration, a competitive event, or a large-scale public gathering, we’ve got you covered. Let us handle the stress while you enjoy the experience.
        </p>
        <img src="/images/intro.jpg" alt="Event Intro" className="section-image" />
      </div>

      <div className="experience-section">
        <h2>Our Experience</h2>
        <p>
          With years of expertise in event management, we have handled diverse events, leaving a lasting impression on every client. Here's a glimpse of our journey:
        </p>
        <ul>
          <li>
            <strong>Birthday Parties:</strong> From themed birthday bashes for kids to elegant celebrations for adults, we make birthdays unforgettable.
            <img src="/images/birthday.jpg" alt="Birthday Party" className="list-image" />
          </li>
          <li>
            <strong>Weddings:</strong> Your special day deserves the best. We create magical weddings, handling everything from venue décor to guest coordination.
            <img src="/images/wedding.jpg" alt="Wedding" className="list-image" />
          </li>
          <li>
            <strong>Gaming Competitions:</strong> We’ve organized exciting e-sports tournaments and gaming events, fostering competitive spirit and fun.
            <img src="/images/gaming.jpg" alt="Gaming Competition" className="list-image" />
          </li>
          <li>
            <strong>College Fests:</strong> With successful college fests across universities, we bring together cultural, technical, and fun events seamlessly.
            <img src="/images/collegefest.jpg" alt="College Fest" className="list-image" />
          </li>
        </ul>
      </div>

      <div className="project-section">
        <h2>Our Projects</h2>
        <p>We’ve managed an array of remarkable events, including:</p>
        <ul>
          <li>
            <strong>Hackathons:</strong> Partnered with tech giants to deliver innovative hackathons.
            <img src="/images/hackathon.jpg" alt="Hackathon" className="list-image" />
          </li>
          <li>
            <strong>Sports Events:</strong> Organized marathons, tournaments, and sports festivals.
            <img src="/images/sports-meet.jpg" alt="Sports Event" className="list-image" />
          </li>
          <li>
            <strong>Concerts:</strong> Brought the best artists and audiences together for memorable performances.
            <img src="/images/music-fest.jpg" alt="Concert" className="list-image" />
          </li>
          <li>
            <strong>Social Gatherings:</strong> Weddings, birthdays, anniversaries, and more.
            <img src="/images/social-connect.jpg" alt="Social Event" className="list-image" />
          </li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          We’re passionate about bringing your vision to life. Our expert team ensures:
        </p>
        <ul>
          <li>Creative and customized event planning.</li>
          <li>Seamless execution with attention to detail.</li>
          <li>Access to the best venues, vendors, and technology.</li>
          <li>Exceptional experiences for you and your guests.</li>
        </ul>
        <img src="/images/why.jpg" alt="Why Choose Us" className="section-image" />
      </div>

      <div className="book-now-section">
        <h2>Let’s Plan Your Next Event!</h2>
        <p>
          Ready to make your event unforgettable? Click below to start planning today.
        </p>
        <button className="book-now-button" onClick={handleBookNowClick}>
          Book Now
        </button>
        <img src="/images/book.jpg" alt="Book Now" className="section-image" />
      </div>
    </div>
  );
};

export default Organize;
