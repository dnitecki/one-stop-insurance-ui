import "./Quote.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper, QuoteFormContent } from "../../content/contentMapper";
import { Step, Stepper } from "react-form-stepper";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import QuoteStepOne from "../../components/forms/quoteForm/quoteStepOne/QuoteStepOne";
import QuoteStepTwo from "../../components/forms/quoteForm/quoteStepTwo/QuoteStepTwo";

const Quote = () => {
  const formInitialState = {
    type: EMPTY_STRING,
  };

  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(formInitialState);

  const Step2 = () => {
    return <div>{formData.type}</div>;
  };

  const Step3 = () => {
    return <div>{formData.type}</div>;
  };
  return (
    <div className="quote-container">
      <div className="stepper-container">
        <Stepper activeStep={activeStep}>
          <Step
            label={QuoteFormContent.stepper.stepOne[language]}
            onClick={() => setActiveStep(0)}
          />
          <Step
            label={QuoteFormContent.stepper.stepTwo[language]}
            onClick={() => setActiveStep(1)}
          />
          <Step
            label={QuoteFormContent.stepper.stepThree[language]}
            onClick={() => setActiveStep(2)}
          />
        </Stepper>
      </div>
      <div className="quote-step-container">
        {activeStep === 0 && (
          <QuoteStepOne
            setActiveStep={setActiveStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {activeStep === 1 && (
          <QuoteStepTwo
            setActiveStep={setActiveStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
};

export default Quote;
