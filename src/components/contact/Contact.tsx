import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import "./Contact.scss";
import ContactForm from "../forms/ContactForm/ContactForm";
import Map from "../map/Map";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <>
      <div className="card">
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
