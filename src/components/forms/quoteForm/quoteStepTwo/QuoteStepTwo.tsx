import { useSearchParams } from "react-router-dom";
import { QuoteFormContent } from "../../../../content/contentMapper";
import { QuoteFormProps } from "../../../../types/types";
import { SeachParamEnum } from "../../../../enums/languageEnums";

const QuoteStepTwo: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
  formData,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  return (
    <div className="quote-header">
      <h1>{QuoteFormContent.quoteStepTwo.header[language]}</h1>
    </div>
  );
};

export default QuoteStepTwo;
