import { QuoteFormProps } from "../../../../types/types";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const QuoteStepOne: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  return (
    <>
      <div className="quote-header">
        {/* <h1>{ContentMapper.sections.quote.header[language]}</h1> */}
      </div>
      <div className="quote-options-container">
        <button
          onClick={() => {
            setActiveStep(1);
            setFormData((prevFormData: any) => ({
              ...prevFormData,
              type: "auto",
            }));
          }}
        >
          <DirectionsCarIcon fontSize="inherit" />
          <h2>Auto</h2>
        </button>
        <button
          onClick={() => {
            setActiveStep(1);
            setFormData((prevFormData: any) => ({
              ...prevFormData,
              type: "home",
            }));
          }}
        >
          <HomeWorkIcon fontSize="inherit" />
          <h2>Home</h2>
        </button>
      </div>
    </>
  );
};

export default QuoteStepOne;
