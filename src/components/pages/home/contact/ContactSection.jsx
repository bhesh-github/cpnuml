import React from "react";
import { HiPhone } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";

import { IoIosMail } from "react-icons/io";

const ContactSection = ({ infos }) => {
  const infosIcon = {
    phone: <HiPhone className="info-icon" />,
    location: <TiLocation className="info-icon" />,
    mail: <IoIosMail className="info-icon" />,
  };

  return (
    <div className="contact-section">
      <div className="contents">
        <div className="heading-wrapper">
          <div className="title">Contact</div>
        </div>
        <div className="cards-outer">
          <div className="info-cards">
            {infos &&
              infos.map((item) => {
                const { id, title, info, iconType } = item;
                const cIcon = infosIcon[iconType];
                return (
                  <div key={id} className="info-card">
                    {cIcon && cIcon}
                    <div className="title">{title}</div>
                    <div className="info">{info}</div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d220.73969352483988!2d85.34453301256076!3d27.722377334102603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb19564c17cd0f%3A0xbb01f1339d180431!2sP8CV%2BWVF%2C%20Road%2C%20Kathmandu%2044600!3m2!1d27.7223926!2d85.34458149999999!5e0!3m2!1sen!2snp!4v1693201434565!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
ContactSection.defaultProps = {
  infos: [
    {
      id: 0,
      title: "Number",
      iconType: "phone",
      info: "+977 9246582068",
    },
    {
      id: 1,
      title: "Email",
      iconType: "mail",
      info: "cpnuml@example.com",
    },
    {
      id: 2,
      title: "Address",
      iconType: "location",
      info: "Nepal",
    },
  ],
};
