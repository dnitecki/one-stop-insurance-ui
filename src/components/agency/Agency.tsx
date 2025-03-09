import "./Agency.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteAnimation from "../../assets/json/QuoteAnimation.json";
import Lottie from "react-lottie-player";
import ContentMapper from "../../content/contentMapper.json";
import { ContentMapperType } from "../../types/types";
import GroupPhoto from "../../assets/webp/group-photo.webp";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = ContentMapper;
  const agencyContent = content?.sections.agency.body[language];

  return (
    <>
      <div className="agency-container">
        <div className="experience-container">
          <div className="experience-card">
            <div className="photo-container">
              <img className="photo" src={GroupPhoto} alt="Group Photo" />
            </div>
          </div>
          <div className="experience-text">
            <h2>{agencyContent?.experienceContentOne}</h2>
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
            <h2>{agencyContent?.experienceContentTwo}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
