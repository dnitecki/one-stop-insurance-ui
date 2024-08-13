import "./Services.scss";
import { ServicesMapper } from "../../mappers/servicesMapper";
import { ServiceMapperType } from "../../types/types";

const MainServices = ServicesMapper;

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-card">
        <div className="services-content">
          {MainServices.map((service: ServiceMapperType) => (
            <div className="service-chip" key={service.id} id={service.id}>
              <div className="content-container">
                <div className="service-icon">
                  <div className="icon">
                    <service.icon fontSize="inherit" />
                  </div>
                </div>
                <div className="service-name">
                  <p>{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
