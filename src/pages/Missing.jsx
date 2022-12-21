import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className="missing">
      <section className="section">
        <div className="container">
          <h2>Page Not Found</h2>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Missing;
