import React from "react";
import Timeline from "../../forAll/Timeline";
import img1 from "../../../images/memberTimelineImages/img1.jpg";
import img2 from "../../../images/memberTimelineImages/img2.jpg";
import img3 from "../../../images/memberTimelineImages/img3.jpg";
import img4 from "../../../images/memberTimelineImages/img4.jpg";
import img5 from "../../../images/memberTimelineImages/img5.jpg";
import img6 from "../../../images/memberTimelineImages/img6.webp";
import img7 from "../../../images/memberTimelineImages/img7.jpg";

const MemberTimeline = ({ yearsList }) => {
  return (
    <>
      <div className="member-timeline-page">
        <div className="contents">
          <div className="banner-section">
            <div className="member-banner">
              <img
                src="https://newsin.asia/wp-content/uploads/2016/07/kp-oli.jpg"
                alt=""
                className="member-img"
              />
              <div className="member-name">KP Sharma Oli</div>
            </div>
          </div>
          <div className="timeline-section">
            <Timeline yearsList={yearsList} />
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </>
  );
};

export default MemberTimeline;

MemberTimeline.defaultProps = {
  yearsList: [
    {
      id: 0,
      year: "2050",
      image: img1,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 1,
      year: "2051",
      image: img2,

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 2,
      year: "2052",
      image: img3,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 3,
      year: "2053",
      image: img4,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 4,
      year: "2054",
      image: img5,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 5,
      year: "2055",
      image: img6,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 6,
      year: "2056",
      image: img7,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 7,
      year: "2057",
      image: img1,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 8,
      year: "2058",
      image: img2,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 9,
      year: "2059",
      image: img3,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 9,
      year: "2060",
      image: img4,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 10,
      year: "2061",
      image: img5,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 11,
      year: "2062",
      image: img6,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 12,
      year: "2063",
      image: img7,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 13,
      year: "2064",
      image: img1,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
  ],
};
