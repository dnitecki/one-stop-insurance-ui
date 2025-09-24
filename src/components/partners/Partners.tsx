import "./Partners.scss";
import ErieLogo from "../../assets/webp/erie-ins.webp";
import ProgressiveLogo from "../../assets/webp/prog-ins.webp";
import TravelersLogo from "../../assets/webp/travelers-ins.webp";
import ForemostLogo from "../../assets/webp/foremost-ins.webp";
import OpenlyLogo from "../../assets/webp/openly-ins.webp";
import GeicoLogo from "../../assets/webp/geico-ins.webp";

const Partners = () => {
  return (
    <div className="partners-container">
      <img src={ProgressiveLogo} className="progressive" alt="progressive" />
      <img src={ErieLogo} className="erie" alt="erie" />
      <img src={TravelersLogo} className="travelers" alt="travelers" />
      <img src={ForemostLogo} className="foremost" alt="foremost" />
      <img src={GeicoLogo} className="geico" alt="geico" />
      <img src={OpenlyLogo} className="openly" alt="openly" />
    </div>
  );
};

export default Partners;
