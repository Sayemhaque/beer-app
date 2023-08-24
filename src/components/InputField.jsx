/* eslint-disable react/prop-types */
const InputField = ({type,name,placeholder,label}) => {
    return (
           <div className="mb-4">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
             {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div> 
    );
};

export default InputField;