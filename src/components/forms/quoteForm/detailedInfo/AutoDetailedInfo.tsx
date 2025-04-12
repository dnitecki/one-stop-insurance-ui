import { useSearchParams } from "react-router-dom";
import { QuoteFormProps } from "../../../../types/types";
import { SeachParamEnum } from "../../../../enums/languageEnums";
import { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AutoDetailedInfo: React.FC<QuoteFormProps> = ({
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
        setActiveStep(3);
      } else {
        formRef.current.reportValidity();
      }
    }
  };

  return (
    <div className="form-container">
      <div className="quote-header">
        <h1>Auto Details</h1>
      </div>
      <form ref={formRef} className="form-content">
        <div className="form-header">
          <h2>Driver Information</h2>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="driversLicenseNum">
              Driver's License Number
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
              Occupation/Degree
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="currentInsurer">
              Current Insurer
            </label>
            <input
              className="form-input"
              type="text"
              id="currentInsurer"
              name="currentInsurer"
              value={formData.currentInsurer}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="timeWithInsurer">
              Time with Insurer (Years)
            </label>
            <input
              className="form-input"
              type="text"
              id="timeWithInsurer"
              name="timeWithInsurer"
              value={formData.timeWithInsurer}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="currentCoverages">
              Current Coverages
            </label>
            <input
              className="form-input"
              type="text"
              id="currentCoverages"
              name="currentCoverages"
              value={formData.currentCoverages}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="renewalDate">
              Policy Renewal Date
            </label>
            <input
              className="form-input"
              type="date"
              id="renewalDate"
              name="renewalDate"
              value={formData.renewalDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="homeOwner">
              Are you a homeowner?
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="homeOwnerYes"
                  name="homeOwner"
                  value="yes"
                  checked={formData.homeOwner === "yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="homeOwnerNo"
                  name="homeOwner"
                  value="no"
                  checked={formData.homeOwner === "no"}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </fieldset>
          </div>
        </div>
        {formData.homeOwner === "yes" && (
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="noOfResidents">
                Number of Residents
              </label>
              <input
                className="form-input"
                type="text"
                id="noOfResidents"
                name="noOfResidents"
                value={formData.noOfResidents}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-gap" />
          </div>
        )}
      </form>
      <div className="form-navigation">
        <button
          className="form-submit-btn"
          type="button"
          onClick={() => {
            setActiveStep(1);
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
    </div>
  );
};

export default AutoDetailedInfo;
