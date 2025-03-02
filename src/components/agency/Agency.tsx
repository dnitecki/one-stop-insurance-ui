import "./Agency.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import BrokerAnimation from "../../assets/json/BrokerAnimation.json";
import Lottie from "react-lottie-player";
import ContentMapper from "../../content/contentMapper.json";
import parse from "html-react-parser";
import { ContentMapperType } from "../../types/types";
import { EMPTY_STRING } from "../../constants/constants";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = ContentMapper;
  const agencyContent = content?.sections.agency.body[language];

  return (
    <>
      <div className="experience-card-container">
        <div className="experience-card">
          <div className="experience-container">
            <div className="experience-text">
              <h2>
                {parse(agencyContent?.experienceContentOne ?? EMPTY_STRING)}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="agency-card-container">
        <div className="agency-card">
          <div className="icon-container">
            <Lottie
              animationData={BrokerAnimation}
              className="player"
              play
              loop
            />
          </div>
          <div className="agency-text">
            <h2>
              {parse(agencyContent?.experienceContentTwo ?? EMPTY_STRING)}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
