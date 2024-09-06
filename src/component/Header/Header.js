import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";

const Header = () => {
    const navigate = useNavigate();
    const typeOfMovie = useFetch(`/genre/movie/list?`);
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const handleSearch = (event) => {
        if (event.key === "Enter") {
            navigate("/search/" + event.target.value);
            event.target.value = "";
        }
    };

    return (
        <Container>
            <div className="flex justify-between items-center py-4">
                <img className="w-[100px] lg:w-[200px] " src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                <ul className="items-center hidden lg:flex">
                    <li>
                        <NavLink className="text-main font-bold text-xs mr-12" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-main font-bold text-xs" to="/movie">
                            Movie
                        </NavLink>
                    </li>
                    <li className="relative text-main font-bold text-xs ml-12 group">
                        Genres
                        <div className="absolute z-30 lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-500 cursor-pointer top-[100px] -right-[70px] group-hover:top-[15px] ">
                            {typeOfMovie.genres &&
                                typeOfMovie.genres.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/movie/${item.id}`}
                                        className="text-xs block bg-black shadow-black shadow-md text-[#fff] transition-all duration-500 cursor-pointer p-2 hover:text-yellow-400"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                        </div>
                    </li>
                </ul>
                <div className="relative">
                    <input
                        className="border-[1.5px] border-main bg-transparent py-2 px-3 w-[190px] sm:w-[260px] md:w-[400px] rounded-full placeholder:text-xs"
                        type="text"
                        placeholder="Search for a movie"
                        onKeyDown={handleSearch}
                    />
                    <div className="absolute top-2/4 right-6 -translate-y-2/4">
                        <i className="fa-solid fa-magnifying-glass text-main"></i>
                    </div>
                </div>
                <div className="relative block lg:hidden">
                    <i className="fa-solid fa-bars-staggered text-yellow-300" onClick={() => setShowMenu(!showMenu)}></i>
                    <ul
                        className={`absolute z-50 top-[60px] -right-[30px] transition-all duration-500 cursor-pointer ${showMenu && showMenu === true ? "opacity-100 visible" : "opacity-0 invisible"}`}
                    >
                        <li className="bg-black shadow-black shadow-lg text-white px-5 py-2">
                            <NavLink className="text-main font-bold text-xs" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li className="bg-black shadow-black shadow-lg text-white px-5 py-2 my-3">
                            <NavLink className="text-main font-bold text-xs" to="/movie">
                                MOVIE
                            </NavLink>
                        </li>
                        <li className="relative bg-black shadow-black shadow-lg text-white px-5 py-2 text-main font-bold text-xs" onClick={() => setShowSubMenu(!showSubMenu)}>
                            GENRES
                            <div
                                className={`absolute z-30  transition-all duration-500 cursor-pointer  top-[160%] right-[100%] ${
                                    showSubMenu === true ? "opacity-100 visiable" : "opacity-0 invisiable"
                                }`}
                            >
                                {typeOfMovie.genres &&
                                    typeOfMovie.genres.map((item) => (
                                        <Link
                                            key={item.id}
                                            to={`/movie/${item.id}`}
                                            className="text-xs block bg-black shadow-black my-3 shadow-md text-[#fff] transition-all duration-500 cursor-pointer p-2 hover:text-yellow-400"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Header;
