import "./Services.scss";
import { ServicesMapper } from "../../utils/servicesMapper";
import { ServiceMapperType } from "../../types/types";

const MainServices = ServicesMapper;

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-card">
        <div className="services-content">
          {MainServices.map((service: ServiceMapperType) => (
            <div className="service-chip" key={service.id} id={service.id}>
              <div className="service-icon">
                <service.icon fontSize="inherit" />
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
