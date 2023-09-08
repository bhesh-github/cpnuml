import React from "react";
import Timeline from "../../forAll/Timeline";

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
      image:
        "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 1,
      year: "2051",
      image:
        "https://images.pexels.com/photos/17877123/pexels-photo-17877123/free-photo-of-cames-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 2,
      year: "2052",
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 3,
      year: "2053",
      image:
        "https://images.pexels.com/photos/2832077/pexels-photo-2832077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 4,
      year: "2054",
      image:
        "https://images.pexels.com/photos/70846/netherlands-landscape-sky-clouds-70846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 5,
      year: "2055",
      image:
        "https://images.pexels.com/photos/37861/elephant-baby-elephant-animal-wilderness-37861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 6,
      year: "2056",
      image:
        "https://images.pexels.com/photos/7001092/pexels-photo-7001092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 7,
      year: "2057",
      image:
        "https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 8,
      year: "2058",
      image:
        "https://images.pexels.com/photos/751673/pexels-photo-751673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 9,
      year: "2059",
      image:
        "https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 9,
      year: "2060",
      image:
        "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 10,
      year: "2061",
      image:
        "https://images.pexels.com/photos/63330/geese-water-birds-waterfowl-63330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 11,
      year: "2062",
      image:
        "https://images.pexels.com/photos/54462/gulls-bird-fly-coast-54462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 12,
      year: "2063",
      image:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli. Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
    {
      id: 13,
      year: "2064",
      image:
        "https://images.pexels.com/photos/2091074/pexels-photo-2091074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      brief:
        "Born in Terhathum District, Eastern Nepal; as the eldest son of father Mohan Prasad and Mother Madhumaya Oli",
    },
  ],
};
