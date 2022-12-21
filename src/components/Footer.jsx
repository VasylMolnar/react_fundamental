import React from 'react';

const Footer = () => {
  const today = new Date();

  return (
    <footer className="Footer">
      <div className="container">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
