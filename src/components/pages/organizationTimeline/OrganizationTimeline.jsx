import React from "react";
import Timeline from "../../forAll/Timeline";
import img1 from "../../../images/timelineImages/1200x630wa.png";
import img2 from "../../../images/timelineImages/636a463b9c7e80680e04d3c8jpeg.jpg";
import img3 from "../../../images/timelineImages/63723be19c7e80680e0c95e9jpeg.jpg";
import img4 from "../../../images/timelineImages/ANG2761-1637921434.jpg";
import img5 from "../../../images/timelineImages/opposition5.jpg";
import img6 from "../../../images/timelineImages/nepal-1.jpg";

const OrganizationTimeline = ({ yearsList }) => {
  return (
    <>
      <div className="organization-timeline-page">
        <div className="contents">
          <div className="banner-section">
            <div
              className="org-banner"
              style={{
                backgroundImage: `url(${img1})`,
              }}
            ></div>
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

export default OrganizationTimeline;

OrganizationTimeline.defaultProps = {
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
      image: img4,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 5,
      year: "2055",
      image: img5,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 6,
      year: "2056",
      image: img6,
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
      image: img1,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 13,
      year: "2064",
      image: img2,
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
  ],
};
