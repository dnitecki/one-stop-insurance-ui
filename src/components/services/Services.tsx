import "./Services.scss";
import { ServicesMapper } from "../../mappers/servicesMapper";
import { ContentMapperType, ServiceMapperType } from "../../types/types";
import OverviewContentMapper from "../../content/overviewContentMapper.json";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { EMPTY_STRING } from "../../constants/constants";

const Services = () => {
  const MainServices = ServicesMapper;
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = OverviewContentMapper;
  const serviceContent =
    content?.sections?.services?.body[language] ?? EMPTY_STRING;

  return (
    <div className="services-container">
      <ul className="services-content">
        {MainServices.map((service: ServiceMapperType) => (
          <li className="service-chip" key={service.id} id={service.id}>
            <div className="content-container">
              <div className="service-icon">
                <div className="icon">
                  <service.icon fontSize="inherit" />
                </div>
              </div>
              <div className="service-name">
                <p>{serviceContent[service.id]}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
