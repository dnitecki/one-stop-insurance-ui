import "./Quote.scss";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { useSearchParams } from "react-router-dom";
import { SeachParamEnum } from "../../enums/languageEnums";
import { ContentMapper } from "../../content/contentMapper";

const Quote = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);

  return (
    <div className="quote-container">
      <div className="quote-header">
        <h1>{ContentMapper.sections.quote.header[language]}</h1>
      </div>
      <div className="quote-options-container">
        <a>
          <DirectionsCarIcon fontSize="inherit" />
          <h2>Auto</h2>
        </a>
        <a>
          <HomeWorkIcon fontSize="inherit" />
          <h2>Home</h2>
        </a>
      </div>
    </div>
  );
};

export default Quote;
