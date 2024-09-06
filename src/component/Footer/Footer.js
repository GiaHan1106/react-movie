import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
    return (
        <Container className="py-10">
            <div className="lg:flex justify-between">
                <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                <ul className="lg:flex">
                    <li className="lg:mx-6 lg:my-[0px] my-[20px] text-xs">
                        <a className="font-bold text-white" href="/">
                            HOME
                        </a>
                    </li>
                    <li className="text-xs">
                        <a className="font-bold text-white" href="/movie">
                            MOVIES
                        </a>
                    </li>
                </ul>
            </div>
            <h5 className="md:mt-24 mt-8 text-xs">
                © 2023 <span className="text-main">Filmlane</span>.All Rights Reserved by <span className="text-main">Gia Han</span>
            </h5>
        </Container>
    );
};

export default Footer;
