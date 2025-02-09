import "./Quote.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { QuoteFormContent } from "../../content/contentMapper";
import { Step, Stepper } from "react-form-stepper";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import SelectQuoteType from "../../components/forms/quoteForm/selectQuoteType/SelectQuoteType";
import PersonalInfo from "../../components/forms/quoteForm/personalInfo/PersonalInfo";

const Quote = () => {
  const formInitialState = {
    type: EMPTY_STRING,
    firstName: EMPTY_STRING,
    lastName: EMPTY_STRING,
    email: EMPTY_STRING,
    dateOfBirth: EMPTY_STRING,
    phone: EMPTY_STRING,
    street: EMPTY_STRING,
    unit: EMPTY_STRING,
    postalCode: EMPTY_STRING,
    city: EMPTY_STRING,
    state: EMPTY_STRING,
    country: EMPTY_STRING,
  };
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(formInitialState);

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
          <Step
            label={QuoteFormContent.stepper.stepFour[language]}
            onClick={() => setActiveStep(3)}
          />
        </Stepper>
      </div>
      <div className="quote-step-container">
        {activeStep === 0 && (
          <SelectQuoteType
            setActiveStep={setActiveStep}
            setFormData={setFormData}
          />
        )}
        {activeStep === 1 && (
          <PersonalInfo
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
