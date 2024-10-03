import React, { useState, useEffect } from 'react';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect system preference and set initial theme
  useEffect(() => {
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && userPreference)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-lightHeader dark:bg-darkHeader text-black dark:text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">hariomCodes</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="text-accent hover:underline">Home</a>
          <a href="#about" className="text-accent hover:underline">About</a>
          <a href="#skills" className="text-accent hover:underline">Skills</a>
          <a href="#projects" className="text-accent hover:underline">Projects</a>
          <a href="#testimonials" className="text-accent hover:underline">Testimonials</a>
          <a href="#contact" className="text-accent hover:underline">Contact</a>
        </nav>

        {/* Theme Toggle Button for Desktop */}
        <button
          onClick={toggleTheme}
          className="hidden md:inline-flex ml-4 px-3 py-2 rounded bg-black text-white dark:bg-accent"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Hamburger Icon for Mobile */}
        <FaBars onClick={toggleMenu} className="md:hidden cursor-pointer" size={24} />
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden bg-lightHeader dark:bg-darkHeader text-black dark:text-white px-4 py-2 ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="space-y-4">
          <a href="#hero" className="block text-accent hover:underline">Home</a>
          <a href="#about" className="block text-accent hover:underline">About</a>
          <a href="#skills" className="block text-accent hover:underline">Skills</a>
          <a href="#projects" className="block text-accent hover:underline">Projects</a>
          <a href="#testimonials" className="block text-accent hover:underline">Testimonials</a>
          <a href="#contact" className="block text-accent hover:underline">Contact</a>

          {/* Theme Toggle Button for Mobile */}
          <button
            onClick={toggleTheme}
            className="w-full mt-4 px-3 py-2 rounded bg-black text-white dark:bg-accent dark:text-white flex justify-center"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
