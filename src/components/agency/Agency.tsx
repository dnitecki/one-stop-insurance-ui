import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import BeataHeadshot from "../../assets/BeataHeadshot.png";
import "./Agency.scss";
import { ObjectIndexType } from "../../types/types";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  const content: ObjectIndexType = {
    EN: (
      <>
        Has more than <strong>30 years</strong> of combined insurance
        experience.
      </>
    ),
    PL: (
      <>
        Ma ponad <strong>30 lat</strong> wspólnego doświadczenia z
        ubezpieczeniem.
      </>
    ),
    ES: (
      <>
        Tiene más de <strong>30 años</strong> de experiencia combinada en
        seguros.
      </>
    ),
  };
  return (
    <div className="agency-card">
      <div className="agency-text">
        <h2>{content[language]}</h2>
      </div>
      <div className="headshot-container">
        <img className="headshot" src={BeataHeadshot} />
      </div>
    </div>
  );
};

export default Agency;
