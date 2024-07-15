import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import "./Contact.scss";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import ContactForm from "../forms/ContactForm/ContactForm";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const [policy, setProduct] = useState<string>(EMPTY_STRING);

  return (
    <div className="card">
      <div className="contact-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
