import { ContactContentType } from "../../../types/types";
import "./ContactForm.scss";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const ContactForm = (content: ContactContentType) => {
  return (
    <form className="contact-form-container">
      <h2>
        <FactCheckIcon fontSize="inherit" /> {content.formTitle}
      </h2>
      <div className="contact-form-row">
        <input
          className="contact-form-input"
          type="text"
          id="fname"
          name="firstname"
          placeholder={content.firstName}
          required
        />
        <input
          className="contact-form-input"
          type="text"
          id="lname"
          name="lastname"
          placeholder={content.lastName}
          required
        />
      </div>
      <div className="contact-form-row">
        <input
          className="contact-form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="contact-form-row">
        <input
          className="contact-form-input"
          type="tel"
          id="phone"
          name="phone"
          placeholder={content.phoneNumber}
          required
        />

        <select
          className="contact-form-select"
          id="policy-type"
          defaultValue="Policy Type"
          required
        >
          <option hidden>{content.policyType}</option>
          <option value="auto">Auto</option>
          <option value="home">Home</option>
          <option value="life">Life</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="contact-form-row">
        <textarea
          className="contact-form-additional-info"
          id="additional-info"
          rows={4}
          wrap="on"
          placeholder={content.addtlInfo}
        />
      </div>
      <div className="contact-form-row">
        <button
          className="contact-form-submit-btn"
          type="submit"
          value="Submit"
        >
          <h2>{content.submit}</h2>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
