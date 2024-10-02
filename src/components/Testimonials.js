import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="py-12 bg-darkBackground dark:bg-lightBackground text-white dark:text-black">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">What People Say</h2>
      <div className="space-y-8">
        <div className="bg-darkHeader dark:bg-lightHeader p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">"A highly skilled software engineer with an excellent grasp of both backend and frontend development."</p>
          <p className="text-accent font-bold">- Jane Doe, Project Manager</p>
        </div>
        <div className="bg-darkHeader dark:bg-lightHeader p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">"Delivered a top-notch project on time with great attention to detail."</p>
          <p className="text-accent font-bold">- John Smith, Client</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
