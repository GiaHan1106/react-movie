import React from "react";
import Cardmovie from "../CardMovie/Cardmovie";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import useFetch from "../../useFetch";

const ListMovie = (props) => {
    const listMovie = useFetch(`/movie/${props.resAPI}?page=1&`);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="bg-second">
            <Container>
                <div className="mt-14">
                    <div className="text-center lg:mb-8 mb-1">
                        <h3 className="lg:text-sm text-[12px] text-main font-normal">ONLINE STREAMING</h3>
                        <h2 className="lg:text-4xl text-2xl">{props.title}</h2>
                    </div>
                    <Slider {...settings}>
                        {listMovie.map((item) => (
                            <Cardmovie key={item.id} id={item.id} poster_path={item.poster_path} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></Cardmovie>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    );
};

export default ListMovie;
