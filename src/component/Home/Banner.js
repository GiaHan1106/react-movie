import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Banner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="bg-black">
            <Slider {...settings}>
                <div>
                    <img src="https://react-film-clone.vercel.app/img/banner_1.png" alt="" />
                </div>
                <div>
                    <img src="https://react-film-clone.vercel.app/img/banner_2.png" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
