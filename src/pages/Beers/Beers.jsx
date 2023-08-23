import { useEffect, useState } from "react";
import Card from "./Card";


const Beers = () => {
    const [beers, setBeers] = useState([])
    const [page, setPage] = useState(1)

    const getBeers = async () => {
        const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
        const data = await res.json()
        console.log(data)
        setBeers((prevData) => [...prevData, ...data])
    }

    //observe the scroll & change the page
    const handleInfiniteScroll = async () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (innerHeight + scrollTop + 1 >= scrollHeight) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(() => {
        getBeers()
    }, [page])


    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    }, [])

    console.log(beers)
    return (
        <div className="bg-black">
            <div className="grid grid-cols-3 gap-9 py-12 md:max-w-6xl mx-auto">
                {beers?.map(beer => <Card key={beer.id} beer={beer} />)}
            </div>
        </div>
    );
};

export default Beers;