import React from 'react';

const Button = React.forwardRef(({ children, ref, ...props }) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
export default Button;
