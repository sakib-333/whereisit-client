import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import bannerImage from "../assets/banner.png";
import { sliderContent } from "../assets/sliderContent";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        width: "100%",
        // minHeight: "65vh",
        backgroundImage: `url(${bannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "constian",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundBlendMode: "darken",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {sliderContent.map((content) => (
          <SwiperSlide key={content.id} className="text-white">
            <div className="px-4 md:px-12 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] flex flex-col-reverse md:flex-row items-center justify-center">
              <div className="flex flex-col md:flex-1 space-y-2 md:space-y-4 mt-8 sm:mt-0">
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  {content.title1}
                </h1>
                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold">
                  {content.title2}
                </h1>
                <p className="text-xs">{content.description}</p>
                <a href="#about-us" className="btn-primary w-max">
                  Learn More
                </a>
              </div>
              <img
                className="mt-4 hidden md:block md:mt-0 w-40 h-40"
                src={content.image}
                alt="pet"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
