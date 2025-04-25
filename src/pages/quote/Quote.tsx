import "./Quote.scss";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { Step, Stepper } from "react-form-stepper";
import { useState } from "react";
import { EMPTY_STRING } from "../../constants/constants";
import SelectQuoteType from "../../components/forms/SelectQuoteType";
import PersonalInfo from "../../components/forms/PersonalInfo";
import AutoDetailedInfo from "../../components/forms/AutoDetailedInfo";
import { ContentMapperType } from "../../types/types";
import HomeDetailedInfo from "../../components/forms/HomeDetailedInfo";
import { QuoteTypeEnum } from "../../enums/formEnums";

const Quote = () => {
  type FormData = {
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    street: string;
    unit: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    driversLicenseNum: string;
    occupation: string;
    currentInsurer: string;
    timeWithInsurer: string;
    currentCoverages: string;
    renewalDate: string;
    homeOwner: string;
    noOfResidents: string;
    married: string;
    spouseName: string;
    additionalDriver: string;
    additionalDrivers: any[];
  };

  const formInitialState: FormData = {
    type: "auto",
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
    driversLicenseNum: EMPTY_STRING,
    occupation: EMPTY_STRING,
    currentInsurer: EMPTY_STRING,
    timeWithInsurer: EMPTY_STRING,
    currentCoverages: EMPTY_STRING,
    renewalDate: EMPTY_STRING,
    homeOwner: EMPTY_STRING,
    noOfResidents: EMPTY_STRING,
    married: EMPTY_STRING,
    spouseName: EMPTY_STRING,
    additionalDriver: EMPTY_STRING,
    additionalDrivers: [],
  };
  const [searchParams] = useSearchParams();
  const { HOME, AUTO } = QuoteTypeEnum;
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const quoteContent = content?.sections.stepper.body[language];
  const [activeStep, setActiveStep] = useState(2);
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
        {activeStep === 2 && formData.type === AUTO && (
          <AutoDetailedInfo
            setActiveStep={setActiveStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {activeStep === 2 && formData.type === HOME && (
          <HomeDetailedInfo
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
