import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import { QuoteFormProps } from "../../types/types";

const AddDriverInfo: React.FC<QuoteFormProps> = ({ setFormData, formData }) => {
  const driverInitialState: any = {
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    driversLicenseNum: EMPTY_STRING,
    dateOfBirth: EMPTY_STRING,
  };

  const driverRef = useRef<HTMLFormElement>(null);
  const [additionalDriver, setAdditionalDriver] = useState(driverInitialState);

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

  const removeAdditionalDriver = (driver: any) => {
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
        <h2>Add Driver(s)</h2>
      </div>
      <form ref={driverRef} className="form-add-driver">
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
        <div className="form-group">
          <label className="form-label" htmlFor="additionalDriverLicenseNum">
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
      </form>
      <div className="form-row">
        <button className="form-submit-btn" onClick={addAdditionalDriver}>
          <p>+ Add Driver</p>
        </button>
      </div>
      {formData.additionalDrivers.length > 0 && (
        <div className="form-header">
          <h2>Additional Drivers:</h2>
        </div>
      )}
      {formData.additionalDrivers.map((driver: any, index: number) => (
        <div className="form-row" key={index}>
          <div className="form-group">
            <h3>
              {index + 1}.&nbsp;&nbsp;{driver.firstName}&nbsp;
              {driver.lastName}
            </h3>
          </div>
          <div>
            <button
              className="form-delete-btn"
              type="button"
              onClick={() => removeAdditionalDriver(driver)}
            >
              <DeleteIcon fontSize="inherit" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddDriverInfo;
