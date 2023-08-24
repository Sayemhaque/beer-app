/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Card from "./Card";
import { useInfiniteQuery, } from "@tanstack/react-query";
import Navbar from "../../components/Navbar";


const getBeers = async (page = 1) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
    return res.json()
}


const Beers = () => {
    const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["beers"],
        queryFn: ({ pageParam = 1 }) => getBeers(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            const maxPage = 342 / 9
            const nextPage = allPages.length + 1;
            return nextPage <= maxPage ? nextPage : undefined;
        }
    })

    //observe the scroll & change the page
    useEffect(() => {
        let fetching = false;
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } =
                event.target.scrollingElement;

            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1) {
                fetching = true;
                if (hasNextPage) await fetchNextPage();
                fetching = false;
            }
        };

        document.addEventListener("scroll", onScroll);
        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [data]);


    console.log(data)
    return (
        <div className="bg-gray-300">
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-8 md:max-w-6xl mx-auto">
                {data?.pages.map(page =>
                    page.map(beer => <Card key={beer.id} beer={beer} />)
                )}
            </div>
        </div>
    );
};

export default Beers;