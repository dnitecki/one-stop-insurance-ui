import { ContentMapperType, QuoteFormProps } from "../../types/types";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import QuoteContentMapper from "../../content/quoteContentMapper.json";

const SelectQuoteType: React.FC<QuoteFormProps> = ({
  setFormData,
  setActiveStep,
}) => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContentMapperType = QuoteContentMapper;
  const selectQuoteContent = content?.sections.quoteType.body[language];

  return (
    <>
      <div className="quote-header">
        <h1>{selectQuoteContent?.header}</h1>
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
          <h2>{selectQuoteContent?.auto}</h2>
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
          <h2>{selectQuoteContent?.home}</h2>
        </button>
      </div>
    </>
  );
};

export default SelectQuoteType;
