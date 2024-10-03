import React from 'react';

const Testimonials = () => (
  <section id="testimonials" className="py-12 bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">What People Say</h2>
      <div className="space-y-8">
        <div className="bg-lightkHeader dark:bg-darkHeader p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">"A highly skilled software engineer with an excellent grasp of both backend and frontend development."</p>
          <p className="text-accent font-bold">- Vikas Pandey, Content Creator</p>
        </div>
        <div className="bg-lightHeader dark:bg-darkHeader p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">"Delivered a top-notch project on time with great attention to detail."</p>
          <p className="text-accent font-bold">- Daksh Dobhal, Client</p>
        </div>
        <div className="bg-lightHeader dark:bg-darkHeader p-6 rounded-lg shadow-md">
          <p className="text-lg mb-4">"On time delivery of project with tech support for the agreed upon time period. Five start service."</p>
          <p className="text-accent font-bold">- Ashutosh Pandey, Client</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
