import React from "react";
import { Link } from "react-router-dom";

const Cardmovie = (props) => {
    return (
        <Link to={"/detail/" + props.id} className="block my-3 mx-2">
            <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt="" />
            <div>
                <h3 className="md:text-sm text-xs my-2 text-white">{props.title}</h3>
                <div className="flex justify-between text-base">
                    <p className="md:text-sm text-xs text-white">{props.release_date}</p>
                    <div className="flex items-center text-main">
                        <h5 className=" text-sm mr-1">{props.vote_average}</h5>
                        <i className="fa-solid fa-star text-xs"></i>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Cardmovie;
