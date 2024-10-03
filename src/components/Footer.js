import React from 'react';

const Footer = () => (
  <footer className="bg-lightHeader dark:bg-darkHeader text-black dark:text-white py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; 2024 Your Name. All rights reserved.</p>
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-black dark:hover:text-white">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-black dark:hover:text-white">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
