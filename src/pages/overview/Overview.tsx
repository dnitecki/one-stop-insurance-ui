import { useSearchParams } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { OverviewMapper } from "../../utils/overviewMapper";
import "./Overview.scss";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import Banner from "../../components/banner/Banner";

export const Overview = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <div className="overview-container">
      <div className="overview-content">
        <Banner />
        <Carousel />
        {OverviewMapper.map((section) => (
          <section id={section.id} key={section.id}>
            <div className="section-heading">
              <h1>{ContentMapper?.sections[section.id]?.header[language]}</h1>
            </div>
            <section.Component />
          </section>
        ))}
        <Footer />
      </div>
    </div>
  );
};
