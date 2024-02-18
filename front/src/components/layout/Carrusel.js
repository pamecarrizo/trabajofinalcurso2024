import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import img1 from "../assets/img/imgtienda/labiales/swatch summer coral.jpg";
import img2 from "../assets/img/imgtienda/piel/polvo translucido 2.jpeg";
import img3 from "../assets/img/imgtienda/ojos/swatch pink lemonade.jpg";
import img4 from "../assets/img/imgtienda/piel/rubor liquido 2.jpg";
import img5 from "../assets/img/imgtienda/labiales/swatch lipoil.jpeg";
import img6 from "../assets/img/imgtienda/ojos/delineador game on 2.jpg";
import img7 from "../assets/img/imgtienda/ojos/paleta ready for 2.jpg";

export const Carrusel = () => {
  return (
    <body>
      <div className="conteiner">
      <h3 className="heading">Productos recomendados</h3>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        className="swiper_conteiner"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          320: {slidesPerView:1 , widht:320},
          760:{slidesPerView:3 ,widht:760},
          994:{slidesPerView:4, widht:994}
      }}
        
        coverflowEffect={{
          rotate: 0,
          strech: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el:".swiper-pagination", clackable:true}}
        
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay,EffectCoverflow, Navigation, Pagination]}
      >
        <SwiperSlide className="redimencionar">
          <img src={img1} alt="img1" />
          <p>Tinta para Labios</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img2} alt="img2"/>
          <p>Polvo Translucido Feels</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img3} alt="img3"/>
          <p>Paleta Pink Lemonade</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img4} alt="img4"/>
          <p>Rubores Cheek to Cheek</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img5} alt="img5"/>
          <p>Lip Oil</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img6} alt="img6"/>
          <p>Delineadores Líquidos Game On</p>
        </SwiperSlide>
        <SwiperSlide className="redimencionar">
          <img src={img7} alt="img7"/>
          <p>Paleta Ready For</p>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev"/>
          <div className="swiper-button-next"/>
          <div className="swiper-pagination"/>
        </div>
      </Swiper>
      </div>
    </body>
  );
};
