import DeleteIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { useRef, useState } from "react";
import { DriverFormDataType, QuoteFormProps } from "../../types/types";
import { driverInitialState } from "../../constants/constants";

const AddDriverInfo: React.FC<QuoteFormProps> = ({
  setFormData,
  formData,
  formContent,
}) => {
  const driverRef = useRef<HTMLFormElement>(null);
  const [additionalDriver, setAdditionalDriver] =
    useState<DriverFormDataType>(driverInitialState);

  const handleDriverChange = (e: any) => {
    const { name, value } = e.target;
    setAdditionalDriver((prevDriver: any) => ({
      ...prevDriver,
      [name]: value,
    }));
  };

  const addAdditionalDriver = (e: any) => {
    e.preventDefault();
    if (driverRef.current) {
      if (driverRef.current.checkValidity()) {
        setFormData((prevFormData: any) => ({
          ...prevFormData,
          additionalDrivers: [
            ...prevFormData.additionalDrivers,
            additionalDriver,
          ],
        }));
        setAdditionalDriver(driverInitialState);
      } else {
        driverRef.current.reportValidity();
      }
    }
  };

  const removeAdditionalDriver = (driver: DriverFormDataType) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      additionalDrivers: prevFormData.additionalDrivers.filter(
        (d: any) => d !== driver
      ),
    }));
  };

  return (
    <>
      <div className="form-header">
        <h2>{formContent?.addDrivers}</h2>
      </div>
      {formData.additionalDrivers.length > 0 && (
        <ul className="form-list">
          {formData.additionalDrivers.map((driver: any, index: number) => (
            <li className="form-list-item" key={index}>
              <h3>
                {index + 1}.&nbsp;&nbsp;{driver.firstName}&nbsp;
                {driver.lastName}
              </h3>
              <button
                className="form-delete-btn"
                type="button"
                title="Delete Driver"
                onClick={() => removeAdditionalDriver(driver)}
              >
                <DeleteIcon fontSize="inherit" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <form ref={driverRef} className="form-add-section">
        <div className="form-group">
          <label className="form-label" htmlFor="additionalDriverName">
            {formContent?.firstName}*
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
            {formContent?.lastName}*
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
        <div className="form-group">
          <label className="form-label" htmlFor="additionalDriverLicenseNum">
            {formContent?.driversLicenseNum}*
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
            {formContent?.dateOfBirth}*
          </label>
          <input
            className="form-input"
            type="date"
            id="additionalDateOfBirth"
            name="dateOfBirth"
            placeholder="mm/dd/yyyy"
            value={additionalDriver.dateOfBirth}
            onChange={handleDriverChange}
            required
          />
        </div>
      </form>
      <div className="form-row">
        <button
          className="form-add-btn"
          onClick={addAdditionalDriver}
          type="button"
          title="Add Driver"
        >
          <AddIcon fontSize="medium" />
          <p>{formContent?.addDriver}</p>
        </button>
      </div>
    </>
  );
};

export default AddDriverInfo;
