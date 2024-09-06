import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import useFetch from "../../useFetch";
import ListActor from "./ListActor";
const DetailMovie = () => {
    const { slug: detail } = useParams();
    const detailMovie = useFetch(`/movie/${detail}?`);
    const tralierMovie = useFetch(`/movie/${detail}/videos?`);
    const actorsMovie = useFetch(`/movie/${detail}/credits?`);
    const [tralier, setTralier] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        const keyMovieTralier = tralierMovie.find((item) => item.type === "Trailer");
        setTralier(keyMovieTralier);
    };
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
    console.log(actorsMovie);
    return (
        <div className="flex gap-6 bg-second px-5 py-4 md:px-20 md:py-12">
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`} alt="" />
                    </Col>
                    <Col lg={8}>
                        <div className="mb-[40px] lg:mb-[0px]">
                            <h2 className="text-lg font-bold my-[20px] lg:my-[0px]">{detailMovie.original_title}</h2>
                            <div className="flex items-center gap-1 my-2">
                                <h5 className="text-[11px]">{detailMovie.release_date}</h5>
                                <h4 className="text-[11px]">{detailMovie.genres && detailMovie.genres.map((item) => item.name).join(",")}</h4>
                                <h5 className="text-[11px]">
                                    <i className="fa-regular fa-clock text-yellow-300"></i> <span>116 min</span>
                                </h5>
                            </div>
                            <div className="flex my-4 gap-3 items-center">
                                <p className="text-[12px] text-yellow-300 border-2 border-yellow-300 h-[50px] w-[50px] rounded-[50%] flex justify-center items-center">{detailMovie.vote_average}%</p>
                                <h4 className="text-[12px]">user score</h4>
                                <button className="text-[12px] border-2 border-white p-1" onClick={handleShow}>
                                    <i className="fa-solid fa-play mr-2"></i>Play trailer
                                </button>
                            </div>
                            <h4 className="text-xs">Can You Bury Your Past?</h4> <h3 className="text-sm my-2 font-bold">Overview</h3> <p className="text-xs"> {detailMovie.overview} </p>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-black">Tralier</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${tralier.key}`}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <div className="text-center mt-0 md:mt-10 mb-8">
                        <h3 className="lg:text-sm text-[12px] text-main font-normal">ONLINE STREAMING</h3>
                        <h2 className="text-2xl lgtext-4xl">Top Billed Cast</h2>
                    </div>
                    <Slider {...settings}>
                        {actorsMovie.cast && actorsMovie.cast.map((actors) => <ListActor img={actors.profile_path} name={actors.name} character={actors.character}></ListActor>)}
                    </Slider>
                </Row>
            </Container>
        </div>
    );
};

export default DetailMovie;
