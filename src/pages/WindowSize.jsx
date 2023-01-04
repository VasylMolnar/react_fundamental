import React from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
const WindowSize = () => {
  const { width } = useWindowSize();

  return (
    <section className="section windowSize">
      <div className="container">
        <h1>Use hooks WindowSize</h1>
        {width < 900 ? (
          <>
            <FaMobileAlt />
            <h1>FaMobile</h1>
          </>
        ) : width < 1300 ? (
          <>
            <FaTabletAlt />
            <h1>FaTablet</h1>
          </>
        ) : (
          <>
            <FaLaptop />
            <h1>FaLaptop</h1>
          </>
        )}
      </div>
    </section>
  );
};

export default WindowSize;
