import "../QuoteForm.scss";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { QuoteFormContent } from "../../../../content/contentMapper";
import { QuoteFormProps } from "../../../../types/types";
import { SeachParamEnum } from "../../../../enums/languageEnums";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PersonalInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleNext = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setActiveStep(2);
      } else {
        formRef.current.reportValidity();
      }
    }
  };

  return (
    <div className="form-container">
      <div className="quote-header">
        <h1>{QuoteFormContent.quoteStepTwo.header[language]}</h1>
      </div>
      <form ref={formRef} className="form-content">
        <div className="form-header">
          <h2>General</h2>
        </div>
        <div className="form-row">
          <input
            className="form-input"
            type="text"
            id="fname"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            id="lname"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            className="contact-form-input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            placeholder="Date Of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-header">
          <h2>Address</h2>
        </div>
        <div className="form-row">
          <input
            className="form-input"
            type="text"
            id="street"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            className="form-input"
            type="text"
            id="unit"
            name="unit"
            placeholder="Unit #"
            value={formData.unit}
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            className="form-input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <select
            className="form-select"
            id="state"
            name="state"
            defaultValue="state"
            required
            value={formData.state}
            onChange={handleChange}
          >
            <option hidden>State</option>
            <option value="ohio">Ohio</option>
            <option value="illinois">Illinois</option>
          </select>
          <select
            className="form-select"
            id="country"
            name="country"
            defaultValue="country"
            required
            value={formData.country}
            onChange={handleChange}
          >
            <option hidden>Country</option>
            <option value="US">United States</option>
          </select>
        </div>
      </form>
      <div className="form-navigation">
        <button
          className="form-submit-btn"
          type="button"
          onClick={() => {
            setActiveStep(0);
          }}
        >
          <ArrowBackIcon fontSize="medium" />
          <p>Back</p>
        </button>
        <button className="form-submit-btn" type="button" onClick={handleNext}>
          <p>Next</p>
          <ArrowForwardIcon fontSize="medium" />
        </button>
      </div>
      <div className="form-navigation"></div>
    </div>
  );
};

export default PersonalInfo;
