"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './styleSwiper.css';

import europa from "../../../public/illustrations/slides/paris.jpg";
import americaNorte from "../../../public/illustrations/slides/americaN.jpg";
import americaSul from "../../../public/illustrations/slides/americaS.jpg";
import asia from "../../../public/illustrations/slides/asia.jpg";
import africa from "../../../public/illustrations/slides/africa.jpg";
import oceania from "../../../public/illustrations/slides/oceania.jpg";
import SwiperItem from "./SwiperItem";
import { CSSProperties } from "react";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      style={
        {
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-size": "16px",
        } as CSSProperties
      }
    >
      <SwiperSlide>
        <SwiperItem
          image={europa?.src}
          title={"Europa"}
          text={"O continente mais antigo"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          image={americaNorte?.src}
          title={"América do Norte"}
          text={"Berço da inovação e lar de horizontes infinitos"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          image={americaSul?.src}
          title={"América do Sul"}
          text={"Lar de uma mistura vibrante de culturas e geografias"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          image={asia?.src}
          title={"Ásia"}
          text={"Maior continente, onde tradição e modernidade se entrelaçam harmoniosamente."}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          image={africa?.src}
          title={"África"}
          text={"Berço da Humanidade, rica em diversidade cultural e paisagens selvagens."}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperItem
          image={oceania?.src}
          title={"Oceania"}
          text={"Ilhas paradisíacas e vastos territórios selvagens no Pacífico."}
        />
      </SwiperSlide>
    </Swiper>
  );
};
