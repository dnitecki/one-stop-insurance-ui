import "./Carousel.scss";
import Marquee from "react-fast-marquee";
import erieLogo from "../../assets/erie-ins.png";
import progressiveLogo from "../../assets/prog-ins.png";
import travelersLogo from "../../assets/travelers-ins.png";
import foremostLogo from "../../assets/foremost-ins.png";
import openlyLogo from "../../assets/openly-ins.png";
import { ServicesMapper } from "../../utils/servicesMapper";
import { ServiceMapperType } from "../../types/types";

const Carousel = () => {
  return (
    <div className="scroller-container">
      <div className="scroller-header">
        <hr />
        <h3>Representing</h3>
        <hr />
      </div>
      <Marquee gradient={true} gradientWidth={50}>
        <div className="scroller-partners">
          <img src={progressiveLogo} className="progressive" />
          <img src={erieLogo} className="erie" />
          <img src={travelersLogo} className="travelers" />
          <img src={foremostLogo} className="foremost" />
          <img src={openlyLogo} className="openly" />
        </div>
      </Marquee>
      <Marquee gradient={true} gradientWidth={50} direction="right">
        <div className="scroller-services">
          {ServicesMapper.map((service: ServiceMapperType) => (
            <div className="service-chip" key={service.id} id={service.id}>
              <div className="service-icon">
                <service.icon />
              </div>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carousel;