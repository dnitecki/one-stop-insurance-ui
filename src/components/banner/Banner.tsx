import "./Banner.scss";
import Skyline from "../../assets/png/chicago-skyline.png";
import BeataHeadshot from "../../assets/webp/beata-headshot.webp";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapperType } from "../../types/types";
import ContentMapper from "../../content/contentMapper.json";

const Banner = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = ContentMapper;
  const bannerContent = content.sections.banner;
  return (
    <section className="banner-container">
      <div className="banner-content">
        <div className="main-banner-image">
          <div className="banner-content-container">
            <div className="banner-cta-container">
              <div className="banner-cta-text">
                <h1>{bannerContent?.header[language]}</h1>
              </div>
              <div className="banner-cta-buttons">
                <button className="banner-btn">
                  <h2>{bannerContent.body[language]?.quoteCta}</h2>
                </button>
                <button className="banner-btn">
                  <h2>{bannerContent.body[language]?.contactCta}</h2>
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
