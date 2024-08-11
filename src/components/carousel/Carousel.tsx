import "./Carousel.scss";
import { useSearchParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import erieLogo from "../../assets/erie-ins.png";
import progressiveLogo from "../../assets/prog-ins.png";
import travelersLogo from "../../assets/travelers-ins.png";
import foremostLogo from "../../assets/foremost-ins.png";
import openlyLogo from "../../assets/openly-ins.png";
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
            src={progressiveLogo}
            className="progressive"
            alt="progressive"
          />
          <img src={erieLogo} className="erie" alt="erie" />
          <img src={travelersLogo} className="travelers" alt="travelers" />
          <img src={foremostLogo} className="foremost" alt="foremost" />
          <img src={openlyLogo} className="openly" alt="openly" />
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;
