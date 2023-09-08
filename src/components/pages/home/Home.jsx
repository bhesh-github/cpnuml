import React from "react";
import HomeCarousel from "./homeSlider/HomeCarousel";
import NewsSection from "./news/NewsSection";
import VideosSection from "./videos/VideosSection";
import NoticeSection from "./notice/NoticeSection";
import Contact from "./contact/ContactSection";

const Home = () => {
  return (
    <div className="home-page">
      <div className="contents">
        <div className="carousel-wrapper">
          <HomeCarousel />
        </div>
        <NewsSection />
        <VideosSection />
        <NoticeSection />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
Home.defaultProps = {};
