import "./Banner.scss";
import GroupPhoto from "../../assets/webp/group-photo.webp";
import OneStopLogo from "../../assets/png/one-stop-logo.png";
import Skyline from "../../assets/png/chicago-skyline.png";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-content">
        <img
          className="company-name"
          src={OneStopLogo}
          alt="One Stop Insurance Agency"
        />
        <div className="main-banner-image">
          <img className="group-photo" src={GroupPhoto} />
          <img className="skyline" src={Skyline} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
