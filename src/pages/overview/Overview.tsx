import Banner from "../../components/banner/Banner";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import { OverviewMapper } from "../../utils/overviewMapper";
import "./Overview.scss";

export const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <Banner />
        <Carousel />
        {OverviewMapper.map((section) => (
          <section id={section.id} key={section.id}>
            <div className="section-heading">
              <h1>{section.header}</h1>
            </div>
            <section.Component />
          </section>
        ))}
        <Footer />
      </div>
    </div>
  );
};
