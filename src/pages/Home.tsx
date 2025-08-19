// src/pages/Home.tsx

import React, { useState, useEffect } from "react";
import './Home.css';
import { MathJax } from 'better-react-mathjax';
import Markdown from "markdown-to-jsx";

// swiper import 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Home: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  useEffect(() => {
    fetch("/website-posts/content/Homepage.md") // Load the Markdown file
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load homepage content");
        }
        return response.text();
      })
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error loading homepage:", error));
  }, []);

  return (
    <div className="home">
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
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <MathJax>
        <div className="p">
          <Markdown>{markdown}</Markdown>
        </div>
      </MathJax>
    </div>
  );
};

export default Home;