import "./FormStyles.scss";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ContentMapperType, QuoteFormProps } from "../../types/types";
import { SeachParamEnum } from "../../enums/languageEnums";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuoteContentMapper from "../../content/quoteContentMapper.json";

const PersonalInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const personalInfoContent = content?.sections.personalInfo.body[language];
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
        <h1>{personalInfoContent?.header}</h1>
      </div>
      <form ref={formRef} className="form-content">
        <div className="form-header">
          <h2>{personalInfoContent?.generalInfo}</h2>
          <p className="form-required-field">
            {personalInfoContent?.requiredField}
          </p>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fname">
            {personalInfoContent?.firstName}*
          </label>
          <input
            className="form-input"
            type="text"
            id="fname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lname">
            {personalInfoContent?.lastName}*
          </label>
          <input
            className="form-input"
            type="text"
            id="lname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            {personalInfoContent?.email}*
          </label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            {personalInfoContent?.phone}*
          </label>
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            placeholder=""
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="dateOfBirth">
            {personalInfoContent?.dateOfBirth}*
          </label>
          <input
            className="form-input"
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            placeholder="mm/dd/yyyy"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-header">
          <h2>{personalInfoContent?.primaryAddress}</h2>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="street">
            {personalInfoContent?.street}*
          </label>
          <input
            className="form-input"
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="unit">
            {personalInfoContent?.unit}
          </label>
          <input
            className="form-input"
            type="text"
            id="unit"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="postalCode">
            {personalInfoContent?.postalCode}*
          </label>
          <input
            className="form-input"
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="city">
            {personalInfoContent?.city}*
          </label>
          <input
            className="form-input"
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="state">
            {personalInfoContent?.state}*
          </label>
          <select
            className="form-select"
            title="state"
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
          >
            <option hidden>{personalInfoContent?.stateSelect}</option>
            <option value="ohio">Ohio</option>
            <option value="illinois">Illinois</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="country">
            {personalInfoContent?.country}*
          </label>
          <select
            className="form-select"
            title="country"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
          >
            <option hidden>{personalInfoContent?.countrySelect}</option>
            <option value="US">United States</option>
          </select>
        </div>
      </form>
      <div className="form-navigation">
        <button
          className="form-nav-btn"
          type="button"
          onClick={() => {
            setActiveStep(0);
          }}
        >
          <ArrowBackIcon fontSize="medium" />
          <p>Back</p>
        </button>
        <button className="form-nav-btn" type="button" onClick={handleNext}>
          <p>Next</p>
          <ArrowForwardIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
