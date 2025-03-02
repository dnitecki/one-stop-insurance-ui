import "./Banner.scss";
import GroupPhoto from "../../assets/webp/group-photo.webp";
import OneStopLogoText from "../../assets/png/one-stop-logo-text.png";
import Skyline from "../../assets/png/chicago-skyline.png";
import OneStopLogo from "../../assets/webp/one-stop-logo.webp";
import BeataHeadshot from "../../assets/webp/beata-headshot.webp";

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
          <div className="banner-content-container">
            <div className="banner-cta-container">
              <div className="banner-cta-text">
                <h1>Let us find the coverage you need.</h1>
              </div>
              <div className="banner-cta-buttons">
                <button className="banner-btn">
                  <h2>Request a Quote</h2>
                </button>
                <button className="banner-btn">
                  <h2>Contact</h2>
                </button>
              </div>
            </div>
            <div className="headshot-container">
              <img
                className="headshot"
                src={BeataHeadshot}
                alt="Beata Headshot"
              />
            </div>
          </div>
          <img className="skyline" src={Skyline} alt="skyline" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
