import { useSearchParams } from "react-router-dom";
import {
  ContentMapperType,
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
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import { handleBack, handleNext } from "../../utils/utils";

const AutoDetailedInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const formContent = content?.sections.form.body[language];
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

  const removeVehicle = (vehicle: VehicleFormDataType) => {
    setFormData((prevFormData: QuoteFormDataType) => ({
      ...prevFormData,
      vehicles: prevFormData.vehicles.filter(
        (v: VehicleFormDataType) => v !== vehicle
      ),
    }));
  };

  return (
    <div className="form-container">
      <form ref={formRef} className="form-content">
        <div className="form-header">
          <h2>{formContent?.policyInfo}</h2>
          <p className="form-required-field">* indicates a required field</p>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="currentInsurer">
            {formContent?.currentInsurer}*
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
            {formContent?.timeWithInsurer}*
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
            {formContent?.currentCoverages}*
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
            {formContent?.renewalDate}*
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
            {formContent?.homeOwner}*
          </label>
          <fieldset className="form-fieldset">
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="homeOwnerYes"
                name="homeOwner"
                value="Yes"
                checked={formData.homeOwner === "Yes"}
                onChange={handleChange}
                required
              />
              {formContent?.yes}
            </label>
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="homeOwnerNo"
                name="homeOwner"
                value="No"
                checked={formData.homeOwner === "No"}
                onChange={handleChange}
                required
              />
              {formContent?.no}
            </label>
          </fieldset>
        </div>
        {formData.homeOwner === "Yes" && (
          <div className="form-group">
            <label className="form-label" htmlFor="noOfResidents">
              {formContent?.noOfResidents}*
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
            {formContent?.married}*
          </label>
          <fieldset className="form-fieldset">
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="marriedYes"
                name="married"
                value="Yes"
                checked={formData.married === "Yes"}
                onChange={handleChange}
                required
              />
              {formContent?.yes}
            </label>
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="marriedNo"
                name="married"
                value="No"
                checked={formData.married === "No"}
                onChange={handleChange}
                required
              />
              {formContent?.no}
            </label>
          </fieldset>
        </div>
        {formData.married === "Yes" && (
          <div className="form-group">
            <label className="form-label" htmlFor="spouseName">
              {formContent?.spouseName}*
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
            {formContent?.additionalDriver}*
          </label>
          <fieldset className="form-fieldset">
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="additionalDriverYes"
                name="additionalDriver"
                value="Yes"
                checked={formData.additionalDriver === "Yes"}
                onChange={handleChange}
                required
              />
              {formContent?.yes}
            </label>
            <label className="form-radio-label">
              <input
                className="form-radio"
                type="radio"
                id="additionalDriverNo"
                name="additionalDriver"
                value="No"
                checked={formData.additionalDriver === "No"}
                onChange={handleChange}
                required
              />
              {formContent?.no}
            </label>
          </fieldset>
        </div>
        {formData.additionalDriver === "Yes" && (
          <AddDriverInfo
            setFormData={setFormData}
            formData={formData}
            formContent={formContent}
          />
        )}
        <div className="form-header">
          <h2>{formContent?.addVehicles}</h2>
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
                  <button
                    className="form-delete-btn"
                    type="button"
                    title="Delete Driver"
                    onClick={() => removeVehicle(vehicle)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </button>
                </li>
              )
            )}
          </ul>
        )}
        <form ref={vehicleRef} className="form-add-section">
          <div className="form-group">
            <label className="form-label" htmlFor="make">
              {formContent?.make}*
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
              {formContent?.model}*
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
              {formContent?.year}*
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
              {formContent?.vin}*
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
              {formContent?.mileage}*
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
              {formContent?.financing}*
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="financingYes"
                  name="financing"
                  value="Yes"
                  checked={vehicles.financing === "Yes"}
                  onChange={handleVehicleChange}
                  required
                />
                {formContent?.yes}
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="financingNo"
                  name="financing"
                  value="No"
                  checked={vehicles.financing === "No"}
                  onChange={handleVehicleChange}
                  required
                />
                {formContent?.no}
              </label>
            </fieldset>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="firstOwner">
              {formContent?.firstOwner}*
            </label>
            <fieldset className="form-fieldset">
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="firstOwnerYes"
                  name="firstOwner"
                  value="Yes"
                  checked={vehicles.firstOwner === "Yes"}
                  onChange={handleVehicleChange}
                  required
                />
                {formContent?.yes}
              </label>
              <label className="form-radio-label">
                <input
                  className="form-radio"
                  type="radio"
                  id="firstOwnerNo"
                  name="firstOwner"
                  value="No"
                  checked={vehicles.firstOwner === "No"}
                  onChange={handleVehicleChange}
                  required
                />
                {formContent?.no}
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
            <p>{formContent?.addVehicle}</p>
          </button>
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

export default AutoDetailedInfo;
