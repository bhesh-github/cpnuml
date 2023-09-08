import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
    "https://i0.wp.com/www.nepallivetoday.com/wp-content/uploads/2023/05/Oli_Parliament_21684652006.jpg?fit=1200%2C630&ssl=1",
    "https://fileswarehouse.com/cpn-uml/news/62U5B56jFnjHbavqXVZSynmoi158AgvWFu2nHvsM.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SDDK3YIDD6U0DLO3AEYN%2F20230829%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230829T064916Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=89130d2fb9b37265da62627139c7781d784a7c515de0108d8a474701d122b19e",
    "https://fileswarehouse.com/cpn-uml/news/vSwxmjIqk4w06m3wEb0TeKXWbSufcvefIFdth0Li.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SDDK3YIDD6U0DLO3AEYN%2F20230829%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230829T064916Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=f2c526a383a146f32e1097cf1f6e95c3e0669ae6c1fe958be44cbc8d496157d5",
    "https://fileswarehouse.com/cpn-uml/bichars/rIRLW1XjyTgu2lpJrBVGcnlEmQjTDHJsvlZkg1Cn.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=SDDK3YIDD6U0DLO3AEYN%2F20230829%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230829T065052Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=2cbc45b6fae3fb9382353a56aed189e2c1dcaf50948e36d416863c873f4a65c9",
  ],
};
