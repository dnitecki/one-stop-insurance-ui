import "./FormStyles.scss";
import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ContentMapperType,
  QuoteFormDataType,
  QuoteFormProps,
} from "../../types/types";
import { SeachParamEnum } from "../../enums/languageEnums";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { handleBack, handleNext } from "../../utils/utils";

const PersonalInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const formContent = content?.sections.form.body[language];
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: QuoteFormDataType) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form ref={formRef} className="form-content">
        <div className="form-header">
          <h2>{formContent?.generalInfo}</h2>
          <p className="form-required-field">{formContent?.requiredField}</p>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="fname">
            {formContent?.firstName}*
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
            {formContent?.lastName}*
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
            {formContent?.email}*
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
            {formContent?.phone}*
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
            {formContent?.dateOfBirth}*
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
        <div className="form-group">
          <label className="form-label" htmlFor="driversLicenseNum">
            {formContent?.driversLicenseNum}*
          </label>
          <input
            className="form-input"
            type="text"
            id="driversLicenseNum"
            name="driversLicenseNum"
            value={formData.driversLicenseNum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="occupation">
            {formContent?.occupation}*
          </label>
          <input
            className="form-input"
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-header">
          <h2>{formContent?.primaryAddress}</h2>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="street">
            {formContent?.street}*
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
            {formContent?.unit}
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
            {formContent?.postalCode}*
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
            {formContent?.city}*
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
            {formContent?.state}*
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
            <option hidden>{formContent?.stateSelect}</option>
            <option value="ohio">Ohio</option>
            <option value="illinois">Illinois</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="country">
            {formContent?.country}*
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
            <option hidden>{formContent?.countrySelect}</option>
            <option value="US">United States</option>
          </select>
        </div>
      </form>
      <div className="form-navigation">
        <button
          className="form-nav-btn"
          type="button"
          onClick={() => {
            handleBack(setActiveStep);
          }}
        >
          <ArrowBackIcon fontSize="medium" />
          <p>{formContent?.back}</p>
        </button>
        <button
          className="form-nav-btn"
          type="button"
          onClick={() => {
            handleNext(setActiveStep, formRef);
          }}
        >
          <p>{formContent?.next}</p>
          <ArrowForwardIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
