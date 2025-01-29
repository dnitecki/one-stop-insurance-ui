import "./Banner.scss";
import GroupPhoto from "../../assets/webp/group-photo.webp";
import OneStopLogoText from "../../assets/png/one-stop-logo-text.png";
import Skyline from "../../assets/png/chicago-skyline.png";
import OneStopLogo from "../../assets/webp/one-stop-logo.webp";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-content">
        <img
          className="company-name"
          src={OneStopLogoText}
          alt="One Stop Insurance Agency"
        />
        <div className="main-banner-image">
          <img className="group-photo" src={GroupPhoto} />
          <img className="one-stop-logo" src={OneStopLogo} />
          <img className="skyline" src={Skyline} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
