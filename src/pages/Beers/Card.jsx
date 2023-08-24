/* eslint-disable react/prop-types */

import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ beer }) => {
    return (
       <section className="px-5">
         <Link to={`/details/${beer.id}`}>
        <div  className="h-full w-full bg-gradient-to-b from-blue-400 to-purple-700 text-white rounded-lg  p-4 shadow-lg mx-auto transition-transform transform hover:scale-105">
            <img className="w-12 mx-auto h-60 rounded-md" src={beer.image_url} alt="Beer" />
            <h2 className="text-xl font-semibold mt-2">{beer.name}</h2>
            <p className="text-gray-300 mb-2">{beer.tagline}</p>
            <p className="text-gray-300">{beer.description?.substring(0,100)}...</p>
        </div>

        </Link>
       </section>
    );
};

export default Card;