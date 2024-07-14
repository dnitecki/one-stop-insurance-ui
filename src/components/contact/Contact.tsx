import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";
import "./Contact.scss";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const [policy, setProduct] = useState<string>(EMPTY_STRING);

  return (
    <div className="card">
      <div className="contact-container">
        <form className="form-container">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstname" required />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 555-5555"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <label htmlFor="policy-type">Policy Type</label>
          <select id="policy-type" defaultValue="Policy Type" required>
            <option hidden selected>
              Select one...
            </option>
            <option value="auto">Auto</option>
            <option value="home">Home</option>
            <option value="life">Life</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
