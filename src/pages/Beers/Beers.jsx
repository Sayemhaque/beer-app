import { useEffect } from "react";
import Card from "./Card";
import { useInfiniteQuery, } from "@tanstack/react-query";
import { getBeers } from "../../utils";




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
    const handleInfiniteScroll = async () => {
        let fetching = false;
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (!fetching && innerHeight + scrollTop + 1 >= scrollHeight) {
            fetching = true;
            if (hasNextPage) {
                await fetchNextPage()
            }
            fetching = false;

        }
    }

    // console.log(data.pages[0].map(page => console.log(page)))
    useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    }, [])

    console.log(data)
    return (
        <div className="bg-black">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 py-12 md:max-w-6xl mx-auto">
                {data?.pages.map(page =>
                    page.map(beer => <Card key={beer.id} beer={beer} />)
                )}
            </div>
        </div>
    );
};

export default Beers;