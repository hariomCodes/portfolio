import React from 'react';

const Projects = () => (
  <section id="projects" className="py-12 bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-semibold mb-8">Projects</h2>
    <ul className="space-y-8">
      <li className="bg-lightHeader dark:bg-darkHeader p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-accent mb-2">E-commerce Platform</h3>
        <img src="ecommerce-screenshot.png" alt="E-commerce Platform Screenshot" className="w-full h-auto rounded mb-4" />
        <p className="mb-4">
          Developed a fully functional e-commerce platform using Django for the backend and React for the frontend. 
          The platform supports user authentication, product listings, shopping cart functionality, and payment integration.
        </p>
        <a href="https://github.com/your-username/ecommerce-platform" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          View on GitHub
        </a>
      </li>
      <li className="bg-lightHeader dark:bg-darkHeader p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-accent mb-2">Real-time Chat Application</h3>
        <img src="chat-app-screenshot.png" alt="Chat App Screenshot" className="w-full h-auto rounded mb-4" />
        <p className="mb-4">
          Built a real-time chat application using Node.js, Express, and WebSocket for real-time communication, 
          with MongoDB for data persistence. Users can create accounts, join chat rooms, and send messages in real time.
        </p>
        <a href="https://github.com/your-username/chat-app" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          View on GitHub
        </a>
      </li>
    </ul>
  </div>
</section>

);

export default Projects;
