import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import "./Contact.scss";
import ContactForm from "../forms/ContactForm/ContactForm";
import Map from "../map/Map";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <div className="card">
      <div className="contact-container">
        <ContactForm />
        <hr />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
