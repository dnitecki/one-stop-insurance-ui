import { useSearchParams } from "react-router-dom";
import { QuoteFormProps } from "../../../../types/types";
import { SeachParamEnum } from "../../../../enums/languageEnums";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { EMPTY_STRING } from "../../../../constants/constants";

const AutoDetailedInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const driverInitialState: any = {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    driversLicenseNum: EMPTY_STRING,
    dateOfBirth: EMPTY_STRING,
  };

  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const formRef = useRef<HTMLFormElement>(null);
  const [additionalDriver, setAdditionalDriver] = useState(driverInitialState);
  const [additionalVehicle, setAdditionalVehicle] = useState([]);

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

  const handleDriverChange = (e: any) => {
    const { name, value } = e.target;
    setAdditionalDriver((prevDriver: any) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  const addAdditionalDriver = (e: any) => {
    e.preventDefault();
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      additionalDrivers: [...prevFormData.additionalDrivers, additionalDriver],
    }));
    setAdditionalDriver(driverInitialState);
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
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="married">
              Are you Married?
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="marriedYes"
                  name="married"
                  value="yes"
                  checked={formData.married === "yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="marriedNo"
                  name="married"
                  value="no"
                  checked={formData.married === "no"}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </fieldset>
          </div>
        </div>
        {formData.married === "yes" && (
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="spouseName">
                Name of Spouse
              </label>
              <input
                className="form-input"
                type="text"
                id="spouseName"
                name="spouseName"
                value={formData.spouseName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-gap" />
          </div>
        )}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="additionalDriver">
              Add Additional Driver(s)?
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="additionalDriverYes"
                  name="additionalDriver"
                  value="yes"
                  checked={formData.additionalDriver === "yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="additionalDriverNo"
                  name="additionalDriver"
                  value="no"
                  checked={formData.additionalDriver === "no"}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </fieldset>
          </div>
        </div>
        {formData.additionalDriver === "yes" && (
          <>
            <div className="form-header">
              <h2>Add Drivers</h2>
            </div>
            {formData.additionalDrivers.map((driver: any, index: number) => (
              <div className="form-row" key={index}>
                <div className="form-group">
                  <h3>
                    {driver.firstName}&nbsp;{driver.lastName}&nbsp;DL:
                    {driver.driversLicenseNum}&nbsp;DOB:{driver.dateOfBirth}
                  </h3>
                </div>
              </div>
            ))}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="additionalDriverName">
                  First Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="additionalDriverName"
                  name="firstName"
                  value={additionalDriver.firstName}
                  onChange={handleDriverChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="additionalDriverName">
                  Last Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="additionalDriverName"
                  name="lastName"
                  value={additionalDriver.lastName}
                  onChange={handleDriverChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label
                  className="form-label"
                  htmlFor="additionalDriverLicenseNum"
                >
                  Drivers License Number
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="additionalDriverLicenseNum"
                  name="driversLicenseNum"
                  value={additionalDriver.driversLicenseNum}
                  onChange={handleDriverChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="additionalDateOfBirth">
                  Date of Birth
                </label>
                <input
                  className="form-input"
                  type="date"
                  id="additionalDateOfBirth"
                  name="dateOfBirth"
                  value={additionalDriver.dateOfBirth}
                  onChange={handleDriverChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <button onClick={addAdditionalDriver}>Add Driver</button>
            </div>
          </>
        )}
        <div className="form-header">
          <h2>Add Vehicles</h2>
        </div>
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
