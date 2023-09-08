import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { RxCross1 } from "react-icons/rx";

const Videos = ({ videos }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [activeVideo, setActiveVideo] = useState(0);

  const [sliceNum, setSliceNum] = useState(9);

  const handleInfiniteScroll = async () => {
    try {
      if (
        document.getElementById("cards_wrapper").getBoundingClientRect()
          .bottom <=
        window.innerHeight + 100
      ) {
        setSliceNum((prev) => prev + prev);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  }, []);

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
          <div className="react-player-wrapper">
            <ReactPlayer
              className="react-player"
              url={activeVideo && activeVideo}
              width="100%"
              controls={true}
            />
          </div>
        </div>
      )}
      <div className="videos">
        <div className="contents">
          <div className="heading-wrapper">
            <div className="title">Videos</div>
          </div>
          <div className="videos-wrapper" id="cards_wrapper">
            {videos &&
              videos.slice(0, sliceNum).map((item, idx) => (
                <div
                  key={idx}
                  className="video-card"
                  onClick={() => {
                    setIsOverlay(true);
                    setActiveVideo(item);
                  }}
                >
                  <ReactPlayer
                    className="react-player"
                    controls={false}
                    url={item}
                    width="100%"
                  />
                  <div className="player-overlay"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;

Videos.defaultProps = {
  videos: [
    "https://www.youtube.com/watch?v=tV1KrolNpiY",
    "https://www.youtube.com/watch?v=ZOXFE_IOSbI",
    "https://www.youtube.com/watch?v=l7L1pgvUGUA",
    "https://www.youtube.com/watch?v=iG-uAez8lyg",
    "https://www.youtube.com/watch?v=tV1KrolNpiY",
    "https://www.youtube.com/watch?v=ZOXFE_IOSbI",
    "https://www.youtube.com/watch?v=l7L1pgvUGUA",
    "https://www.youtube.com/watch?v=iG-uAez8lyg",
    "https://www.youtube.com/watch?v=tV1KrolNpiY",
    "https://www.youtube.com/watch?v=ZOXFE_IOSbI",
    "https://www.youtube.com/watch?v=l7L1pgvUGUA",
    "https://www.youtube.com/watch?v=iG-uAez8lyg",
    "https://www.youtube.com/watch?v=tV1KrolNpiY",
    "https://www.youtube.com/watch?v=ZOXFE_IOSbI",
    "https://www.youtube.com/watch?v=l7L1pgvUGUA",
  ],
};
