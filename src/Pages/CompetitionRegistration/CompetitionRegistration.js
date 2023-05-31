import React, { useState } from 'react';
import './CompetitionRegistration.css';
import Navbar from '../../componant/Nav/Navbar';
import Footer from '../Home/footer';

const CompetitionRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, such as sending data to a server

    // Reset form fields
    setFullName('');
    setEmail('');
    setPassword('');
  };


  return (
    <div>
        <Navbar/>

<div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='ButtonnComp' type="submit">Register</button>
      </form>
    </div>

    <Footer/>
    </div>
    
  );
};

export default CompetitionRegistration;
