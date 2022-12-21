import './index.css';

const Form = ({ children, title, ...props }) => {
  return (
    <form className="form" onSubmit={e => e.preventDefault()} {...props}>
      <h1>{title}</h1>
      <div>{children}</div>
    </form>
  );
};

export default Form;
