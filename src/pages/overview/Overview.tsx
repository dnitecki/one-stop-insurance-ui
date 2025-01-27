import "./Overview.scss";
import Carousel from "../../components/carousel/Carousel";
import Banner from "../../components/banner/Banner";
import { useSearchParams } from "react-router-dom";
import { OverviewMapper } from "../../mappers/overviewMapper";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";

const Overview = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <div className="overview-container" id="overview-container">
      <Banner />
      <div className="overview-content">
        <Carousel />
        {OverviewMapper.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className="overview-section"
          >
            <div className="section-heading">
              <h1>{ContentMapper?.sections[section.id]?.header[language]}</h1>
            </div>
            <div className="section-component">
              <section.Component />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default Overview;
