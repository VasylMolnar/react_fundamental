import { forwardRef, React } from 'react';
import './index.css';

const Textarea = forwardRef(({ ...props }, ref) => {
  return <textarea ref={ref} {...props} className="textarea" />;
});

export default Textarea;
