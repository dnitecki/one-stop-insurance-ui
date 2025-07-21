import "./Services.scss";
import { ServicesMapper } from "../../mappers/servicesMapper";
import { ServiceMapperType } from "../../types/types";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";

const Services = () => {
  const MainServices = ServicesMapper;
  const { content } = useTranslateContent(ContentSectionEnum.SERVICES);

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
                <p>{content[service.id]}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
