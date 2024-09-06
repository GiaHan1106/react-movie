import { useEffect, useState } from "react";

const useFetch = (linkApi) => {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        const fetchNowPlayingMovie = async () => {
            const res = await fetch("https://api.themoviedb.org/3" + linkApi + "api_key=e9e9d8da18ae29fc430845952232787c");
            const data = await res.json();
            setListMovie(data.results ? data.results : data);
        };
        fetchNowPlayingMovie();
    }, [linkApi]);
    return listMovie;
};

export default useFetch;
