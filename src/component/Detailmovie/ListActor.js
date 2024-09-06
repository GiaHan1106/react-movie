import React from "react";

const ListActor = (props) => {
    return (
        <div className="mr-3">
            <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w300${props.img}`} alt="" />
            <div>
                <h3 className="text-sm my-2 text-white">{props.name}</h3>
                <p className="text-sm text-white">{props.character}</p>
            </div>
        </div>
    );
};

export default ListActor;
