export const getBeers = async (page = 1) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
    return res.json()
}
