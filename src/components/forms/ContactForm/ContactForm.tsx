import "./ContactForm.scss";
import SendIcon from "@mui/icons-material/Send";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const ContactForm = () => {
  return (
    <form className="form-container">
      <h2>
        Request a Quote <RequestQuoteIcon fontSize="inherit" />
      </h2>
      <div className="form-row">
        <input
          className="form-input"
          type="text"
          id="fname"
          name="firstname"
          placeholder="First Name"
          required
        />
        <input
          className="form-input"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
        />

        <select
          className="form-select"
          id="policy-type"
          defaultValue="Policy Type"
          required
        >
          <option hidden selected>
            Policy Type
          </option>
          <option value="auto">Auto</option>
          <option value="home">Home</option>
          <option value="life">Life</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <textarea
        className="form-additional-info"
        id="additional-info"
        rows={3}
        wrap="on"
        placeholder="Additional Information"
      />
      <button className="form-submit-btn" type="submit" value="Submit">
        <h2>
          Submit <SendIcon fontSize="inherit" />
        </h2>
      </button>
    </form>
  );
};

export default ContactForm;
