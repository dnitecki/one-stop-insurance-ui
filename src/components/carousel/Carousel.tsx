import "./Carousel.scss";
import Marquee from "react-fast-marquee";
import erieLogo from "../../assets/erie-ins.png";
import progressiveLogo from "../../assets/prog-ins.png";
import travelersLogo from "../../assets/travelers-ins.png";
import foremostLogo from "../../assets/foremost-ins.png";
import openlyLogo from "../../assets/openly-ins.png";

const Carousel = () => {
  return (
    <div className="scroller-container">
      <div className="scroller-header">
        <hr />
        <h3>Partners</h3>
        <hr />
      </div>
      <Marquee gradient={true} gradientWidth={50} speed={30}>
        <div className="scroller-partners">
          <img src={progressiveLogo} className="progressive" />
          <img src={erieLogo} className="erie" />
          <img src={travelersLogo} className="travelers" />
          <img src={foremostLogo} className="foremost" />
          <img src={openlyLogo} className="openly" />
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
