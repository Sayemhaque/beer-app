/* eslint-disable react/prop-types */
const Button = ({type,title,styles}) => {
    return (
        <button
        type={type}
        className={`${styles} bg-blue-500 text-white rounded  w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300`}
      >
        {title}
      </button>
    );
};

export default Button;