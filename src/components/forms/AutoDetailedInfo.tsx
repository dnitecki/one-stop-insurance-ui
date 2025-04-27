import { useSearchParams } from "react-router-dom";
import {
  QuoteFormDataType,
  QuoteFormProps,
  VehicleFormDataType,
} from "../../types/types";
import { SeachParamEnum } from "../../enums/languageEnums";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddDriverInfo from "./AddDriverInfo";
import { vehicleInitialState } from "../../constants/constants";
import AddIcon from "@mui/icons-material/Add";

const AutoDetailedInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const formRef = useRef<HTMLFormElement>(null);
  const vehicleRef = useRef<HTMLFormElement>(null);
  const [vehicles, setVehicles] =
    useState<VehicleFormDataType>(vehicleInitialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData: QuoteFormDataType) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleVehicleChange = (e: any) => {
    const { name, value } = e.target;
    setVehicles((prevVehicles: VehicleFormDataType) => ({
      ...prevVehicles,
      [name]: value,
    }));
  };

  const addVehicle = (e: any) => {
    e.preventDefault();
    if (vehicleRef.current) {
      if (vehicleRef.current.checkValidity()) {
        setFormData((prevFormData: QuoteFormDataType) => ({
          ...prevFormData,
          vehicles: [...prevFormData.vehicles, vehicles],
        }));
        setVehicles(vehicleInitialState);
      } else {
        vehicleRef.current.reportValidity();
      }
    }
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
          <h2>Policy Information</h2>
          <p className="form-required-field">* indicates a required field</p>
        </div>

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
            placeholder="mm/dd/yyyy"
            value={formData.renewalDate}
            onChange={handleChange}
            required
          />
        </div>
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
        {formData.homeOwner === "yes" && (
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
        )}
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
        {formData.married === "yes" && (
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
        )}
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
        {formData.additionalDriver === "yes" && (
          <AddDriverInfo setFormData={setFormData} formData={formData} />
        )}
        <div className="form-header">
          <h2>Add Vehicles</h2>
        </div>
        {formData.vehicles.length > 0 && (
          <ul className="form-list">
            {formData.vehicles.map(
              (vehicle: VehicleFormDataType, index: number) => (
                <li className="form-list-item" key={index}>
                  <h3>
                    {index + 1}.&nbsp;&nbsp;{vehicle.year}&nbsp;
                    {vehicle.make}&nbsp;{vehicle.model}
                  </h3>
                  {/* <button
                  className="form-delete-btn"
                  type="button"
                  title="Delete Driver"
                  onClick={() => removeAdditionalDriver(driver)}
                >
                  <DeleteIcon fontSize="inherit" />
                </button> */}
                </li>
              )
            )}
          </ul>
        )}
        <form ref={vehicleRef} className="form-add-section">
          <div className="form-group">
            <label className="form-label" htmlFor="make">
              Make
            </label>
            <input
              className="form-input"
              type="text"
              id="make"
              name="make"
              value={vehicles.make}
              onChange={handleVehicleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="model">
              Model
            </label>
            <input
              className="form-input"
              type="text"
              id="model"
              name="model"
              value={vehicles.model}
              onChange={handleVehicleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="year">
              Year
            </label>
            <input
              className="form-input"
              type="number"
              id="year"
              min={1940}
              pattern="\d{4}"
              placeholder="YYYY"
              name="year"
              value={vehicles.year}
              onChange={handleVehicleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="vin">
              Vehicle Identification Number (VIN)
            </label>
            <input
              className="form-input"
              type="text"
              id="vin"
              name="vin"
              value={vehicles.vin}
              onChange={handleVehicleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="mileage">
              Mileage
            </label>
            <input
              className="form-input"
              type="text"
              id="mileage"
              name="mileage"
              value={vehicles.mileage}
              onChange={handleVehicleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="financing">
              Financing?
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="financingYes"
                  name="financing"
                  value="yes"
                  checked={vehicles.financing === "yes"}
                  onChange={handleVehicleChange}
                  required
                />
                Yes
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="financingNo"
                  name="financing"
                  value="no"
                  checked={vehicles.financing === "no"}
                  onChange={handleVehicleChange}
                  required
                />
                No
              </label>
            </fieldset>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="firstOwner">
              First Owner?
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="firstOwnerYes"
                  name="firstOwner"
                  value="yes"
                  checked={vehicles.firstOwner === "yes"}
                  onChange={handleVehicleChange}
                  required
                />
                Yes
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="firstOwnerNo"
                  name="firstOwner"
                  value="no"
                  checked={vehicles.firstOwner === "no"}
                  onChange={handleVehicleChange}
                  required
                />
                No
              </label>
            </fieldset>
          </div>
        </form>
        <div className="form-row">
          <button
            className="form-add-btn"
            onClick={addVehicle}
            type="button"
            title="Add Vehicle"
          >
            <AddIcon fontSize="medium" />
            <p>Add Vehicle</p>
          </button>
        </div>
      </form>
      <div className="form-navigation">
        <button
          className="form-nav-btn"
          type="button"
          onClick={() => {
            setActiveStep(1);
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

export default AutoDetailedInfo;
