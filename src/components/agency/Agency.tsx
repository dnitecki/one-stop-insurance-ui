import "./Agency.scss";
import QuoteAnimation from "../../assets/json/QuoteAnimation.json";
import Lottie from "react-lottie-player";
import GroupPhoto from "../../assets/webp/group-photo.webp";
import OneStopIcon from "../../assets/webp/one-stop-logo.webp";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";

const Agency = () => {
  const { content } = useTranslateContent(ContentSectionEnum.AGENCY);

  return (
    <>
      <div className="agency-container">
        <div className="experience-container">
          <div className="experience-card">
            <div className="photo-container">
              <img
                className="agency-logo"
                src={OneStopIcon}
                alt="One Stop Icon"
              />
              <img className="group-photo" src={GroupPhoto} alt="Group Photo" />
            </div>
          </div>
          <div className="experience-text">
            <h2>{content?.experienceContentOne}</h2>
          </div>
        </div>
        <div className="experience-container">
          <div className="experience-card">
            <div className="icon-container">
              <Lottie
                animationData={QuoteAnimation}
                className="player"
                play
                loop
              />
            </div>
          </div>
          <div className="experience-text">
            <h2>{content?.experienceContentTwo}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
