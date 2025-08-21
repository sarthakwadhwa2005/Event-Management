import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './registerorg.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    mailId: '',
    event: '',
    budget: '',
    capacity: '',
    location: '',
  });

  const [eventId, setEventId] = useState('');
  const [events, setEvents] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/dream-event');
      const data = await response.json();
      setEvents(data.data);
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      handleUpdate();
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/dream-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        alert(data.message);
        fetchEvents();
        navigate('/success');
      } catch (error) {
        console.error('Failed to register:', error);
        alert('Failed to register. Please try again.');
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/dream-event/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      alert(data.message);
      fetchEvents();
    } catch (error) {
      console.error('Failed to delete event:', error);
      alert('Failed to delete event. Please try again.');
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/dream-event/${eventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
      fetchEvents();
      navigate('/success');
      setIsUpdate(false);
      setEventId('');
    } catch (error) {
      console.error('Failed to update event:', error);
      alert('Failed to update event. Please try again.');
    }
  };

  const handleEventSelect = (event) => {
    setEventId(event._id);
    setIsUpdate(true);
    setFormData({
      name: event.name,
      age: event.age,
      gender: event.gender,
      contact: event.contact,
      mailId: event.mailId,
      event: event.event,
      budget: event.budget,
      capacity: event.capacity,
      location: event.location,
    });
  };

  return (
    <div className="register-container">
      <h1>Event Registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
        <input type="email" name="mailId" placeholder="Email" value={formData.mailId} onChange={handleChange} required />
        <input type="text" name="event" placeholder="Event Name" value={formData.event} onChange={handleChange} required />
        <input type="text" name="budget" placeholder="Budget" value={formData.budget} onChange={handleChange} required />
        <input type="text" name="capacity" placeholder="Capacity" value={formData.capacity} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <button type="submit">{isUpdate ? 'Update Event' : 'Submit Event'}</button>
      </form>

      <div>
        <h2>Event List</h2>
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              {event.event} - {event.location}
              <button onClick={() => handleDelete(event._id)}>Delete</button>
              <button onClick={() => handleEventSelect(event)}>Update</button>
            </li>
          ))}
        </ul>
      </div>

      {isUpdate && (
        <div>
          <h3>Update Event</h3>
          <button onClick={handleUpdate}>Confirm Update</button>
        </div>
      )}
    </div>
  );
};

export default Register;
