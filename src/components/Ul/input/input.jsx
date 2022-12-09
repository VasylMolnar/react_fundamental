import { forwardRef, React } from 'react';
import './index.css';

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <>
      <input ref={ref} {...props} className="input" />
    </>
  );
});

export default Input;
