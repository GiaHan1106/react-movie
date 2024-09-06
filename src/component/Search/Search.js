import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cardmovie from "../CardMovie/Cardmovie";
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";

const Search = () => {
    const { slug: keySearch } = useParams();
    console.log(keySearch);
    const [page, setPage] = useState(1);
    const handleIncreasePage = () => {
        setPage(page + 1);
    };
    const listMovie = useFetch(`/search/movie?page=${page}&query=${keySearch}`);
    const [newListMovie, setNewListMovie] = useState([]);
    useEffect(() => {
        setNewListMovie([]);
    }, [keySearch]);
    useEffect(() => {
        setNewListMovie([...newListMovie, ...listMovie]);
    }, [listMovie]);

    return (
        <div className="bg-second py-4">
            <Container>
                <div className="mt-14">
                    <div className="text-center mb-8">
                        <h3 className="text-sm text-main font-normal">ONLINE STREAMING</h3>
                        <h2 className="text-4xl">Search : {keySearch}</h2>
                    </div>
                    <Row>
                        {newListMovie.map((item) => (
                            <Col key={item.id} lg={3}>
                                <Cardmovie poster_path={item.poster_path} id={item.id} title={item.title} release_date={item.release_date} vote_average={item.vote_average}></Cardmovie>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
            {listMovie.length > 20 && (
                <button className="bg-[#E2D603] text-white p-3 text-sm font-bold rounded-[60px] block m-auto my-4" onClick={handleIncreasePage}>
                    <i className="fa-solid fa-play mr-2"></i> SHOW MORE
                </button>
            )}
            {listMovie.length === 0 && <h2 className="text-center">No Results</h2>}
        </div>
    );
};

export default Search;
