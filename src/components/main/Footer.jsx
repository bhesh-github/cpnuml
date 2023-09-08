import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import bottomBar from "../../images/footer/bottombar.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contents">
        <div className="social-icons">
          <div className="icons-wrapper">
            <RiFacebookFill className="icon" />
          </div>
          <div className="icons-wrapper">
            <BsTwitter className="icon" />
          </div>
          <div className="icons-wrapper">
            <BsYoutube className="icon" />
          </div>
        </div>
        <div className="bar-wrapper">
          <div className="text">
            नेकपा (एमाले) केन्द्रीय प्रचार तथा प्रकाशन विभागद्वारा सञ्चालित
          </div>
          <div className="divider-line"></div>
          <div className="text">
            च्यासल, ललितपुर, नेपाल, फोन: +९७७ १ ५९०८११४, ५९०८२१४, ५९०८३१४, पो.
            ब.नं: ५४७१, इमेल: partyhq@cpnuml.org, umlpublicitydept@cpnuml.org
          </div>
        </div>
      </div>
      <img src={bottomBar} alt="" className="bottom-bar-img" />
    </div>
  );
};

export default Footer;
