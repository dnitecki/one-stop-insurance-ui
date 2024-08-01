import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import BeataHeadshot from "../../assets/BeataHeadshot.png";
import "./Agency.scss";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  return (
    <div className="agency-card">
      <div className="agency-text">
        <h2>{ContentMapper.sections["agency"].body[language]}</h2>
      </div>
      <div className="headshot-container">
        <img className="headshot" src={BeataHeadshot} />
      </div>
    </div>
  );
};

export default Agency;
