import React from "react";
import FirstSlider from "./FirstSlider";
import SecondSlider from "./SecondSlider";
import ThirdSlider from "./ThirdSlider";
import FourthSlider from "./FourthSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
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
        <SwiperSlide>
          <FirstSlider />
        </SwiperSlide>

        <SwiperSlide>
          <SecondSlider />
        </SwiperSlide>

        <SwiperSlide>
          <ThirdSlider />
        </SwiperSlide>

        <SwiperSlide>
          <FourthSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
