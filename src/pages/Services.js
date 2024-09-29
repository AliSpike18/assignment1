// src/pages/Services.js

/**
 * File name: Services.js
 * Student's Name: Ali Qamber Zaidi
 * Student ID: 301415368
 * Date: 09/24/24
 */


import React from 'react';
import './services.css';
import webDevImage from '../assets/webdesigner.png';
import graphicDesign from '../assets/sql.jpeg';
import socialMediaManagement from '../assets/gamedesigner.jpeg';

const services = [
  { id: 1, title: 'Web Development', description: 'Crafting dynamic and user-friendly websites tailored to your needs, utilizing the latest technologies and best practices to enhance functionality, aesthetics, and overall user experience.', image: webDevImage },
  { id: 2, title: 'Graphic Design', description: 'Offering a comprehensive range of design services, including logo creation, business card design, social media graphics, marketing materials, website visuals, brand identity development, packaging design, infographics, event graphics, and custom illustrations. Our goal is to create visually appealing and cohesive designs that effectively communicate your brands message and captivate your audience.', image: graphicDesign },
  { id: 3, title: 'Social Media Management', description: 'Managing and enhancing your social media presence through strategic content creation, scheduling, engagement, and analytics to grow your audience and drive engagement.', image: socialMediaManagement },
];

const Services = () => (
  <div className="services">
    <h1>My Services</h1>
    <div className="service-list">
      {services.map(service => (
        <div key={service.id} className="service">
          <img src={service.image} alt={service.title} className="service-image" />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
