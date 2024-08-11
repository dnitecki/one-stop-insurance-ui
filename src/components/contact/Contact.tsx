import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import "./Contact.scss";
import ContactForm from "../forms/ContactForm/ContactForm";
import Map from "../map/Map";
import { Phone } from "@mui/icons-material";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <>
      <div className="card">
        <a className="contact-call" href="tel:+16304008111">
          <Phone fontSize="inherit" />
          <h2>1 (630) 400-8111</h2>
        </a>
        <h3>or</h3>
        <div className="contact-container">
          <ContactForm />
        </div>
      </div>
      <div className="map-card">
        <Map />
      </div>
    </>
  );
};

export default Contact;
