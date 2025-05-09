import "./Contact.scss";
import Map from "../map/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { INFO } from "../../constants/constants";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-option-container">
          <a className="contact-option-btn" href={INFO.PHONE_HREF}>
            <div className="contact-icon">
              <PhoneIcon fontSize="inherit" />
            </div>
            <div className="contact-text">
              <h2>{INFO.PHONE}</h2>
            </div>
          </a>
          <a className="contact-option-btn" href={INFO.EMAIL_HREF}>
            <div className="contact-icon">
              <EmailIcon fontSize="inherit" />
            </div>
            <div className="contact-text">
              <h2>{INFO.EMAIL}</h2>
            </div>
          </a>
        </div>
        <div className="map-card">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Contact;
