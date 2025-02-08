import { useSearchParams } from "react-router-dom";
import "./QuoteForm.scss";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { SeachParamEnum } from "../../../enums/languageEnums";
import { ContactContentType } from "../../../types/types";
import { ContentMapper } from "../../../content/contentMapper";

const QuoteForm = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get(SeachParamEnum.LANG);
  const content: ContactContentType =
    ContentMapper.sections.contact.body[language];
  return (
    <form className="quote-form-container">
      <h2>
        <FactCheckIcon fontSize="inherit" /> {content.formTitle}
      </h2>
    </form>
  );
};

export default QuoteForm;
