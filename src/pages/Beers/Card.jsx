/* eslint-disable react/prop-types */

import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ beer }) => {
    return (
        <Link to={`/details/${beer.id}`}>
        <div  className="h-full bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-lg shadow-md p-4 w-full mx-auto transition-transform transform hover:scale-105">
            <img className="w-12 mx-auto h-60 rounded-md" src={beer.image_url} alt="Beer" />
            <h2 className="text-xl font-semibold mt-2">{beer.name}</h2>
            <p className="text-gray-300 mb-2">{beer.tagline}</p>
            <p className="text-gray-300">{beer.description?.substring(0,100)}...</p>
            <div className="mt-4">
                <span className="bg-gray-200 py-1 px-2 rounded-full text-sm text-gray-700">{beer.abv}% ABV</span>
                <span className="bg-gray-200 py-1 px-2 rounded-full text-sm text-gray-700 ml-2">{beer.ibu} IBU</span>
            </div> 
            <div className="mt-4">
                <h4 className="text-lg  font-semibold">Food Pairing</h4>
                <ul className="list-disc list-inside text-gray-800">
                    {beer.food_pairing.map((pairing, index) => (
                        <li className="text-gray-300" key={index}>{pairing}</li>
                    ))}
                </ul>
            </div>
        </div>

        </Link>
    );
};

export default Card;