import "./Carousel.scss";
import { useSearchParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ErieLogo from "../../assets/erie-ins.png";
import ProgressiveLogo from "../../assets/prog-ins.png";
import TravelersLogo from "../../assets/travelers-ins.png";
import ForemostLogo from "../../assets/foremost-ins.png";
import OpenlyLogo from "../../assets/openly-ins.png";
import { ContentMapper } from "../../content/contentMapper";
import { SeachParamEnum } from "../../enums/languageEnums";

const Carousel = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <div className="scroller-container">
      <div className="scroller-header">
        <hr />
        <h3>{ContentMapper.sections.partners.header[language]}</h3>
        <hr />
      </div>
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
