import "./Carousel.scss";
import Marquee from "react-fast-marquee";
import ErieLogo from "../../assets/webp/erie-ins.webp";
import ProgressiveLogo from "../../assets/webp/prog-ins.webp";
import TravelersLogo from "../../assets/webp/travelers-ins.webp";
import ForemostLogo from "../../assets/webp/foremost-ins.webp";
import OpenlyLogo from "../../assets/webp/openly-ins.webp";

const Carousel = () => {
  return (
    <div className="scroller-container">
      <Marquee gradient={true} gradientWidth={50} speed={30}>
        <div className="scroller-partners">
          <img
            src={ProgressiveLogo}
            className="progressive"
            alt="progressive"
          />
          <img src={ErieLogo} className="erie" alt="erie" />
          <img src={TravelersLogo} className="travelers" alt="travelers" />
          <img src={ForemostLogo} className="foremost" alt="foremost" />
          <img src={OpenlyLogo} className="openly" alt="openly" />
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
