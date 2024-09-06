import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardmovie from "../CardMovie/Cardmovie";
import useFetch from "../../useFetch";
import { useParams, useNavigate } from "react-router-dom";

const ListMovie = () => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const handleIncreasePage = () => {
        setPage(page + 1);
    };
    const listMovie = useFetch(`/discover/movie?page=${page}&`);

    const [newListMovie, setNewListMovie] = useState([]);
    useEffect(() => {
        if (!idGenres) {
            setNewListMovie([...newListMovie, ...listMovie]);
        }
    }, [listMovie]);

    useEffect(() => {
        setNewListMovie(listMovie);
        setNameOfMovie("List Movie");
    }, [navigate]);

    const { slug: idGenres } = useParams();
    const typeOfMovie = useFetch(`/discover/movie?with_genres=${idGenres}&page=1&`);
    const nameMovie = useFetch(`/genre/movie/list?`);
    const [nameOfmovie, setNameOfMovie] = useState("List Movie");
    useEffect(() => {
        if (nameMovie.genres && idGenres) {
            const findNameMovie = nameMovie.genres.find((item) => item.id === Number(idGenres));
            setNameOfMovie(findNameMovie.name);
        }
    }, [nameMovie, idGenres]);
    useEffect(() => {
        if (idGenres) {
            setNewListMovie(typeOfMovie);
        }
    }, [idGenres, typeOfMovie]);

    //CHUA XU LY DUOC -> giai phap co the goi custom hook trong 1 function
    // useEffect(() => {
    //     const typeMovie = useFetch(`/discover/movie?&with_genres=${activeID}&page=${page}`);
    // }, []);
    return (
        <div className="bg-second py-4">
            <Container>
                <div className="lg:mt-14">
                    <div className="text-center mb-2 lg:mb-8">
                        <h3 className="text-sm text-main font-normal">ONLINE STREAMING</h3>
                        <h2 className="text-2xl lg:text-4xl">{nameOfmovie}</h2>
                    </div>
                    <Row>
                        {newListMovie.map((item) => (
                            <Col key={item.id} xs={6} lg={3}>
                                <Cardmovie poster_path={item.poster_path} id={item.id} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></Cardmovie>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            <button className="bg-[#E2D603] text-white p-3 text-sm font-bold rounded-[60px] block m-auto my-4" onClick={handleIncreasePage}>
                <i className="fa-solid fa-play mr-2"></i> SHOW MORE
            </button>
        </div>
    );
};

export default ListMovie;
