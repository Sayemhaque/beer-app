/* eslint-disable react/prop-types */
const Button = ({ type, title, styles, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles}  font-bold rounded  w-full  focus:outline-none focus:ring focus:border-blue-300`}
    >
      {title}
    </button>
  );
};

export default Button;