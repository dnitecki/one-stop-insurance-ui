import { useCollapse } from "react-collapsed";
import "./Services.scss";
import { ServicesMapper } from "../../utils/servicesMapper";
import { ServiceMapperType } from "../../types/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MainServices = ServicesMapper.slice(0, 4);
const AdditionalService = ServicesMapper.slice(4);

const Services = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

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
        <div className="services-content-container" {...getCollapseProps()}>
          <div className="services-content padding-top">
            {AdditionalService.map((service: ServiceMapperType) => (
              <div className="service-chip" key={service.id} id={service.id}>
                <div className="service-icon">
                  <service.icon fontSize="inherit" />
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="service-toggle-btn" {...getToggleProps()}>
          <p>{isExpanded ? "Less" : "More"}</p>
          <div className={`more-chevron ${isExpanded ? "collapse" : "expand"}`}>
            <ExpandMoreIcon fontSize="inherit" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Services;
