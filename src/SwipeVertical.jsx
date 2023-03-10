import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeScreen from "./Screen1/HomeScreen/HomeScreen";

// CSS
import "swiper/css";

function SwipeVertical() {
  return (
    <Swiper>
      <SwiperSlide direction="vertical">
        <HomeScreen />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwipeVertical;
