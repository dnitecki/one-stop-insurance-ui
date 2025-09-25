import "./Services.scss";
import { useRef } from "react";
import { ServicesMapper } from "../../mappers/servicesMapper";
import { ServiceMapperType } from "../../types/types";
import useTranslateContent from "../../hooks/useTranslateContent";
import { ContentSectionEnum } from "../../enums/enums";
import useVisibility from "../../hooks/useVisibility";
import { EMPTY_STRING } from "../../constants/constants";

const Services = () => {
  const MainServices = ServicesMapper;
  const { content } = useTranslateContent(ContentSectionEnum.SERVICES);
  const ref = useRef<HTMLLIElement>(null);
  const isVisible = useVisibility(ref);

  return (
    <div className="services-container">
      <ul className="services-content">
        {MainServices.map((service: ServiceMapperType, index) => (
          <li
            className={`service-chip ${isVisible ? "visible" : EMPTY_STRING}`}
            key={service.id}
            id={service.id}
            ref={ref}
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
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
