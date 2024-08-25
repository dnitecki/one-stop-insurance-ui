import "./Carousel.scss";
import Marquee from "react-fast-marquee";
import ErieLogo from "../../assets/erie-ins.png";
import ProgressiveLogo from "../../assets/prog-ins.png";
import TravelersLogo from "../../assets/travelers-ins.png";
import ForemostLogo from "../../assets/foremost-ins.png";
import OpenlyLogo from "../../assets/openly-ins.png";

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
