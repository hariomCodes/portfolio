import React from 'react';

const Footer = () => (
  <footer className="bg-darkHeader dark:bg-lightHeader text-white dark:text-black py-6">
    <div className="container mx-auto text-center">
      <p className="mb-4">&copy; 2024 Your Name. All rights reserved.</p>
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white dark:hover:text-black">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white dark:hover:text-black">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
