import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import ReactResponsiveCarousel from "../../forAll/ReactResponsiveCarousel";

const Gallery = ({ images }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [currentImageId, setCurrentImageId] = useState();

  isOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <>
      {isOverlay && (
        <div className="overlay-wrapper">
          <div
            className="overlay"
            onClick={() => {
              setIsOverlay(false);
            }}
          ></div>
          <RxCross1
            className="close-icon"
            onClick={() => {
              setIsOverlay(false);
            }}
          />
          <div className="carousel-comp-wrapper">
            <ReactResponsiveCarousel
              className="carousel-comp"
              images={images}
              currentImageId={currentImageId}
            />
          </div>
        </div>
      )}
      <div className="gallery-page">
        <div className="contents">
          <div className="heading-wrapper">
            <div className="title">Gallery</div>
          </div>
          <div className="gallery-wrapper">
            {images &&
              images.map((item, idx) => {
                return (
                  <CardActionArea
                    key={idx}
                    onClick={() => {
                      setIsOverlay(true);
                      setCurrentImageId(idx);
                    }}
                  >
                    <Card
                      sx={{ display: "flex" }}
                      className="square-notice-card"
                    >
                      <img src={item} alt="" className="card-img" />
                    </Card>
                  </CardActionArea>
                );
              })}
          </div>
          {/* <ReactJsPagination /> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;

Gallery.defaultProps = {
  images: [
    "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/2022111011110/636ccc849c7e80680e08bc29jpeg.jpg",
    "https://i0.wp.com/www.peoplesreview.com.np/wp-content/uploads/2020/03/oli-nepal-prachanda-madhav-kumar-nepal-kp-oli-puspakamaldahal.jpg?resize=961%2C614&ssl=1",
    "https://myrepublica.nagariknetwork.com/uploads/media/Kp-Oli_20191031173844.jpg",
    "https://myrepublica.nagariknetwork.com/uploads/media/2016/October/Prime%20minister%20KP%20Oli.jpg",
    "https://imgnew.outlookindia.com/public/uploads/articles/2020/7/14/Nepal-PM-Oli_20200708_350_630.jpg",
    "https://th-i.thgim.com/public/news/international/1s19rk/article33924590.ece/alternates/FREE_1200/vbk-sharma-oli-gettyimages",
  ],
};
