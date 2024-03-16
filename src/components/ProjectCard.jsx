import { useState } from "react";
import projects from "../projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectCard = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className=" p-14 max-w-sm md:max-w-md lg:max-w-md mx-auto items-center">
      <Slider {...settings}>
        {
            projects.map((project, index) => {
                return (
                    <div key={index} className="w-full">
                        <img src={project.image} alt={project.title} className="rounded-lg w-full h-96 object-cover" />
                        <div className="px-4 py-2">
                            <h1 className="text-3xl font-bold text-violet-400">{project.title}</h1>
                            <p className="text-lg text-violet-400">{project.description}</p>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <button className="mt-2 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                                    View Project
                                </button>
                            </a>
                        </div>
                    </div>
                );
            })
        }
      </Slider>
    </div>
  );
};