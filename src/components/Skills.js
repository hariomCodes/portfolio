import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaCogs } from 'react-icons/fa';
import { SiPython, SiPostgresql, SiMongodb } from 'react-icons/si';

const Skills = () => (
  <section id="skills" className="py-12 bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <FaReact className="mr-2" size={24} /> React
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <FaNodeJs className="mr-2" size={24} /> Node.js
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <SiPython className="mr-2" size={24} /> Python
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <SiPostgresql className="mr-2" size={24} /> PostgreSQL
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <SiMongodb className="mr-2" size={24} /> MongoDB
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <FaDocker className="mr-2" size={24} /> Docker
        </li>
        <li className="flex items-center bg-lightHeader dark:bg-darkHeader text-accent px-4 py-2 rounded-lg shadow-md">
          <FaCogs className="mr-2" size={24} /> CI/CD
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
