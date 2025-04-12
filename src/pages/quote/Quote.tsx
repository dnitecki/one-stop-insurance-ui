import "./Quote.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { Step, Stepper } from "react-form-stepper";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import SelectQuoteType from "../../components/forms/quoteForm/selectQuoteType/SelectQuoteType";
import PersonalInfo from "../../components/forms/quoteForm/personalInfo/PersonalInfo";
import AutoDetailedInfo from "../../components/forms/quoteForm/detailedInfo/AutoDetailedInfo";
import { ContentMapperType } from "../../types/types";

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
  const content: ContentMapperType = QuoteContentMapper;
  const quoteContent = content?.sections.stepper.body[language];
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(formInitialState);

  return (
    <div className="quote-container">
      <div className="stepper-container">
        <Stepper activeStep={activeStep}>
          <Step label={quoteContent.stepOne} onClick={() => setActiveStep(0)} />
          <Step label={quoteContent.stepTwo} onClick={() => setActiveStep(1)} />
          <Step
            label={quoteContent.stepThree}
            onClick={() => setActiveStep(2)}
          />
          <Step
            label={quoteContent.stepFour}
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
        {activeStep === 2 && (
          <AutoDetailedInfo
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
