import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../../../../images/homeBanner/76324-vspikhchdl-1590595788.jpg'
import img2 from '../../../../images/homeBanner/891656-gdelqhbsns-1518698046.jpg'
import img3 from '../../../../images/homeBanner/oli-1.jpg'
import img4 from '../../../../images/homeBanner/thumb.jpg'



const HomeCarousel = ({ imagesList }) => {
  return (
    <>
      <Carousel 
        style={{ zIndex: "-9" }}
        className="home-carousel"
        showArrows={false}
        showThumbs={false}
        swipeable={true}
        stopOnHover={true}
        showStatus={false}
        autoPlay={true}
        interval="2000"
        infiniteLoop={true}
        transitionTime="400"
      >
        {imagesList &&
          imagesList.map((item, idx) => (     
            <div
              key={idx}
              className="image-wrapper"
            >
              <img
                src={item && item}
                alt=""
                className="carousel-image"
              />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default HomeCarousel;

HomeCarousel.defaultProps = {
  imagesList: [
    img4,
    img3,
    img1,
    img2,
     ],
};
