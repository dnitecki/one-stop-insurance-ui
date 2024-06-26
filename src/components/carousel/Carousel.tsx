import "./Carousel.scss";
import Marquee from "react-fast-marquee";
import erieLogo from "../../assets/erie-ins.png";
import progressiveLogo from "../../assets/prog-ins.png";
import travelersLogo from "../../assets/travelers-ins.png";

const Carousel = () => {
  return (
    <div className="scroller-container">
      <Marquee gradient={true} gradientWidth={50}>
        <div className="scroller-inner">
          <img src={progressiveLogo} className="progressive" />
          <img src={erieLogo} className="erie" />
          <img src={travelersLogo} className="travelers" />
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
