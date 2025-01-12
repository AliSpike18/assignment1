// src/pages/Projects.js

/**
 * File name: Projects.js
 * Student's Name: Ali Qamber Zaidi
 * Student ID: 301415368
 * Date: 09/24/24
 */

import React from 'react';
import './projects.css';

import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';
import image3 from '../assets/project3.png';

const projects = [
  {
    title: "Heaps Estrin Real Estate",
    description: "Transforming dreams into addresses, our real estate company specializes in matching individuals with their perfect homes, offering personalized service and expert guidance every step of the way",
    image: image1,
    link: "http://studentweb.cencol.ca/ndemesa/FinalProject/home.html" // Corrected path
  },
  {
    title: "MB Social Media Post",
    description: "Graphics for their Charcoal Shampoo and create their packaging",
    image: image2,
    link: "https://www.behance.net/gallery/135883065/Madison-Braids/modules/768772979" // Corrected path
  },
  {
    title: "SR Vlog Contest Newsletter",
    description: "Created How to join in their contest for their newsletter",
    image: image3,
    link: "https://www.behance.net/gallery/93065753/Newsletter/modules/537796923" // Corrected path
  }
];


const Projects = () => (
  <div className="projects">
    <h1>My Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div></div>
          <a href={project.link} className="btn">View Project</a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;