// src/pages/Home.tsx

import React from 'react';
import './Home.css';
import { MathJax } from 'better-react-mathjax';
// @ts-ignore
import homeContent from '../content/homeContent';

// swiper import 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>{homeContent.title}</h1>
        {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src="/images/slide1.JPG" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <p>
      <MathJax> {homeContent.content} </MathJax> 
      </p>
    </div>
  );
};

export default Home;