import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import BeataHeadshot from "../../assets/BeataHeadshot.png";
import BrokerIcon from "../../assets/BrokerIcon.png";
import "./Agency.scss";
import { ObjectIndexType } from "../../types/types";

const Agency = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  const experienceContent: ObjectIndexType = {
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
  const agencyContent: ObjectIndexType = {
    EN: (
      <>
        Your <strong>One Stop</strong> Shop for smart savings and smarter
        coverage.
      </>
    ),
    PL: (
      <>
        <strong>Jedno</strong> miejsce na sprytne oszczędności i lepszą ochronę.
      </>
    ),
    ES: (
      <>
        Tu lugar <strong>único</strong> para ahorros inteligentes y mejor
        protección.
      </>
    ),
  };
  return (
    <>
      <div className="experience-card">
        <div className="experience-text">
          <h2>{experienceContent[language]}</h2>
        </div>
        <div className="headshot-container">
          <img className="headshot" src={BeataHeadshot} alt="Beata Headshot" />
        </div>
      </div>
      <div className="agency-card">
        <div className="icon-container">
          <img className="broker-icon" src={BrokerIcon} alt="Beata Headshot" />
        </div>
        <div className="agency-text">
          <h2>{agencyContent[language]}</h2>
        </div>
      </div>
    </>
  );
};

export default Agency;
