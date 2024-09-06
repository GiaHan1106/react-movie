import React from "react";
import Banner from "./Banner";
import ListMovie from "./ListMovie";

const Home = () => {
    const arrayMovie = [
        {
            id: 1,
            title: "Now Playing",
            resAPI: "now_playing",
        },
        {
            id: 2,
            title: "Up Comming",
            resAPI: "upcoming",
        },
        {
            id: 3,
            title: "Top Rated",
            resAPI: "top_rated",
        },
    ];
    return (
        <div>
            <Banner></Banner>
            <div className="bg-second py-2">
                {arrayMovie.map((item) => (
                    <ListMovie key={item.id} title={item.title} resAPI={item.resAPI}></ListMovie>
                ))}
            </div>
        </div>
    );
};

export default Home;
