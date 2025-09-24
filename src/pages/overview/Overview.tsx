import "./Overview.scss";
import Carousel from "../../components/carousel/Carousel";
import Banner from "../../components/banner/Banner";
import { useSearchParams } from "react-router-dom";
import { OverviewMapper } from "../../mappers/overviewMapper";
import { SeachParamEnum } from "../../enums/languageEnums";
import OverviewContentMapper from "../../content/overviewContentMapper.json";
import { ContentMapperType } from "../../types/types";
import Partners from "../../components/partners/Partners";

const Overview = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = OverviewContentMapper;

  return (
    <div className="overview-container" id="overview-container">
      <Banner />
      <Carousel />
      <div className="overview-content">
        {OverviewMapper.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className={`overview-section ${section.className}`}
          >
            <div className="section-heading">
              <h1>{content.sections[section.id].header[language]}</h1>
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
