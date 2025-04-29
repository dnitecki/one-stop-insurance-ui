import { ContentMapperType, QuoteFormProps } from "../../types/types";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";
import { QuoteTypeEnum } from "../../enums/formEnums";

const SelectQuoteType: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const formContent = content?.sections.form.body[language];

  return (
    <>
      <div className="quote-header">
        <h1>{formContent?.header}</h1>
      </div>
      <div className="quote-options-container">
        <button
          onClick={() => {
            setActiveStep(1);
            setFormData((prevFormData: any) => ({
              ...prevFormData,
              type: QuoteTypeEnum.AUTO,
            }));
          }}
        >
          <DirectionsCarIcon fontSize="inherit" />
          <h2>{formContent?.auto}</h2>
        </button>
        <button
          id="home"
          disabled
          onClick={() => {
            setActiveStep(1);
            setFormData((prevFormData: any) => ({
              ...prevFormData,
              type: QuoteTypeEnum.HOME,
            }));
          }}
        >
          <HomeWorkIcon fontSize="inherit" />
          <h2>{formContent?.home}</h2>
        </button>
      </div>
    </>
  );
};

export default SelectQuoteType;
