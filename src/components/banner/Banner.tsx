import "./Banner.scss";
import GroupPhoto from "../../assets/group-photo.png";
import OneStopLogo from "../../assets/one-stop-logo.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <img
          className="company-name"
          src={OneStopLogo}
          alt="One Stop Insurance Agency"
        />
        <img
          className="group-photo"
          src={GroupPhoto}
          alt="One Stop Insurance Agency"
        />
      </div>
    </div>
  );
};

export default Banner;
