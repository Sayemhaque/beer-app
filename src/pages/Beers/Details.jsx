import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Details = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const handeleNavigate = () => {
        navigate("/beers")
    }
    const { image_url, name, description, abv, ibu, food_pairing } = data[0]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-lg shadow-md p-4 w-full mx-auto px-5">
            <div className="">
                <img className="w-32 md:w-40 rounded-md hover:scale-105 duration-150" src={image_url} alt="Beer" />
            </div>
            <div>
                <h2 className="text-xl md:text-5xl font-bold mt-2">{name}</h2>
                <p className="text-gray-300 py-4">{description}...</p>
                <div className="mt-4">
                    <span className="bg-gray-200 py-1 px-2 rounded-full text-sm text-gray-700">{abv}% ABV</span>
                    <span className="bg-gray-200 py-1 px-2 rounded-full text-sm text-gray-700 ml-2">{ibu} IBU</span>
                </div>
                <div className="mt-4">
                    <h4 className="text-lg  font-semibold">Food Pairing</h4>
                    <ul className="list-disc list-inside text-gray-800">
                        {food_pairing.map((pairing, index) => (
                            <li className="text-gray-300" key={index}>{pairing}</li>
                        ))}
                    </ul>
                </div>
                <Button
                title="Back"
                styles="px-4 py-2 bg-white hover:bg-gray-200 text-black mt-12"
                onClick={handeleNavigate}
                />
            </div>
        </div>
    );
};

export default Details;