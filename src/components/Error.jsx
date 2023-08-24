/* eslint-disable react/prop-types */

const Error = ({errorMsg}) => {
    return (
        <div>
            <p className="text-red-500">{errorMsg}</p>
        </div>
    );
};

export default Error;