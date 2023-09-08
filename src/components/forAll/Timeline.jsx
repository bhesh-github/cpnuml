import React, { useState, useEffect, useRef, createRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const Timeline = ({ yearsList }) => {
  const [isOverlay, setIsOverlay] = useState(false);

  const [selectedYear, setSelectedYear] = useState(yearsList[0]);
  const yearRefs = useRef([]);

  useEffect(() => {
    yearRefs.current = Array(yearsList.length)
      .fill(null)
      .map((_, index) => yearRefs.current[index] || createRef());
  }, [yearsList.length]);

  useEffect(() => {
    yearRefs.current.forEach((yearRef, index) => {
      yearRef.style.top = `${index * 100}px`; // Adjust this as needed
    });

    const handleScroll = () => {
      let selectedIndex = -1;
      yearRefs.current.forEach((yearRef, index) => {
        if (yearRef) {
          const yearTop = yearRef.getBoundingClientRect().top;
          const yearBottom = yearTop + yearRef.offsetHeight;
          const windowHeight = window.innerHeight;
          const windowCenter = windowHeight / 2;
          if (window.innerWidth >= 1000) {
            if (yearTop <= windowCenter && yearBottom >= windowCenter) {
              selectedIndex = index;
            }
          } else {
            if (yearTop <= windowCenter / 1 && yearBottom >= windowCenter / 1) {
              selectedIndex = index;
            }
          }
        }
      });
      setSelectedYear(
        selectedIndex !== -1 ? yearsList[selectedIndex] : selectedYear
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yearsList]);

  const handleDotClick = (index) => {
    setSelectedYear(yearsList[index]);
    // Scroll to center the selected year in the window
    const yearTop = yearRefs.current[index].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollToY = window.scrollY + yearTop - windowHeight / 2;
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth",
    });
  };

  isOverlay
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "scroll");

  return (
    <>
      {isOverlay && isOverlay && (
        <div className="overlay">
          <RxCross1
            className="close-icon"
            onClick={() => {
              setIsOverlay(false);
            }}
          />
          <div className="text-wrapper">
            {selectedYear &&
              selectedYear.brief[0].description &&
              selectedYear.brief[0].description}
          </div>
        </div>
      )}
      <div className="timeline-wrapper">
        <div
          className="timeline-background"
          style={{ backgroundImage: `url(${selectedYear.image})` }}
        ></div>
        <div className="timeline">
          <div className="columns-wrapper">
            <div className="years-inner-wrapper">
              <div className="years-inner years-inner-left">
                {yearsList.map((year, index) => {
                  if (index % 2 !== 0) {
                    return (
                      <div
                        className="dot-year-wrapper"
                        key={year.year}
                        ref={(ref) => (yearRefs.current[index] = ref)}
                        onClick={() => handleDotClick(index)} // Add click handler
                      >
                        <span
                          className={`year ${
                            selectedYear.year === year.year ? "selected" : ""
                          }`}
                        >
                          <div className="year-text-wrapper">
                            <span className="year-num">{year.year}</span>
                          </div>
                          <GoDotFill className="dot" />
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="dot-year-wrapper"
                        key={year.year}
                        ref={(ref) => (yearRefs.current[index] = ref)}
                        onClick={() => handleDotClick(index)} // Add click handler
                      >
                        <span
                          className={`year ${
                            selectedYear.year === year.year ? "selected" : ""
                          }`}
                        >
                          <div className="year-text-wrapper">
                            <div
                              className="content-text"
                              style={{ fontWeight: "400" }}
                            >
                              {year.brief && year.brief}
                            </div>
                          </div>
                          <GoDotFill className="dot" />
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="mid-line"></div>
              <div className="years-inner years-inner-right">
                {yearsList.map((year, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div
                        className="dot-year-wrapper"
                        key={year.year}
                        ref={(ref) => (yearRefs.current[index] = ref)}
                        onClick={() => handleDotClick(index)} // Add click handler
                      >
                        <span
                          className={`year ${
                            selectedYear.year === year.year ? "selected" : ""
                          }`}
                        >
                          <GoDotFill className="dot" />
                          <div className="year-text-wrapper">
                            <span className="year-num">{year.year}</span>
                            {window.innerWidth <= "1000" && (
                              <div
                                className="content-text"
                                style={{ fontWeight: "400" }}
                              >
                                {year.brief && year.brief}
                              </div>
                            )}
                          </div>
                        </span>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="dot-year-wrapper"
                        key={year.year}
                        ref={(ref) => (yearRefs.current[index] = ref)}
                        onClick={() => handleDotClick(index)} // Add click handler
                      >
                        <span
                          className={`year ${
                            selectedYear.year === year.year ? "selected" : ""
                          }`}
                        >
                          <GoDotFill className="dot" />
                          <div className="year-text-wrapper">
                            {window.innerWidth <= "1000" && (
                              <span className="year-num">{year.year}</span>
                            )}
                            <div
                              className="content-text"
                              style={{ fontWeight: "400" }}
                            >
                              {year.brief && year.brief}
                            </div>
                          </div>
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
