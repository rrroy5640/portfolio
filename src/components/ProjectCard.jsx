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
    //autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
  };

  return (
    <div className=" p-14 max-w-sm md:max-w-md lg:max-w-md mx-auto items-center">
      <Slider {...settings}>
        {projects.map((project, index) => {
          return (
            <div key={index} className="rounded-lg w-96 group relative">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className=" block max-w-lg w-full"
              >
                <img
                  src={project.image}
                  className="rounded-lg w-96 h-full object-contain min-w-full"
                />
              </a>

              <div className="px-4 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
                <p className="text-lg text-white">{project.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
