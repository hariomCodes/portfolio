import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
    className="py-12 bg-darkBackground dark:bg-lightBackground text-white dark:text-black"
  >
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
      <p className="mb-6">
        Feel free to reach out if you have any questions or opportunities you'd
        like to discuss.
      </p>
      <div className="flex justify-center space-x-8">
        <a
          href="mailto:hariom.codes@gmail.com"
          className="text-accent hover:text-white dark:hover:text-black transition duration-300"
        >
          <FaEnvelope size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/hariom-tiwari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-white dark:hover:text-black transition duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/hariomCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-white dark:hover:text-black transition duration-300"
        >
          <FaGithub size={32} />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
