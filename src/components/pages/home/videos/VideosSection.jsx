import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const VideosSection = ({ videos }) => {
  const navigate = useNavigate();
  return (
    <div className="videos-section">
      <div className="contents">
        <div className="heading-wrapper">
          <div className="title">Videos</div>
          <div
            className="see-more"
            onClick={() => {
              navigate("/videos");
            }}
          >
            See more
          </div>
        </div>
        <div className="videos-wrapper">
          {videos &&
            videos.slice(0, 2).map((item, idx) => (
              <div key={idx} className="video-card">
                <ReactPlayer className="react-player" url={item} width="100%" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideosSection;

VideosSection.defaultProps = {
  videos: [
    "https://www.youtube.com/watch?v=tV1KrolNpiY",
    "https://www.youtube.com/watch?v=ZOXFE_IOSbI",
    "https://www.youtube.com/watch?v=l7L1pgvUGUA",
    "https://www.youtube.com/watch?v=iG-uAez8lyg",
  ],
};
