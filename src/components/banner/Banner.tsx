import "./Banner.scss";
import Skyline from "../../assets/png/chicago-skyline.png";
import BeataHeadshot from "../../assets/webp/beata-headshot.webp";
import OneStopText from "../../assets/png/one-stop-logo-text.png";
import OneStopIcon from "../../assets/webp/one-stop-logo.webp";
import { Link, useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapperType } from "../../types/types";
import OverviewContentMapper from "../../content/overviewContentMapper.json";

const Banner = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = OverviewContentMapper;
  const bannerContent = content.sections.banner;

  const scrollToContactSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      const headerHeightOffset = -70;
      const y =
        section.getBoundingClientRect().top +
        window.scrollY +
        headerHeightOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="banner-container">
      <div className="banner-content">
        <div className="main-banner-image">
          <div className="banner-content-container">
            <div className="banner-cta-container">
              <div className="banner-logo">
                <img
                  className="one-stop-icon"
                  src={OneStopIcon}
                  alt="One Stop Insurance Icon"
                />
                <img
                  className="one-stop-text"
                  src={OneStopText}
                  alt="One Stop Insurance"
                />
              </div>
              <div className="banner-cta-buttons">
                <Link
                  to={`/requestquote?lang=${language}`}
                  title="Get A Quote"
                  className="banner-btn"
                >
                  <h2>{bannerContent.body[language]?.quoteCta}</h2>
                </Link>

                <button
                  className="banner-btn"
                  onClick={scrollToContactSection}
                  title="Contact Us"
                >
                  <h2>{bannerContent.body[language]?.contactCta}</h2>
                </button>
              </div>
            </div>
            <div className="headshot-container">
              <div className="name-tag">
                <h2>Beata Nitecki</h2>
                <p>Broker</p>
              </div>
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
