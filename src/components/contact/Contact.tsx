import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import "./Contact.scss";
import ContactForm from "../forms/ContactForm/ContactForm";
import Map from "../map/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { INFO } from "../../constants/constants";
import { ContentMapper } from "../../content/contentMapper";
import { ContactContentType } from "../../types/types";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContactContentType =
    ContentMapper.sections.contact.body[language];

  return (
    <>
      <div className="contact-card">
        <div className="contact-option-container">
          <a className="contact-option-btn" href={INFO.PHONE_HREF}>
            <PhoneIcon fontSize="inherit" />
            <h2>{INFO.PHONE}</h2>
          </a>
          <a className="contact-option-btn" href={INFO.EMAIL_HREF}>
            <EmailIcon fontSize="inherit" />
            <h2>Email</h2>
          </a>
        </div>
        <hr></hr>
        <div className="contact-container">
          <ContactForm {...content} />
        </div>
      </div>
      <div className="map-card">
        <Map />
      </div>
    </>
  );
};

export default Contact;
