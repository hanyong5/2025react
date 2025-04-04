import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SwiperComp() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{ ...swiperView }}>
        <h3>안녕하세요</h3>
      </SwiperSlide>
      <SwiperSlide style={{ ...swiperView }}>
        <h3>홈페이지를 찾아주셔서 감사합니다.</h3>
      </SwiperSlide>
      <SwiperSlide style={{ ...swiperView }}>
        <h3>항상 최선을 다하겠습니다.</h3>
      </SwiperSlide>
      <SwiperSlide style={{ ...swiperView }}>
        <h3>고객감동</h3>
      </SwiperSlide>
    </Swiper>
  );
}
const swiperView = {
  background: "skyblue",
  height: "200px",
  display: "flex",
  "justify-content": "center",
  alignItems: "center",
};
export default SwiperComp;
